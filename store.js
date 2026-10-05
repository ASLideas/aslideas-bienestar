// ================= JS SHOPPING, WHATSAPP BUSINESS Y AGENTE IA =================
function openAIVideoAdModal() {
    const modal = document.getElementById('modal-ai-video-ad');
    if (modal) modal.classList.remove('hidden');
}

function closeAIVideoAdModal() {
    const modal = document.getElementById('modal-ai-video-ad');
    if (modal) modal.classList.add('hidden');
}

function generateAIVideoAd() {
    alert("🎬 Agente IA: Generando clip publicitario HD de 15 segundos...");
}

function publishToSocial(network) {
    alert("🚀 Publicando afiche/clip en " + network);
}