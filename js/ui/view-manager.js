// UI Layer: DOM View and Scene Manager
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.ViewManager = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  class ViewManager {
    constructor(typewriter) {
      this.typewriter = typewriter;
      this.screens = {
        intro: document.getElementById('screenIntro'),
        title: document.getElementById('screenTitle'),
        customizer: document.getElementById('screenCustomizer'),
        entrance: document.getElementById('screenEntranceWalk'),
        reception: document.getElementById('screenReception'),
        game: document.getElementById('screenGame')
      };

      this.hud = {
        hp: document.getElementById('hpText'),
        xp: document.getElementById('xpText')
      };

      this.stage = {
        profImg: document.getElementById('profImg'),
        profName: document.getElementById('profName'),
        subjectBadge: document.getElementById('subjectBadge'),
        profSpeech: document.getElementById('profSpeech'),
        optionsContainer: document.getElementById('optionsContainer'),
        cinemaSubtitle: document.getElementById('cinemaSubtitle'),
        receptionSpeech: document.getElementById('receptionSpeech'),
        actorTag: document.querySelector('.actor-tag')
      };

      this.customizer = {
        previewContainer: document.getElementById('avatarPreviewContainer'),
        previewName: document.getElementById('previewStudentName'),
        previewTitle: document.getElementById('previewStudentTitle'),
        inputName: document.getElementById('inputStudentName'),
        hairStyleChoices: document.getElementById('hairStyleChoices')
      };

      this.entrance = {
        viewport: document.getElementById('entranceViewport'),
        facade: document.getElementById('entranceStageFacade'),
        reception: document.getElementById('entranceStageReception'),
        facadeWalker: document.getElementById('facadeStudentWalker'),
        receptionWalker: document.getElementById('receptionStudentWalker'),
        stepLabel: document.getElementById('entranceStepLabel'),
        subtitle: document.getElementById('entranceSubtitle'),
        btnSkip: document.getElementById('btnSkipEntrance')
      };

      this.semiology = {
        toolbar: document.getElementById('semiologyToolbar'),
        card: document.getElementById('semiologyFindingsCard'),
        title: document.getElementById('semiologyFindingsTitle'),
        body: document.getElementById('semiologyFindingsBody'),
        closeBtn: document.getElementById('btnCloseSemiologyCard')
      };

      this.patientBedContainer = document.getElementById('patientBedContainer');
      this.cabinet = document.querySelector('.rpg-cabinet');
    }

    showScreen(screenName) {
      Object.keys(this.screens).forEach(key => {
        const el = this.screens[key];
        if (!el) return;
        if (key === screenName) {
          el.style.display = 'flex';
        } else {
          el.style.display = 'none';
        }
      });
    }

    renderCustomizer(profile) {
      if (!profile || !this.customizer.previewContainer) return;
      const data = profile.get();

      // Render Avatar SVG
      const svg = MedikQuest.AvatarGenerator.generateSVG(data);
      this.customizer.previewContainer.innerHTML = svg;

      // Update Card Labels
      if (this.customizer.previewName) {
        const rawName = profile.getRawName();
        this.customizer.previewName.textContent = (rawName.trim() || 'TU NOMBRE').toUpperCase();
      }
      if (this.customizer.previewTitle) {
        this.customizer.previewTitle.textContent = profile.getIdCardSub().toUpperCase();
      }
      if (this.customizer.inputName && document.activeElement !== this.customizer.inputName) {
        this.customizer.inputName.value = profile.getRawName();
      }

      // Update active state on choice buttons
      this._updateActiveButtons(data);
    }

    _updateActiveButtons(data) {
      document.querySelectorAll('.choice-btn').forEach(btn => {
        const type = btn.dataset.type;
        const val = btn.dataset.val;
        if (type && val && data[type] !== undefined) {
          if (data[type] === val) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        }
      });
    }

    updateHairStyleOptions(gender, currentStyle) {
      if (!this.customizer.hairStyleChoices) return;
      const styles = gender === 'f'
        ? [
            { id: 'coleta', label: 'Coleta' },
            { id: 'suelto', label: 'Pelo largo' }
          ]
        : [
            { id: 'corto', label: 'Corto' },
            { id: 'fade', label: 'Fade' }
          ];

      this.customizer.hairStyleChoices.innerHTML = styles.map(s => `
        <button class="choice-btn ${currentStyle === s.id ? 'active' : ''}" data-type="hairStyle" data-val="${s.id}">
          ${s.label}
        </button>
      `).join('');
    }

    applyPlayerVisuals(profile) {
      if (!profile) return;
      const data = profile.get();
      const svg = MedikQuest.AvatarGenerator.generateSVG(data);

      // Bedside student in clinical rotation
      const stageGraphic = document.getElementById('stageStudentGraphic') || document.querySelector('.stage-student-pixel');
      if (stageGraphic) {
        stageGraphic.innerHTML = svg;
      }

      // Entrance Walk animated avatars
      if (this.entrance.facadeWalker) {
        this.entrance.facadeWalker.innerHTML = svg;
      }
      if (this.entrance.receptionWalker) {
        this.entrance.receptionWalker.innerHTML = svg;
      }

      // Student Tag in Clinical Room (ALUMNO: NOMBRE or ALUMNA: NOMBRE)
      if (this.stage.actorTag) {
        this.stage.actorTag.textContent = profile.getBadgeText();
      }
    }

    renderPatientBed() {
      if (!this.patientBedContainer) return;
      if (MedikQuest.AvatarGenerator && MedikQuest.AvatarGenerator.generatePatientBedSVG) {
        this.patientBedContainer.innerHTML = MedikQuest.AvatarGenerator.generatePatientBedSVG();
      }
    }

    showSemiologyFinding(title, text, onComplete, onCharSound) {
      if (!this.semiology.card) return;
      if (this.semiology.title) {
        this.semiology.title.textContent = title;
      }
      this.semiology.card.style.display = 'block';

      if (this.semiology.body) {
        this.typewriter.type(this.semiology.body, text, 12, {
          onComplete,
          onCharSound
        });
      }
    }

    hideSemiologyFinding() {
      if (this.semiology.card) {
        this.semiology.card.style.display = 'none';
      }
    }

    updateHUD(hp, xp) {
      if (this.hud.xp) {
        this.hud.xp.textContent = String(xp).padStart(4, '0');
      }

      if (this.hud.hp) {
        if (hp <= 0) {
          this.hud.hp.textContent = '💀 SIN ENERGÍA';
        } else {
          let hearts = '';
          for (let i = 0; i < hp; i++) hearts += '❤️';
          this.hud.hp.textContent = hearts;
        }
      }
    }

    spawnFloatingXP(amount) {
      if (!this.cabinet) return;
      const banner = document.createElement('div');
      banner.className = 'floating-xp';
      banner.textContent = `+${amount} XP`;
      this.cabinet.appendChild(banner);
      setTimeout(() => banner.remove(), 1200);
    }

    renderCase(currentCase, onTypingComplete, onCharSound) {
      if (!currentCase) return;

      this.renderPatientBed();
      this.hideSemiologyFinding();

      if (this.stage.profImg) this.stage.profImg.src = currentCase.docente.avatar;
      if (this.stage.profName) this.stage.profName.textContent = currentCase.docente.nombre.toUpperCase();
      if (this.stage.subjectBadge) this.stage.subjectBadge.textContent = currentCase.unidad;

      const prompt = `PACIENTE: ${currentCase.paciente}\n\nPREGUNTA CLÍNICA: ${currentCase.pregunta}`;

      this.clearOptions();
      this.typewriter.type(this.stage.profSpeech, prompt, 13, {
        onComplete: onTypingComplete,
        onCharSound
      });
    }

    renderOptions(options, onSelectCallback) {
      if (!this.stage.optionsContainer) return;
      const keys = ['A', 'B', 'C', 'D'];

      this.stage.optionsContainer.innerHTML = '';
      options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'action-btn';
        btn.dataset.index = idx;
        btn.innerHTML = `
          <span class="action-key">${keys[idx] || idx + 1}</span>
          <span>${opt.texto}</span>
        `;
        btn.addEventListener('click', () => onSelectCallback(idx));
        this.stage.optionsContainer.appendChild(btn);
      });
    }

    clearOptions() {
      if (this.stage.optionsContainer) {
        this.stage.optionsContainer.innerHTML = '';
      }
    }

    markOptionResult(index, isCorrect) {
      const buttons = this.stage.optionsContainer?.querySelectorAll('.action-btn');
      if (buttons && buttons[index]) {
        buttons[index].classList.add(isCorrect ? 'correct' : 'wrong');
      }
    }

    renderFeedback(text, onComplete, onCharSound) {
      this.typewriter.type(this.stage.profSpeech, text, 14, {
        onComplete,
        onCharSound
      });
    }

    renderGameOver(onRetry) {
      if (!this.stage.optionsContainer) return;
      this.stage.optionsContainer.innerHTML = `
        <button class="action-btn retry-btn" style="grid-column: span 2;">
          <span class="action-key">🔄</span>
          <span>REINTENTAR ROTACIÓN CLÍNICA</span>
        </button>
      `;
      const btn = this.stage.optionsContainer.querySelector('.retry-btn');
      if (btn) btn.addEventListener('click', onRetry);
    }

    renderVictory(playerProfile, totalXp, onReturnHome, onCharSound) {
      if (this.stage.profImg) this.stage.profImg.src = 'dra_viviana_ruiz_fiel.jpg';
      if (this.stage.profName) this.stage.profName.textContent = 'TRIBUNAL ACADÉMICO UPMS';
      if (this.stage.subjectBadge) this.stage.subjectBadge.textContent = '¡ROTACIÓN DE 1ER SEMESTRE COMPLETADA!';

      const studentName = playerProfile ? playerProfile.getName() : 'Estudiante';

      const message = `🎓 ¡FELICITACIONES, ESTUDIANTE ${studentName.toUpperCase()}!\n\nHas resuelto con éxito todos los casos clínicos de Anatomía Humana I, Bioquímica Clínica I, Laboratorios y Antropología Médica con un puntaje final de ${totalXp} XP.\n\nEl Dr. René Amarilla, la Dra. Antonella Antico, la Lic. Patricia Gómez, el Dr. Ángel Gómez y la Dra. Viviana Ruiz han firmado y sellado tu libreta oficial de prácticas del 1° Semestre.`;

      this.clearOptions();
      this.typewriter.type(this.stage.profSpeech, message, 15, {
        onCharSound,
        onComplete: () => {
          if (!this.stage.optionsContainer) return;
          this.stage.optionsContainer.innerHTML = `
            <button class="action-btn home-btn" style="grid-column: span 2;">
              <span class="action-key">🏛️</span>
              <span>VOLVER AL MENÚ DE LA FACHADA</span>
            </button>
          `;
          const btn = this.stage.optionsContainer.querySelector('.home-btn');
          if (btn) btn.addEventListener('click', onReturnHome);
        }
      });
    }
  }

  return ViewManager;
});
