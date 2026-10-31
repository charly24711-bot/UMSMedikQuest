// UI Utility: Typewriter effect controller with cancellation and instant skip support
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.Typewriter = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  class Typewriter {
    constructor() {
      this.timerId = null;
      this.isTyping = false;
      this.targetElement = null;
      this.fullText = '';
      this.currentIndex = 0;
      this.onCompleteCallback = null;
      this.onCharSound = null;
    }

    type(element, text, speed = 14, options = {}) {
      this.stop();

      this.targetElement = typeof element === 'string' ? document.getElementById(element) : element;
      if (!this.targetElement) return;

      this.fullText = text || '';
      this.currentIndex = 0;
      this.isTyping = true;
      this.targetElement.textContent = '';
      this.onCompleteCallback = options.onComplete || null;
      this.onCharSound = options.onCharSound || null;

      const step = () => {
        if (!this.isTyping) return;

        if (this.currentIndex < this.fullText.length) {
          const char = this.fullText.charAt(this.currentIndex);
          this.targetElement.textContent += char;

          if (this.currentIndex % 2 === 0 && char !== ' ' && char !== '\n' && this.onCharSound) {
            this.onCharSound();
          }

          this.currentIndex++;
          this.timerId = setTimeout(step, speed);
        } else {
          this.finish();
        }
      };

      step();
    }

    skip() {
      if (!this.isTyping || !this.targetElement) return;
      this.stop();
      this.targetElement.textContent = this.fullText;
      this.finish();
    }

    finish() {
      this.isTyping = false;
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      if (typeof this.onCompleteCallback === 'function') {
        const cb = this.onCompleteCallback;
        this.onCompleteCallback = null;
        cb();
      }
    }

    stop() {
      this.isTyping = false;
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
    }
  }

  return Typewriter;
});
