// Core Player Profile & Persistence Layer (localStorage)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.PlayerProfile = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const STORAGE_KEY = 'medikquest_upms_profile_v1';

  const DEFAULT_PROFILE = {
    name: 'Carlos',
    gender: 'm', // 'm' | 'f'
    skin: 'trigueno', // 'moreno' | 'bronceado' | 'trigueno' | 'claro'
    hairStyle: 'corto', // 'corto' | 'fade' | 'coleta' | 'suelto'
    hairColor: 'castano', // 'negro' | 'castano' | 'rubio' | 'pelirrojo'
    build: 'standard', // 'standard' | 'alto' | 'flaco' | 'atletico'
    outfit: 'guardapolvo', // 'guardapolvo' | 'ambo_celeste' | 'ambo_verde' | 'ambo_upms'
    stamps: {
      anatomia: false,
      bioquimica: false,
      laboratorios: false,
      ciclos: false,
      antropologia: false
    }
  };

  class PlayerProfile {
    constructor(initial = {}) {
      this.data = {
        ...DEFAULT_PROFILE,
        stamps: { ...DEFAULT_PROFILE.stamps },
        ...initial
      };
      if (initial.stamps) {
        this.data.stamps = { ...DEFAULT_PROFILE.stamps, ...initial.stamps };
      }
      this.load();
    }

    load() {
      if (typeof localStorage === 'undefined') return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          this.data = {
            ...this.data,
            ...parsed,
            stamps: {
              ...DEFAULT_PROFILE.stamps,
              ...(parsed.stamps || {})
            }
          };
        }
      } catch (err) {
        console.warn('[PlayerProfile] Could not load profile from localStorage:', err);
      }
    }

    save() {
      if (typeof localStorage === 'undefined') return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (err) {
        console.warn('[PlayerProfile] Could not save profile to localStorage:', err);
      }
    }

    update(fields) {
      if (!fields || typeof fields !== 'object') return;
      if (typeof fields.name === 'string') {
        // Enforce 15 chars max, allow empty string while user is deleting!
        fields.name = fields.name.slice(0, 15);
      }
      this.data = { ...this.data, ...fields };
      this.save();
    }

    addStamp(materiaId) {
      if (!this.data.stamps) {
        this.data.stamps = { ...DEFAULT_PROFILE.stamps };
      }
      const isNew = !this.data.stamps[materiaId];
      this.data.stamps[materiaId] = true;
      this.save();
      return isNew;
    }

    getStamps() {
      return { ...(this.data.stamps || DEFAULT_PROFILE.stamps) };
    }

    getTotalStamps() {
      const s = this.getStamps();
      return Object.values(s).filter(Boolean).length;
    }

    hasAllStamps() {
      return this.getTotalStamps() >= 5;
    }

    resetStamps() {
      this.data.stamps = { ...DEFAULT_PROFILE.stamps };
      this.save();
    }

    get() {
      return { ...this.data, stamps: this.getStamps() };
    }

    getRawName() {
      return this.data.name !== undefined ? this.data.name : '';
    }

    getName() {
      const trimmed = (this.data.name || '').trim();
      return trimmed || 'Estudiante';
    }

    getTitle() {
      return this.data.gender === 'f' ? 'Alumna' : 'Alumno';
    }

    getBadgeText() {
      const role = this.data.gender === 'f' ? 'ALUMNA' : 'ALUMNO';
      return `${role}: ${this.getName().toUpperCase()}`;
    }

    getIdCardSub() {
      const role = this.data.gender === 'f' ? 'Alumna' : 'Alumno';
      return `${role} • 1° Semestre de Medicina`;
    }
  }

  return PlayerProfile;
});
