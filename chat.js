// ================= JS REGULADOR EMOCIONAL COMPACTO Y CHAT =================
function updateChatEmotionSlider(val) {
    const level = parseInt(val, 10);
    const slider = document.getElementById('chat-emotion-range-slider');
    const badge = document.getElementById('chat-emotion-level-badge');

    if (slider) slider.value = level;

    if (level <= 20) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-sky-50 text-sky-800 border border-sky-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
            badge.innerText = "Calma y Equilibrio";
        }
    } else if (level <= 40) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-teal-50 text-teal-800 border border-teal-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
            badge.innerText = "Serenidad / Enfoque";
        }
    } else if (level <= 60) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
            badge.innerText = "Equilibrio Activo";
        }
    } else if (level <= 80) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
            badge.innerText = "Tensión / Pausa";
        }
    } else {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
            badge.innerText = "Crisis / Auxilio";
        }
    }
}

function openIndividualChat(name, avatar, statusText, subtitle) {
    const chatView = document.getElementById('individual-chat-view');
    if (chatView) chatView.classList.remove('hidden');
    const nameEl = document.getElementById('ind-chat-name');
    if (nameEl) nameEl.innerText = name || "Contacto";
    const avatarEl = document.getElementById('ind-chat-avatar');
    if (avatarEl) avatarEl.src = avatar || "logo bienestar png.jpeg";
}

function closeIndividualChat() {
    const chatView = document.getElementById('individual-chat-view');
    if (chatView) chatView.classList.add('hidden');
}
