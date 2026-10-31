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
    name: 'Carlos Rolón',
    gender: 'm', // 'm' | 'f'
    skin: 'trigueno', // 'moreno' | 'bronceado' | 'trigueno' | 'claro'
    hairStyle: 'corto', // 'corto' | 'fade' | 'coleta' | 'suelto'
    hairColor: 'castano', // 'negro' | 'castano' | 'rubio' | 'pelirrojo'
    build: 'standard', // 'standard' | 'alto' | 'flaco' | 'atletico'
    outfit: 'guardapolvo' // 'guardapolvo' | 'ambo_celeste' | 'ambo_verde' | 'ambo_upms'
  };

  class PlayerProfile {
    constructor(initial = {}) {
      this.data = { ...DEFAULT_PROFILE, ...initial };
      this.load();
    }

    load() {
      if (typeof localStorage === 'undefined') return;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          this.data = { ...this.data, ...parsed };
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
        const sanitized = fields.name.replace(/\s+/g, ' ').trim().slice(0, 26);
        fields.name = sanitized || this.data.name;
      }
      this.data = { ...this.data, ...fields };
      this.save();
    }

    get() {
      return { ...this.data };
    }

    getName() {
      return this.data.name || 'Estudiante';
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
