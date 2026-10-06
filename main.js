// ================= JS PRINCIPAL, PWA, RELOJ Y NAVEGACIÓN =================
let splashProgress = 0;

function safeInitLucide() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

function handleLogoError(img) {
    if (!img) return;
    img.onerror = null;
    img.src = 'Code_Generated_Image (1).png';
}

window.addEventListener('DOMContentLoaded', () => {
    safeInitLucide();
    setInterval(updateClock, 1000);
    updateClock();
    startSplashProgress();
});

function startSplashProgress() {
    const bar = document.getElementById('splash-progress-bar');
    const txt = document.getElementById('splash-progress-text');
    const timer = setInterval(() => {
        splashProgress += 10;
        if (bar) bar.style.width = splashProgress + '%';
        if (txt) txt.innerText = splashProgress + '%';
        if (splashProgress >= 100) {
            clearInterval(timer);
            setTimeout(dismissSplashScreen, 400);
        }
    }, 150);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockEl = document.getElementById('system-clock');
    if (clockEl) clockEl.innerText = `${hours}:${minutes}`;
}

function switchTab(tabName, button) {
    if (typeof closeIndividualChat === 'function') closeIndividualChat();

    ['chats', 'bienestar', 'tienda', 'relajacion'].forEach(id => {
        const el = document.getElementById('screen-' + id);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById('screen-' + tabName);
    if (target) target.classList.remove('hidden');

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('font-black', 'text-[#2C7A7B]');
        btn.classList.add('text-slate-400');
    });

    if (button) {
        button.classList.add('font-black', 'text-[#2C7A7B]');
        button.classList.remove('text-slate-400');
    }
    safeInitLucide();
}

function openAppDownloadModal() {
    const modal = document.getElementById('app-download-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeAppDownloadModal() {
    const modal = document.getElementById('app-download-modal');
    if (modal) modal.classList.add('hidden');
}

function triggerPWAInstallation() {
    alert("📱 Súper-App Bienestar: Iniciando proceso de instalación PWA en tu pantalla de inicio...");
    closeAppDownloadModal();
}

function dismissSplashScreen() {
    const splash = document.getElementById('splash-intro-screen');
    if (splash) {
        splash.style.opacity = '0';
        setTimeout(() => splash.classList.add('hidden'), 400);
    }
}