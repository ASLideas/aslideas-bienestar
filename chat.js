/* ==========================================================================
   BIENESTAR SUPER-APP — MÓDULO 2: JS/CHAT.JS
   Regulador Emocional Sensorial Neurodivergente (Arcoíris), Chats y Mensajería
   ========================================================================== */

   let audioMediaRecorder = null;
   let audioChunks = [];
   let voiceRecordingTimer = null;
   let voiceRecordSeconds = 0;
   
   function updateChatEmotionSlider(val) {
       const level = parseInt(val, 10);
       const slider = document.getElementById('chat-emotion-range-slider');
       const badge = document.getElementById('chat-emotion-level-badge');
       const title = document.getElementById('chat-emotion-title');
       const text = document.getElementById('chat-emotion-rec-text');
   
       if (slider) slider.value = level;
   
       if (level <= 20) {
           if (badge) {
               badge.className = "px-2.5 py-0.5 bg-red-500 text-white rounded-full text-[8.5px] font-black uppercase shadow-xs flex items-center gap-1";
               badge.innerText = "🔴 Reposo Sensorial";
           }
           if (title) title.innerHTML = '🔴 Estado: Reposo Sensorial y Calma Profunda';
           if (text) text.innerText = "Te encuentras en una zona suave de baja estimulación. Ideal para descanso e infusiones relajantes.";
       } else if (level <= 40) {
           if (badge) {
               badge.className = "px-2.5 py-0.5 bg-amber-500 text-white rounded-full text-[8.5px] font-black uppercase shadow-xs flex items-center gap-1";
               badge.innerText = "💛 Hiperfoco / Enfoque";
           }
           if (title) title.innerHTML = '💛 Estado: Enfoque y Claridad Cognitiva';
           if (text) text.innerText = "Excelente canalización del hiperfoco. Recuerda mantener pausas de hidratación.";
       } else if (level <= 60) {
           if (badge) {
               badge.className = "px-2.5 py-0.5 bg-emerald-500 text-white rounded-full text-[8.5px] font-black uppercase shadow-xs flex items-center gap-1";
               badge.innerText = "💚 Balance Sensorial";
           }
           if (title) title.innerHTML = '💚 Estado: Equilibrio Consciente';
           if (text) text.innerText = "Equilibrio activo. Recomendamos pausas breves de respiración guiada 4-7-8.";
       } else if (level <= 80) {
           if (badge) {
               badge.className = "px-2.5 py-0.5 bg-cyan-600 text-white rounded-full text-[8.5px] font-black uppercase shadow-xs flex items-center gap-1";
               badge.innerText = "💙 Saturación Elevada";
           }
           if (title) title.innerHTML = '💙 Estado: Saturación de Estímulos';
           if (text) text.innerText = "Sugerimos reducir luces y sonidos ambientales. Escucha frecuencias Alfa en Morfeo.";
       } else {
           if (badge) {
               badge.className = "px-2.5 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-[8.5px] font-black uppercase shadow-xs flex items-center gap-1";
               badge.innerText = "🌈 Sobrecarga / Espacio Seguro";
           }
           if (title) title.innerHTML = '🌈 Estado: Protocolo de Calma Neurodivergente';
           if (text) text.innerText = "Se activó el protocolo de seguridad. Retírate a tu espacio cómodo y usa audífonos.";
       }
   }
   
   function openIndividualChat(name, avatar, statusText, subtitle) {
       const chatView = document.getElementById('individual-chat-view');
       if (chatView) chatView.classList.remove('hidden');
   
       const nameEl = document.getElementById('ind-chat-name');
       if (nameEl) nameEl.innerText = name || "Contacto";
   
       const avatarEl = document.getElementById('ind-chat-avatar');
       if (avatarEl) avatarEl.src = avatar || "logo bienestar png.jpeg";
   
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
               <div class="bg-[#2C7A7B] text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] shadow-sm text-xs space-y-1">
                   <p>${messageText}</p>
                   <div class="text-[8px] text-teal-100 text-right flex items-center justify-end gap-1">
                       <span>${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                       <i data-lucide="check-check" class="w-3 h-3 text-teal-200"></i>
                   </div>
               </div>
           </div>
       `;
       stream.innerHTML += msgHtml;
       stream.scrollTop = stream.scrollHeight;
   }
   