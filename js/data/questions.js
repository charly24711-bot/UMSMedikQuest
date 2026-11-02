// Data layer: UPMS 1st Year Clinical Cases (BANCO OFICIAL 100 CASOS CLÍNICOS)
// Versión: v1.1.0 - Generado automáticamente con barajado dinámico Fisher-Yates
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MedikQuest = root.MedikQuest || {};
    root.MedikQuest.Data = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const BANCO_UPMS_PRIMER_ANHO = {
  "materias": [
    {
      "id": "anatomia",
      "nombre": "Anatomía Humana: Descriptiva y Funcional I (MED-01-01)",
      "docente": {
        "nombre": "Dr. Ernaldo René Amarilla (Director de Medicina)",
        "avatar": "dr_rene_amarilla_pixel.jpg",
        "cargo": "Cátedra de Anatomía Humana y Cirugía"
      },
      "casos": [
        {
          "id": "anat-01",
          "unidad": "Miembro Superior",
          "paciente": "Motociclista con fractura diafisaria de húmero y mano caída",
          "pregunta": "¿Qué nervio del plexo braquial está lesionado en el canal de torsión?",
          "pistaDocente": "Pasa por el canal de torsión humeral.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Radial",
              "correcta": true,
              "feedback": "¡Correcto! Pasa por el canal de torsión humeral."
            },
            {
              "texto": "Nervio Mediano",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Radial."
            },
            {
              "texto": "Nervio Cubital",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Radial."
            },
            {
              "texto": "Nervio Musculocutáneo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Radial."
            }
          ]
        },
        {
          "id": "anat-02",
          "unidad": "Miembro Superior",
          "paciente": "Caída con mano en hiperextensión y dolor en fondo de tabaquera anatómica",
          "pregunta": "¿Qué hueso del carpo presenta mayor riesgo de necrosis avascular?",
          "pistaDocente": "Forma el piso de la tabaquera anatómica.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Hueso Escafoides",
              "correcta": true,
              "feedback": "¡Correcto! Forma el piso de la tabaquera anatómica."
            },
            {
              "texto": "Hueso Semilunar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hueso Escafoides."
            },
            {
              "texto": "Hueso Piramidal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hueso Escafoides."
            },
            {
              "texto": "Hueso Trapecio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hueso Escafoides."
            }
          ]
        },
        {
          "id": "anat-03",
          "unidad": "Miembro Superior",
          "paciente": "Parestesias nocturnas en 3 primeros dedos y atrofia tenar",
          "pregunta": "¿Qué nervio está comprimido en el túnel carpiano?",
          "pistaDocente": "Inerva la eminencia tenar y cara palmar de los 3 primeros dedos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Mediano",
              "correcta": true,
              "feedback": "¡Correcto! Inerva la eminencia tenar y cara palmar de los 3 primeros dedos."
            },
            {
              "texto": "Nervio Cubital",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Mediano."
            },
            {
              "texto": "Nervio Radial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Mediano."
            },
            {
              "texto": "Nervio Axilar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Mediano."
            }
          ]
        },
        {
          "id": "anat-04",
          "unidad": "Miembro Superior",
          "paciente": "Incapacidad para abducir brazo >15° tras trauma axilar y anestesia en muñón",
          "pregunta": "¿Qué nervio que rodea el cuello quirúrgico humeral está afectado?",
          "pistaDocente": "Inerva al músculo deltoides.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Axilar (Circunflejo)",
              "correcta": true,
              "feedback": "¡Correcto! Inerva al músculo deltoides."
            },
            {
              "texto": "Nervio Supraescapular",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Axilar (Circunflejo)."
            },
            {
              "texto": "Nervio Torácico Largo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Axilar (Circunflejo)."
            },
            {
              "texto": "Nervio Subescapular",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Axilar (Circunflejo)."
            }
          ]
        },
        {
          "id": "anat-05",
          "unidad": "Miembro Superior",
          "paciente": "Dolor sordo al levantar brazo sobre cabeza, prueba de Jobe positiva",
          "pregunta": "¿Qué tendón del manguito rotador se desgarra con mayor frecuencia?",
          "pistaDocente": "Pasa por el estrecho espacio subacromial.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Tendón del Supraespinoso",
              "correcta": true,
              "feedback": "¡Correcto! Pasa por el estrecho espacio subacromial."
            },
            {
              "texto": "Tendón del Subescapular",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón del Supraespinoso."
            },
            {
              "texto": "Tendón del Infraespinoso",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón del Supraespinoso."
            },
            {
              "texto": "Tendón del Redondo Menor",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón del Supraespinoso."
            }
          ]
        },
        {
          "id": "anat-06",
          "unidad": "Miembro Superior",
          "paciente": "Niño con tirón brusco del brazo ('codo de niñera') en pronación fija",
          "pregunta": "¿Qué ligamento se subluxa interponiéndose en la cabeza radial?",
          "pistaDocente": "Rodea como anillo a la cabeza del radio.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ligamento Anular del Radio",
              "correcta": true,
              "feedback": "¡Correcto! Rodea como anillo a la cabeza del radio."
            },
            {
              "texto": "Ligamento Colateral Cubital",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Anular del Radio."
            },
            {
              "texto": "Membrana Interósea",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Anular del Radio."
            },
            {
              "texto": "Ligamento Cuadrado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Anular del Radio."
            }
          ]
        },
        {
          "id": "anat-07",
          "unidad": "Miembro Superior",
          "paciente": "Corte en muñeca medial, signo de Froment positivo y mano en garra",
          "pregunta": "¿Qué nervio motor de los músculos interóseos resultó seccionado?",
          "pistaDocente": "Pasa por el canal de Guyón e inerva interóseos y aductor del pulgar.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Superior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Cubital (Ulnar)",
              "correcta": true,
              "feedback": "¡Correcto! Pasa por el canal de Guyón e inerva interóseos y aductor del pulgar."
            },
            {
              "texto": "Nervio Mediano",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Cubital (Ulnar)."
            },
            {
              "texto": "Nervio Radial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Cubital (Ulnar)."
            },
            {
              "texto": "Nervio Músculocutáneo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Cubital (Ulnar)."
            }
          ]
        },
        {
          "id": "anat-08",
          "unidad": "Pared Torácica",
          "paciente": "Linfadenectomía axilar con escápula alada al empujar pared",
          "pregunta": "¿Qué nervio que desciende por la cara lateral del tórax fue dañado?",
          "pistaDocente": "Inerva al músculo serrato anterior.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Pared Torácica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Torácico Largo (de Bell)",
              "correcta": true,
              "feedback": "¡Correcto! Inerva al músculo serrato anterior."
            },
            {
              "texto": "Nervio Toracodorsal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Torácico Largo (de Bell)."
            },
            {
              "texto": "Nervio Accesorio (XI)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Torácico Largo (de Bell)."
            },
            {
              "texto": "Nervio Frénico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Torácico Largo (de Bell)."
            }
          ]
        },
        {
          "id": "anat-09",
          "unidad": "Vascularización",
          "paciente": "Hemorragia en pliegue del codo, cirujano comprime canal bicipital interno",
          "pregunta": "¿Qué arteria principal del brazo transcurre medial al bíceps?",
          "pistaDocente": "Continúa a la arteria axilar y da pulsos en el brazo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Vascularización: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Arteria Braquial (Humeral)",
              "correcta": true,
              "feedback": "¡Correcto! Continúa a la arteria axilar y da pulsos en el brazo."
            },
            {
              "texto": "Arteria Axilar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Braquial (Humeral)."
            },
            {
              "texto": "Arteria Radial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Braquial (Humeral)."
            },
            {
              "texto": "Arteria Interósea",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Braquial (Humeral)."
            }
          ]
        },
        {
          "id": "anat-10",
          "unidad": "Cintura Escapular",
          "paciente": "Fractura de tercio medio de clavícula con fragmento medial elevado",
          "pregunta": "¿Qué músculo eleva activamente el fragmento clavicular medial?",
          "pistaDocente": "Se inserta en la cara superior del tercio medial de la clavícula.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cintura Escapular: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Músculo Esternocleidomastoideo",
              "correcta": true,
              "feedback": "¡Correcto! Se inserta en la cara superior del tercio medial de la clavícula."
            },
            {
              "texto": "Músculo Pectoral Menor",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Músculo Esternocleidomastoideo."
            },
            {
              "texto": "Músculo Trapecio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Músculo Esternocleidomastoideo."
            },
            {
              "texto": "Músculo Subclavio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Músculo Esternocleidomastoideo."
            }
          ]
        },
        {
          "id": "anat-11",
          "unidad": "Miembro Inferior",
          "paciente": "Torsión de rodilla con maniobra de Lachman y cajón anterior positivos",
          "pregunta": "¿Qué ligamento cruzado intraarticular se rompió por completo?",
          "pistaDocente": "Se inserta en el área intercondílea anterior de la tibia.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ligamento Cruzado Anterior (LCA)",
              "correcta": true,
              "feedback": "¡Correcto! Se inserta en el área intercondílea anterior de la tibia."
            },
            {
              "texto": "Ligamento Cruzado Posterior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Anterior (LCA)."
            },
            {
              "texto": "Ligamento Colateral Medial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Anterior (LCA)."
            },
            {
              "texto": "Menisco Lateral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Anterior (LCA)."
            }
          ]
        },
        {
          "id": "anat-12",
          "unidad": "Miembro Inferior",
          "paciente": "Impacto anteroposterior sobre tibia ('trauma de tablero de auto') con cajón posterior positivo",
          "pregunta": "¿Qué ligamento estabilizador posterior de rodilla está lesionado?",
          "pistaDocente": "Evita el desplazamiento posterior de la tibia sobre el fémur.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ligamento Cruzado Posterior (LCP)",
              "correcta": true,
              "feedback": "¡Correcto! Evita el desplazamiento posterior de la tibia sobre el fémur."
            },
            {
              "texto": "Ligamento Cruzado Anterior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Posterior (LCP)."
            },
            {
              "texto": "Ligamento Rotuliano",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Posterior (LCP)."
            },
            {
              "texto": "Pata de Ganso",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Cruzado Posterior (LCP)."
            }
          ]
        },
        {
          "id": "anat-13",
          "unidad": "Miembro Inferior",
          "paciente": "Traumatismo en cara lateral de cabeza del peroné con pie péndulo/caído ('marcha equina')",
          "pregunta": "¿Qué nervio periférico que rodea el cuello del peroné está comprimido?",
          "pistaDocente": "Rodea el cuello de la fíbula e inerva a los dorsiflexores del pie.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Peroneo Común (Cíatico Poplíteo Externo)",
              "correcta": true,
              "feedback": "¡Correcto! Rodea el cuello de la fíbula e inerva a los dorsiflexores del pie."
            },
            {
              "texto": "Nervio Tibial Posterior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Peroneo Común (Cíatico Poplíteo Externo)."
            },
            {
              "texto": "Nervio Femoral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Peroneo Común (Cíatico Poplíteo Externo)."
            },
            {
              "texto": "Nervio Obturador",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Peroneo Común (Cíatico Poplíteo Externo)."
            }
          ]
        },
        {
          "id": "anat-14",
          "unidad": "Miembro Inferior",
          "paciente": "Inyección intramuscular glútea mal aplicada en cuadrante inferomedial",
          "pregunta": "¿Qué tronco nervioso voluminoso corre riesgo de lesión iatrogénica?",
          "pistaDocente": "Las inyecciones deben aplicarse en cuadrante superoexterno.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Ciático Mayor",
              "correcta": true,
              "feedback": "¡Correcto! Las inyecciones deben aplicarse en cuadrante superoexterno."
            },
            {
              "texto": "Nervio Femoral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Ciático Mayor."
            },
            {
              "texto": "Nervio Pudendo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Ciático Mayor."
            },
            {
              "texto": "Nervio Cutáneo Femoral Lateral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Ciático Mayor."
            }
          ]
        },
        {
          "id": "anat-15",
          "unidad": "Miembro Inferior",
          "paciente": "Anciana con caída, acortamiento de miembro inferior y rotación externa marcada",
          "pregunta": "¿Qué tipo de fractura ósea de la extremidad proximal del fémur presenta?",
          "pistaDocente": "La rotación externa y acortamiento son signos patognomónicos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Fractura del Cuello Femoral (Subcapsular)",
              "correcta": true,
              "feedback": "¡Correcto! La rotación externa y acortamiento son signos patognomónicos."
            },
            {
              "texto": "Fractura de Diáfisis Tibial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fractura del Cuello Femoral (Subcapsular)."
            },
            {
              "texto": "Luxación Posterior de Cadera",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fractura del Cuello Femoral (Subcapsular)."
            },
            {
              "texto": "Fractura de Rótula",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fractura del Cuello Femoral (Subcapsular)."
            }
          ]
        },
        {
          "id": "anat-16",
          "unidad": "Miembro Inferior",
          "paciente": "Dolor en cara medial de tibia bajo la rodilla, tendinitis de la pata de ganso",
          "pregunta": "¿Cuáles son los 3 músculos que componen la pata de ganso anserina?",
          "pistaDocente": "Mnemotecnia clásica UPMS: Sartorio, Grácil (Recto interno) y Semitendinoso.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Sartorio, Grácil y Semitendinoso",
              "correcta": true,
              "feedback": "¡Correcto! Mnemotecnia clásica UPMS: Sartorio, Grácil (Recto interno) y Semitendinoso."
            },
            {
              "texto": "Bíceps femoral, Semimembranoso y Grácil",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sartorio, Grácil y Semitendinoso."
            },
            {
              "texto": "Recto femoral, Vasto medial y Sartorio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sartorio, Grácil y Semitendinoso."
            },
            {
              "texto": "Pectíneo, Aductor largo y Grácil",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sartorio, Grácil y Semitendinoso."
            }
          ]
        },
        {
          "id": "anat-17",
          "unidad": "Miembro Inferior",
          "paciente": "Chasquido en talón al correr con maniobra de Thompson positiva (no flexiona pie al comprimir pantorrilla)",
          "pregunta": "¿Qué tendón grueso del compartimento posterior se seccionó?",
          "pistaDocente": "Formado por la unión de los gastrocnemios y el sóleo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Tendón de Aquiles (Calcáneo)",
              "correcta": true,
              "feedback": "¡Correcto! Formado por la unión de los gastrocnemios y el sóleo."
            },
            {
              "texto": "Tendón del Tibial Anterior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón de Aquiles (Calcáneo)."
            },
            {
              "texto": "Tendón Peroneo Lateral Largo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón de Aquiles (Calcáneo)."
            },
            {
              "texto": "Tendón Plantar Delgado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tendón de Aquiles (Calcáneo)."
            }
          ]
        },
        {
          "id": "anat-18",
          "unidad": "Miembro Inferior",
          "paciente": "Evaluación de pulso arterial en dorso del pie entre tendones del extensor del dedo gordo",
          "pregunta": "¿Qué pulso distal de miembro inferior se está palpando?",
          "pistaDocente": "Arteria pedia, continuación de la arteria tibial anterior.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Pulso Pedio (Dorsal del Pie)",
              "correcta": true,
              "feedback": "¡Correcto! Arteria pedia, continuación de la arteria tibial anterior."
            },
            {
              "texto": "Pulso Tibial Posterior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pulso Pedio (Dorsal del Pie)."
            },
            {
              "texto": "Pulso Poplíteo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pulso Pedio (Dorsal del Pie)."
            },
            {
              "texto": "Pulso Femoral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pulso Pedio (Dorsal del Pie)."
            }
          ]
        },
        {
          "id": "anat-19",
          "unidad": "Miembro Inferior",
          "paciente": "Bloqueo anestésico para sutura en maléolo medial y planta del pie",
          "pregunta": "¿Qué nervio acompaña a la arteria tibial posterior detrás del maléolo interno?",
          "pistaDocente": "Pasa por el túnel del tarso detrás del maléolo tibial.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Tibial (Ciático Poplíteo Interno)",
              "correcta": true,
              "feedback": "¡Correcto! Pasa por el túnel del tarso detrás del maléolo tibial."
            },
            {
              "texto": "Nervio Peroneo Superficial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Tibial (Ciático Poplíteo Interno)."
            },
            {
              "texto": "Nervio Safeno",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Tibial (Ciático Poplíteo Interno)."
            },
            {
              "texto": "Nervio Sural",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Tibial (Ciático Poplíteo Interno)."
            }
          ]
        },
        {
          "id": "anat-20",
          "unidad": "Miembro Inferior",
          "paciente": "Hernia femoral que protruye por debajo del ligamento inguinal en triángulo de Scarpa",
          "pregunta": "¿Cuál es el límite medial del anillo femoral por donde protruye la hernia?",
          "pistaDocente": "El límite medial es el ligamento lacunar de Gimbernat.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Miembro Inferior: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ligamento Lacunar (de Gimbernat)",
              "correcta": true,
              "feedback": "¡Correcto! El límite medial es el ligamento lacunar de Gimbernat."
            },
            {
              "texto": "Vena Femoral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Lacunar (de Gimbernat)."
            },
            {
              "texto": "Ligamento Inguinal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Lacunar (de Gimbernat)."
            },
            {
              "texto": "Músculo Pectíneo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ligamento Lacunar (de Gimbernat)."
            }
          ]
        },
        {
          "id": "anat-21",
          "unidad": "Tórax",
          "paciente": "Punción pleural descompresiva por neumotórax hipertensivo en 2° espacio intercostal",
          "pregunta": "¿Por qué borde de la costilla debe deslizarse la aguja para no lesionar vasos?",
          "pistaDocente": "El paquete vasculonervioso intercostal (VAN) corre por el borde inferior costal.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tórax: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Borde Superior de la costilla inferior",
              "correcta": true,
              "feedback": "¡Correcto! El paquete vasculonervioso intercostal (VAN) corre por el borde inferior costal."
            },
            {
              "texto": "Borde Inferior de la costilla superior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Borde Superior de la costilla inferior."
            },
            {
              "texto": "Centro del espacio intercostal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Borde Superior de la costilla inferior."
            },
            {
              "texto": "Cara profunda del cartílago",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Borde Superior de la costilla inferior."
            }
          ]
        },
        {
          "id": "anat-22",
          "unidad": "Cardiología",
          "paciente": "Infarto agudo de miocardio con elevación en cara anterior (V1-V4)",
          "pregunta": "¿Qué arteria coronaria rama de la coronaria izquierda se encuentra ocluida?",
          "pistaDocente": "Irriga los dos tercios anteriores del tabique y cara anterior del ventrículo izquierdo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cardiología: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Arteria Descendente Anterior (Interventricular Anterior)",
              "correcta": true,
              "feedback": "¡Correcto! Irriga los dos tercios anteriores del tabique y cara anterior del ventrículo izquierdo."
            },
            {
              "texto": "Arteria Coronaria Derecha",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Descendente Anterior (Interventricular Anterior)."
            },
            {
              "texto": "Arteria Circunfleja",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Descendente Anterior (Interventricular Anterior)."
            },
            {
              "texto": "Arteria Marginal Derecha",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Arteria Descendente Anterior (Interventricular Anterior)."
            }
          ]
        },
        {
          "id": "anat-23",
          "unidad": "Cardiología",
          "paciente": "Auscultación de soplo sistólico eyectivo en 2° espacio intercostal derecho paraesternal",
          "pregunta": "¿Qué foco valvular cardíaco anatómico se está auscultando?",
          "pistaDocente": "2° espacio intercostal derecho, línea paraesternal.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cardiología: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Foco Aórtico",
              "correcta": true,
              "feedback": "¡Correcto! 2° espacio intercostal derecho, línea paraesternal."
            },
            {
              "texto": "Foco Pulmonar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Foco Aórtico."
            },
            {
              "texto": "Foco Mitral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Foco Aórtico."
            },
            {
              "texto": "Foco Tricuspídeo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Foco Aórtico."
            }
          ]
        },
        {
          "id": "anat-24",
          "unidad": "Cardiología",
          "paciente": "Auscultación de soplo en ápex cardíaco en 5° espacio intercostal izquierdo con línea medioclavicular",
          "pregunta": "¿Qué válvula auriculoventricular se evalúa en el choque de la punta?",
          "pistaDocente": "El ápex cardíaco corresponde al ventrículo izquierdo y válvula mitral.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cardiología: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Válvula Mitral (Bicúspide)",
              "correcta": true,
              "feedback": "¡Correcto! El ápex cardíaco corresponde al ventrículo izquierdo y válvula mitral."
            },
            {
              "texto": "Válvula Aórtica",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Válvula Mitral (Bicúspide)."
            },
            {
              "texto": "Válvula Pulmonar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Válvula Mitral (Bicúspide)."
            },
            {
              "texto": "Válvula Tricúspide",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Válvula Mitral (Bicúspide)."
            }
          ]
        },
        {
          "id": "anat-25",
          "unidad": "Mediastino",
          "paciente": "Tumor pulmonar apical derecho comprime cadena simpática causando miosis, ptosis y anhidrosis (Claude Bernard-Horner)",
          "pregunta": "¿Qué ganglio simpático paravertebral o cadena cervical está infiltrado?",
          "pistaDocente": "Síndrome de Pancoast por invasión del ganglio cervicotorácico.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Mediastino: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ganglio Estrellado (Cervicotorácico)",
              "correcta": true,
              "feedback": "¡Correcto! Síndrome de Pancoast por invasión del ganglio cervicotorácico."
            },
            {
              "texto": "Ganglio Celíaco",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ganglio Estrellado (Cervicotorácico)."
            },
            {
              "texto": "Nervio Vago",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ganglio Estrellado (Cervicotorácico)."
            },
            {
              "texto": "Nervio Frénico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ganglio Estrellado (Cervicotorácico)."
            }
          ]
        },
        {
          "id": "anat-26",
          "unidad": "Tórax",
          "paciente": "Parálisis diafragmática derecha tras traumatismo cervical con elevación del hemidiafragma",
          "pregunta": "¿Qué nervio motor derivado de C3-C5 inerva exclusivamente al diafragma?",
          "pistaDocente": "El nervio frénico nace de las raíces cervicales C3, C4 y C5.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tórax: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Frénico",
              "correcta": true,
              "feedback": "¡Correcto! El nervio frénico nace de las raíces cervicales C3, C4 y C5."
            },
            {
              "texto": "Nervio Vago",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Frénico."
            },
            {
              "texto": "Nervio Recurrente Laríngeo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Frénico."
            },
            {
              "texto": "Nervio Intercostal 5°",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Frénico."
            }
          ]
        },
        {
          "id": "anat-27",
          "unidad": "Grandes Vasos",
          "paciente": "Aneurisma en cayado aórtico. ¿Cuál es la primera rama gruesa que nace del cayado aórtico?",
          "pregunta": "¿Cuál es el primer tronco arterial que emerge de la convexidad del arco aórtico?",
          "pistaDocente": "El tronco braquiocefálico es la 1° rama, luego carótida común izq y subclavia izq.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Grandes Vasos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Tronco Braquiocefálico",
              "correcta": true,
              "feedback": "¡Correcto! El tronco braquiocefálico es la 1° rama, luego carótida común izq y subclavia izq."
            },
            {
              "texto": "Arteria Carótida Común Izquierda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tronco Braquiocefálico."
            },
            {
              "texto": "Arteria Subclavia Izquierda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tronco Braquiocefálico."
            },
            {
              "texto": "Arteria Coronaria Derecha",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tronco Braquiocefálico."
            }
          ]
        },
        {
          "id": "anat-28",
          "unidad": "Tórax",
          "paciente": "Cuerpo extraño aspirado por niño suele alojarse en el bronquio principal derecho",
          "pregunta": "¿Cuál es la característica anatómica del bronquio principal derecho respecto al izquierdo?",
          "pistaDocente": "La anatomía vertical y ancha del bronquio derecho favorece la aspiración.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tórax: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Es más vertical, más corto y de mayor calibre",
              "correcta": true,
              "feedback": "¡Correcto! La anatomía vertical y ancha del bronquio derecho favorece la aspiración."
            },
            {
              "texto": "Es más horizontal y largo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Es más vertical, más corto y de mayor calibre."
            },
            {
              "texto": "Tiene menor diámetro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Es más vertical, más corto y de mayor calibre."
            },
            {
              "texto": "Cruza por delante del esófago",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Es más vertical, más corto y de mayor calibre."
            }
          ]
        },
        {
          "id": "anat-29",
          "unidad": "Tórax",
          "paciente": "Linfadenopatía que comprime la vena cava superior causando edema en esclavina y plétora yugular",
          "pregunta": "¿Dónde desemboca anatómicamente la vena ácigos mayor en el mediastino?",
          "pistaDocente": "La vena ácigos forma un cayado sobre el pedículo pulmonar derecho y drena en la VCS.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tórax: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vena Cava Superior",
              "correcta": true,
              "feedback": "¡Correcto! La vena ácigos forma un cayado sobre el pedículo pulmonar derecho y drena en la VCS."
            },
            {
              "texto": "Aurícula Izquierda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Cava Superior."
            },
            {
              "texto": "Vena Braquiocefálica Izquierda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Cava Superior."
            },
            {
              "texto": "Vena Porta",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Cava Superior."
            }
          ]
        },
        {
          "id": "anat-30",
          "unidad": "Corazón",
          "paciente": "Marcapasos natural del corazón ubicado en la unión de la vena cava superior y aurícula derecha",
          "pregunta": "¿Qué estructura nodal especializada inicia la despolarización cardíaca?",
          "pistaDocente": "El nodo sinusal es el marcapasos primario con frecuencia de 60-100 lpm.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Corazón: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nodo Sinoauricular (de Keith y Flack)",
              "correcta": true,
              "feedback": "¡Correcto! El nodo sinusal es el marcapasos primario con frecuencia de 60-100 lpm."
            },
            {
              "texto": "Nodo Auriculoventricular (de Aschoff-Tawara)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nodo Sinoauricular (de Keith y Flack)."
            },
            {
              "texto": "Haz de His",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nodo Sinoauricular (de Keith y Flack)."
            },
            {
              "texto": "Fibras de Purkinje",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nodo Sinoauricular (de Keith y Flack)."
            }
          ]
        },
        {
          "id": "anat-31",
          "unidad": "Abdomen",
          "paciente": "Dolor en fosa ilíaca derecha en el punto medio entre ombligo y espina ilíaca anterosuperior",
          "pregunta": "¿Qué signo semiológico y punto anatómico orienta fuertemente a apendicitis aguda?",
          "pistaDocente": "El punto de McBurney corresponde a la base de implantación apendicular.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Abdomen: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Punto de McBurney",
              "correcta": true,
              "feedback": "¡Correcto! El punto de McBurney corresponde a la base de implantación apendicular."
            },
            {
              "texto": "Punto de Murphy",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punto de McBurney."
            },
            {
              "texto": "Punto de Mayo-Robson",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punto de McBurney."
            },
            {
              "texto": "Signo de Courvoisier",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punto de McBurney."
            }
          ]
        },
        {
          "id": "anat-32",
          "unidad": "Abdomen",
          "paciente": "Cirugía laparoscópica de vesícula biliar. El cirujano identifica el triángulo hepatocístico de Calot",
          "pregunta": "¿Cuáles son los límites anatómicos del triángulo de Calot para localizar la arteria cística?",
          "pistaDocente": "El triángulo de Calot es reparo quirúrgico clave para no lesionar la vía biliar principal.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Abdomen: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Conducto Cístico, Conducto Hepático Común y Cara Inferior del Hígado",
              "correcta": true,
              "feedback": "¡Correcto! El triángulo de Calot es reparo quirúrgico clave para no lesionar la vía biliar principal."
            },
            {
              "texto": "Colédoco, Vena Porta y Duodeno",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Conducto Cístico, Conducto Hepático Común y Cara Inferior del Hígado."
            },
            {
              "texto": "Conducto Pancreático, Bazo e Hígado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Conducto Cístico, Conducto Hepático Común y Cara Inferior del Hígado."
            },
            {
              "texto": "Vena Cava, Cístico y Píloro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Conducto Cístico, Conducto Hepático Común y Cara Inferior del Hígado."
            }
          ]
        },
        {
          "id": "anat-33",
          "unidad": "Abdomen",
          "paciente": "Hernia inguinal indirecta en adulto joven que protruye a través del orificio inguinal profundo",
          "pregunta": "¿Con respecto a qué vasos epigástricos se ubica el orificio profundo (lateral o medial)?",
          "pistaDocente": "Las hernias indirectas son laterales a los vasos epigástricos; las directas son mediales.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Abdomen: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Lateral a los vasos epigástricos inferiores",
              "correcta": true,
              "feedback": "¡Correcto! Las hernias indirectas son laterales a los vasos epigástricos; las directas son mediales."
            },
            {
              "texto": "Medial a los vasos epigástricos inferiores",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lateral a los vasos epigástricos inferiores."
            },
            {
              "texto": "Posterior a la aorta",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lateral a los vasos epigástricos inferiores."
            },
            {
              "texto": "Anterior al músculo recto",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lateral a los vasos epigástricos inferiores."
            }
          ]
        },
        {
          "id": "anat-34",
          "unidad": "Abdomen",
          "paciente": "Hemorragia por várices esofágicas en cirrosis por hipertensión portal",
          "pregunta": "¿Qué dos venas anastomosan el sistema porta con el sistema cava a nivel del cardias?",
          "pistaDocente": "La anastomosis portocava esofágica se dilata formando várices sangrantes.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Abdomen: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vena Gástrica Izquierda (Porta) y Venas Esofágicas Inferiores (Ácigos/Cava)",
              "correcta": true,
              "feedback": "¡Correcto! La anastomosis portocava esofágica se dilata formando várices sangrantes."
            },
            {
              "texto": "Vena Renal y Esplénica",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Gástrica Izquierda (Porta) y Venas Esofágicas Inferiores (Ácigos/Cava)."
            },
            {
              "texto": "Vena Cava y Femoral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Gástrica Izquierda (Porta) y Venas Esofágicas Inferiores (Ácigos/Cava)."
            },
            {
              "texto": "Vena Mesentérica Superior e Ilíaca",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vena Gástrica Izquierda (Porta) y Venas Esofágicas Inferiores (Ácigos/Cava)."
            }
          ]
        },
        {
          "id": "anat-35",
          "unidad": "Abdomen",
          "paciente": "Maniobra de Murphy positiva con detención de la respiración al palpar hipocondrio derecho",
          "pregunta": "¿Qué órgano inflamado choca contra la mano del explorador al inspirar hondo?",
          "pistaDocente": "Murphy positivo indica inflamación vesicular al descender el diafragma.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Abdomen: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vesícula Biliar (Colecistitis Aguda)",
              "correcta": true,
              "feedback": "¡Correcto! Murphy positivo indica inflamación vesicular al descender el diafragma."
            },
            {
              "texto": "Bazo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vesícula Biliar (Colecistitis Aguda)."
            },
            {
              "texto": "Páncreas",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vesícula Biliar (Colecistitis Aguda)."
            },
            {
              "texto": "Riñón Izquierdo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vesícula Biliar (Colecistitis Aguda)."
            }
          ]
        },
        {
          "id": "anat-36",
          "unidad": "Cabeza y Cuello",
          "paciente": "Parálisis facial periférica (de Bell) con imposibilidad de cerrar el ojo y desvío de comisura bucal",
          "pregunta": "¿Qué par craneal emerge por el agujero estilomastoideo para inervar la mímica facial?",
          "pistaDocente": "El VII par inerva todos los músculos cutáneos de la mímica.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cabeza y Cuello: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Facial (VII Par)",
              "correcta": true,
              "feedback": "¡Correcto! El VII par inerva todos los músculos cutáneos de la mímica."
            },
            {
              "texto": "Nervio Trigémino (V Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Facial (VII Par)."
            },
            {
              "texto": "Nervio Oculomotor (III Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Facial (VII Par)."
            },
            {
              "texto": "Nervio Hipogloso (XII Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Facial (VII Par)."
            }
          ]
        },
        {
          "id": "anat-37",
          "unidad": "Cabeza y Cuello",
          "paciente": "Dolor paroxístico punzante como descarga eléctrica en mejilla y mandíbula al tocarse la cara",
          "pregunta": "¿Qué nervio sensitivo craneal con 3 ramas está afectado en esta neuralgia?",
          "pistaDocente": "El V par (oftálmica V1, maxilar V2, mandibular V3) es el gran nervio sensitivo facial.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cabeza y Cuello: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Trigémino (V Par)",
              "correcta": true,
              "feedback": "¡Correcto! El V par (oftálmica V1, maxilar V2, mandibular V3) es el gran nervio sensitivo facial."
            },
            {
              "texto": "Nervio Facial (VII Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Trigémino (V Par)."
            },
            {
              "texto": "Nervio Glosofaríngeo (IX Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Trigémino (V Par)."
            },
            {
              "texto": "Nervio Vago (X Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Trigémino (V Par)."
            }
          ]
        },
        {
          "id": "anat-38",
          "unidad": "Cabeza y Cuello",
          "paciente": "Ronquera permanente tras tiroidectomía por lesión nerviosa en surco traqueoesofágico",
          "pregunta": "¿Qué nervio motor intrínseco de la laringe rama del vago fue lesionado?",
          "pistaDocente": "El recurrente inerva todos los músculos laríngeos excepto el cricotiroideo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cabeza y Cuello: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Laríngeo Recurrente",
              "correcta": true,
              "feedback": "¡Correcto! El recurrente inerva todos los músculos laríngeos excepto el cricotiroideo."
            },
            {
              "texto": "Nervio Laríngeo Superior",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Laríngeo Recurrente."
            },
            {
              "texto": "Nervio Frénico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Laríngeo Recurrente."
            },
            {
              "texto": "Tronco Simpático",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Laríngeo Recurrente."
            }
          ]
        },
        {
          "id": "anat-39",
          "unidad": "Cabeza y Cuello",
          "paciente": "Pupila derecha midriática fija arrefléxica con ptosis palpebral y ojo desviado hacia afuera y abajo",
          "pregunta": "¿Qué par craneal que pasa por la hendidura esfenoidal está paralizado?",
          "pistaDocente": "El III par inerva recto medial, superior, inferior, oblicuo menor y constrictor pupilar.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cabeza y Cuello: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Oculomotor (III Par Craneal)",
              "correcta": true,
              "feedback": "¡Correcto! El III par inerva recto medial, superior, inferior, oblicuo menor y constrictor pupilar."
            },
            {
              "texto": "Nervio Troclear (IV Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Oculomotor (III Par Craneal)."
            },
            {
              "texto": "Nervio Abducens (VI Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Oculomotor (III Par Craneal)."
            },
            {
              "texto": "Nervio Óptico (II Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Oculomotor (III Par Craneal)."
            }
          ]
        },
        {
          "id": "anat-40",
          "unidad": "Cabeza y Cuello",
          "paciente": "Fractura de la lámina cribosa del etmoides con anosmia y salida de líquido cefalorraquídeo nasal",
          "pregunta": "¿Qué par craneal atraviesa los orificios de la lámina cribosa?",
          "pistaDocente": "Los filetes del nervio olfatorio atraviesan la lámina cribosa del etmoides hacia el bulbo olfatorio.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cabeza y Cuello: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Nervio Olfatorio (I Par Craneal)",
              "correcta": true,
              "feedback": "¡Correcto! Los filetes del nervio olfatorio atraviesan la lámina cribosa del etmoides hacia el bulbo olfatorio."
            },
            {
              "texto": "Nervio Óptico (II Par)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Olfatorio (I Par Craneal)."
            },
            {
              "texto": "Nervio Oftálmico (V1)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Olfatorio (I Par Craneal)."
            },
            {
              "texto": "Nervio Maxilar (V2)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Nervio Olfatorio (I Par Craneal)."
            }
          ]
        }
      ]
    },
    {
      "id": "bioquimica",
      "nombre": "Bioquímica Clínica y Laboratorial I (MED-01-03)",
      "docente": {
        "nombre": "Dra. Antonella Antico (Coordinación de Práctica)",
        "avatar": "dra_antonella_antico_pixel.jpg",
        "cargo": "Cátedra de Bioquímica y Fisiopatología"
      },
      "casos": [
        {
          "id": "bioq-01",
          "unidad": "Equilibrio Ácido-Base",
          "paciente": "Diabetes Tipo 1 confuso, respiración de Kussmaul. pH 7.22 | HCO3 11 mEq/L | pCO2 28 mmHg",
          "pregunta": "¿Cuál es el trastorno ácido-base primario y su compensación?",
          "pistaDocente": "pH bajo por consumo de HCO3- compensado con caída de pCO2 por hiperventilación.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Equilibrio Ácido-Base: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Acidosis Metabólica con compensación respiratoria (hiperventilación)",
              "correcta": true,
              "feedback": "¡Correcto! pH bajo por consumo de HCO3- compensado con caída de pCO2 por hiperventilación."
            },
            {
              "texto": "Alcalosis Respiratoria pura",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Metabólica con compensación respiratoria (hiperventilación)."
            },
            {
              "texto": "Acidosis Respiratoria descompensada",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Metabólica con compensación respiratoria (hiperventilación)."
            },
            {
              "texto": "Alcalosis Metabólica pura",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Metabólica con compensación respiratoria (hiperventilación)."
            }
          ]
        },
        {
          "id": "bioq-02",
          "unidad": "Equilibrio Ácido-Base",
          "paciente": "Mujer con vómitos incoercibles de 48 hs. pH 7.52 | HCO3 34 mEq/L | pCO2 46 mmHg",
          "pregunta": "¿Qué alteración ácido-base causó la pérdida masiva de ácido clorhídrico gástrico?",
          "pistaDocente": "La pérdida de H+ y Cl- en el jugo gástrico genera alcalosis metabólica.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Equilibrio Ácido-Base: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Alcalosis Metabólica hipoclorémica",
              "correcta": true,
              "feedback": "¡Correcto! La pérdida de H+ y Cl- en el jugo gástrico genera alcalosis metabólica."
            },
            {
              "texto": "Acidosis Metabólica con anion gap elevado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Alcalosis Metabólica hipoclorémica."
            },
            {
              "texto": "Acidosis Respiratoria aguda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Alcalosis Metabólica hipoclorémica."
            },
            {
              "texto": "Alcalosis Respiratoria primaria",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Alcalosis Metabólica hipoclorémica."
            }
          ]
        },
        {
          "id": "bioq-03",
          "unidad": "Equilibrio Ácido-Base",
          "paciente": "Fumador pesado con EPOC y somnolencia. Gasometría: pH 7.30 | pCO2 62 mmHg | HCO3 30 mEq/L",
          "pregunta": "¿Qué trastorno produce la hipoventilación alveolar y retención de dióxido de carbono?",
          "pistaDocente": "La retención de CO2 (ácido volátil) baja el pH; el riñón retiene HCO3- lentamente.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Equilibrio Ácido-Base: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Acidosis Respiratoria con compensación renal de bicarbonato",
              "correcta": true,
              "feedback": "¡Correcto! La retención de CO2 (ácido volátil) baja el pH; el riñón retiene HCO3- lentamente."
            },
            {
              "texto": "Alcalosis Respiratoria",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Respiratoria con compensación renal de bicarbonato."
            },
            {
              "texto": "Acidosis Metabólica láctica",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Respiratoria con compensación renal de bicarbonato."
            },
            {
              "texto": "Alcalosis Metabólica aguda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acidosis Respiratoria con compensación renal de bicarbonato."
            }
          ]
        },
        {
          "id": "bioq-04",
          "unidad": "Soluciones y pH",
          "paciente": "¿Cuál es el principal sistema tampón (buffer) extracelular del organismo humano?",
          "pregunta": "¿Qué par conjugado regula instantáneamente el pH en el plasma sanguíneo?",
          "pistaDocente": "El buffer bicarbonato es el más abundante en el líquido extracelular y es regulado por pulmón y riñón.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Soluciones y pH: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Sistema Bicarbonato / Ácido Carbónico (HCO3- / H2CO3)",
              "correcta": true,
              "feedback": "¡Correcto! El buffer bicarbonato es el más abundante en el líquido extracelular y es regulado por pulmón y riñón."
            },
            {
              "texto": "Sistema Hemoglobina / Oxihemoglobina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sistema Bicarbonato / Ácido Carbónico (HCO3- / H2CO3)."
            },
            {
              "texto": "Sistema Fosfato Monocálcico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sistema Bicarbonato / Ácido Carbónico (HCO3- / H2CO3)."
            },
            {
              "texto": "Proteínas intracelulares",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Sistema Bicarbonato / Ácido Carbónico (HCO3- / H2CO3)."
            }
          ]
        },
        {
          "id": "bioq-05",
          "unidad": "Metabolismo de Glúcidos",
          "paciente": "Maratonista en el km 35 agota su glucógeno muscular y hepático. Comienza gluconeogénesis",
          "pregunta": "¿Cuál es el principal precursor no glucídico que proviene de la lipólisis para la gluconeogénesis?",
          "pistaDocente": "El glicerol se fosforila a glicerol-3-fosfato y entra a la vía gluconeogénica.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Glúcidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Glicerol (derivado de triacilgliceroles)",
              "correcta": true,
              "feedback": "¡Correcto! El glicerol se fosforila a glicerol-3-fosfato y entra a la vía gluconeogénica."
            },
            {
              "texto": "Ácidos grasos libres de cadena par",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glicerol (derivado de triacilgliceroles)."
            },
            {
              "texto": "Acetil-CoA",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glicerol (derivado de triacilgliceroles)."
            },
            {
              "texto": "Colesterol libre",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glicerol (derivado de triacilgliceroles)."
            }
          ]
        },
        {
          "id": "bioq-06",
          "unidad": "Metabolismo de Glúcidos",
          "paciente": "Bebé con catarata precoz y vómitos tras tomar leche. Déficit de galactosa-1-fosfato uridiltransferasa",
          "pregunta": "¿Qué patología metabólica congénita del metabolismo de glúcidos padece?",
          "pistaDocente": "La acumulación de galactitol por vía alterna genera catarata bilateral temprana.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Glúcidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Galactosemia Clásica",
              "correcta": true,
              "feedback": "¡Correcto! La acumulación de galactitol por vía alterna genera catarata bilateral temprana."
            },
            {
              "texto": "Intolerancia a la Lactosa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Galactosemia Clásica."
            },
            {
              "texto": "Fructosuria Esencial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Galactosemia Clásica."
            },
            {
              "texto": "Glucogenosis Tipo I",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Galactosemia Clásica."
            }
          ]
        },
        {
          "id": "bioq-07",
          "unidad": "Metabolismo de Glúcidos",
          "paciente": "Fármaco antidiabético (metformina) disminuye la producción hepática de glucosa. ¿Qué vía inhibe?",
          "pregunta": "¿Qué vía biosintética hepática de glucosa a partir de lactato y alanina es inhibida por la metformina?",
          "pistaDocente": "La metformina activa AMPK e inhibe la gluconeogénesis hepática.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Glúcidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Gluconeogénesis Hepática",
              "correcta": true,
              "feedback": "¡Correcto! La metformina activa AMPK e inhibe la gluconeogénesis hepática."
            },
            {
              "texto": "Glucólisis Anaeróbica",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Gluconeogénesis Hepática."
            },
            {
              "texto": "Glucogenogénesis",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Gluconeogénesis Hepática."
            },
            {
              "texto": "Vía de las Pentosas Fosfato",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Gluconeogénesis Hepática."
            }
          ]
        },
        {
          "id": "bioq-08",
          "unidad": "Vía de las Pentosas",
          "paciente": "Soldado que toma antipalúdico (primaquina) presenta anemia hemolítica súbita e ictericia",
          "pregunta": "¿Qué enzima que genera NADPH para mantener reducido el glutatión está deficiente?",
          "pistaDocente": "El déficit de G6PD impide regenerar glutatión reducido frente a estrés oxidativo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Vía de las Pentosas: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Glucosa-6-Fosfato Deshidrogenasa (G6PD)",
              "correcta": true,
              "feedback": "¡Correcto! El déficit de G6PD impide regenerar glutatión reducido frente a estrés oxidativo."
            },
            {
              "texto": "Piruvato Quinasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glucosa-6-Fosfato Deshidrogenasa (G6PD)."
            },
            {
              "texto": "Hexoquinasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glucosa-6-Fosfato Deshidrogenasa (G6PD)."
            },
            {
              "texto": "Fosfofructoquinasa-1",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glucosa-6-Fosfato Deshidrogenasa (G6PD)."
            }
          ]
        },
        {
          "id": "bioq-09",
          "unidad": "Enzimología Clínica",
          "paciente": "Dolor precordial opresivo de 3 horas. Laboratorio busca biomarcador de necrosis miocárdica",
          "pregunta": "¿Qué proteína globular sarcomérica es el patrón de oro (gold standard) por alta especificidad?",
          "pistaDocente": "Las troponinas cardíacas son altamente específicas de necrosis de miocitos cardíacos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Enzimología Clínica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Troponina I y T de alta sensibilidad",
              "correcta": true,
              "feedback": "¡Correcto! Las troponinas cardíacas son altamente específicas de necrosis de miocitos cardíacos."
            },
            {
              "texto": "LDH (Lactato Deshidrogenasa)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Troponina I y T de alta sensibilidad."
            },
            {
              "texto": "GOT / AST Transaminasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Troponina I y T de alta sensibilidad."
            },
            {
              "texto": "Fosfatasa Alcalina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Troponina I y T de alta sensibilidad."
            }
          ]
        },
        {
          "id": "bioq-10",
          "unidad": "Enzimología Clínica",
          "paciente": "Bebedor crónico con dolor abdominal epigástrico en barra y náuseas. Laboratorio confirma pancreatitis aguda",
          "pregunta": "¿Qué dos enzimas pancreáticas elevadas en sangre confirman el diagnóstico bioquímico?",
          "pistaDocente": "La lipasa es más específica y perdura más tiempo elevada que la amilasa en pancreatitis.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Enzimología Clínica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Amilasa y Lipasa séricas",
              "correcta": true,
              "feedback": "¡Correcto! La lipasa es más específica y perdura más tiempo elevada que la amilasa en pancreatitis."
            },
            {
              "texto": "Transaminasas GOT y GPT",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Amilasa y Lipasa séricas."
            },
            {
              "texto": "Fosfatasa Ácida y Aldolasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Amilasa y Lipasa séricas."
            },
            {
              "texto": "Troponina y CPK",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Amilasa y Lipasa séricas."
            }
          ]
        },
        {
          "id": "bioq-11",
          "unidad": "Cinética Enzimática",
          "paciente": "Paciente toma estatina (atorvastatina) para bajar el colesterol LDL compitiendo con el sustrato de HMG-CoA reductasa",
          "pregunta": "¿Qué efecto cinético produce un inhibidor competitivo sobre la Km y la Vmax?",
          "pistaDocente": "Un inhibidor competitivo compite por el sitio activo: requiere más sustrato (aumenta Km) pero alcanza Vmax.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cinética Enzimática: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Aumenta la Km aparente sin modificar la Vmax",
              "correcta": true,
              "feedback": "¡Correcto! Un inhibidor competitivo compite por el sitio activo: requiere más sustrato (aumenta Km) pero alcanza Vmax."
            },
            {
              "texto": "Disminuye la Vmax sin alterar Km",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Aumenta la Km aparente sin modificar la Vmax."
            },
            {
              "texto": "Disminuye tanto Km como Vmax",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Aumenta la Km aparente sin modificar la Vmax."
            },
            {
              "texto": "Aumenta la Vmax",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Aumenta la Km aparente sin modificar la Vmax."
            }
          ]
        },
        {
          "id": "bioq-12",
          "unidad": "Metabolismo de Lípidos",
          "paciente": "Joven con xantomas tendinosos en tendón de Aquiles y colesterol total > 400 mg/dL",
          "pregunta": "¿Qué receptor celular mutado impide la endocitosis de partículas ricas en colesterol?",
          "pistaDocente": "La hipercolesterolemia familiar se debe a mutaciones en el receptor de LDL.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Lípidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Receptor de LDL (Apo B-100 / E)",
              "correcta": true,
              "feedback": "¡Correcto! La hipercolesterolemia familiar se debe a mutaciones en el receptor de LDL."
            },
            {
              "texto": "Receptor Scavenger de macrófagos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Receptor de LDL (Apo B-100 / E)."
            },
            {
              "texto": "Receptor de Quilomicrones",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Receptor de LDL (Apo B-100 / E)."
            },
            {
              "texto": "Lipoproteína Lipasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Receptor de LDL (Apo B-100 / E)."
            }
          ]
        },
        {
          "id": "bioq-13",
          "unidad": "Metabolismo de Lípidos",
          "paciente": "Paciente en ayuno estricto de 7 días. Su cerebro comienza a consumir cuerpos cetónicos como combustible",
          "pregunta": "¿Cuáles son los 3 cuerpos cetónicos sintetizados por el hígado a partir de exceso de Acetil-CoA?",
          "pistaDocente": "Sintetizados en mitocondria hepática durante ayuno prolongado o cetoacidosis.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Lípidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Acetoacetato, Beta-hidroxibutirato y Acetona",
              "correcta": true,
              "feedback": "¡Correcto! Sintetizados en mitocondria hepática durante ayuno prolongado o cetoacidosis."
            },
            {
              "texto": "Lactato, Piruvato y Malato",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acetoacetato, Beta-hidroxibutirato y Acetona."
            },
            {
              "texto": "Oxaloacetato, Citrato y Succinato",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acetoacetato, Beta-hidroxibutirato y Acetona."
            },
            {
              "texto": "Glicerol, Alanina y Colina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Acetoacetato, Beta-hidroxibutirato y Acetona."
            }
          ]
        },
        {
          "id": "bioq-14",
          "unidad": "Metabolismo de Lípidos",
          "paciente": "Suero lechoso tras comida copiosa con alto contenido graso por elevación de lipoproteínas de menor densidad",
          "pregunta": "¿Qué lipoproteína transporta los triglicéridos de origen exógeno (dietario) desde el intestino?",
          "pistaDocente": "Los quilomicrones se ensamblan en enterocitos con Apo B-48 para transportar grasa de la dieta.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Lípidos: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Quilomicrones",
              "correcta": true,
              "feedback": "¡Correcto! Los quilomicrones se ensamblan en enterocitos con Apo B-48 para transportar grasa de la dieta."
            },
            {
              "texto": "VLDL (Muy Baja Densidad)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Quilomicrones."
            },
            {
              "texto": "LDL (Baja Densidad)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Quilomicrones."
            },
            {
              "texto": "HDL (Alta Densidad)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Quilomicrones."
            }
          ]
        },
        {
          "id": "bioq-15",
          "unidad": "Metabolismo de Proteínas",
          "paciente": "Cirrótico descompensado ingresa confuso con asterixis (flapping) por acumulación de amoníaco tóxico",
          "pregunta": "¿En qué ciclo metabólico hepático se convierte normalmente el amoníaco libre en urea?",
          "pistaDocente": "El ciclo de la urea detoxifica el amoníaco mitocondrial y citosólico en hepatocitos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Proteínas: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ciclo de la Urea (de Krebs-Henseleit)",
              "correcta": true,
              "feedback": "¡Correcto! El ciclo de la urea detoxifica el amoníaco mitocondrial y citosólico en hepatocitos."
            },
            {
              "texto": "Ciclo de Krebs (Ácido Cítrico)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ciclo de la Urea (de Krebs-Henseleit)."
            },
            {
              "texto": "Ciclo de Cori",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ciclo de la Urea (de Krebs-Henseleit)."
            },
            {
              "texto": "Ciclo de la Alanina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ciclo de la Urea (de Krebs-Henseleit)."
            }
          ]
        },
        {
          "id": "bioq-16",
          "unidad": "Metabolismo de Proteínas",
          "paciente": "Recién nacido sometido a pesquisa neonatal (test del piecito) para detectar fenilcetonuria",
          "pregunta": "¿Qué enzima deficiente impide transformar fenilalanina en tirosina acumulando fenilpiruvato?",
          "pistaDocente": "El déficit de PAH genera fenilcetonuria y daño neurológico prevenible con dieta.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Proteínas: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Fenilalanina Hidroxilasa (PAH)",
              "correcta": true,
              "feedback": "¡Correcto! El déficit de PAH genera fenilcetonuria y daño neurológico prevenible con dieta."
            },
            {
              "texto": "Tirosinasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fenilalanina Hidroxilasa (PAH)."
            },
            {
              "texto": "Homogentisato Oxidasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fenilalanina Hidroxilasa (PAH)."
            },
            {
              "texto": "Metionina Sintasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fenilalanina Hidroxilasa (PAH)."
            }
          ]
        },
        {
          "id": "bioq-17",
          "unidad": "Metabolismo de Purinas",
          "paciente": "Hombre de 50 años con dolor nocturno agudo y enrojecimiento en 1° articulación metatarsofalángica (podagra)",
          "pregunta": "¿Qué producto final del catabolismo de las bases púricas precipita en forma de cristales de urato?",
          "pistaDocente": "La hiperuricemia causa precipitación de cristales de urato monosódico en articulaciones (gota).",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Purinas: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Ácido Úrico",
              "correcta": true,
              "feedback": "¡Correcto! La hiperuricemia causa precipitación de cristales de urato monosódico en articulaciones (gota)."
            },
            {
              "texto": "Urea",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ácido Úrico."
            },
            {
              "texto": "Creatinina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ácido Úrico."
            },
            {
              "texto": "Bilirrubina",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Ácido Úrico."
            }
          ]
        },
        {
          "id": "bioq-18",
          "unidad": "Cadena Respiratoria",
          "paciente": "Intoxicación con cianuro por inhalación de humo en incendio. Asfixia celular inmediata",
          "pregunta": "¿Qué complejo IV de la cadena de transporte de electrones es inhibido irreversiblemente por el cianuro?",
          "pistaDocente": "El cianuro se une al hierro férrico (Fe3+) del hemo a3 en el complejo IV frenando la respiración celular.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cadena Respiratoria: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Citocromo c Oxidasa (Complejo IV)",
              "correcta": true,
              "feedback": "¡Correcto! El cianuro se une al hierro férrico (Fe3+) del hemo a3 en el complejo IV frenando la respiración celular."
            },
            {
              "texto": "NADH Deshidrogenasa (Complejo I)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citocromo c Oxidasa (Complejo IV)."
            },
            {
              "texto": "Succinato Deshidrogenasa (Complejo II)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citocromo c Oxidasa (Complejo IV)."
            },
            {
              "texto": "ATP Sintasa (Complejo V)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citocromo c Oxidasa (Complejo IV)."
            }
          ]
        },
        {
          "id": "bioq-19",
          "unidad": "Cadena Respiratoria",
          "paciente": "Intoxicación con monóxido de carbono (CO) por brasero en habitación cerrada",
          "pregunta": "¿Por qué el monóxido de carbono bloquea el transporte de oxígeno hacia los tejidos?",
          "pistaDocente": "Forma carboxihemoglobina irreversible desplazando la curva de disociación hacia la izquierda.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Cadena Respiratoria: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Tiene una afinidad por la Hemoglobina 200 veces superior a la del Oxígeno",
              "correcta": true,
              "feedback": "¡Correcto! Forma carboxihemoglobina irreversible desplazando la curva de disociación hacia la izquierda."
            },
            {
              "texto": "Destruye la membrana del eritrocito en el bazo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tiene una afinidad por la Hemoglobina 200 veces superior a la del Oxígeno."
            },
            {
              "texto": "Inhibe la síntesis de eritropoyetina renal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tiene una afinidad por la Hemoglobina 200 veces superior a la del Oxígeno."
            },
            {
              "texto": "Provoca deshidratación plasmática aguda",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tiene una afinidad por la Hemoglobina 200 veces superior a la del Oxígeno."
            }
          ]
        },
        {
          "id": "bioq-20",
          "unidad": "Metabolismo del Hemo",
          "paciente": "Ictericia a expensas de bilirrubina indirecta (no conjugada) con orinas claras y heces de color normal",
          "pregunta": "¿En qué órgano y por qué enzima se conjuga la bilirrubina indirecta con ácido glucurónico?",
          "pistaDocente": "La bilirrubina no conjugada liposoluble se conjuga en el retículo endoplásmico hepático.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo del Hemo: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Hígado por la UDP-Glucuronosiltransferasa",
              "correcta": true,
              "feedback": "¡Correcto! La bilirrubina no conjugada liposoluble se conjuga en el retículo endoplásmico hepático."
            },
            {
              "texto": "Bazo por la Hemo Oxigenasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hígado por la UDP-Glucuronosiltransferasa."
            },
            {
              "texto": "Riñón por la Glucocinasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hígado por la UDP-Glucuronosiltransferasa."
            },
            {
              "texto": "Intestino por la Urobilinógeno Sintasa",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hígado por la UDP-Glucuronosiltransferasa."
            }
          ]
        },
        {
          "id": "bioq-21",
          "unidad": "Metabolismo del Hemo",
          "paciente": "Ictericia obstructiva por cálculo en colédoco con coluria (orina oscura) y acolia (heces blancas)",
          "pregunta": "¿Qué fracción de la bilirrubina se encuentra elevada en el plasma al estar tapada la vía biliar?",
          "pistaDocente": "Al no poder drenar al duodeno, la bilirrubina directa refluye a sangre y se filtra por orina (coluria).",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo del Hemo: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Bilirrubina Directa (Conjugada)",
              "correcta": true,
              "feedback": "¡Correcto! Al no poder drenar al duodeno, la bilirrubina directa refluye a sangre y se filtra por orina (coluria)."
            },
            {
              "texto": "Bilirrubina Indirecta (Libre)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bilirrubina Directa (Conjugada)."
            },
            {
              "texto": "Urobilinógeno urinario puro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bilirrubina Directa (Conjugada)."
            },
            {
              "texto": "Biliverdina sérica",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bilirrubina Directa (Conjugada)."
            }
          ]
        },
        {
          "id": "bioq-22",
          "unidad": "Bioquímica Nutricional",
          "paciente": "Alcohólico indigente con ataxia, oftalmoplejía y confusión mental (Encefalopatía de Wernicke)",
          "pregunta": "¿Qué vitamina hidrosoluble cofactor de la piruvato deshidrogenasa y transcetolasa está deficiente?",
          "pistaDocente": "La tiamina (pirofosfato de tiamina) es cofactor esencial en el metabolismo energético cerebral.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioquímica Nutricional: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vitamina B1 (Tiamina)",
              "correcta": true,
              "feedback": "¡Correcto! La tiamina (pirofosfato de tiamina) es cofactor esencial en el metabolismo energético cerebral."
            },
            {
              "texto": "Vitamina B12 (Cobalamina)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina B1 (Tiamina)."
            },
            {
              "texto": "Vitamina C (Ácido Ascórbico)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina B1 (Tiamina)."
            },
            {
              "texto": "Vitamina D (Calciferol)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina B1 (Tiamina)."
            }
          ]
        },
        {
          "id": "bioq-23",
          "unidad": "Bioquímica Nutricional",
          "paciente": "Marinero con encías sangrantes, petequias perifoliculares y mala cicatrización de heridas (escorbuto)",
          "pregunta": "¿Qué vitamina cofactor de la prolil y lisil hidroxilasa es indispensable para el colágeno?",
          "pistaDocente": "La vitamina C hidroxila residuos de prolina y lisina permitiendo la triple hélice estable de colágeno.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioquímica Nutricional: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vitamina C (Ácido Ascórbico)",
              "correcta": true,
              "feedback": "¡Correcto! La vitamina C hidroxila residuos de prolina y lisina permitiendo la triple hélice estable de colágeno."
            },
            {
              "texto": "Vitamina A (Retinol)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina C (Ácido Ascórbico)."
            },
            {
              "texto": "Vitamina E (Tocoferol)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina C (Ácido Ascórbico)."
            },
            {
              "texto": "Vitamina K (Fitomenadiona)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vitamina C (Ácido Ascórbico)."
            }
          ]
        },
        {
          "id": "bioq-24",
          "unidad": "Metabolismo de Calcio",
          "paciente": "Tiroidectomía total complica con espasmos carpopedales (signo de Trousseau) por extirpación inadvertida de paratiroides",
          "pregunta": "¿Qué ión sérico desciende críticamente causando hiperexcitabilidad neuromuscular?",
          "pistaDocente": "La PTH eleva la calcemia; su ausencia brusca desencadena hipocalcemia y tetania aguda.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Metabolismo de Calcio: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Calcio Iónico (Ca2+)",
              "correcta": true,
              "feedback": "¡Correcto! La PTH eleva la calcemia; su ausencia brusca desencadena hipocalcemia y tetania aguda."
            },
            {
              "texto": "Potasio (K+)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Calcio Iónico (Ca2+)."
            },
            {
              "texto": "Magnesio (Mg2+)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Calcio Iónico (Ca2+)."
            },
            {
              "texto": "Sodio (Na+)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Calcio Iónico (Ca2+)."
            }
          ]
        },
        {
          "id": "bioq-25",
          "unidad": "Función Renal",
          "paciente": "Laboratorio reporta creatinina sérica de 3.5 mg/dL y urea de 110 mg/dL",
          "pregunta": "¿Por qué la creatinina es el mejor biomarcador endógeno habitual de la tasa de filtrado glomerular?",
          "pistaDocente": "La creatinina proviene del fosfato de creatina muscular y se excreta proporcional al filtrado glomerular.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Función Renal: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Se produce a tasa constante por el músculo y se filtra libremente sin reabsorberse",
              "correcta": true,
              "feedback": "¡Correcto! La creatinina proviene del fosfato de creatina muscular y se excreta proporcional al filtrado glomerular."
            },
            {
              "texto": "Es sintetizada activamente por el túbulo distal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Se produce a tasa constante por el músculo y se filtra libremente sin reabsorberse."
            },
            {
              "texto": "Depende del consumo diario de carbohidratos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Se produce a tasa constante por el músculo y se filtra libremente sin reabsorberse."
            },
            {
              "texto": "Es degradada por las bacterias colónicas",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Se produce a tasa constante por el músculo y se filtra libremente sin reabsorberse."
            }
          ]
        }
      ]
    },
    {
      "id": "antropologia",
      "nombre": "Antropología y Sociología Médica (MED-01-06)",
      "docente": {
        "nombre": "Dra. Nidia Viviana Ruiz (Coordinadora Académica)",
        "avatar": "dra_viviana_ruiz_fiel.jpg",
        "cargo": "Coordinación General Académica"
      },
      "casos": [
        {
          "id": "antrop-01",
          "unidad": "Interculturalidad",
          "paciente": "Madre acude con niño deshidratado con diarrea asegurando que tiene 'Ojéa' y cinta roja en muñeca",
          "pregunta": "¿Cuál es la conducta deliberativa y con competencia cultural correcta del médico?",
          "pistaDocente": "El modelo deliberativo busca alianza terapéutica respetando la diversidad cultural.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Interculturalidad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Validar la preocupación materna, consensuar la hidratación oral sin descalificar su cosmovisión",
              "correcta": true,
              "feedback": "¡Correcto! El modelo deliberativo busca alianza terapéutica respetando la diversidad cultural."
            },
            {
              "texto": "Burlarse de la creencia y expulsarla del hospital",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Validar la preocupación materna, consensuar la hidratación oral sin descalificar su cosmovisión."
            },
            {
              "texto": "Aceptar que el mal de ojo es la causa biológica y no medicar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Validar la preocupación materna, consensuar la hidratación oral sin descalificar su cosmovisión."
            },
            {
              "texto": "Amenazar con denunciar a la policía",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Validar la preocupación materna, consensuar la hidratación oral sin descalificar su cosmovisión."
            }
          ]
        },
        {
          "id": "antrop-02",
          "unidad": "Interculturalidad Guaraní",
          "paciente": "Paciente rural consulta por dispepsia y afirma que 'ikambyryrujere' tras un susto fuerte",
          "pregunta": "¿Qué representa el concepto de 'Kambyryrujere' en la etnomedicina popular paraguaya?",
          "pistaDocente": "En la antropología médica de la región, los síndromes culturales expresan angustia somatizada.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Interculturalidad Guaraní: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Un síndrome cultural ligado a desplazamiento visceral o somatización tras un sobresalto emocional",
              "correcta": true,
              "feedback": "¡Correcto! En la antropología médica de la región, los síndromes culturales expresan angustia somatizada."
            },
            {
              "texto": "Una infección bacteriana aguda por Clostridium",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Un síndrome cultural ligado a desplazamiento visceral o somatización tras un sobresalto emocional."
            },
            {
              "texto": "Un trastorno psicótico primario incurable",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Un síndrome cultural ligado a desplazamiento visceral o somatización tras un sobresalto emocional."
            },
            {
              "texto": "Una patología quirúrgica de emergencia",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Un síndrome cultural ligado a desplazamiento visceral o somatización tras un sobresalto emocional."
            }
          ]
        },
        {
          "id": "antrop-03",
          "unidad": "Bioética Clínica",
          "paciente": "Paciente adulto, lúcido y hemodinámicamente estable rechaza recibir una transfusión de sangre por ser Testigo de Jehová",
          "pregunta": "¿Qué principio bioético primordial ampara su derecho a rechazar el procedimiento tras ser informado?",
          "pistaDocente": "El paciente competente tiene derecho a autodeterminación sobre su propio cuerpo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioética Clínica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Principio de Autonomía",
              "correcta": true,
              "feedback": "¡Correcto! El paciente competente tiene derecho a autodeterminación sobre su propio cuerpo."
            },
            {
              "texto": "Principio de Beneficencia paternalista",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Principio de Autonomía."
            },
            {
              "texto": "Principio de No Maleficencia coercitiva",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Principio de Autonomía."
            },
            {
              "texto": "Principio de Justicia distributiva",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Principio de Autonomía."
            }
          ]
        },
        {
          "id": "antrop-04",
          "unidad": "Bioética en Urgencias",
          "paciente": "Niño de 6 años llega exanguinado por hemorragia masiva. Padres testigos de Jehová se oponen a transfundir",
          "pregunta": "¿Cuál es el deber ético y jurídico prioritario del equipo médico en pediatría?",
          "pistaDocente": "El derecho a la vida del niño prevalece sobre las convicciones religiosas de los progenitores en riesgo vital.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioética en Urgencias: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Transfundir de inmediato invocando el interés superior del menor y el deber de salvar la vida",
              "correcta": true,
              "feedback": "¡Correcto! El derecho a la vida del niño prevalece sobre las convicciones religiosas de los progenitores en riesgo vital."
            },
            {
              "texto": "Esperar la orden de un juez mientras el niño fallece",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Transfundir de inmediato invocando el interés superior del menor y el deber de salvar la vida."
            },
            {
              "texto": "Acatar la negativa de los padres sin actuar",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Transfundir de inmediato invocando el interés superior del menor y el deber de salvar la vida."
            },
            {
              "texto": "Dar el alta contra voluntad",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Transfundir de inmediato invocando el interés superior del menor y el deber de salvar la vida."
            }
          ]
        },
        {
          "id": "antrop-05",
          "unidad": "Relación Médico-Paciente",
          "paciente": "Médico que toma decisiones unilaterales sin consultar ni explicar opciones al paciente considerándolo ignorante",
          "pregunta": "¿A qué modelo clásico de la relación médico-paciente (según Emanuel y Emanuel) corresponde?",
          "pistaDocente": "El modelo paternalista asume que el médico sabe qué es mejor sin requerir el consentimiento activo.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Relación Médico-Paciente: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Modelo Paternalista",
              "correcta": true,
              "feedback": "¡Correcto! El modelo paternalista asume que el médico sabe qué es mejor sin requerir el consentimiento activo."
            },
            {
              "texto": "Modelo Informativo (Científico)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Paternalista."
            },
            {
              "texto": "Modelo Interpretativo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Paternalista."
            },
            {
              "texto": "Modelo Deliberativo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Paternalista."
            }
          ]
        },
        {
          "id": "antrop-06",
          "unidad": "Relación Médico-Paciente",
          "paciente": "Médico que ayuda al paciente a dilucidar sus valores y elegir el mejor tratamiento de mutuo acuerdo",
          "pregunta": "¿A qué modelo óptimo de relación médico-paciente corresponde esta práctica moderna?",
          "pistaDocente": "El modelo deliberativo fomenta una toma de decisiones compartida e informada.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Relación Médico-Paciente: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Modelo Deliberativo",
              "correcta": true,
              "feedback": "¡Correcto! El modelo deliberativo fomenta una toma de decisiones compartida e informada."
            },
            {
              "texto": "Modelo Paternalista",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Deliberativo."
            },
            {
              "texto": "Modelo Tecnocrático",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Deliberativo."
            },
            {
              "texto": "Modelo Contractual puro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Modelo Deliberativo."
            }
          ]
        },
        {
          "id": "antrop-07",
          "unidad": "Confidencialidad",
          "paciente": "Compañero de trabajo de un paciente diagnosticado con Hepatitis B llama a recepción exigiendo conocer el diagnóstico",
          "pregunta": "¿Qué obligación deontológica prohíbe revelar los datos de salud del paciente a terceros?",
          "pistaDocente": "El secreto profesional es absoluto salvo consentimiento expreso o mandamiento judicial.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Confidencialidad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Secreto Médico y Derecho a la Privacidad",
              "correcta": true,
              "feedback": "¡Correcto! El secreto profesional es absoluto salvo consentimiento expreso o mandamiento judicial."
            },
            {
              "texto": "Principio de Beneficencia institucional",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Secreto Médico y Derecho a la Privacidad."
            },
            {
              "texto": "Obligación de Notificación pública",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Secreto Médico y Derecho a la Privacidad."
            },
            {
              "texto": "Ley de Libre Acceso a la Información privada",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Secreto Médico y Derecho a la Privacidad."
            }
          ]
        },
        {
          "id": "antrop-08",
          "unidad": "Epidemiología y Salud Pública",
          "paciente": "Brote de Dengue en Alto Paraná. La estrategia más costo-efectiva de salud pública es:",
          "pregunta": "¿Cuál es la medida preventiva de impacto comunitario más eficaz contra el vector Aedes aegypti?",
          "pistaDocente": "El control vectorial mediante eliminación domiciliaria de recipientes es la base del control del dengue.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Epidemiología y Salud Pública: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Eliminación de criaderos de agua estancada y movilización comunitaria",
              "correcta": true,
              "feedback": "¡Correcto! El control vectorial mediante eliminación domiciliaria de recipientes es la base del control del dengue."
            },
            {
              "texto": "Fumigación aérea indiscriminada de toda la ciudad",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Eliminación de criaderos de agua estancada y movilización comunitaria."
            },
            {
              "texto": "Administración masiva de antibióticos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Eliminación de criaderos de agua estancada y movilización comunitaria."
            },
            {
              "texto": "Distribución de analgésicos en farmacias",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Eliminación de criaderos de agua estancada y movilización comunitaria."
            }
          ]
        },
        {
          "id": "antrop-09",
          "unidad": "Determinantes Sociales",
          "paciente": "Familia que vive en asentamiento sin agua potable ni red cloacal sufre diarreas parasitarias recurrentes",
          "pregunta": "¿Bajo qué categoría de los determinantes de la salud de Lalonde se clasifica esta causa?",
          "pistaDocente": "El informe Lalonde destaca el medio ambiente y saneamiento como determinantes clave de la morbilidad.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Determinantes Sociales: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Medio Ambiente Físico y Saneamiento Básico",
              "correcta": true,
              "feedback": "¡Correcto! El informe Lalonde destaca el medio ambiente y saneamiento como determinantes clave de la morbilidad."
            },
            {
              "texto": "Biología Humana / Genética",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Medio Ambiente Físico y Saneamiento Básico."
            },
            {
              "texto": "Estilo de Vida individual puro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Medio Ambiente Físico y Saneamiento Básico."
            },
            {
              "texto": "Sistema de Organización de Servicios de Salud",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Medio Ambiente Físico y Saneamiento Básico."
            }
          ]
        },
        {
          "id": "antrop-10",
          "unidad": "Medicina Tradicional",
          "paciente": "Abuela administra té de poleo y menta a un recién nacido de 15 días causando intoxicación y apnea",
          "pregunta": "¿Por qué el uso de infusiones de hierbas (pohã ñana) está contraindicado en neonatos y lactantes pequeños?",
          "pistaDocente": "Los órganos neonatales son inmaduros para metabolizar metabolitos secundarios vegetales.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Medicina Tradicional: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Por inmadurez hepatorrenal para metabolizar alcaloides y riesgo de sobredosis tóxica",
              "correcta": true,
              "feedback": "¡Correcto! Los órganos neonatales son inmaduros para metabolizar metabolitos secundarios vegetales."
            },
            {
              "texto": "Porque las plantas no contienen principios activos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Por inmadurez hepatorrenal para metabolizar alcaloides y riesgo de sobredosis tóxica."
            },
            {
              "texto": "Porque el agua hervida destruye los glóbulos rojos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Por inmadurez hepatorrenal para metabolizar alcaloides y riesgo de sobredosis tóxica."
            },
            {
              "texto": "Porque neutralizan la leche materna",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Por inmadurez hepatorrenal para metabolizar alcaloides y riesgo de sobredosis tóxica."
            }
          ]
        },
        {
          "id": "antrop-11",
          "unidad": "Comunicación Intercultural",
          "paciente": "Paciente que solo habla guaraní asiente con la cabeza por timidez aunque no comprendió las indicaciones de su medicación",
          "pregunta": "¿Qué barrera comunicacional y qué recurso debe implementar el profesional médico?",
          "pistaDocente": "El bilingüismo y la empatía son indispensables para garantizar la adherencia en Paraguay.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Comunicación Intercultural: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Barrera lingüística: debe utilizar mediación intercultural o comunicación bilingüe clara",
              "correcta": true,
              "feedback": "¡Correcto! El bilingüismo y la empatía son indispensables para garantizar la adherencia en Paraguay."
            },
            {
              "texto": "Debe gritar en español para que entienda mejor",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Barrera lingüística: debe utilizar mediación intercultural o comunicación bilingüe clara."
            },
            {
              "texto": "Debe asumir que entendió todo y despedirlo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Barrera lingüística: debe utilizar mediación intercultural o comunicación bilingüe clara."
            },
            {
              "texto": "Debe derivarlo a psiquiatría",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Barrera lingüística: debe utilizar mediación intercultural o comunicación bilingüe clara."
            }
          ]
        },
        {
          "id": "antrop-12",
          "unidad": "Consentimiento Informado",
          "paciente": "Cirujano opera de apendicitis a un paciente despierto sin haberle explicado los riesgos ni firmado consentimiento",
          "pregunta": "¿Cuáles son los 3 elementos esenciales que componen un Consentimiento Informado válido?",
          "pistaDocente": "Información clara, voluntariedad y competencia cognitiva son los 3 pilares del consentimiento.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Consentimiento Informado: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Información suficiente y comprensible, Voluntariedad (sin coacción) y Capacidad del paciente",
              "correcta": true,
              "feedback": "¡Correcto! Información clara, voluntariedad y competencia cognitiva son los 3 pilares del consentimiento."
            },
            {
              "texto": "Firma de testigos, Pago del arancel y Aprobación policial",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Información suficiente y comprensible, Voluntariedad (sin coacción) y Capacidad del paciente."
            },
            {
              "texto": "Explicación médica compleja en latín y sumisión",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Información suficiente y comprensible, Voluntariedad (sin coacción) y Capacidad del paciente."
            },
            {
              "texto": "Presencia obligatoria de un abogado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Información suficiente y comprensible, Voluntariedad (sin coacción) y Capacidad del paciente."
            }
          ]
        },
        {
          "id": "antrop-13",
          "unidad": "Ética en la Investigación",
          "paciente": "Estudio clínico administra un nuevo fármaco experimental sin informar a los participantes sobre efectos adversos graves",
          "pregunta": "¿Qué documento fundacional de la bioética médica moderna prohíbe la experimentación humana sin consentimiento voluntario?",
          "pistaDocente": "El Código de Núremberg y la Declaración de Helsinki exigen consentimiento libre e informado absoluto.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Ética en la Investigación: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Código de Núremberg (1947)",
              "correcta": true,
              "feedback": "¡Correcto! El Código de Núremberg y la Declaración de Helsinki exigen consentimiento libre e informado absoluto."
            },
            {
              "texto": "Juramento Hipocrático clásico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código de Núremberg (1947)."
            },
            {
              "texto": "Tratado de Versalles",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código de Núremberg (1947)."
            },
            {
              "texto": "Informe Lalonde",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código de Núremberg (1947)."
            }
          ]
        },
        {
          "id": "antrop-14",
          "unidad": "Violencia y Salud",
          "paciente": "Mujer ingresa con hematomas múltiples en rostro y refiere haberse caído de la escalera con tono temeroso",
          "pregunta": "¿Cuál es el rol y la obligación ética del médico ante la sospecha fundada de violencia doméstica?",
          "pistaDocente": "El registro médico riguroso y la contención psicológica sin revictimización salvan vidas.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Violencia y Salud: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Contener en privado con empatía, documentar minuciosamente en ficha clínica y activar protocolo de protección",
              "correcta": true,
              "feedback": "¡Correcto! El registro médico riguroso y la contención psicológica sin revictimización salvan vidas."
            },
            {
              "texto": "Confrontar a la paciente delante del acompañante",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Contener en privado con empatía, documentar minuciosamente en ficha clínica y activar protocolo de protección."
            },
            {
              "texto": "Ignorar las lesiones ya que la paciente dijo que se cayó",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Contener en privado con empatía, documentar minuciosamente en ficha clínica y activar protocolo de protección."
            },
            {
              "texto": "Expulsar al acompañante a los golpes",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Contener en privado con empatía, documentar minuciosamente en ficha clínica y activar protocolo de protección."
            }
          ]
        },
        {
          "id": "antrop-15",
          "unidad": "Salud Pública: Vacunación",
          "paciente": "Padres antivacunas se niegan a aplicar las vacunas del Programa Ampliado de Inmunizaciones (PAI) a su hijo",
          "pregunta": "¿Qué concepto de salud colectiva fundamenta la obligatoriedad de la vacunación infantil?",
          "pistaDocente": "La inmunidad de rebaño protege a los inmunocomprometidos y es un deber solidario y legal en salud pública.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Salud Pública: Vacunación: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Inmunidad Colectiva (de Rebaño) y Protección del Derecho Colectivo a la Salud",
              "correcta": true,
              "feedback": "¡Correcto! La inmunidad de rebaño protege a los inmunocomprometidos y es un deber solidario y legal en salud pública."
            },
            {
              "texto": "Libertad absoluta de mercado farmacéutico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Inmunidad Colectiva (de Rebaño) y Protección del Derecho Colectivo a la Salud."
            },
            {
              "texto": "Experimentación biológica obligatoria",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Inmunidad Colectiva (de Rebaño) y Protección del Derecho Colectivo a la Salud."
            },
            {
              "texto": "Aislamiento voluntario de la población",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Inmunidad Colectiva (de Rebaño) y Protección del Derecho Colectivo a la Salud."
            }
          ]
        }
      ]
    },
    {
      "id": "laboratorios",
      "nombre": "Gestión de Laboratorio y Bioseguridad (MED-01-03)",
      "docente": {
        "nombre": "Lic. Patricia Gómez (Encargada de Laboratorios)",
        "avatar": "patricia_gomez_pixel.jpg",
        "cargo": "Coordinación de Laboratorios de Simulación y Ciencias"
      },
      "casos": [
        {
          "id": "lab-01",
          "unidad": "Fase Preanalítica",
          "paciente": "Muestra de sangre para ionograma fue agitada bruscamente y dejada al calor, resultando roja intensa por lisis celular",
          "pregunta": "¿Por qué Patricia rechaza la muestra y qué ión saldrá falsamente disparado por hemólisis?",
          "pistaDocente": "El potasio intracelular es 30 veces mayor al plasmático; la lisis eritrocitaria arruina el ionograma.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Fase Preanalítica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Muestra hemolizada con falsa hiperpotasemia (K+ intracelular elevado)",
              "correcta": true,
              "feedback": "¡Correcto! El potasio intracelular es 30 veces mayor al plasmático; la lisis eritrocitaria arruina el ionograma."
            },
            {
              "texto": "Muestra lipémica con alteración de sodio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Muestra hemolizada con falsa hiperpotasemia (K+ intracelular elevado)."
            },
            {
              "texto": "Muestra coagulada con aumento de cloro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Muestra hemolizada con falsa hiperpotasemia (K+ intracelular elevado)."
            },
            {
              "texto": "Muestra ictérica normal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Muestra hemolizada con falsa hiperpotasemia (K+ intracelular elevado)."
            }
          ]
        },
        {
          "id": "lab-02",
          "unidad": "Tubos de Extracción",
          "paciente": "Orden médica solicita hemograma completo con recuento de plaquetas y frotis de sangre periférica",
          "pregunta": "¿Qué color de tapón tiene el tubo al vacío que contiene anticoagulante EDTA dipotásico?",
          "pistaDocente": "El tubo lila con EDTA quelante de calcio preserva la morfología de células sanguíneas.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tubos de Extracción: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Tubo Tapa Lila / Morada (EDTA)",
              "correcta": true,
              "feedback": "¡Correcto! El tubo lila con EDTA quelante de calcio preserva la morfología de células sanguíneas."
            },
            {
              "texto": "Tubo Tapa Roja (Seco sin anticoagulante)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tubo Tapa Lila / Morada (EDTA)."
            },
            {
              "texto": "Tubo Tapa Celeste (Citrato de Sodio)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tubo Tapa Lila / Morada (EDTA)."
            },
            {
              "texto": "Tubo Tapa Gris (Fluoruro de Sodio)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Tubo Tapa Lila / Morada (EDTA)."
            }
          ]
        },
        {
          "id": "lab-03",
          "unidad": "Tubos de Extracción",
          "paciente": "Paciente prequirúrgico requiere coagulograma (Tiempo de Protrombina y KPTT)",
          "pregunta": "¿Qué anticoagulante líquido en proporción 1:9 contiene el tubo con tapón celeste?",
          "pistaDocente": "El citrato sódico quelante reversible de calcio es el tubo estándar para pruebas de hemostasia.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Tubos de Extracción: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Citrato de Sodio al 3.2%",
              "correcta": true,
              "feedback": "¡Correcto! El citrato sódico quelante reversible de calcio es el tubo estándar para pruebas de hemostasia."
            },
            {
              "texto": "Heparina de Litio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citrato de Sodio al 3.2%."
            },
            {
              "texto": "EDTA tripotásico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citrato de Sodio al 3.2%."
            },
            {
              "texto": "Oxalato de potasio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Citrato de Sodio al 3.2%."
            }
          ]
        },
        {
          "id": "lab-04",
          "unidad": "Fase Preanalítica",
          "paciente": "Torniquete colocado en el brazo durante más de 3 minutos mientras se busca vena dificultosa",
          "pregunta": "¿Qué artefacto bioquímico produce la estasis venosa y hemoconcentración prolongada?",
          "pistaDocente": "La estasis prolongada filtra agua hacia el intersticio concentrando solutos de gran peso molecular.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Fase Preanalítica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Falsa elevación de Proteínas totales, Calcio ligado y Enzimas",
              "correcta": true,
              "feedback": "¡Correcto! La estasis prolongada filtra agua hacia el intersticio concentrando solutos de gran peso molecular."
            },
            {
              "texto": "Falsa disminución de hematocrito",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Falsa elevación de Proteínas totales, Calcio ligado y Enzimas."
            },
            {
              "texto": "Dilución excesiva de electrolitos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Falsa elevación de Proteínas totales, Calcio ligado y Enzimas."
            },
            {
              "texto": "Disminución artificial de urea",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Falsa elevación de Proteínas totales, Calcio ligado y Enzimas."
            }
          ]
        },
        {
          "id": "lab-05",
          "unidad": "Bioseguridad",
          "paciente": "Enfermero descarta una aguja con la que extrajo sangre en una bolsa plástica común en vez del descartador rígido",
          "pregunta": "¿Qué riesgo inminente de accidente laboral genera esta práctica negligente?",
          "pistaDocente": "Los objetos cortopunzantes deben descartarse en contenedores rígidos imperforables sin reencapuchar.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioseguridad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Punción accidental y transmisión de patógenos sanguíneos (VIH, Hepatitis B y C)",
              "correcta": true,
              "feedback": "¡Correcto! Los objetos cortopunzantes deben descartarse en contenedores rígidos imperforables sin reencapuchar."
            },
            {
              "texto": "Contaminación bacteriana de la jeringa limpia",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punción accidental y transmisión de patógenos sanguíneos (VIH, Hepatitis B y C)."
            },
            {
              "texto": "Gasto excesivo de bolsas plásticas",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punción accidental y transmisión de patógenos sanguíneos (VIH, Hepatitis B y C)."
            },
            {
              "texto": "Ruptura del émbolo plástico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Punción accidental y transmisión de patógenos sanguíneos (VIH, Hepatitis B y C)."
            }
          ]
        },
        {
          "id": "lab-06",
          "unidad": "Bioseguridad",
          "paciente": "Derrame de sangre en la mesada del laboratorio tras rotura de tubo de ensayo centrífugo",
          "pregunta": "¿Qué solución desinfectante a dilución 1:10 es el agente de elección para descontaminar la superficie?",
          "pistaDocente": "El hipoclorito de sodio al 0.5% es el desinfectante de referencia contra VHB, VHC y VIH en derrames biológicos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioseguridad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Hipoclorito de Sodio (Lavandina) al 0.5% - 1%",
              "correcta": true,
              "feedback": "¡Correcto! El hipoclorito de sodio al 0.5% es el desinfectante de referencia contra VHB, VHC y VIH en derrames biológicos."
            },
            {
              "texto": "Alcohol en gel al 70%",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hipoclorito de Sodio (Lavandina) al 0.5% - 1%."
            },
            {
              "texto": "Agua oxigenada de 10 volúmenes",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hipoclorito de Sodio (Lavandina) al 0.5% - 1%."
            },
            {
              "texto": "Jabón líquido neutro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Hipoclorito de Sodio (Lavandina) al 0.5% - 1%."
            }
          ]
        },
        {
          "id": "lab-07",
          "unidad": "Residuos Hospitalarios",
          "paciente": "Algodones y gasas empapadas con sangre de una curación deben ser clasificados según su bioseguridad",
          "pregunta": "¿En qué bolsa y código de color deben desecharse los residuos patológicos biológicos?",
          "pistaDocente": "La bolsa roja es la convención universal hospitalaria para material biológico con riesgo infeccioso.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Residuos Hospitalarios: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Bolsa Roja (Residuos Biopatogénicos / Peligrosos)",
              "correcta": true,
              "feedback": "¡Correcto! La bolsa roja es la convención universal hospitalaria para material biológico con riesgo infeccioso."
            },
            {
              "texto": "Bolsa Negra (Residuos Comunes)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bolsa Roja (Residuos Biopatogénicos / Peligrosos)."
            },
            {
              "texto": "Bolsa Amarilla (Residuos Químicos)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bolsa Roja (Residuos Biopatogénicos / Peligrosos)."
            },
            {
              "texto": "Caja de cartón blanca",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Bolsa Roja (Residuos Biopatogénicos / Peligrosos)."
            }
          ]
        },
        {
          "id": "lab-08",
          "unidad": "Fase Preanalítica",
          "paciente": "Extracción para glucemia basal en paciente que consumió café con azúcar y medialuna 30 minutos antes",
          "pregunta": "¿Qué conducta debe asumir el laboratorio ante el incumplimiento del ayuno requerido de 8 horas?",
          "pistaDocente": "El ayuno estandarizado de 8 a 12 horas es requisito crítico para evaluar el metabolismo hidrocarbonado.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Fase Preanalítica: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Reprogramar la extracción advirtiendo que la glucemia e insulina saldrán artefactadas por la ingesta",
              "correcta": true,
              "feedback": "¡Correcto! El ayuno estandarizado de 8 a 12 horas es requisito crítico para evaluar el metabolismo hidrocarbonado."
            },
            {
              "texto": "Realizar el análisis y restar 50 mg/dL al resultado a ojo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Reprogramar la extracción advirtiendo que la glucemia e insulina saldrán artefactadas por la ingesta."
            },
            {
              "texto": "Procesar la muestra sin registrar la transgresión",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Reprogramar la extracción advirtiendo que la glucemia e insulina saldrán artefactadas por la ingesta."
            },
            {
              "texto": "Administrar insulina al paciente antes de extraer",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Reprogramar la extracción advirtiendo que la glucemia e insulina saldrán artefactadas por la ingesta."
            }
          ]
        },
        {
          "id": "lab-09",
          "unidad": "Accidente Biológico",
          "paciente": "Estudiante de medicina se pincha un dedo con una aguja con sangre al intentar reencapucharla",
          "pregunta": "¿Cuál es la primera medida inmediata que debe realizar el estudiante en el lavatorio?",
          "pistaDocente": "El lavado con agua y jabón arrastra el inóculo; nunca se debe reencapuchar agujas ni exprimir con violencia.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Accidente Biológico: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Lavar la herida inmediatamente con abundante agua y jabón dejando sangrar la zona",
              "correcta": true,
              "feedback": "¡Correcto! El lavado con agua y jabón arrastra el inóculo; nunca se debe reencapuchar agujas ni exprimir con violencia."
            },
            {
              "texto": "Apretarse con un torniquete proximal apretado",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lavar la herida inmediatamente con abundante agua y jabón dejando sangrar la zona."
            },
            {
              "texto": "Chupar la sangre de la herida con la boca",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lavar la herida inmediatamente con abundante agua y jabón dejando sangrar la zona."
            },
            {
              "texto": "Colocarse lavandina pura en la herida",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Lavar la herida inmediatamente con abundante agua y jabón dejando sangrar la zona."
            }
          ]
        },
        {
          "id": "lab-10",
          "unidad": "Bioseguridad",
          "paciente": "Técnico procesa muestra respiratoria con sospecha de Tuberculosis activa (baciloscopía / Ziehl-Neelsen)",
          "pregunta": "¿Qué equipo de protección respiratoria con filtro de partículas de alta eficiencia debe utilizar?",
          "pistaDocente": "El bacilo de Koch se transmite por aerosoles; los barbijos quirúrgicos comunes no sellan ni filtran partículas < 5 micras.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Bioseguridad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Mascarilla / Respirador N95 o FFP2",
              "correcta": true,
              "feedback": "¡Correcto! El bacilo de Koch se transmite por aerosoles; los barbijos quirúrgicos comunes no sellan ni filtran partículas < 5 micras."
            },
            {
              "texto": "Barbijo quirúrgico triple hoja común",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Mascarilla / Respirador N95 o FFP2."
            },
            {
              "texto": "Barbijo de tela casero",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Mascarilla / Respirador N95 o FFP2."
            },
            {
              "texto": "Máscara de oxígeno con reservorio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Mascarilla / Respirador N95 o FFP2."
            }
          ]
        }
      ]
    },
    {
      "id": "ciclos",
      "nombre": "Ciclos de Formación y Medicina Interna",
      "docente": {
        "nombre": "Dr. Ángel Adrián Gómez Rosso",
        "avatar": "dr_angel_pixel.jpg",
        "cargo": "Coordinación de Ciclos de Formación Médica"
      },
      "casos": [
        {
          "id": "ciclo-01",
          "unidad": "Triaje en Urgencias",
          "paciente": "Llegan 2 pacientes: uno con sospecha de infarto opresivo diaforético y otro con luxación dolorosa de hombro",
          "pregunta": "¿Cuál es el criterio clínico y bioético de priorización médica que debe aplicarse?",
          "pistaDocente": "El triaje médico prioriza riesgo de muerte sobre el dolor subjetivo articular.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Triaje en Urgencias: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Priorizar al dolor torácico por riesgo vital inmediato (Síndrome Coronario Agudo)",
              "correcta": true,
              "feedback": "¡Correcto! El triaje médico prioriza riesgo de muerte sobre el dolor subjetivo articular."
            },
            {
              "texto": "Atender primero por orden de llegada al que se anotó antes",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Priorizar al dolor torácico por riesgo vital inmediato (Síndrome Coronario Agudo)."
            },
            {
              "texto": "Atender a la luxación porque grita más fuerte de dolor",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Priorizar al dolor torácico por riesgo vital inmediato (Síndrome Coronario Agudo)."
            },
            {
              "texto": "Derivar a ambos a otro nosocomio",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Priorizar al dolor torácico por riesgo vital inmediato (Síndrome Coronario Agudo)."
            }
          ]
        },
        {
          "id": "ciclo-02",
          "unidad": "Reanimación Básica (BLS)",
          "paciente": "Hombre colapsa en el pasillo de la facultad, no responde a estímulos verbales ni dolorosos y no respira",
          "pregunta": "¿Cuál es el primer paso inmediato tras constatar la inconsciencia y ausencia de respiración normal?",
          "pistaDocente": "En el paro cardiorrespiratorio el inicio precoz de RCP de alta calidad salva vidas.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Reanimación Básica (BLS): hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Pedir ayuda, activar el sistema de emergencias, solicitar un DEA e iniciar compresiones torácicas",
              "correcta": true,
              "feedback": "¡Correcto! En el paro cardiorrespiratorio el inicio precoz de RCP de alta calidad salva vidas."
            },
            {
              "texto": "Tomar la presión arterial con manguito",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pedir ayuda, activar el sistema de emergencias, solicitar un DEA e iniciar compresiones torácicas."
            },
            {
              "texto": "Buscar una vena periférica para colocar suero",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pedir ayuda, activar el sistema de emergencias, solicitar un DEA e iniciar compresiones torácicas."
            },
            {
              "texto": "Sentar al paciente y darle agua",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Pedir ayuda, activar el sistema de emergencias, solicitar un DEA e iniciar compresiones torácicas."
            }
          ]
        },
        {
          "id": "ciclo-03",
          "unidad": "RCP de Alta Calidad",
          "paciente": "Estudiante realiza maniobras de masaje cardíaco en un adulto en paro cardiorrespiratorio",
          "pregunta": "¿Cuáles son los parámetros de frecuencia y profundidad de compresiones torácicas recomendados por la AHA?",
          "pistaDocente": "100-120 cpm y 5 cm de profundidad garantizan gasto cardíaco mínimo para perfusión cerebral y coronaria.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para RCP de Alta Calidad: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "100 a 120 compresiones por minuto con al menos 5 cm de profundidad permitiendo reexpansión torácica",
              "correcta": true,
              "feedback": "¡Correcto! 100-120 cpm y 5 cm de profundidad garantizan gasto cardíaco mínimo para perfusión cerebral y coronaria."
            },
            {
              "texto": "60 compresiones por minuto con 2 cm de profundidad",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es 100 a 120 compresiones por minuto con al menos 5 cm de profundidad permitiendo reexpansión torácica."
            },
            {
              "texto": "160 compresiones superficiales muy rápidas",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es 100 a 120 compresiones por minuto con al menos 5 cm de profundidad permitiendo reexpansión torácica."
            },
            {
              "texto": "Solo ventilación boca a boca sin comprimir",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es 100 a 120 compresiones por minuto con al menos 5 cm de profundidad permitiendo reexpansión torácica."
            }
          ]
        },
        {
          "id": "ciclo-04",
          "unidad": "Signos Vitales",
          "paciente": "Politraumático por accidente en moto presenta PA 80/40 mmHg, FC 130 lpm, frialdad acral y relleno capilar > 4 seg",
          "pregunta": "¿Qué cuadro hemodinámico crítico de shock presenta con mayor probabilidad?",
          "pistaDocente": "La tríada de hipotensión, taquicardia refleja y palidez acral indica pérdida intravascular aguda masiva.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Signos Vitales: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Shock Hipovolémico Hemorrágico",
              "correcta": true,
              "feedback": "¡Correcto! La tríada de hipotensión, taquicardia refleja y palidez acral indica pérdida intravascular aguda masiva."
            },
            {
              "texto": "Shock Cardiogénico puro",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Shock Hipovolémico Hemorrágico."
            },
            {
              "texto": "Shock Anafiláctico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Shock Hipovolémico Hemorrágico."
            },
            {
              "texto": "Shock Neurógeno caliente",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Shock Hipovolémico Hemorrágico."
            }
          ]
        },
        {
          "id": "ciclo-05",
          "unidad": "Trauma - ABCDE",
          "paciente": "Ingresa herido por arma blanca en tórax. En la mnemotecnia ABCDE del trauma de ATLS, ¿qué evalúa la letra 'A'?",
          "pregunta": "¿Cuál es la máxima prioridad evaluada en el paso 'A' del trauma?",
          "pistaDocente": "Airway: asegurar permeabilidad de vía aérea protegiendo siempre la columna cervical.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Trauma - ABCDE: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Vía Aérea permeable con control de la columna cervical",
              "correcta": true,
              "feedback": "¡Correcto! Airway: asegurar permeabilidad de vía aérea protegiendo siempre la columna cervical."
            },
            {
              "texto": "Auscultación de ruidos cardíacos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vía Aérea permeable con control de la columna cervical."
            },
            {
              "texto": "Acceso venoso periférico",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vía Aérea permeable con control de la columna cervical."
            },
            {
              "texto": "Administración de antibióticos",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Vía Aérea permeable con control de la columna cervical."
            }
          ]
        },
        {
          "id": "ciclo-06",
          "unidad": "Shock Anafiláctico",
          "paciente": "Paciente alérgico a la penicilina recibe inyección y en 3 minutos desarrolla estridor laríngeo, urticaria e hipotensión",
          "pregunta": "¿Cuál es el fármaco de primera línea que debe administrarse de inmediato por vía intramuscular?",
          "pistaDocente": "La adrenalina IM es el único fármaco que revierte el broncoespasmo y el colapso vascular en minutos.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Shock Anafiláctico: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Adrenalina (Epinefrina) 1:1000 intramuscular en cara anterolateral del muslo",
              "correcta": true,
              "feedback": "¡Correcto! La adrenalina IM es el único fármaco que revierte el broncoespasmo y el colapso vascular en minutos."
            },
            {
              "texto": "Hidrocortisona endovenosa en bolo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Adrenalina (Epinefrina) 1:1000 intramuscular en cara anterolateral del muslo."
            },
            {
              "texto": "Difenhidramina vía oral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Adrenalina (Epinefrina) 1:1000 intramuscular en cara anterolateral del muslo."
            },
            {
              "texto": "Salbutamol en aerosol solo",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Adrenalina (Epinefrina) 1:1000 intramuscular en cara anterolateral del muslo."
            }
          ]
        },
        {
          "id": "ciclo-07",
          "unidad": "Sistema de Triaje RAC",
          "paciente": "Paciente con cefalea leve de 2 días de evolución sin signos de alarma ingresa a la guardia colmada",
          "pregunta": "¿Qué color del sistema Manchester / RAC le corresponde y cuál es el tiempo de espera estimado?",
          "pistaDocente": "La cefalea crónica sin banderas rojas es de prioridad baja (verde/azul).",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Sistema de Triaje RAC: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Código Verde o Azul (No urgente, tiempo de espera hasta 120-240 minutos)",
              "correcta": true,
              "feedback": "¡Correcto! La cefalea crónica sin banderas rojas es de prioridad baja (verde/azul)."
            },
            {
              "texto": "Código Rojo (Atención inmediata con riesgo de muerte)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código Verde o Azul (No urgente, tiempo de espera hasta 120-240 minutos)."
            },
            {
              "texto": "Código Naranja (Emergencia con espera máxima de 10 min)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código Verde o Azul (No urgente, tiempo de espera hasta 120-240 minutos)."
            },
            {
              "texto": "Código Amarillo (Urgencia de 30 min)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Código Verde o Azul (No urgente, tiempo de espera hasta 120-240 minutos)."
            }
          ]
        },
        {
          "id": "ciclo-08",
          "unidad": "Coma y Glasgow",
          "paciente": "Paciente con trauma de cráneo abre los ojos al dolor (2), emite sonidos incomprensibles (2) y flexiona anormalmente (3)",
          "pregunta": "¿Cuál es el puntaje en la Escala de Coma de Glasgow y qué decisión de vía aérea impone?",
          "pistaDocente": "Un puntaje de Glasgow ≤ 8 define coma e indicación obligatoria de aislamiento de vía aérea.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Coma y Glasgow: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Glasgow 7/15: Impone intubación orotraqueal inmediata para protección de la vía aérea",
              "correcta": true,
              "feedback": "¡Correcto! Un puntaje de Glasgow ≤ 8 define coma e indicación obligatoria de aislamiento de vía aérea."
            },
            {
              "texto": "Glasgow 14/15: Observación domiciliaria",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glasgow 7/15: Impone intubación orotraqueal inmediata para protección de la vía aérea."
            },
            {
              "texto": "Glasgow 11/15: Oxígeno por bigotera",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glasgow 7/15: Impone intubación orotraqueal inmediata para protección de la vía aérea."
            },
            {
              "texto": "Glasgow 3/15: Paciente fallecido",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Glasgow 7/15: Impone intubación orotraqueal inmediata para protección de la vía aérea."
            }
          ]
        },
        {
          "id": "ciclo-09",
          "unidad": "Semiología Respiratoria",
          "paciente": "Auscultación en base pulmonar derecha con matidez a la percusión, abolición de murmullo vesicular y broncofonía",
          "pregunta": "¿Qué síndrome pleuropulmonar clásico corresponde al derrame pleural libre?",
          "pistaDocente": "El líquido en la pleura amortigua la transmisión del sonido (silencio auscultatorio) y da matidez percutoria.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Semiología Respiratoria: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Síndrome de Derrame Pleural",
              "correcta": true,
              "feedback": "¡Correcto! El líquido en la pleura amortigua la transmisión del sonido (silencio auscultatorio) y da matidez percutoria."
            },
            {
              "texto": "Síndrome de Neumotórax",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Síndrome de Derrame Pleural."
            },
            {
              "texto": "Atelectasia obstructiva pura",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Síndrome de Derrame Pleural."
            },
            {
              "texto": "Enfisema pulmonar bilateral",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Síndrome de Derrame Pleural."
            }
          ]
        },
        {
          "id": "ciclo-10",
          "unidad": "Desfibrilación Automática",
          "paciente": "Durante el uso del DEA en un colapso súbito, el equipo analiza el ritmo y anuncia: '¡Se aconseja descarga!'",
          "pregunta": "¿Cuáles son los dos únicos ritmos de paro desfibrilables por el DEA?",
          "pistaDocente": "FV y TVSP son los ritmos desorganizados que se resetean con la descarga eléctrica sincronizada del DEA.",
          "semiologia": {
            "signosVitales": {
              "pa": "120/80 mmHg",
              "fc": "76 lpm",
              "fr": "16 rpm",
              "temp": "36.6 °C",
              "sato2": "98%"
            },
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": "Evaluación dirigida para Desfibrilación Automática: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": "— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
              "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
              "chest": "Excursión torácica simétrica sin tiraje intercostal.",
              "arm": "Pulsos periféricos radiales y braquiales simétricos.",
              "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
          },
          "opciones": [
            {
              "texto": "Fibrilación Ventricular (FV) y Taquicardia Ventricular sin Pulso (TVSP)",
              "correcta": true,
              "feedback": "¡Correcto! FV y TVSP son los ritmos desorganizados que se resetean con la descarga eléctrica sincronizada del DEA."
            },
            {
              "texto": "Asistolia y Actividad Eléctrica sin Pulso (AESP)",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fibrilación Ventricular (FV) y Taquicardia Ventricular sin Pulso (TVSP)."
            },
            {
              "texto": "Bradicardia sinusal y Taquicardia sinusal",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fibrilación Ventricular (FV) y Taquicardia Ventricular sin Pulso (TVSP)."
            },
            {
              "texto": "Fibrilación Auricular controlada",
              "correcta": false,
              "feedback": "Incorrecto. La respuesta clínica correcta es Fibrilación Ventricular (FV) y Taquicardia Ventricular sin Pulso (TVSP)."
            }
          ]
        }
      ]
    }
  ]
};

  // Algoritmo de barajado Fisher-Yates puro
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getFlatCases() {
    const list = [];
    BANCO_UPMS_PRIMER_ANHO.materias.forEach(mat => {
      mat.casos.forEach(caso => {
        list.push({
          ...caso,
          materiaId: mat.id,
          materiaNombre: mat.nombre,
          docente: { ...mat.docente }
        });
      });
    });
    return list;
  }

  // Obtiene una rotación aleatoria de N casos con sus 4 opciones barajadas
  function getRandomRotation(count = 10) {
    const all = getFlatCases();
    const shuffledCases = shuffleArray(all).slice(0, count);

    // Barajar también las opciones dentro de cada caso para evitar copia de orden
    return shuffledCases.map(c => ({
      ...c,
      opciones: shuffleArray(c.opciones)
    }));
  }

  return {
    version: "v1.3.0",
    raw: BANCO_UPMS_PRIMER_ANHO,
    getFlatCases,
    getRandomRotation,
    totalQuestions: 100
  };
});
