/* ============================================
   Alight - 官网交互脚本（支持中英双语）
   ============================================ */

// ========== 多语言配置 ==========
const i18n = {
  zh: {
    // 导航
    nav_features: '功能',
    nav_screenshots: '预览',
    nav_architecture: '架构',
    nav_download: '下载',
    nav_free_download: '免费下载',
    
    // Hero
    hero_badge: '🧹 LiteApps 出品',
    hero_title_1: '让你的',
    hero_title_2: 'Mac',
    hero_title_3: '更轻盈',
    hero_subtitle_1: 'Alight 是一款轻量级 Mac 系统清理与优化工具',
    hero_subtitle_2: '深度清理 · 应用管理 · 启动优化 · 进程监控',
    btn_download: '免费下载',
    btn_learn_more: '了解更多',
    meta_scan: '⚡ 秒级扫描',
    meta_size: '📦 <10MB',
    meta_safe: '🔒 安全可靠',
    
    // 功能区
    section_features_title: '六大核心功能',
    section_features_subtitle: '覆盖 Mac 清理优化的每一个场景',
    badge_core: '核心功能',
    
    // 功能卡片
    feat_deep_clean_name: '深度清理',
    feat_deep_clean_desc: '全盘深度扫描，识别安装包残留、大文件、旧文件、应用数据等垃圾。支持按类别预览详情，一键精准清理。',
    feat_quick_clean_name: '快速清理',
    feat_quick_clean_desc: '一键智能扫描系统缓存、日志、临时文件等常见垃圾，配合健康评分，快速释放空间。',
    feat_app_manage_name: '应用管理',
    feat_app_manage_desc: '查看所有已安装应用，按大小/名称/使用时间排序。彻底卸载应用并自动清理关联的缓存和配置残留。',
    feat_startup_name: '启动项管理',
    feat_startup_desc: '管理系统登录项和后台活动（LaunchAgents/LaunchDaemons），一键禁用不必要的开机启动项，加速开机。',
    feat_process_name: '进程管理',
    feat_process_desc: '实时查看所有运行中的进程，按系统/应用/其他分类筛选，支持搜索和多选批量结束占用资源的进程。',
    feat_desktop_name: '桌面清理',
    feat_desktop_desc: '扫描桌面上的所有文件，按类型分组展示，支持列表/网格视图切换，快速整理杂乱的桌面。',
    
    // 标签
    tag_installer: '安装包残留',
    tag_large_files: '大文件扫描',
    tag_old_files: '旧文件',
    tag_app_data: '应用数据',
    tag_cache: '系统缓存',
    tag_logs: '日志文件',
    tag_temp: '临时文件',
    tag_trash: '废纸篓',
    tag_app_list: '应用列表',
    tag_uninstall: '彻底卸载',
    tag_residuals: '残留清理',
    tag_force_quit: '强制终止',
    tag_login_items: '登录项',
    tag_bg_services: '后台服务',
    tag_filter: '分类筛选',
    tag_toggle: '开关控制',
    tag_proc_list: '进程列表',
    tag_cpu_mem: 'CPU/内存',
    tag_batch_kill: '批量终止',
    tag_search: '搜索筛选',
    tag_desk_scan: '桌面扫描',
    tag_file_type: '文件分类',
    tag_preview: '预览查看',
    tag_quick_ops: '快捷操作',
    
    // 亮点
    highlight_1_num: '01',
    highlight_1_title: '超小体积',
    highlight_1_desc: '安装包小于 10MB，对比 Electron 类产品（通常 100MB+）小 90%',
    highlight_2_num: '02',
    highlight_2_title: '极速体验',
    highlight_2_desc: 'JS + Native Bridge 架构，原生 Objective-C 执行扫描任务，速度远超纯 JS 方案',
    highlight_3_num: '03',
    highlight_3_title: '安全可靠',
    highlight_3_desc: '每一步操作都可预览确认，只清理确定的垃圾文件，绝不误删用户重要数据',
    highlight_4_num: '04',
    highlight_4_title: '六大模块',
    highlight_4_desc: '深度清理、快速清理、应用管理、启动项、进程管理、桌面清理，一站式解决',
    
    // 截图
    section_screenshots_title: '界面预览',
    section_screenshots_subtitle: '基于 Vue 3 + Element Plus 构建的精致界面',
    shot_deep_clean: '深度清理 — 全盘扫描与四维统计',
    shot_app_manage: '应用管理 — 彻底卸载与残留清理',
    shot_quick_clean: '快速清理 — 一键智能清理',
    shot_startup: '启动项管理 — 加速你的 Mac 开机',
    shot_process: '进程管理 — 实时监控与批量管理',
    shot_desktop: '桌面清理 — 整理你的桌面文件',
    
    // 架构
    arch_title: '为什么这么快？',
    arch_intro: 'Alight 采用创新的 <strong>JS + Native Bridge</strong> 三层架构：',
    arch_ui_name: 'UI 层 (Vue 3 + Element Plus)',
    arch_ui_desc: '轻量 Web 渲染，跨平台一致体验，开发效率高',
    arch_bridge_name: 'Bridge 层 (IPC 通信)',
    arch_bridge_desc: '高效消息桥梁，毫秒级调用 Native 能力，异步非阻塞',
    arch_native_name: 'Native 层 (Objective-C)',
    arch_native_desc: '直接调用 macOS 系统 API，文件扫描、进程管理等极致性能',
    arch_note: '这种分层架构让 Alight 既拥有 Web 开发的灵活性，又具备原生应用的性能优势。安装包仅 ~10MB，内存占用极低，远优于传统 Electron 方案。',
    layer_ui_tech: 'Vue 3 + Element Plus + TailwindCSS',
    layer_ui_label: 'UI Layer',
    layer_ui_small: '界面渲染 / 用户交互',
    layer_bridge_tech: 'Async Message Channel',
    layer_bridge_label: 'Bridge Layer',
    layer_bridge_small: '方法路由 / 数据序列化',
    layer_native_tech: 'Objective-C / CocoaPods',
    layer_native_label: 'Native Layer',
    layer_native_small: 'macOS API / 文件系统 / 进程管理',
    
    // 下载
    download_title: '立即下载 Alight',
    download_desc: '免费使用，让你的 Mac 重获新生',
    info_version: '版本',
    info_date: '发布日期',
    info_size: '大小',
    info_require: '要求',
    info_arch: '架构',
    info_size_val: '~10 MB',
    info_require_val: 'macOS 12.0+',
    info_arch_val: 'Universal (Apple Silicon + Intel)',
    btn_download_dmg: '下载 .dmg 文件',
    btn_redirecting: '正在跳转...',
    view_releases: '查看 GitHub Releases',
    download_note: '⚠️ 首次运行需要在「系统设置 → 隐私与安全性」中允许运行 · 下载即表示同意我们的',
    download_note_terms: '服务条款',
    download_note_and: '和',
    download_note_privacy: '隐私政策',
    version_loading: '获取中...',
    version_fetch_error: '⏳ 正在获取版本信息，请稍后重试...',
    
    // 页脚
    footer_brand_desc: '打造最轻量的 Mac 工具集',
    footer_product: '产品',
    footer_alight: 'Alight',
    footer_more: '更多产品敬请期待...',
    footer_functions: '功能',
    footer_about: '关于',
    footer_about_us: '关于我们',
    footer_privacy: '隐私政策',
    footer_terms: '服务条款',
    footer_copyright: '© 2026 LiteApps. All rights reserved.',
    
    // Mock UI 文本
    mock_deep_clean: '深度清理',
    mock_scan_btn: '开始扫描',
    stat_cache: '缓存数据',
    stat_health: '健康评分',
    stat_health_good: '良好',
    stat_count: '建议清理',
    stat_space: '可释放空间',
    card_app_data_name: '应用数据',
    card_app_data_desc: '扫描应用产生的缓存和配置文件',
    card_installer_name: '安装包残留',
    card_installer_desc: '已删除应用的 DMG/PKG 安装包残留',
    card_large_file_name: '大文件',
    card_large_file_desc: '占用大量磁盘空间的大文件',
    card_old_file_name: '旧文件',
    card_old_file_desc: '长期未访问的旧文件和过期数据',
    card_view: '查看',
    card_apps: '个应用',
    card_items: '项',
    
    mock_app_manage_total: '共 48 个应用',
    mock_sort: '排序',
    mock_sort_size: '大小 ▼',
    mock_sort_order: '降序',
    mock_uninstall: '卸载',
    mock_path_prefix: '/Applications/',
    mock_used_just_now: '刚刚使用',
    mock_used_today: '今天使用',
    mock_used_hours: '小时前使用',
    mock_used_days: '天前使用',
    mock_never_used: '从未使用',
    
    mock_quick_clean: '快速清理',
    mock_system_cache: '系统缓存',
    mock_log_files: '日志文件',
    mock_temp_files: '临时文件',
    mock_trash: '废纸篓',
    cache_desc: '应用和系统产生的缓存文件',
    log_desc: '系统和应用的日志记录',
    temp_desc: '系统和应用产生的临时文件',
    trash_desc: '废纸篓中的可清理文件',
    btn_preview: '预览',
    btn_smart_clean: '智能清理',
    btn_empty: '清空',
    
    mock_startup: '启动项管理',
    mock_startup_desc: '管理开机自启的应用和服务',
    tab_all: '全部',
    tab_login: '登录项',
    tab_bg: '后台活动',
    filter_all: '全部',
    filter_enabled: '已启用',
    filter_disabled: '已禁用',
    kind_login: '登录项',
    kind_bg: '后台活动',
    cat_system: '系统',
    cat_warn: '建议关闭',
    
    mock_process: '进程管理',
    mock_process_desc: '实时监控和管理运行中的进程',
    btn_refresh: '刷新',
    btn_kill_selected: '结束选中 ({n})',
    tab_all_proc: '全部',
    tab_system: '系统',
    tab_app: '应用',
    tab_other: '其他',
    proc_search_placeholder: '搜索进程...',
    label_cpu: 'CPU',
    label_memory: '内存',
    label_pid: 'PID:',
    btn_end: '结束',
    
    mock_desktop: '桌面清理',
    mock_rescan: '🔄 重新扫描',
    desk_total_files: '个文件 · ',
    desk_total_folders: '个文件夹',
    view_list: '☰ 列表',
    view_grid: '⊞ 网格',
    select_all: '全选',
    delete_selected: '删除选中 ({n})',
    col_name: '名称',
    col_time: '修改时间',
    col_size: '大小',
  },
  
  en: {
    // Navigation
    nav_features: 'Features',
    nav_screenshots: 'Preview',
    nav_architecture: 'Architecture',
    nav_download: 'Download',
    nav_free_download: 'Free Download',
    
    // Hero
    hero_badge: '🧹 By LiteApps',
    hero_title_1: 'Make Your',
    hero_title_2: 'Mac',
    hero_title_3: 'Lighter',
    hero_subtitle_1: 'Alight is a lightweight Mac system cleaner & optimizer',
    hero_subtitle_2: 'Deep Clean · App Manager · Startup Optimizer · Process Monitor',
    btn_download: 'Free Download',
    btn_learn_more: 'Learn More',
    meta_scan: '⚡ Instant Scan',
    meta_size: '📦 <10MB',
    meta_safe: '🔒 Safe & Secure',
    
    // Features Section
    section_features_title: 'Six Core Features',
    section_features_subtitle: 'Covering every Mac cleaning scenario',
    badge_core: 'Core Feature',
    
    // Feature Cards
    feat_deep_clean_name: 'Deep Clean',
    feat_deep_clean_desc: 'Full disk deep scan to identify installer leftovers, large files, old files, app data & more. Preview by category and clean with one click.',
    feat_quick_clean_name: 'Quick Clean',
    feat_quick_clean_desc: 'One-click smart scan for system cache, logs, temp files & common junk. With health score for quick space release.',
    feat_app_manage_name: 'App Manager',
    feat_app_manage_desc: 'View all installed apps, sort by size/name/usage. Completely uninstall apps and auto-clean associated caches & config residuals.',
    feat_startup_name: 'Startup Manager',
    feat_startup_desc: 'Manage login items and background services (LaunchAgents/LaunchDaemons). Disable unnecessary startup items to speed up boot time.',
    feat_process_name: 'Process Manager',
    feat_process_desc: 'Real-time monitoring of running processes. Filter by system/app/other. Search and batch-kill resource-hungry processes.',
    feat_desktop_name: 'Desktop Cleaner',
    feat_desktop_desc: 'Scan all desktop files, group by type. Switch between list/grid views to quickly organize your messy desktop.',
    
    // Tags
    tag_installer: 'Installer Leftovers',
    tag_large_files: 'Large File Scan',
    tag_old_files: 'Old Files',
    tag_app_data: 'App Data',
    tag_cache: 'System Cache',
    tag_logs: 'Log Files',
    tag_temp: 'Temp Files',
    tag_trash: 'Trash',
    tag_app_list: 'App List',
    tag_uninstall: 'Uninstall',
    tag_residuals: 'Residual Cleanup',
    tag_force_quit: 'Force Quit',
    tag_login_items: 'Login Items',
    tag_bg_services: 'Background Services',
    tag_filter: 'Category Filter',
    tag_toggle: 'Toggle Control',
    tag_proc_list: 'Process List',
    tag_cpu_mem: 'CPU/Memory',
    tag_batch_kill: 'Batch Kill',
    tag_search: 'Search & Filter',
    tag_desk_scan: 'Desktop Scan',
    tag_file_type: 'File Types',
    tag_preview: 'Preview',
    tag_quick_ops: 'Quick Actions',
    
    // Highlights
    highlight_1_num: '01',
    highlight_1_title: 'Ultra Small',
    highlight_1_desc: 'Installer under 10MB, 90% smaller than Electron-based apps (usually 100MB+)',
    highlight_2_num: '02',
    highlight_2_title: 'Blazing Fast',
    highlight_2_desc: 'JS + Native Bridge architecture with native Objective-C for scanning tasks, far faster than pure JS solutions',
    highlight_3_num: '03',
    highlight_3_title: 'Safe & Reliable',
    highlight_3_desc: 'Every step is previewable and confirmed. Only cleans confirmed junk files, never deletes important user data',
    highlight_4_num: '04',
    highlight_4_title: 'Six Modules',
    highlight_4_desc: 'Deep Clean, Quick Clean, App Manager, Startup Items, Process Manager, Desktop Cleaner — all-in-one solution',
    
    // Screenshots
    section_screenshots_title: 'Interface Preview',
    section_screenshots_subtitle: 'Exquisite UI built with Vue 3 + Element Plus',
    shot_deep_clean: 'Deep Clean — Full Scan & Quad Statistics',
    shot_app_manage: 'App Manager — Complete Uninstall & Residual Cleanup',
    shot_quick_clean: 'Quick Clean — One-Tap Smart Cleaning',
    shot_startup: 'Startup Manager — Speed Up Your Mac Boot',
    shot_process: 'Process Manager — Real-time Monitoring & Batch Management',
    shot_desktop: 'Desktop Cleaner — Organize Your Desktop Files',
    
    // Architecture
    arch_title: 'Why So Fast?',
    arch_intro: 'Alight uses an innovative <strong>JS + Native Bridge</strong> three-layer architecture:',
    arch_ui_name: 'UI Layer (Vue 3 + Element Plus)',
    arch_ui_desc: 'Lightweight web rendering, consistent cross-platform experience, high development efficiency',
    arch_bridge_name: 'Bridge Layer (IPC Communication)',
    arch_bridge_desc: 'Efficient message bridge, millisecond-level native capability calls, async non-blocking',
    arch_native_name: 'Native Layer (Objective-C)',
    arch_native_desc: 'Direct access to macOS system APIs, extreme performance in file scanning, process management, etc.',
    arch_note: 'This layered architecture gives Alight both the flexibility of web development and the performance advantages of native applications. Installer only ~10MB, extremely low memory usage, far superior to traditional Electron solutions.',
    layer_ui_tech: 'Vue 3 + Element Plus + TailwindCSS',
    layer_ui_label: 'UI Layer',
    layer_ui_small: 'Rendering / User Interaction',
    layer_bridge_tech: 'Async Message Channel',
    layer_bridge_label: 'Bridge Layer',
    layer_bridge_small: 'Method Routing / Data Serialization',
    layer_native_tech: 'Objective-C / CocoaPods',
    layer_native_label: 'Native Layer',
    layer_native_small: 'macOS API / File System / Process Management',
    
    // Download
    download_title: 'Download Alight Now',
    download_desc: 'Free to use, revitalize your Mac',
    info_version: 'Version',
    info_date: 'Release Date',
    info_size: 'Size',
    info_require: 'Requirement',
    info_arch: 'Architecture',
    info_size_val: '~10 MB',
    info_require_val: 'macOS 12.0+',
    info_arch_val: 'Universal (Apple Silicon + Intel)',
    btn_download_dmg: 'Download .dmg',
    btn_redirecting: 'Redirecting...',
    view_releases: 'View GitHub Releases',
    download_note: '⚠️ First run requires allowing in "System Settings → Privacy & Security" · Downloading implies agreement to our',
    download_note_terms: 'Terms of Service',
    download_note_and: 'and',
    download_note_privacy: 'Privacy Policy',
    version_loading: 'Loading...',
    version_fetch_error: '⏳ Fetching version info, please try again...',
    
    // Footer
    footer_brand_desc: 'Building the lightest Mac toolkit',
    footer_product: 'Product',
    footer_alight: 'Alight',
    footer_more: 'More products coming soon...',
    footer_functions: 'Features',
    footer_about: 'About',
    footer_about_us: 'About Us',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_copyright: '© 2026 LiteApps. All rights reserved.',
    
    // Mock UI text
    mock_deep_clean: 'Deep Clean',
    mock_scan_btn: 'Start Scan',
    stat_cache: 'Cache Data',
    stat_health: 'Health Score',
    stat_health_good: 'Good',
    stat_count: 'Items to Clean',
    stat_space: 'Reclaimable Space',
    card_app_data_name: 'App Data',
    card_app_data_desc: 'Scan app-generated caches and config files',
    card_installer_name: 'Installer Leftovers',
    card_installer_desc: 'DMG/PKG installer leftovers from deleted apps',
    card_large_file_name: 'Large Files',
    card_large_file_desc: 'Files occupying large amounts of disk space',
    card_old_file_name: 'Old Files',
    card_old_file_desc: 'Long-unaccessed old files and expired data',
    card_view: 'View',
    card_apps: 'apps',
    card_items: 'items',
    
    mock_app_manage_total: '48 Apps Total',
    mock_sort: 'Sort By',
    mock_sort_size: 'Size ▼',
    mock_sort_order: 'Descending',
    mock_uninstall: 'Uninstall',
    mock_path_prefix: '/Applications/',
    mock_used_just_now: 'Just now',
    mock_used_today: 'Today',
    mock_used_hours: 'hours ago',
    mock_used_days: 'days ago',
    mock_never_used: 'Never used',
    
    mock_quick_clean: 'Quick Clean',
    mock_system_cache: 'System Cache',
    mock_log_files: 'Log Files',
    mock_temp_files: 'Temp Files',
    mock_trash: 'Trash',
    cache_desc: 'Cache files from apps and system',
    log_desc: 'Log records from system and apps',
    temp_desc: 'Temporary files from system and apps',
    trash_desc: 'Cleanable files in Trash',
    btn_preview: 'Preview',
    btn_smart_clean: 'Smart Clean',
    btn_empty: 'Empty',
    
    mock_startup: 'Startup Manager',
    mock_startup_desc: 'Manage startup apps and services',
    tab_all: 'All',
    tab_login: 'Login Items',
    tab_bg: 'Background',
    filter_all: 'All',
    filter_enabled: 'Enabled',
    filter_disabled: 'Disabled',
    kind_login: 'Login Item',
    kind_bg: 'Background',
    cat_system: 'System',
    cat_warn: 'Suggested Off',
    
    mock_process: 'Process Manager',
    mock_process_desc: 'Real-time monitoring and management of running processes',
    btn_refresh: 'Refresh',
    btn_kill_selected: 'Kill Selected ({n})',
    tab_all_proc: 'All',
    tab_system: 'System',
    tab_app: 'Apps',
    tab_other: 'Other',
    proc_search_placeholder: 'Search processes...',
    label_cpu: 'CPU',
    label_memory: 'Memory',
    label_pid: 'PID:',
    btn_end: 'Kill',
    
    mock_desktop: 'Desktop Cleaner',
    mock_rescan: '🔄 Rescan',
    desk_total_files: 'files · ',
    desk_total_folders: 'folders',
    view_list: '☰ List',
    view_grid: '⊞ Grid',
    select_all: 'Select All',
    delete_selected: 'Delete Selected ({n})',
    col_name: 'Name',
    col_time: 'Modified',
    col_size: 'Size',
  }
};

