// ================= JS REGULADOR EMOCIONAL Y CHAT =================
function updateChatEmotionSlider(val) {
    const level = parseInt(val, 10);
    const badge = document.getElementById('chat-emotion-level-badge');
    if (!badge) return;

    if (level <= 20) {
        badge.className = "px-2.5 py-0.5 bg-purple-50 text-purple-800 border border-purple-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
        badge.innerText = "Reposo Sensorial 🧘";
    } else if (level <= 40) {
        badge.className = "px-2.5 py-0.5 bg-sky-50 text-sky-800 border border-sky-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
        badge.innerText = "Hiperfoco / Claridad 🎯";
    } else if (level <= 60) {
        badge.className = "px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
        badge.innerText = "Balance Activo 🌿";
    } else if (level <= 80) {
        badge.className = "px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
        badge.innerText = "Pausa / Saturación ⚠️";
    } else {
        badge.className = "px-2.5 py-0.5 bg-rose-50 text-rose-800 border border-rose-200 rounded-full text-[8.5px] font-black uppercase shadow-2xs";
        badge.innerText = "Espacio Seguro 🔴";
    }
}

function switchChatFilter(filterName, btn) {
    const buttons = document.querySelectorAll('.chat-filter-btn');
    buttons.forEach(b => {
        b.classList.remove('bg-[#2C7A7B]', 'text-white');
        b.classList.add('bg-slate-100', 'text-slate-600');
    });
    if (btn) {
        btn.classList.add('bg-[#2C7A7B]', 'text-white');
        btn.classList.remove('bg-slate-100', 'text-slate-600');
    }
}

function openIndividualChat(name, avatar, statusText, subtitle) {
    const chatView = document.getElementById('individual-chat-view');
    if (chatView) chatView.classList.remove('hidden');

    const nameEl = document.getElementById('ind-chat-name');
    if (nameEl) nameEl.innerText = name || "Contacto";

    const avatarEl = document.getElementById('ind-chat-avatar');
    if (avatarEl) avatarEl.src = avatar || "Code_Generated_Image (1).png";

    const subEl = document.getElementById('ind-chat-status');
    if (subEl) subEl.innerText = subtitle || "En línea";
}

function closeIndividualChat() {
    const chatView = document.getElementById('individual-chat-view');
    if (chatView) chatView.classList.add('hidden');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input-text');
    if (!input || !input.value.trim()) return;

    const messageText = input.value.trim();
    input.value = "";

    const stream = document.getElementById('chat-messages-stream');
    if (!stream) return;

    const msgHtml = `
        <div class="flex justify-end my-2">
            <div class="bg-[#2C7A7B] text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-2xs text-xs space-y-1">
                <p>${messageText}</p>
                <div class="text-[8px] text-teal-100 text-right">
                    <span>${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                </div>
            </div>
        </div>
    `;
    stream.innerHTML += msgHtml;
    stream.scrollTop = stream.scrollHeight;
}

function startNativeAudioRecording() {
    alert("🎙️ Grabando nota de voz en tiempo real...");
}