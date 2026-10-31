// High-Density 16-Bit Pixel-Art Medical Student Avatar Generator (40x64 grid)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.AvatarGenerator = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const SKINS = {
    moreno: {
      outline: '#261206',
      shadow: '#4d2810',
      base: '#733f1c',
      highlight: '#995b2f',
      lips: '#542013'
    },
    bronceado: {
      outline: '#381c0b',
      shadow: '#73401c',
      base: '#a36335',
      highlight: '#c78554',
      lips: '#78331f'
    },
    trigueno: {
      outline: '#4d2c14',
      shadow: '#945b33',
      base: '#c98959',
      highlight: '#e3ad81',
      lips: '#994a3b'
    },
    claro: {
      outline: '#5a3822',
      shadow: '#b87c5c',
      base: '#f0b792',
      highlight: '#ffd8bd',
      lips: '#c25d5d'
    }
  };

  const HAIR_PALETTES = {
    negro: {
      outline: '#050507',
      shadow: '#141418',
      base: '#22222a',
      highlight: '#383845'
    },
    castano: {
      outline: '#1f130a',
      shadow: '#382213',
      base: '#57371f',
      highlight: '#784e2e'
    },
    rubio: {
      outline: '#4d3910',
      shadow: '#8c6b22',
      base: '#c49c37',
      highlight: '#edd16d'
    },
    pelirrojo: {
      outline: '#421408',
      shadow: '#782712',
      base: '#ab3e20',
      highlight: '#d96341'
    }
  };

  const OUTFITS = {
    guardapolvo: {
      type: 'coat',
      outline: '#1e293b',
      shadow: '#94a3b8',
      base: '#e2e8f0',
      highlight: '#ffffff',
      lapel: '#cbd5e1',
      undershirt: '#38bdf8',
      pants_outline: '#020617',
      pants_shadow: '#0f172a',
      pants_base: '#1e293b',
      shoes_outline: '#020617',
      shoes_base: '#0f172a',
      shoes_hi: '#334155',
      stetho_tube: '#0284c7',
      stetho_metal: '#cbd5e1'
    },
    ambo_celeste: {
      type: 'scrub',
      outline: '#075985',
      shadow: '#0284c7',
      base: '#38bdf8',
      highlight: '#7dd3fc',
      lapel: '#0284c7',
      undershirt: '#f8fafc',
      pants_outline: '#075985',
      pants_shadow: '#0369a1',
      pants_base: '#0284c7',
      shoes_outline: '#cbd5e1',
      shoes_base: '#f8fafc',
      shoes_hi: '#ffffff',
      stetho_tube: '#eab308',
      stetho_metal: '#fef08a'
    },
    ambo_verde: {
      type: 'scrub',
      outline: '#065f46',
      shadow: '#047857',
      base: '#10b981',
      highlight: '#34d399',
      lapel: '#047857',
      undershirt: '#f8fafc',
      pants_outline: '#064e3b',
      pants_shadow: '#065f46',
      pants_base: '#047857',
      shoes_outline: '#020617',
      shoes_base: '#0f172a',
      shoes_hi: '#334155',
      stetho_tube: '#f43f5e',
      stetho_metal: '#fecdd3'
    },
    ambo_upms: {
      type: 'scrub',
      outline: '#00381e',
      shadow: '#00522c',
      base: '#00703c',
      highlight: '#009652',
      lapel: '#fbbf24',
      undershirt: '#fbbf24',
      pants_outline: '#00331b',
      pants_shadow: '#004726',
      pants_base: '#005a30',
      shoes_outline: '#78350f',
      shoes_base: '#fbbf24',
      shoes_hi: '#fef08a',
      stetho_tube: '#f8fafc',
      stetho_metal: '#fbbf24'
    }
  };

  function generateSVG(config = {}) {
    const gender = config.gender || 'f';
    const skinKey = config.skin || 'trigueno';
    const hairColorKey = config.hairColor || 'castano';
    const hairStyle = config.hairStyle || (gender === 'f' ? 'coleta' : 'corto');
    const outfitKey = config.outfit || 'guardapolvo';
    const build = config.build || 'standard';

    const skin = SKINS[skinKey] || SKINS.trigueno;
    const hair = HAIR_PALETTES[hairColorKey] || HAIR_PALETTES.castano;
    const outfit = OUTFITS[outfitKey] || OUTFITS.guardapolvo;

    let scaleX = 1;
    let scaleY = 1;
    let translateY = 0;

    if (build === 'alto') {
      scaleY = 1.06;
      translateY = -2;
    } else if (build === 'flaco') {
      scaleX = 0.92;
      scaleY = 1.03;
    } else if (build === 'atletico') {
      scaleX = 1.06;
      scaleY = 1.01;
    }

    const rects = [];

    function r(x, y, w, h, col) {
      rects.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${col}"/>`);
    }

    function p(x, y, col) {
      rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${col}"/>`);
    }

    // 1. Sombra base del suelo (elipse pixel)
    r(13, 61, 14, 2, 'rgba(0,0,0,0.4)');
    r(11, 62, 18, 1, 'rgba(0,0,0,0.25)');

    // 2. CABELLO FONDO (si es femenino con coleta o pelo largo)
    if (gender === 'f') {
      if (hairStyle === 'coleta') {
        // Coleta larga hacia la derecha
        r(26, 16, 5, 12, hair.base);
        r(29, 17, 3, 11, hair.shadow);
        r(27, 27, 3, 4, hair.outline);
        // Lazo / Gomita para el cabello
        r(25, 15, 3, 3, '#f43f5e');
      } else {
        // Pelo largo suelto cayendo sobre los hombros
        r(10, 16, 4, 18, hair.shadow);
        r(26, 16, 4, 18, hair.shadow);
        r(9, 18, 3, 15, hair.base);
        r(28, 18, 3, 15, hair.base);
      }
    }

    // 3. CABEZA / ROSTRO (Ancho ~18 px, Alto ~16 px)
    // Silueta piel base
    r(13, 11, 14, 13, skin.base);
    r(14, 10, 12, 2, skin.highlight); // Frente
    r(12, 13, 2, 7, skin.base); // Oreja izq
    r(26, 13, 2, 7, skin.base); // Oreja der
    p(13, 16, skin.shadow); // Detalle oreja
    p(26, 16, skin.shadow);

    // Contorno mandíbula y sombra mentón
    r(14, 23, 12, 1, skin.shadow);
    r(16, 24, 8, 1, skin.shadow);

    // Cejas
    r(14, 13, 4, 1, hair.outline);
    r(22, 13, 4, 1, hair.outline);

    // Ojos detallados (16-bit: sombra, blanco, iris, brillo)
    // Ojo Izquierdo
    r(14, 15, 4, 3, '#ffffff'); // Blanco
    r(15, 15, 2, 3, '#0f172a'); // Pupila/Iris
    p(15, 15, '#38bdf8'); // Reflejo iris azulado/brillo
    p(16, 15, '#ffffff'); // Brillo pupila
    r(14, 14, 4, 1, hair.outline); // Párpado sup

    // Ojo Derecho
    r(22, 15, 4, 3, '#ffffff'); // Blanco
    r(23, 15, 2, 3, '#0f172a'); // Pupila/Iris
    p(23, 15, '#38bdf8'); // Reflejo iris
    p(24, 15, '#ffffff'); // Brillo pupila
    r(22, 14, 4, 1, hair.outline); // Párpado sup

    // Nariz (sombra de puente y punta)
    p(19, 18, skin.shadow);
    r(19, 19, 2, 1, skin.shadow);

    // Boca y labios
    r(18, 21, 4, 1, skin.lips);
    p(19, 21, '#ffffff'); // Pequeño reflejo dental sutil

    // Mejillas sonrojadas sutiles
    r(13, 18, 3, 1, skin.lips);
    r(24, 18, 3, 1, skin.lips);

    // 4. CABELLO FRONTAL Y SUPERIOR
    // Base de la masa capilar
    r(12, 6, 16, 5, hair.base);
    r(14, 5, 12, 2, hair.highlight); // Brillo superior
    r(11, 8, 3, 6, hair.shadow);
    r(26, 8, 3, 6, hair.shadow);

    if (gender === 'f') {
      // Flequillo femenino y mechones laterales
      r(13, 10, 5, 3, hair.base);
      p(15, 12, hair.highlight);
      r(22, 10, 5, 3, hair.base);
      r(11, 10, 3, 8, hair.base);
      r(26, 10, 3, 8, hair.base);
    } else {
      // Corte masculino
      if (hairStyle === 'fade') {
        r(13, 9, 14, 2, hair.base);
        r(14, 8, 12, 2, hair.highlight);
        r(12, 11, 2, 4, hair.shadow);
        r(26, 11, 2, 4, hair.shadow);
      } else {
        // Corto con tupé peinado
        r(13, 9, 8, 3, hair.base);
        r(15, 8, 6, 2, hair.highlight);
        r(22, 9, 5, 2, hair.base);
        r(11, 10, 3, 5, hair.base);
        r(26, 10, 3, 5, hair.base);
      }
    }

    // 5. CUELLO
    r(17, 24, 6, 3, skin.shadow);
    r(18, 25, 4, 2, skin.base);

    // 6. ESTETOSCOPIO (Alrededor del cuello)
    r(16, 26, 2, 3, outfit.stetho_tube);
    r(22, 26, 2, 3, outfit.stetho_tube);
    r(15, 29, 2, 4, outfit.stetho_tube);
    r(23, 29, 2, 4, outfit.stetho_tube);
    r(17, 33, 4, 1, outfit.stetho_tube);
    p(19, 34, outfit.stetho_tube);
    // Campana metálica del estetoscopio
    r(18, 35, 4, 3, outfit.stetho_metal);
    r(19, 36, 2, 1, '#475569');

    // 7. TORSO Y ATUENDO (Filas 26 a 44)
    // Hombros
    r(10, 27, 20, 3, outfit.base);
    r(12, 26, 16, 2, outfit.highlight); // Luces hombro
    r(9, 28, 3, 10, outfit.base); // Brazo izquierdo
    r(28, 28, 3, 10, outfit.base); // Brazo derecho

    // Manos
    r(9, 38, 3, 3, skin.base);
    r(28, 38, 3, 3, skin.base);

    // Cuerpo principal
    r(12, 30, 16, 14, outfit.base);
    r(11, 30, 2, 14, outfit.shadow);
    r(27, 30, 2, 14, outfit.shadow);

    if (outfit.type === 'coat') {
      // Solapas de guardapolvo
      r(15, 28, 3, 8, outfit.lapel);
      r(22, 28, 3, 8, outfit.lapel);
      r(18, 27, 4, 3, outfit.undershirt); // Camisa interior celeste/blanca

      // Botonadura frontal
      p(20, 32, '#64748b');
      p(20, 36, '#64748b');
      p(20, 40, '#64748b');

      // Bolsillo de pecho con bolígrafos médicos
      r(23, 32, 3, 3, outfit.shadow);
      p(23, 31, '#2563eb'); // Lapicera azul
      p(24, 31, '#dc2626'); // Lapicera roja

      // Bolsillos laterales de guardapolvo
      r(13, 39, 4, 4, outfit.shadow);
      r(23, 39, 4, 4, outfit.shadow);
    } else {
      // Ambo Quirúrgico (Cuello en V)
      r(17, 27, 6, 4, outfit.undershirt);
      r(18, 28, 4, 3, skin.base); // Cuello visible
      r(15, 27, 2, 5, outfit.shadow);
      r(23, 27, 2, 5, outfit.shadow);

      // Bolsillo con logo / credencial
      r(23, 33, 4, 4, outfit.shadow);
      r(24, 34, 2, 2, '#fbbf24'); // Credencial dorada
    }

    // 8. PANTALÓN (Filas 44 a 56)
    r(13, 44, 14, 2, outfit.pants_base); // Cinturón/cintura
    // Pierna izquierda
    r(13, 46, 6, 10, outfit.pants_base);
    r(13, 46, 1, 10, outfit.pants_shadow);
    r(18, 46, 1, 10, outfit.pants_shadow); // Costura interior
    // Pierna derecha
    r(21, 46, 6, 10, outfit.pants_base);
    r(21, 46, 1, 10, outfit.pants_shadow);
    r(26, 46, 1, 10, outfit.pants_shadow);

    // 9. CALZADO CLÍNICO (Filas 56 a 60)
    // Zapato izquierdo
    r(12, 56, 7, 4, outfit.shoes_base);
    r(12, 56, 7, 1, outfit.shoes_hi);
    r(11, 59, 8, 1, outfit.shoes_outline); // Suela
    // Zapato derecho
    r(21, 56, 7, 4, outfit.shoes_base);
    r(21, 56, 7, 1, outfit.shoes_hi);
    r(21, 59, 8, 1, outfit.shoes_outline); // Suela

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 64" shape-rendering="crispEdges" style="transform: scale(${scaleX}, ${scaleY}) translateY(${translateY}px); transform-origin: center bottom;">
      ${rects.join('\n      ')}
    </svg>`;

    return svg;
  }

  function toDataUri(svgString) {
    if (typeof btoa !== 'undefined') {
      return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svgString)))}`;
    }
    return `data:image/svg+xml;utf8,${encodeURIComponent(svgString)}`;
  }

  return {
    SKINS,
    HAIR_PALETTES,
    OUTFITS,
    generateSVG,
    toDataUri
  };
});
