// ================= JS REGULADOR EMOCIONAL ARCOÍRIS Y CHATS =================
function updateChatEmotionSlider(val) {
    const level = parseInt(val, 10);
    const slider = document.getElementById('chat-emotion-range-slider');
    const badge = document.getElementById('chat-emotion-level-badge');

    if (slider) slider.value = level;

    if (level <= 20) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-red-50 text-red-800 border border-red-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs flex items-center gap-1";
            badge.innerHTML = '<span class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span> Reposo Sensorial 🧘';
        }
    } else if (level <= 40) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs flex items-center gap-1";
            badge.innerHTML = '<span class="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span> Hiperfoco 🎯';
        }
    } else if (level <= 60) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs flex items-center gap-1";
            badge.innerHTML = '<span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Balance Activo 🌿';
        }
    } else if (level <= 80) {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-cyan-50 text-cyan-800 border border-cyan-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs flex items-center gap-1";
            badge.innerHTML = '<span class="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse"></span> Saturación / Pausa ⚠️';
        }
    } else {
        if (badge) {
            badge.className = "px-2.5 py-0.5 bg-purple-50 text-purple-800 border border-purple-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs flex items-center gap-1";
            badge.innerHTML = '<span class="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"></span> Espacio Seguro 🌈';
        }
    }
}

function openIndividualChat(name, avatar, statusText, subtitle) {
    alert(`💬 Abriendo chat con ${name}...`);
}

function closeIndividualChat() {}