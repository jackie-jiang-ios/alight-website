/* ============================================
   Alight - 官网交互脚本
   ============================================ */

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== 配置区（根据实际情况修改）==========
const GITHUB_REPO = 'jackie-jiang-ios/alight';        // GitHub 仓库
const OSS_BASE_URL = 'https://alight-downloads.oss-cn-hangzhou.aliyuncs.com/releases/';  // 阿里云 OSS 基础地址
const GITHUB_RELEASE_BASE = 'https://github.com/jackie-jiang-ios/alight/releases/download/';  // GitHub Releases 下载地址

// 全局状态：最新版本信息
let latestRelease = null;

/**
 * 智能下载分流：
 * - 国内用户 → 阿里云 OSS（速度快）
 * - 国外用户 → GitHub Releases（全球 CDN）
 * 
 * 判断逻辑：尝试加载一个国内 CDN 的资源，
 * 如果超时或失败则判定为国外用户
 */
function isChinaUser() {
  try {
    // 通过 navigator.language 或 timezone 粗略判断
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    // 中文 + 中国时区 → 国内用户
    if (lang.startsWith('zh') && (tz.includes('Asia/Shanghai') || tz.includes('Asia/Hong_Kong') || tz.includes('Asia/Taipei'))) {
      return true;
    }
    
    // 纯中文界面也优先走 OSS
    if (lang.startsWith('zh')) {
      return true;
    }
  } catch (e) {
    // 出错时默认走 GitHub（更可靠）
  }
  return false;
}

// Download handler - 智能分流下载
function handleDownload(event) {
  event.preventDefault();
  
  const btn = document.getElementById('downloadBtn');
  
  if (!latestRelease || !latestRelease.version) {
    alert('⏳ 正在获取版本信息，请稍后重试...');
    return;
  }
  
  const version = latestRelease.version;  // e.g. "1.0.11"
  const dmfileName = `Alight-Pro-${version}.dmg`;
  
  // 智能选择下载源
  let downloadUrl;
  if (isChinaUser()) {
    downloadUrl = `${OSS_BASE_URL}${dmfileName}`;
    console.log(`🇨🇳 检测到国内用户，使用阿里云 OSS 下载`);
  } else {
    downloadUrl = `${GITHUB_RELEASE_BASE}v${version}/${dmfileName}`;
    console.log(`🌍 检测到国外用户，使用 GitHub Releases 下载`);
  }
  
  // 按钮状态反馈
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    正在跳转...
  `;
  btn.style.pointerEvents = 'none';
  
  setTimeout(() => {
    window.location.href = downloadUrl;
    // 3秒后恢复按钮状态（防止用户点了返回）
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.pointerEvents = '';
    }, 3000);
  }, 500);
}

// Intersection Observer for animations (optional enhancement)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe feature cards and other elements for scroll animation
document.querySelectorAll('.feature-card, .highlight-item, .screenshot-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Version info - 从 GitHub API 动态获取最新 Release 信息
async function fetchLatestVersion() {
  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`);
    
    if (!response.ok) {
      console.warn(`GitHub API 返回 ${response.status}，使用默认版本`);
      setDefaultVersion();
      return;
    }
    
    const data = await response.json();
    
    if (data && data.tag_name) {
      // 提取版本号：去掉 "v" 前缀，如 "v1.0.11" → "1.0.11"
      const version = data.tag_name.replace(/^v/, '');
      const publishDate = data.published_at ? new Date(data.published_at).toLocaleDateString('zh-CN') : '未知';
      
      latestRelease = {
        version: version,
        tag: data.tag_name,
        name: data.name || `Alight Pro ${version}`,
        body: data.body || '',
        date: publishDate,
        ossUrl: `${OSS_BASE_URL}Alight-Pro-${version}.dmg`,
        githubUrl: data.html_url || ''
      };
      
      // 更新页面上的版本显示
      document.getElementById('version').innerHTML = data.tag_name;
      
      // 更新发布日期
      const dateEl = document.getElementById('releaseDate');
      if (dateEl) {
        dateEl.textContent = publishDate;
      }
      
      // 更新下载按钮链接
      const downloadBtn = document.getElementById('downloadBtn');
      if (downloadBtn) {
        downloadBtn.dataset.version = version;
      }
      
      console.log(`✅ 获取到最新版本: ${data.tag_name} (${publishDate})`);
      console.log(`📥 OSS 下载地址: ${latestRelease.ossUrl}`);
    } else {
      setDefaultVersion();
    }
  } catch (e) {
    console.warn('获取版本信息失败:', e);
    setDefaultVersion();
  }
}

// 设置默认版本（API 失败时的降级方案）
function setDefaultVersion() {
  document.getElementById('version').innerHTML = 'v1.0.11';
  const dateEl = document.getElementById('releaseDate');
  if (dateEl) {
    dateEl.textContent = '2026-04-26';
  }
  latestRelease = {
    version: '1.0.11',
    tag: 'v1.0.11',
    name: 'Alight Pro 1.0.11',
    body: '',
    date: '2026-04-26',
    ossUrl: `${OSS_BASE_URL}Alight-Pro-1.0.11.dmg`,
    githubUrl: ''
  };
}

// 页面加载时获取版本信息
fetchLatestVersion();

console.log('%c✦ Alight by LiteApps %c- 让 Mac 更轻盈', 
  'color: #818cf8; font-size: 18px; font-weight: bold;', 
  'color: #64748b; font-size: 14px;');
