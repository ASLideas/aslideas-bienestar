// ================= JS CÁMARA FOTOGRÁFICA EN VIVO =================
async function openCameraSimulation() {
    const overlay = document.getElementById('chat-camera-overlay');
    if (overlay) overlay.classList.remove('hidden');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
        const video = document.getElementById('camera-stream-video');
        if (video) { video.srcObject = stream; video.play(); }
    } catch (e) {
        console.log("Cámara simulada o no disponible:", e);
    }
}

function closeCameraSimulation() {
    const overlay = document.getElementById('chat-camera-overlay');
    if (overlay) overlay.classList.add('hidden');
}

function takeLivePhotoSnapshot() {
    alert("📷 Fotografía capturada con éxito en alta resolución.");
    closeCameraSimulation();
}