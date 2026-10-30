// ========================================================
// MEDIKQUEST - MOTOR DEL JUEGO (VANILLA JS + WEB AUDIO API)
// ========================================================

// Audio System
let audioCtx = null;

function getAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// 16-bit Sound Synthesizers
function playSound(type) {
  const ctx = getAudio();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'start') {
    // RPG Intro Fanfare
    const notes = [261.63, 329.63, 392.00, 523.25]; // C4, E4, G4, C5
    notes.forEach((freq, idx) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(freq, now + idx * 0.1);
      g.gain.setValueAtTime(0.2, now + idx * 0.1);
      g.gain.linearRampToValueAtTime(0.01, now + idx * 0.1 + 0.25);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(now + idx * 0.1);
      o.stop(now + idx * 0.1 + 0.25);
    });
  } else if (type === 'correct') {
    // High victory chime
    osc.type = 'square';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.45);
    osc.start(now);
    osc.stop(now + 0.45);
  } else if (type === 'wrong') {
    // Harsh error buzzer
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(164.81, now); // E3
    osc.frequency.linearRampToValueAtTime(110.00, now + 0.3); // A2
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'blip') {
    // Typewriter letter blip
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600 + Math.random() * 150, now);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.04);
    osc.start(now);
    osc.stop(now + 0.04);
  }
}

// Game State
const state = {
  screen: 'title', // 'title' | 'intro' | 'game' | 'victory'
  hp: 3,
  xp: 0,
  currentCaseIdx: 0,
  allCases: [],
  isTyping: false
};

// Flatten cases from BANCO_UPMS_PRIMER_ANHO
function initCases() {
  state.allCases = [];
  BANCO_UPMS_PRIMER_ANHO.materias.forEach(mat => {
    mat.casos.forEach(caso => {
      state.allCases.push({
        ...caso,
        materiaNombre: mat.nombre,
        docente: mat.docente
      });
    });
  });
}

// Typewriter Effect
let typingTimeout = null;
function typewriteText(elementId, text, speed = 18, onComplete = null) {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (typingTimeout) clearTimeout(typingTimeout);

  el.textContent = '';
  state.isTyping = true;
  let idx = 0;

  function typeChar() {
    if (idx < text.length) {
      el.textContent += text.charAt(idx);
      if (idx % 2 === 0 && text.charAt(idx) !== ' ') {
        playSound('blip');
      }
      idx++;
      typingTimeout = setTimeout(typeChar, speed);
    } else {
      state.isTyping = false;
      if (onComplete) onComplete();
    }
  }
  typeChar();
}

// Screen Transitions
function showTitleScreen() {
  document.getElementById('screenTitle').style.display = 'flex';
  document.getElementById('screenGame').style.display = 'none';
  state.screen = 'title';
}

function startGameFromFacade() {
  playSound('start');
  document.getElementById('screenTitle').style.display = 'none';
  document.getElementById('screenGame').style.display = 'flex';
  state.screen = 'intro';
  state.hp = 3;
  state.xp = 0;
  state.currentCaseIdx = 0;
  updateHUD();

  // Intro Dialog with Dra. Viviana Ruiz
  const profImg = document.getElementById('profImg');
  const profName = document.getElementById('profName');
  const subjectBadge = document.getElementById('subjectBadge');
  const optionsContainer = document.getElementById('optionsContainer');

  profImg.src = 'dra_viviana_ruiz_fiel.jpg';
  profName.textContent = 'DRA. NIDIA VIVIANA RUIZ';
  subjectBadge.textContent = 'COORDINACIÓN GENERAL ACADÉMICA';

  const welcomeMsg = "¡Bienvenido a la Universidad Privada María Serrana, colega! Soy la Dra. Viviana Ruiz. Para aprobar tu rotación de 1er año vas a tener que resolver los desafíos clínicos de Anatomía I con el Dr. René Amarilla, Bioquímica I con la Dra. Antonella Antico y Antropología Médica conmigo. ¿Estás preparado?";
  
  typewriteText('profSpeech', welcomeMsg, 16, () => {
    optionsContainer.innerHTML = `
      <button class="action-btn" style="grid-column: span 2;" onclick="loadCurrentCase()">
        <span class="action-key">▶</span>
        <span>¡ESTOY LISTO, DRA. RUIZ! COMENZAR ROTACIÓN CLÍNICA</span>
      </button>
    `;
  });
}

function updateHUD() {
  document.getElementById('xpText').textContent = String(state.xp).padStart(4, '0');
  let hearts = '';
  for (let i = 0; i < state.hp; i++) hearts += '❤️';
  if (state.hp <= 0) hearts = '💀 SIN ENERGÍA';
  document.getElementById('hpText').textContent = hearts;
}

