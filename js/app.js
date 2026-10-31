// Application Orchestrator & Bootstrap
(function () {
  'use strict';

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

  const RECEPTION_WELCOME =
    "¡Hola! Muy buenos días, colega. Te doy la bienvenida a la Universidad Privada María Serrana.\n\n" +
    "Ya estás registrado para la rotación de 1er Año. Te hago entrega de tu carnet estudiantil y tu Libreta de Prácticas.\n\n" +
    "En las salas y laboratorios ya te están esperando los jefes de cátedra: el Dr. René Amarilla en Anatomía, la Dra. Antonella Antico y la Lic. Patricia Gómez en Laboratorios, el Dr. Ángel Gómez y la Dra. Viviana Ruiz en Decanato. ¡Muchos éxitos en tu rotación!";

  class App {
    constructor() {
      this.sound = new MedikQuest.SoundSystem();
      this.typewriter = new MedikQuest.Typewriter();
      this.view = new MedikQuest.ViewManager(this.typewriter);
      this.engine = new MedikQuest.GameEngine(MedikQuest.Data.getFlatCases());

      this.cinematicTimer = null;
      this.cinematicStep = 0;
      this.isAnswering = false;

      this._setupEngineSubscribers();
      this._bindUserEvents();
    }

    start() {
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

      // Enter Reception
      const btnEnter = document.getElementById('btnEnterReception');
      if (btnEnter) {
        btnEnter.addEventListener('click', () => this.enterReception());
      }

      // Start Rotation
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

      // Keyboard support (A, B, C, D or 1, 2, 3, 4, Space)
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

    runCinematicPrologue(step = 0) {
      if (step >= CINEMATIC_STORY.length) {
        this.skipToTitle();
        return;
      }

      this.cinematicStep = step;
      const s = CINEMATIC_STORY[step];
      const sprite = this.view.stage.walkingStudent;
      if (sprite) {
        sprite.style.bottom = `${s.posY}px`;
        this.sound.play('step');
      }

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

    enterReception() {
      this.sound.play('fanfare');
      this.engine.setScreen('reception');
      this.typewriter.type('receptionSpeech', RECEPTION_WELCOME, 14, {
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
          const gameOverMsg = `❌ ${outcome.feedback}\n\n¡Te quedaste sin energía! Repasá los contenidos de la cátedra e intentá nuevamente.`;
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
