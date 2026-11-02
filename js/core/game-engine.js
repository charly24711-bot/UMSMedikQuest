// Core Domain Layer: Game Engine & State Management (Pure JS, zero DOM coupling)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.GameEngine = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  class GameEngine {
    constructor(cases = [], options = {}) {
      this.maxHp = options.maxHp || 3;
      this.pointsPerCorrect = options.pointsPerCorrect || 100;
      this.listeners = new Set();

      this.state = {
        screen: 'intro',
        hp: this.maxHp,
        xp: 0,
        streak: 0,
        maxStreak: 0,
        multiplier: 1.0,
        currentCaseIndex: 0,
        cases: Array.isArray(cases) ? cases : [],
        isLocked: false
      };
    }

    calculateMultiplier(streak = this.state.streak) {
      if (streak >= 5) return 2.0; // Guardia Impecable
      if (streak >= 3) return 1.5; // Racha de Criterio
      return 1.0;
    }

    setCases(cases) {
      this.state.cases = Array.isArray(cases) ? cases : [];
      this.state.currentCaseIndex = 0;
      this._notify('casesLoaded', { total: this.state.cases.length });
    }

    getState() {
      return { ...this.state };
    }

    setScreen(screen) {
      this.state.screen = screen;
      this._notify('screenChanged', { screen });
    }

    getCurrentCase() {
      if (this.state.currentCaseIndex >= this.state.cases.length) {
        return null;
      }
      return this.state.cases[this.state.currentCaseIndex];
    }

    startRotation() {
      this.state.hp = this.maxHp;
      this.state.xp = 0;
      this.state.streak = 0;
      this.state.maxStreak = 0;
      this.state.multiplier = 1.0;
      this.state.currentCaseIndex = 0;
      this.state.screen = 'game';
      this.state.isLocked = false;
      this._notify('rotationStarted', this.getState());
    }

    submitAnswer(optionIndex) {
      const currentCase = this.getCurrentCase();
      if (!currentCase) {
        throw new Error('No active case available to answer.');
      }

      if (optionIndex < 0 || optionIndex >= currentCase.opciones.length) {
        throw new RangeError(`Option index ${optionIndex} is out of bounds.`);
      }

      const selectedOption = currentCase.opciones[optionIndex];
      const isCorrect = Boolean(selectedOption.correcta);

      let pointsEarned = 0;
      const previousStreak = this.state.streak;
      let streakBroken = false;

      if (isCorrect) {
        this.state.streak++;
        this.state.maxStreak = Math.max(this.state.maxStreak, this.state.streak);
        this.state.multiplier = this.calculateMultiplier(this.state.streak);
        pointsEarned = Math.round(this.pointsPerCorrect * this.state.multiplier);
        this.state.xp += pointsEarned;
      } else {
        if (this.state.streak > 0) {
          streakBroken = true;
        }
        this.state.streak = 0;
        this.state.multiplier = 1.0;
        this.state.hp = Math.max(0, this.state.hp - 1);
      }

      const isGameOver = !isCorrect && this.state.hp <= 0;
      const isLastCase = this.state.currentCaseIndex === this.state.cases.length - 1;
      const isVictory = isCorrect && isLastCase;

      if (isGameOver) {
        this.state.screen = 'gameover';
      } else if (isVictory) {
        this.state.screen = 'victory';
      }

      const outcome = {
        optionIndex,
        isCorrect,
        feedback: selectedOption.feedback,
        pointsEarned,
        streak: this.state.streak,
        maxStreak: this.state.maxStreak,
        multiplier: this.state.multiplier,
        previousStreak,
        streakBroken,
        remainingHp: this.state.hp,
        totalXp: this.state.xp,
        isGameOver,
        isVictory,
        currentCaseIndex: this.state.currentCaseIndex,
        totalCases: this.state.cases.length
      };

      this._notify('answerSubmitted', outcome);
      return outcome;
    }

    advanceCase() {
      if (this.state.currentCaseIndex < this.state.cases.length - 1) {
        this.state.currentCaseIndex++;
        this._notify('caseChanged', {
          currentCaseIndex: this.state.currentCaseIndex,
          currentCase: this.getCurrentCase()
        });
        return true;
      }
      return false;
    }

    subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('Listener must be a function.');
      }
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }

    _notify(event, payload) {
      for (const listener of this.listeners) {
        try {
          listener(event, payload);
        } catch (err) {
          console.error(`[GameEngine listener error on ${event}]:`, err);
        }
      }
    }
  }

  return GameEngine;
});
