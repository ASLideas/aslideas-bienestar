// ================= JS VIDEOLLAMADAS Y VOZ =================
let callTimer = null;
let callSeconds = 0;

function startIndividualDirectCall(name, avatar, type) {
    const overlay = document.getElementById('call-overlay');
    if (overlay) overlay.classList.remove('hidden');

    const nameEl = document.getElementById('call-overlay-name');
    if (nameEl) nameEl.innerText = name || "Contacto";

    callSeconds = 0;
    clearInterval(callTimer);
    callTimer = setInterval(() => {
        callSeconds++;
        const mins = String(Math.floor(callSeconds / 60)).padStart(2, '0');
        const secs = String(callSeconds % 60).padStart(2, '0');
        const timerEl = document.getElementById('call-timer-display');
        if (timerEl) timerEl.innerText = `${mins}:${secs}`;
    }, 1000);
}

function endCall() {
    clearInterval(callTimer);
    const overlay = document.getElementById('call-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function toggleCallMute(btn) {
    btn?.classList.toggle('bg-red-500');
}