// Application Orchestrator & Bootstrap
(function () {
  'use strict';

  function getCinematicStory(studentName) {
    return [
      {
        text: `Ciudad del Este, Paraguay... 07:30 AM.\nEl sol asoma sobre el predio de la universidad.`,
        duration: 3800
      },
      {
        text: `Llegás a la Universidad Privada María Serrana.\nHoy comienza tu camino en la Carrera de Medicina.`,
        duration: 4200
      },
      {
        text: `Mochila al hombro y muchas expectativas...\n${studentName}, caminás por el estacionamiento hacia el Aula Magna.`,
        duration: 4000
      },
      {
        text: `Subís las escalinatas principales.\nIngresás por la puerta de acceso al Área de Recepción...`,
        duration: 3500
      }
    ];
  }

  class App {
    constructor() {
      this.sound = new MedikQuest.SoundSystem();
      this.typewriter = new MedikQuest.Typewriter();
      this.profile = new MedikQuest.PlayerProfile();
      this.view = new MedikQuest.ViewManager(this.typewriter);
      this.engine = new MedikQuest.GameEngine(MedikQuest.Data.getFlatCases());

      this.cinematicTimer = null;
      this.cinematicStep = 0;
      this.isAnswering = false;

      this._setupEngineSubscribers();
      this._bindUserEvents();
      this._bindCustomizerEvents();
    }

    start() {
      this.view.applyPlayerVisuals(this.profile);
      this.runCinematicPrologue(0);
    }

    _setupEngineSubscribers() {
      this.engine.subscribe((event, data) => {
        switch (event) {
          case 'screenChanged':
            this.view.showScreen(data.screen);
            break;
          case 'rotationStarted':
            this.view.showScreen('game');
            this.view.applyPlayerVisuals(this.profile);
            this.view.updateHUD(data.hp, data.xp);
            this.loadCurrentCase();
            break;
          case 'answerSubmitted':
            this._handleAnswerOutcome(data);
            break;
          default:
            break;
        }
      });
    }

    _bindUserEvents() {
      // Skip Intro
      const btnSkip = document.getElementById('btnSkipIntro');
      if (btnSkip) {
        btnSkip.addEventListener('click', () => this.skipToTitle());
      }

      // Start Customizer from Title
      const btnStartCust = document.getElementById('btnStartCustomizer');
      if (btnStartCust) {
        btnStartCust.addEventListener('click', () => this.openCustomizer());
      }

      // Start Rotation from Reception
      const btnStartRot = document.getElementById('btnStartRotation');
      if (btnStartRot) {
        btnStartRot.addEventListener('click', () => this.startRotation());
      }

      // Hint
      const btnHint = document.getElementById('btnHint');
      if (btnHint) {
        btnHint.addEventListener('click', () => this.showHint());
      }

      // Return to Title Menu
      const btnMenu = document.getElementById('btnReturnToMenu');
      if (btnMenu) {
        btnMenu.addEventListener('click', () => this.skipToTitle());
      }

      // Keyboard support (A, B, C, D or 1, 2, 3, 4)
      window.addEventListener('keydown', (e) => {
        if (this.engine.getState().screen !== 'game' || this.isAnswering || this.typewriter.isTyping) {
          return;
        }

        const key = e.key.toUpperCase();
        const keyMap = { 'A': 0, '1': 0, 'B': 1, '2': 1, 'C': 2, '3': 2, 'D': 3, '4': 3 };
        if (key in keyMap) {
          this.handleAnswerSelection(keyMap[key]);
        }
      });
    }

    _bindCustomizerEvents() {
      const inputName = document.getElementById('inputStudentName');
      if (inputName) {
        inputName.addEventListener('input', (e) => {
          this.profile.update({ name: e.target.value });
          this.view.renderCustomizer(this.profile);
        });
      }

      // Option clicks inside customizer
      const customizerScreen = document.getElementById('screenCustomizer');
      if (customizerScreen) {
        customizerScreen.addEventListener('click', (e) => {
          const btn = e.target.closest('.choice-btn');
          if (!btn) return;

          const type = btn.dataset.type;
          const val = btn.dataset.val;
          if (!type || !val) return;

          this.sound.play('blip');

          if (type === 'gender') {
            const newHairStyle = val === 'f' ? 'coleta' : 'corto';
            this.profile.update({ gender: val, hairStyle: newHairStyle });
            this.view.updateHairStyleOptions(val, newHairStyle);
          } else {
            this.profile.update({ [type]: val });
          }

          this.view.renderCustomizer(this.profile);
          this.view.applyPlayerVisuals(this.profile);
        });
      }

      // Confirm Character & Enter Reception
      const btnConfirm = document.getElementById('btnConfirmCharacter');
      if (btnConfirm) {
        btnConfirm.addEventListener('click', () => {
          this.sound.play('fanfare');
          this.view.applyPlayerVisuals(this.profile);
          this.enterReception();
        });
      }

      // Back to Title
      const btnBack = document.getElementById('btnBackToTitle');
      if (btnBack) {
        btnBack.addEventListener('click', () => this.skipToTitle());
      }
    }

    runCinematicPrologue(step = 0) {
      const story = getCinematicStory(this.profile.getName());
      if (step >= story.length) {
        this.skipToTitle();
        return;
      }

      this.cinematicStep = step;
      const s = story[step];
      this.sound.play('step');

      this.typewriter.type('cinemaSubtitle', s.text, 20, {
        onCharSound: () => this.sound.play('blip'),
        onComplete: () => {
          this.cinematicTimer = setTimeout(() => {
            this.runCinematicPrologue(step + 1);
          }, Math.max(800, s.duration - 1500));
        }
      });
    }

    skipToTitle() {
      if (this.cinematicTimer) {
        clearTimeout(this.cinematicTimer);
        this.cinematicTimer = null;
      }
      this.typewriter.stop();
      this.sound.play('fanfare');
      this.engine.setScreen('title');
    }

    openCustomizer() {
      this.sound.play('blip');
      this.view.updateHairStyleOptions(this.profile.get().gender, this.profile.get().hairStyle);
      this.view.renderCustomizer(this.profile);
      this.engine.setScreen('customizer');
    }

    enterReception() {
      this.sound.play('fanfare');
      this.engine.setScreen('reception');

      const studentName = this.profile.getName();
      const role = this.profile.getTitle(); // "Alumno" o "Alumna"

      const welcomeText =
        `¡Hola, ${studentName}! Te doy la bienvenida a los Laboratorios de Práctica y Simulación Médica de la UPMS.\n\n` +
        `Como encargada de laboratorios, ya te preparé tu carnet estudiantil y tu Libreta Oficial de Prácticas para este 1° Semestre.\n\n` +
        `En las aulas y salas de disección ya te esperan los jefes de cátedra: el Dr. René Amarilla en Anatomía, la Dra. Antonella Antico en Bioquímica, el Dr. Ángel Gómez en Formación y la Dra. Viviana Ruiz en Coordinación Académica. ¡Muchos éxitos en tu rotación!`;

      this.typewriter.type('receptionSpeech', welcomeText, 14, {
        onCharSound: () => this.sound.play('blip')
      });
    }

    startRotation() {
      this.sound.play('step');
      this.engine.startRotation();
    }

    loadCurrentCase() {
      const currentCase = this.engine.getCurrentCase();
      if (!currentCase) {
        this.view.renderVictory(
          this.profile,
          this.engine.getState().xp,
          () => this.skipToTitle(),
          () => this.sound.play('blip')
        );
        return;
      }

      this.isAnswering = false;
      this.view.renderCase(
        currentCase,
        () => {
          this.view.renderOptions(currentCase.opciones, (idx) => this.handleAnswerSelection(idx));
        },
        () => this.sound.play('blip')
      );
    }

    handleAnswerSelection(optionIndex) {
      if (this.isAnswering || this.typewriter.isTyping) return;
      this.isAnswering = true;
      this.engine.submitAnswer(optionIndex);
    }

    _handleAnswerOutcome(outcome) {
      this.view.markOptionResult(outcome.optionIndex, outcome.isCorrect);
      this.view.updateHUD(outcome.remainingHp, outcome.totalXp);

      if (outcome.isCorrect) {
        this.sound.play('correct');
        this.view.spawnFloatingXP(outcome.pointsEarned);

        const feedbackText = `¡CORRECTO! ${outcome.feedback}`;
        this.view.renderFeedback(
          feedbackText,
          () => {
            setTimeout(() => {
              if (outcome.isVictory) {
                this.sound.play('fanfare');
                this.view.renderVictory(
                  this.profile,
                  outcome.totalXp,
                  () => this.skipToTitle(),
                  () => this.sound.play('blip')
                );
              } else {
                this.engine.advanceCase();
                this.loadCurrentCase();
              }
            }, 1800);
          },
          () => this.sound.play('blip')
        );
      } else {
        this.sound.play('wrong');

        if (outcome.isGameOver) {
          const gameOverMsg = `❌ ${outcome.feedback}\n\n¡Te quedaste sin energía, ${this.profile.getName()}! Repasá los contenidos de la cátedra e intentá nuevamente.`;
          this.view.renderFeedback(
            gameOverMsg,
            () => {
              this.view.renderGameOver(() => this.startRotation());
            },
            () => this.sound.play('blip')
          );
        } else {
          const tryAgainMsg = `❌ ${outcome.feedback}\n\nPerdiste un corazón de energía. ¡Pensá tu respuesta y volvé a intentar!`;
          this.view.renderFeedback(
            tryAgainMsg,
            () => {
              this.isAnswering = false;
            },
            () => this.sound.play('blip')
          );
        }
      }
    }

    showHint() {
      const currentCase = this.engine.getCurrentCase();
      if (!currentCase || !currentCase.pistaDocente || this.isAnswering) return;

      this.view.renderFeedback(
        `💡 PISTA DEL PROFESOR: "${currentCase.pistaDocente}"`,
        null,
        () => this.sound.play('blip')
      );
    }
  }

  // Auto-boot on DOM ready
  window.addEventListener('DOMContentLoaded', () => {
    window.medikQuestApp = new App();
    window.medikQuestApp.start();
  });
})();