function spawnFloatingXP(amount) {
  const cabinet = document.querySelector('.rpg-cabinet');
  const banner = document.createElement('div');
  banner.className = 'floating-xp';
  banner.textContent = `+${amount} XP`;
  cabinet.appendChild(banner);
  setTimeout(() => banner.remove(), 1200);
}

// Load Question Case
function loadCurrentCase() {
  if (state.currentCaseIdx >= state.allCases.length) {
    showVictoryScreen();
    return;
  }

  const c = state.allCases[state.currentCaseIdx];
  const profImg = document.getElementById('profImg');
  const profName = document.getElementById('profName');
  const subjectBadge = document.getElementById('subjectBadge');
  const optionsContainer = document.getElementById('optionsContainer');

  profImg.src = c.docente.avatar;
  profName.textContent = c.docente.nombre.toUpperCase();
  subjectBadge.textContent = c.unidad;

  const fullPrompt = `PACIENTE: ${c.paciente}\n\nPREGUNTA CLÍNICA: ${c.pregunta}`;

  typewriteText('profSpeech', fullPrompt, 14, () => {
    renderOptions(c);
  });
}

function renderOptions(c) {
  const optionsContainer = document.getElementById('optionsContainer');
  const keys = ['A', 'B', 'C', 'D'];

  optionsContainer.innerHTML = c.opciones.map((opt, i) => `
    <button class="action-btn" onclick="selectAnswer(${i})">
      <span class="action-key">${keys[i]}</span>
      <span>${opt.texto}</span>
    </button>
  `).join('');
}

// Answer Selection
function selectAnswer(optIdx) {
  if (state.isTyping) return;

  const c = state.allCases[state.currentCaseIdx];
  const opt = c.opciones[optIdx];
  const btns = document.querySelectorAll('.action-btn');

  if (opt.correcta) {
    playSound('correct');
    state.xp += 100;
    spawnFloatingXP(100);
    updateHUD();

    btns[optIdx].classList.add('correct');
    typewriteText('profSpeech', `¡RESPUESTA CORRECTA! ${opt.feedback}`, 14, () => {
      setTimeout(() => {
        state.currentCaseIdx++;
        if (state.currentCaseIdx < state.allCases.length) {
          loadCurrentCase();
        } else {
          showVictoryScreen();
        }
      }, 2200);
    });

  } else {
    playSound('wrong');
    state.hp--;
    updateHUD();
    btns[optIdx].classList.add('wrong');

    if (state.hp <= 0) {
      typewriteText('profSpeech', `❌ ${opt.feedback} ¡Te quedaste sin energía! Repasá los apuntes de la cátedra e intentá nuevamente.`, 14, () => {
        document.getElementById('optionsContainer').innerHTML = `
          <button class="action-btn" style="grid-column: span 2;" onclick="startGameFromFacade()">
            <span class="action-key">🔄</span>
            <span>REINTENTAR ROTACIÓN DESDE LA FACHADA</span>
          </button>
        `;
      });
    } else {
      typewriteText('profSpeech', `❌ ${opt.feedback} Perdiste un corazón. ¡Pensá bien y volvé a intentar!`, 14);
    }
  }
}

// Show Hint from Professor
function showHint() {
  const c = state.allCases[state.currentCaseIdx];
  if (!c || !c.pistaDocente) return;
  typewriteText('profSpeech', `💡 PISTA DEL PROFESOR: "${c.pistaDocente}"`, 14);
}

// Victory Screen
function showVictoryScreen() {
  playSound('start');
  const profImg = document.getElementById('profImg');
  const profName = document.getElementById('profName');
  const subjectBadge = document.getElementById('subjectBadge');
  const optionsContainer = document.getElementById('optionsContainer');

  profImg.src = 'dra_viviana_ruiz_fiel.jpg';
  profName.textContent = 'TRIBUNAL ACADÉMICO UPMS';
  subjectBadge.textContent = '¡ROTACIÓN 1ER AÑO COMPLETADA!';

  const msg = `🎓 ¡FELICITACIONES! Has superado con éxito todos los casos clínicos de Anatomía Humana I, Bioquímica Clínica I y Antropología Médica con un puntaje final de ${state.xp} XP. La Dra. Viviana Ruiz, el Dr. René Amarilla y la Dra. Antonella Antico han firmado tu libreta oficial de prácticas.`;

  typewriteText('profSpeech', msg, 16, () => {
    optionsContainer.innerHTML = `
      <button class="action-btn" style="grid-column: span 2;" onclick="showTitleScreen()">
        <span class="action-key">🏛️</span>
        <span>VOLVER A LA FACHADA DE LA FACULTAD</span>
      </button>
    `;
  });
}

// Init on Load
window.addEventListener('DOMContentLoaded', () => {
  initCases();
  showTitleScreen();
});
