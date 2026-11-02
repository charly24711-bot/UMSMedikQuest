// Audio Service: Web Audio API sound synthesis and playback management
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.SoundSystem = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  class SoundSystem {
    constructor() {
      this.audioCtx = null;
      this.isMuted = false;
      this.volume = 1.0;
    }

    _getContext() {
      if (typeof window === 'undefined') return null;
      if (!this.audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioCtx = new AudioContext();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return this.audioCtx;
    }

    setMuted(muted) {
      this.isMuted = Boolean(muted);
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      return this.isMuted;
    }

    setVolume(vol) {
      this.volume = Math.max(0, Math.min(1, vol));
    }

    play(type) {
      if (this.isMuted) return;
      const ctx = this._getContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const baseVolume = this.volume;

      switch (type) {
        case 'fanfare': {
          const notes = [261.63, 329.63, 392.00, 523.25, 659.25]; // C, E, G, C, E
          notes.forEach((freq, idx) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'triangle';
            o.frequency.setValueAtTime(freq, now + idx * 0.09);
            g.gain.setValueAtTime(0.18 * baseVolume, now + idx * 0.09);
            g.gain.linearRampToValueAtTime(0.01 * baseVolume, now + idx * 0.09 + 0.22);
            o.connect(g);
            g.connect(ctx.destination);
            o.start(now + idx * 0.09);
            o.stop(now + idx * 0.09 + 0.22);
          });
          break;
        }

        case 'step': {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(140, now);
          osc.frequency.exponentialRampToValueAtTime(60, now + 0.06);
          gain.gain.setValueAtTime(0.08 * baseVolume, now);
          gain.gain.linearRampToValueAtTime(0.001 * baseVolume, now + 0.06);
          osc.start(now);
          osc.stop(now + 0.06);
          break;
        }

        case 'correct': {
          osc.type = 'square';
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
          osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
          gain.gain.setValueAtTime(0.2 * baseVolume, now);
          gain.gain.linearRampToValueAtTime(0.01 * baseVolume, now + 0.45);
          osc.start(now);
          osc.stop(now + 0.45);
          break;
        }

        case 'wrong': {
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(164.81, now);
          osc.frequency.linearRampToValueAtTime(110.00, now + 0.3);
          gain.gain.setValueAtTime(0.25 * baseVolume, now);
          gain.gain.linearRampToValueAtTime(0.01 * baseVolume, now + 0.35);
          osc.start(now);
          osc.stop(now + 0.35);
          break;
        }

        case 'blip': {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(650 + Math.random() * 120, now);
          gain.gain.setValueAtTime(0.025 * baseVolume, now);
          gain.gain.linearRampToValueAtTime(0.001 * baseVolume, now + 0.035);
          osc.start(now);
          osc.stop(now + 0.035);
          break;
        }

        case 'heartbeat': {
          // Lub-dub: dos pulsos cardíacos acústicos bajos
          [0, 0.12].forEach((offset, idx) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.setValueAtTime(idx === 0 ? 82 : 70, now + offset);
            o.frequency.exponentialRampToValueAtTime(45, now + offset + 0.09);
            g.gain.setValueAtTime((idx === 0 ? 0.35 : 0.28) * baseVolume, now + offset);
            g.gain.exponentialRampToValueAtTime(0.001 * baseVolume, now + offset + 0.11);
            o.connect(g);
            g.connect(ctx.destination);
            o.start(now + offset);
            o.stop(now + offset + 0.12);
          });
          break;
        }

        case 'vital_beep': {
          // Bip digital de monitor multiparamétrico
          osc.type = 'sine';
          osc.frequency.setValueAtTime(960, now);
          gain.gain.setValueAtTime(0.18 * baseVolume, now);
          gain.gain.exponentialRampToValueAtTime(0.001 * baseVolume, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
          break;
        }

        case 'exam_touch': {
          // Percusión/palpación semiológica sorda
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(220, now);
          osc.frequency.exponentialRampToValueAtTime(75, now + 0.1);
          gain.gain.setValueAtTime(0.22 * baseVolume, now);
          gain.gain.exponentialRampToValueAtTime(0.001 * baseVolume, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.12);
          break;
        }

        case 'streak_up': {
          // Arpegio retro ascendente brillante al subir racha
          const freqs = [440, 554.37, 659.25, 880];
          freqs.forEach((f, idx) => {
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'square';
            o.frequency.setValueAtTime(f, now + idx * 0.06);
            g.gain.setValueAtTime(0.14 * baseVolume, now + idx * 0.06);
            g.gain.linearRampToValueAtTime(0.001 * baseVolume, now + idx * 0.06 + 0.12);
            o.connect(g);
            g.connect(ctx.destination);
            o.start(now + idx * 0.06);
            o.stop(now + idx * 0.06 + 0.12);
          });
          break;
        }

        case 'streak_lost': {
          // Caída retro cuando se corta la racha
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(320, now);
          osc.frequency.exponentialRampToValueAtTime(120, now + 0.25);
          gain.gain.setValueAtTime(0.18 * baseVolume, now);
          gain.gain.exponentialRampToValueAtTime(0.001 * baseVolume, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.28);
          break;
        }

        default:
          break;
      }
    }
  }

  return SoundSystem;
});
