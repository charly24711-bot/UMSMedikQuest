// ========================================================
// MEDIKQUEST - MOTOR PRINCIPAL DEL JUEGO (VANILLA JS + AUDIO)
// ========================================================

// Audio System (Web Audio API)
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

function playSound(type) {
  const ctx = getAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === 'fanfare') {
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C, E, G, C, E
    notes.forEach((freq, idx) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'triangle';
      o.frequency.setValueAtTime(freq, now + idx * 0.09);
      g.gain.setValueAtTime(0.18, now + idx * 0.09);
      g.gain.linearRampToValueAtTime(0.01, now + idx * 0.09 + 0.22);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(now + idx * 0.09);
      o.stop(now + idx * 0.09 + 0.22);
    });
  } else if (type === 'step') {
    // Subtle low footstep sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.06);
    osc.start(now);
    osc.stop(now + 0.06);
  } else if (type === 'correct') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.45);
    osc.start(now);
    osc.stop(now + 0.45);
  } else if (type === 'wrong') {
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(164.81, now);
    osc.frequency.linearRampToValueAtTime(110.00, now + 0.3);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'blip') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(650 + Math.random() * 120, now);
    gain.gain.setValueAtTime(0.025, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.035);
    osc.start(now);
    osc.stop(now + 0.035);
  }
}

// Game State
const state = {
  screen: 'intro',
  hp: 3,
  xp: 0,
  currentCaseIdx: 0,
  allCases: [],
  isTyping: false
};

// Flatten cases
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

