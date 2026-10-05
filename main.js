// ================= JS PRINCIPAL, PWA, RELOJ Y NAVEGACIÓN =================
let selectedAvatarUrl = 'logo bienestar.jpg';

function safeInitLucide() {
    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

function handleLogoError(img) {
    if (!img) return;
    img.onerror = null;
    img.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56" fill="%23E0F7F4" stroke="%2333BCA9" stroke-width="4"/><path d="M60 30 C45 45 35 60 35 75 C35 90 46 95 60 95 C74 95 85 90 85 75 C85 60 75 45 60 30 Z" fill="%232C7A7B"/><text x="60" y="112" font-family="sans-serif" font-size="8" font-weight="900" fill="%232C7A7B" text-anchor="middle">BIENESTAR</text></svg>';
}

window.addEventListener('DOMContentLoaded', () => {
    safeInitLucide();
    setInterval(updateClock, 1000);
    updateClock();
});

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeEl = document.getElementById('system-clock');
    if (timeEl) timeEl.innerText = `${hours}:${minutes}`;
}

function switchTab(tabName, button) {
    if (typeof closeIndividualChat === 'function') closeIndividualChat();

    ['chats', 'bienestar', 'tienda', 'relajacion'].forEach(id => {
        document.getElementById('screen-' + id)?.classList.add('hidden');
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
    alert("📱 ¡Instalación activada! La Súper-App Bienestar se está agregando a tu pantalla de inicio.");
    closeAppDownloadModal();
}