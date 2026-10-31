// Data layer: UPMS 1st Year Clinical Cases
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
    materias: [
      {
        id: "anatomia",
        nombre: "Anatomía Humana: Descriptiva y Funcional I (MED-01-01)",
        docente: {
          nombre: "Dr. Ernaldo René Amarilla (Director de Medicina)",
          avatar: "dr_rene_amarilla_pixel.jpg",
          cargo: "Cátedra de Anatomía y Cirugía"
        },
        casos: [
          {
            id: "anat-01",
            unidad: "Unidad IV: Miembro Superior y Plexo Braquial",
            paciente: "Motociclista de 26 años sufre caída sobre su hombro derecho. Al examen físico presenta incapacidad para extender la muñeca y los dedos ('muñeca caída' o en gota), con pérdida de sensibilidad en el dorso del primer espacio interóseo.",
            pregunta: "¿Qué estructura nerviosa del plexo braquial resultó lesionada por la fractura de la diáfisis humeral?",
            pistaDocente: "Recuerda el canal de torsión en la cara posterior del húmero... inerva a los extensores del antebrazo y mano.",
            opciones: [
              { texto: "Nervio Radial", correcta: true, feedback: "¡Correcto! El nervio radial transcurre por el canal de torsión humeral y su lesión produce la clásica 'mano caída o en gota'." },
              { texto: "Nervio Mediano", correcta: false, feedback: "Incorrecto. La lesión del mediano causa la 'mano del predicador' o síndrome del túnel carpiano." },
              { texto: "Nervio Cubital / Ulnar", correcta: false, feedback: "Incorrecto. La lesión del nervio cubital ocasiona la 'mano en garra'." },
              { texto: "Nervio Musculocutáneo", correcta: false, feedback: "Incorrecto. El musculocutáneo inerva el bíceps y braquial anterior (flexión del codo)." }
            ]
          },
          {
            id: "anat-02",
            unidad: "Unidad V: Miembro Inferior y Articulaciones",
            paciente: "Futbolista de 20 años sufre torsión brusca de rodilla con valgo forzado. Manifiesta chasquido audible y desplazamiento de la tibia hacia adelante respecto al fémur durante la maniobra del cajón anterior.",
            pregunta: "¿Qué ligamento estabilizador intrínseco de la rodilla sufrió rotura completa?",
            pistaDocente: "Este ligamento se inserta en el área intercondílea anterior de la tibia y evita su traslación anterior.",
            opciones: [
              { texto: "Ligamento Cruzado Anterior (LCA)", correcta: true, feedback: "¡Excelente diagnóstico! El LCA previene el desplazamiento anterior de la tibia sobre el fémur." },
              { texto: "Ligamento Cruzado Posterior (LCP)", correcta: false, feedback: "Incorrecto. El LCP evita el desplazamiento posterior de la tibia (cajón posterior positivo)." },
              { texto: "Ligamento Colateral Medial (LCM)", correcta: false, feedback: "Incorrecto. El LCM limita el estrés en valgo, pero no el desplazamiento anteroposterior." },
              { texto: "Menisco Medial en asa de cubo", correcta: false, feedback: "Incorrecto. Los meniscos absorben impactos y dan congruencia, pero no limitan la traslación pura." }
            ]
          }
        ]
      },
      {
        id: "bioquimica",
        nombre: "Bioquímica Clínica y Laboratorial I (MED-01-03)",
        docente: {
          nombre: "Dra. Antonella Antico (Coordinación de Práctica)",
          avatar: "dra_antonella_antico_pixel.jpg",
          cargo: "Cátedra de Bioquímica y Fisiopatología"
        },
        casos: [
          {
            id: "bioq-01",
            unidad: "Unidad II: Equilibrio Ácido-Base y Gases en Sangre",
            paciente: "Paciente de 19 años con Diabetes Tipo 1 ingresa a Urgencias confuso, con respiración rápida y profunda (de Kussmaul). Gasometría arterial: pH 7.22 | HCO3-: 11 mEq/L (VN: 22-26) | pCO2: 28 mmHg (VN: 35-45).",
            pregunta: "¿Cuál es el trastorno ácido-base primario y su mecanismo de compensación respiratoria?",
            pistaDocente: "El bicarbonato está marcadamente disminuido por consumo de cuerpos cetónicos y el pulmón hiperventila para barrer CO2...",
            opciones: [
              { texto: "Acidosis Metabólica con compensación respiratoria (hiperventilación)", correcta: true, feedback: "¡Brillante! Se trata de una cetoacidosis diabética: pH < 7.35 por caída de HCO3-, compensada con hiperventilación para bajar la pCO2." },
              { texto: "Alcalosis Respiratoria primaria", correcta: false, feedback: "Incorrecto. El pH está en 7.22 (acidemia franca, no alcalosis)." },
              { texto: "Acidosis Respiratoria pura por retención de CO2", correcta: false, feedback: "Incorrecto. La pCO2 está en 28 mmHg (baja por compensación, no retenida)." },
              { texto: "Alcalosis Metabólica descompensada", correcta: false, feedback: "Incorrecto. El bicarbonato está consumido (11 mEq/L), típico de exceso de ácidos fijos." }
            ]
          }
        ]
      },
      {
        id: "laboratorios",
        nombre: "Gestión de Laboratorio y Bioseguridad (MED-01-03)",
        docente: {
          nombre: "Lic. Patricia Gómez (Encargada de Laboratorios)",
          avatar: "patricia_gomez_pixel.jpg",
          cargo: "Coordinación de Laboratorios de Simulación y Ciencias"
        },
        casos: [
          {
            id: "lab-01",
            unidad: "Unidad VIII: Bioseguridad y Fase Preanalítica",
            paciente: "Para la práctica de bioquímica, un estudiante extrae sangre en tubo sin anticoagulante para dosar electrolitos, pero agita bruscamente el tubo y lo deja al sol. El suero resultante queda con coloración rojiza intensa por hemólisis.",
            pregunta: "Como encargada de laboratorio, ¿por qué Patricia debe rechazar la muestra y qué ion estará falsamente elevado?",
            pistaDocente: "El potasio se encuentra en concentraciones 30 veces mayores dentro del glóbulo rojo que en el plasma...",
            opciones: [
              { texto: "Muestra hemolizada con falsa elevación de Potasio (K+)", correcta: true, feedback: "¡Exacto! La hemólisis libera el K+ intracelular, arruinando la confiabilidad del ionograma." },
              { texto: "Muestra lipémica con alteración de sodio", correcta: false, feedback: "Incorrecto. El aspecto rojizo es por hemoglobina libre, no por lípidos." },
              { texto: "Muestra coagulada con aumento de cloro", correcta: false, feedback: "Incorrecto. Los tubos de suero deben coagular, el problema fue la lisis celular." },
              { texto: "Muestra ictérica por bilirrubina", correcta: false, feedback: "Incorrecto. La ictericia da un tono amarillo verdoso." }
            ]
          }
        ]
      },
      {
        id: "ciclos",
        nombre: "Ciclos de Formación y Medicina Interna",
        docente: {
          nombre: "Dr. Ángel Adrián Gómez Rosso",
          avatar: "dr_angel_pixel.jpg",
          cargo: "Coordinación de Ciclos de Formación"
        },
        casos: [
          {
            id: "ciclo-01",
            unidad: "Unidad V: Relación Médico-Paciente y Triaje",
            paciente: "En el área de urgencias de la facultad ingresan simultáneamente dos pacientes: uno con sospecha de luxación anterior de hombro con mucho dolor pero hemodinámicamente estable, y otro con dolor torácico opresivo, diaforesis y disnea.",
            pregunta: "¿Cuál es el criterio clínico y bioético de priorización (triaje) que debe aplicar el médico?",
            pistaDocente: "Evalúa el riesgo de compromiso vital inmediato frente al dolor articular...",
            opciones: [
              { texto: "Priorizar al paciente con dolor torácico para descartar síndrome coronario agudo de riesgo vital", correcta: true, feedback: "¡Criterio médico impecable! El dolor torácico con disnea representa riesgo de paro, mientras que la luxación es urgente pero no compromete la vida en minutos." },
              { texto: "Atender primero al que llegó antes por orden de llegada estricto", correcta: false, feedback: "Incorrecto. El triaje médico se basa en riesgo vital y gravedad, no en turno administrativo." },
              { texto: "Atender a la luxación porque grita de dolor", correcta: false, feedback: "Incorrecto. La intensidad subjetiva del dolor no siempre correlaciona con riesgo vital." },
              { texto: "Derivar a ambos a otro hospital", correcta: false, feedback: "Incorrecto. El médico tiene la obligación ética y legal de estabilizar en urgencias." }
            ]
          }
        ]
      },
      {
        id: "antropologia",
        nombre: "Antropología y Sociología Médica (MED-01-06)",
        docente: {
          nombre: "Dra. Nidia Viviana Ruiz (Coordinadora Académica)",
          avatar: "dra_viviana_ruiz_fiel.jpg",
          cargo: "Coordinación General Académica"
        },
        casos: [
          {
            id: "antrop-01",
            unidad: "Unidad III: Interculturalidad y Modelo Biopsicosocial",
            paciente: "Una madre acude con su niño deshidratado asegurando que tiene 'Ojéa / Mal de Ojo' y fue tratada por un yuyero. Si el médico descalifica su creencia, la madre se retira sin permitir el tratamiento.",
            pregunta: "Desde el modelo deliberativo y la competencia cultural, ¿cómo debe actuar el médico?",
            pistaDocente: "La interculturalidad busca tender un puente de confianza sin abandonar la terapia de rehidratación...",
            opciones: [
              { texto: "Escuchar con empatía, validar la preocupación materna y consensuar el suero oral sin confrontar su cosmovisión", correcta: true, feedback: "¡Brillante! El modelo deliberativo genera alianza terapéutica y salva vidas respetando la diversidad cultural." },
              { texto: "Burlarse de la creencia y expulsar a la familia", correcta: false, feedback: "Incorrecto. Destruye el acceso a la salud y pone en peligro al menor." },
              { texto: "Aceptar que el mal de ojo es la causa biológica y no hidratar", correcta: false, feedback: "Incorrecto. El médico no debe renunciar a la ciencia médica." },
              { texto: "Tratar al niño por la fuerza con intervención policial", correcta: false, feedback: "Incorrecto. Rompe los principios bioéticos de beneficencia y autonomía." }
            ]
          }
        ]
      }
    ]
  };

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

  return {
    raw: BANCO_UPMS_PRIMER_ANHO,
    getFlatCases
  };
});