// Typewriter
let typingTimeout = null;
function typewriteText(elementId, text, speed = 16, onComplete = null) {
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

// ========================================================
// ESCENA 0: PRÓLOGO CINEMÁTICO (LLEGADA A LA FACULTAD)
// ========================================================
let cinematicTimer = null;

const CINEMATIC_STORY = [
  {
    text: "Ciudad del Este, Paraguay... 07:30 AM.\nEl sol asoma sobre el predio de la universidad.",
    posY: 60,
    duration: 3800
  },
  {
    text: "Llegás a la Universidad Privada María Serrana.\nHoy comienza tu camino en la Carrera de Medicina.",
    posY: 110,
    duration: 4200
  },
  {
    text: "Mochila al hombro y muchas expectativas...\nCaminás por el estacionamiento hacia el Aula Magna.",
    posY: 160,
    duration: 4000
  },
  {
    text: "Subís las escalinatas principales.\nIngresás por la puerta de acceso al Área de Recepción...",
    posY: 220,
    duration: 3500
  }
];

function runCinematicPrologue(step = 0) {
  if (step >= CINEMATIC_STORY.length) {
    skipToTitle();
    return;
  }

  const s = CINEMATIC_STORY[step];
  const sprite = document.getElementById('walkingStudent');
  if (sprite) {
    sprite.style.bottom = `${s.posY}px`;
    playSound('step');
  }

  typewriteText('cinemaSubtitle', s.text, 20, () => {
    cinematicTimer = setTimeout(() => {
      runCinematicPrologue(step + 1);
    }, s.duration - 1500);
  });
}

function skipToTitle() {
  if (cinematicTimer) clearTimeout(cinematicTimer);
  playSound('fanfare');

  document.getElementById('screenIntro').style.display = 'none';
  document.getElementById('screenTitle').style.display = 'flex';
  document.getElementById('screenReception').style.display = 'none';
  document.getElementById('screenGame').style.display = 'none';
  state.screen = 'title';
}

function goToTitleMenu() {
  skipToTitle();
}

// ========================================================
// ESCENA 1 -> 2: ENTRAR A RECEPCIÓN
// ========================================================
function enterReception() {
  playSound('fanfare');
  document.getElementById('screenTitle').style.display = 'none';
  document.getElementById('screenReception').style.display = 'flex';
  state.screen = 'reception';

  const welcomeText = "¡Hola! Muy buenos días, colega. Te doy la bienvenida a la Universidad Privada María Serrana.\n\nYa estás registrado para la rotación de 1er Año. Te hago entrega de tu carnet estudiantil y tu Libreta de Prácticas.\n\nEn las salas y laboratorios ya te están esperando los jefes de cátedra: el Dr. René Amarilla en Anatomía, la Dra. Antonella Antico y la Lic. Patricia Gómez en Laboratorios, el Dr. Ángel Gómez y la Dra. Viviana Ruiz en Decanato. ¡Muchos éxitos en tu rotación!";

  typewriteText('receptionSpeech', welcomeText, 14);
}

// ========================================================
// ESCENA 2 -> 3: ROTACIÓN CLÍNICA (CASOS)
// ========================================================
function startClinicalRotation() {
  playSound('start');
  document.getElementById('screenReception').style.display = 'none';
  document.getElementById('screenGame').style.display = 'flex';
  state.screen = 'game';
  state.hp = 3;
  state.xp = 0;
  state.currentCaseIdx = 0;
  updateHUD();
  loadCurrentCase();
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

function loadCurrentCase() {
  if (state.currentCaseIdx >= state.allCases.length) {
    showVictoryScreen();
    return;
  }

  const c = state.allCases[state.currentCaseIdx];
  const profImg = document.getElementById('profImg');
  const profName = document.getElementById('profName');
  const subjectBadge = document.getElementById('subjectBadge');

  profImg.src = c.docente.avatar;
  profName.textContent = c.docente.nombre.toUpperCase();
  subjectBadge.textContent = c.unidad;

  const fullPrompt = `PACIENTE: ${c.paciente}\n\nPREGUNTA CLÍNICA: ${c.pregunta}`;

  typewriteText('profSpeech', fullPrompt, 13, () => {
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
    typewriteText('profSpeech', `¡CORRECTO! ${opt.feedback}`, 14, () => {
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
      typewriteText('profSpeech', `❌ ${opt.feedback}\n¡Te quedaste sin energía! Repasá los contenidos de la cátedra e intentá nuevamente.`, 14, () => {
        document.getElementById('optionsContainer').innerHTML = `
          <button class="action-btn" style="grid-column: span 2;" onclick="startClinicalRotation()">
            <span class="action-key">🔄</span>
            <span>REINTENTAR ROTACIÓN CLÍNICA</span>
          </button>
        `;
      });
    } else {
      typewriteText('profSpeech', `❌ ${opt.feedback}\nPerdiste un corazón de energía. ¡Pensá tu respuesta y volvé a intentar!`, 14);
    }
  }
}

function showHint() {
  const c = state.allCases[state.currentCaseIdx];
  if (!c || !c.pistaDocente) return;
  typewriteText('profSpeech', `💡 PISTA DEL PROFESOR: "${c.pistaDocente}"`, 14);
}

function showVictoryScreen() {
  playSound('fanfare');
  const profImg = document.getElementById('profImg');
  const profName = document.getElementById('profName');
  const subjectBadge = document.getElementById('subjectBadge');
  const optionsContainer = document.getElementById('optionsContainer');

  profImg.src = 'dra_viviana_ruiz_fiel.jpg';
  profName.textContent = 'TRIBUNAL ACADÉMICO UPMS';
  subjectBadge.textContent = '¡ROTACIÓN DE 1ER AÑO COMPLETADA!';

  const msg = `🎓 ¡FELICITACIONES, FUTURO MÉDICO!\n\nHas resuelto con éxito todos los casos clínicos de Anatomía Humana I, Bioquímica Clínica I, Laboratorios y Antropología Médica con un puntaje final de ${state.xp} XP.\n\nEl Dr. René Amarilla, la Dra. Antonella Antico, la Lic. Patricia Gómez, el Dr. Ángel Gómez y la Dra. Viviana Ruiz han firmado y sellado tu libreta oficial de prácticas.`;

  typewriteText('profSpeech', msg, 15, () => {
    optionsContainer.innerHTML = `
      <button class="action-btn" style="grid-column: span 2;" onclick="skipToTitle()">
        <span class="action-key">🏛️</span>
        <span>VOLVER AL MENÚ DE LA FACHADA</span>
      </button>
    `;
  });
}

// Iniciar al cargar
window.addEventListener('DOMContentLoaded', () => {
  initCases();
  runCinematicPrologue(0);
});