// 当前语言
let currentLang = 'zh';

// 获取浏览器语言或从 localStorage 读取
function detectLanguage() {
  const saved = localStorage.getItem('alight-lang');
  if (saved && (saved === 'zh' || saved === 'en')) return saved;
  
  const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

// 切换语言
function toggleLanguage() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('alight-lang', currentLang);
  applyLanguage();
  updateLangSwitchButton();
}

// 更新语言切换按钮状态
function updateLangSwitchButton() {
  const btn = document.getElementById('langSwitch');
  if (btn) {
    btn.textContent = currentLang === 'zh' ? 'EN' : '中文';
    btn.title = currentLang === 'zh' ? 'Switch to English' : '切换到中文';
  }
}

// 应用当前语言到页面
function applyLanguage() {
  const t = i18n[currentLang];
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  
  // 使用 data-i18n 属性替换文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  
  // 使用 data-i18n-placeholder 替换 placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // 特殊处理：Hero 标题（带 gradient-text 的 span）
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.innerHTML = `${t.hero_title_1} <span class="gradient-text">${t.hero_title_2}</span><br>${t.hero_title_3}`;
  }
  
  // Hero 副标题（两行）
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.innerHTML = `${t.hero_subtitle_1}<br>${t.hero_subtitle_2}`;
  }
  
  // 下载按钮（保留 SVG 图标）
  const downloadBtn = document.getElementById('downloadBtn');
  if (downloadBtn && !downloadBtn.classList.contains('redirecting')) {
    downloadBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      ${t.btn_download_dmg}
    `;
  }
  
  // 导航下载按钮
  const navDownloadBtn = document.querySelector('.nav-download-btn');
  if (navDownloadBtn) navDownloadBtn.textContent = t.nav_free_download;
  
  // 页面标题
  document.title = currentLang === 'zh' 
    ? 'Alight - 轻量级 Mac 清理工具 | LiteApps'
    : 'Alight - Lightweight Mac Cleaner | LiteApps';
}

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
 */
function isChinaUser() {
  try {
    const lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    if (lang.startsWith('zh') && (tz.includes('Asia/Shanghai') || tz.includes('Asia/Hong_Kong') || tz.includes('Asia/Taipei'))) {
      return true;
    }
    
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
  
  const t = i18n[currentLang];
  const btn = document.getElementById('downloadBtn');
  
  if (!latestRelease || !latestRelease.version) {
    alert(t.version_fetch_error);
    return;
  }
  
  const version = latestRelease.version;  // e.g. "1.0.11"
  const dmfileName = `Alight-Pro-${version}.dmg`;
  
  // 智能选择下载源
  let downloadUrl;
  if (isChinaUser()) {
    downloadUrl = `${OSS_BASE_URL}${dmfileName}`;
    console.log(`🇨🇳 China user detected, using Aliyun OSS`);
  } else {
    downloadUrl = `${GITHUB_RELEASE_BASE}v${version}/${dmfileName}`;
    console.log(`🌍 International user detected, using GitHub Releases`);
  }
  
  // 按钮状态反馈
  const originalHTML = btn.innerHTML;
  btn.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
    ${t.btn_redirecting}
  `;
  btn.style.pointerEvents = 'none';
  btn.classList.add('redirecting');
  
  setTimeout(() => {
    window.location.href = downloadUrl;
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.pointerEvents = '';
      btn.classList.remove('redirecting');
    }, 3000);
  }, 500);
}

