// ================= JS VIDEOLLAMADAS HD Y LLAMADAS DE VOZ =================
function startIndividualDirectCall(name, avatar, type) {
    const overlay = document.getElementById('call-overlay');
    if (overlay) overlay.classList.remove('hidden');
    const title = document.getElementById('call-overlay-name');
    if (title) title.innerText = name || "Contacto";
    const img = document.getElementById('call-overlay-avatar');
    if (img) img.src = avatar || "logo bienestar png.jpeg";
}

function endCall() {
    const overlay = document.getElementById('call-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function toggleCallMute(btn) {
    btn?.classList.toggle('bg-red-500');
}