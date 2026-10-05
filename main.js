// ================= JS PRINCIPAL, PWA, NAVEGACIÓN Y RELOJ =================
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('onboarding-screen')?.classList.add('hidden');
    setInterval(updateClock, 1000);
    updateClock();
});

function updateClock() {
    const now = new Date();
    const clockEl = document.getElementById('system-clock');
    if (clockEl) {
        clockEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
}

function switchTab(tabName, button) {
    if (typeof closeIndividualChat === 'function') closeIndividualChat();
    ['chats', 'bienestar', 'tienda', 'relajacion'].forEach(id => {
        const el = document.getElementById('screen-' + id);
        if (el) el.classList.add('hidden');
    });

    const target = document.getElementById('screen-' + tabName);
    if (target) target.classList.remove('hidden');

    const statusBar = document.getElementById('system-status-bar');
    if (statusBar) {
        statusBar.className = (tabName === 'relajacion')
            ? "bg-[#0A1118] text-white text-xs px-6 py-2.5 flex justify-between items-center shrink-0 z-40 transition-colors duration-300"
            : "bg-[#FAF8EE] text-[#4C5C77] text-xs px-6 py-2.5 flex justify-between items-center shrink-0 z-40 transition-colors duration-300";
    }

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('font-black', 'text-[#2C7A7B]');
        btn.classList.add('text-[#5A738E]');
    });
    if (button) {
        button.classList.add('font-black', 'text-[#2C7A7B]');
        button.classList.remove('text-[#5A738E]');
    }
}

function openAppDownloadModal() {
    const modal = document.getElementById('app-download-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeAppDownloadModal() {
    const modal = document.getElementById('app-download-modal');
    if (modal) modal.classList.add('hidden');
}