// Intersection Observer for animations
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
      console.warn(`GitHub API returned ${response.status}, using default version`);
      setDefaultVersion();
      return;
    }
    
    const data = await response.json();
    
    if (data && data.tag_name) {
      const version = data.tag_name.replace(/^v/, '');
      const locale = currentLang === 'zh' ? 'zh-CN' : 'en-US';
      const publishDate = data.published_at ? new Date(data.published_at).toLocaleDateString(locale) : (currentLang === 'zh' ? '未知' : 'Unknown');
      
      latestRelease = {
        version: version,
        tag: data.tag_name,
        name: data.name || `Alight Pro ${version}`,
        body: data.body || '',
        date: publishDate,
        ossUrl: `${OSS_BASE_URL}Alight-Pro-${version}.dmg`,
        githubUrl: data.html_url || ''
      };
      
      document.getElementById('version').innerHTML = data.tag_name;
      
      const dateEl = document.getElementById('releaseDate');
      if (dateEl) {
        dateEl.textContent = publishDate;
      }
      
      const downloadBtn = document.getElementById('downloadBtn');
      if (downloadBtn) {
        downloadBtn.dataset.version = version;
      }
      
      console.log(`✅ Latest version: ${data.tag_name} (${publishDate})`);
      console.log(`📥 OSS URL: ${latestRelease.ossUrl}`);
    } else {
      setDefaultVersion();
    }
  } catch (e) {
    console.warn('Failed to fetch version:', e);
    setDefaultVersion();
  }
}

// 设置默认版本（API 失败时的降级方案）
function setDefaultVersion() {
  const t = i18n[currentLang];
  document.getElementById('version').innerHTML = 'v1.0.11';
  const dateEl = document.getElementById('releaseDate');
  if (dateEl) {
    dateEl.textContent = currentLang === 'zh' ? '2026-04-26' : 'Apr 26, 2026';
  }
  latestRelease = {
    version: '1.0.11',
    tag: 'v1.0.11',
    name: 'Alight Pro 1.0.11',
    body: '',
    date: currentLang === 'zh' ? '2026-04-26' : 'Apr 26, 2026',
    ossUrl: `${OSS_BASE_URL}Alight-Pro-1.0.11.dmg`,
    githubUrl: ''
  };
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
  // 检测并设置语言
  currentLang = detectLanguage();
  applyLanguage();
  updateLangSwitchButton();
  
  // 绑定语言切换按钮
  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.addEventListener('click', toggleLanguage);
  }
  
  // 获取版本信息
  fetchLatestVersion();
});

console.log('%c✦ Alight by LiteApps %c- Make your Mac lighter', 
  'color: #818cf8; font-size: 18px; font-weight: bold;', 
  'color: #64748b; font-size: 14px;');
