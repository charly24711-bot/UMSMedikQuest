// BANCO DE CASOS CLÍNICOS REALES BASADOS EN EL PROGRAMA OFICIAL DE 1° AÑO - UPMS
// Materias: Anatomía I (MED-01-01), Bioquímica Clínica I (MED-01-03) y Antropología Médica (MED-01-06)

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
        },
        {
          id: "bioq-02",
          unidad: "Unidad VIII: Fase Preanalítica de Laboratorio",
          paciente: "El interno extrae sangre venosa para perfil lipídico y enzimas cardíacas. Utiliza una aguja de calibre muy fino (25G) aspirando con excesiva fuerza. El laboratorio rechaza el tubo porque el suero está teñido de color rojizo.",
          pregunta: "¿Qué error preanalítico invalidó la muestra y qué electrolito intracelular se elevará falsamente?",
          pistaDocente: "La rotura mecánica de los glóbulos rojos libera grandes cantidades del catión más abundante del LIC...",
          opciones: [
            { texto: "Hemólisis de la muestra con falsa elevación de Potasio (K+)", correcta: true, feedback: "¡Exacto! La hemólisis libera la alta concentración de potasio intracelular (~150 mEq/L) al suero, falseando el ionograma." },
            { texto: "Muestra lipémica con elevación de Sodio (Na+)", correcta: false, feedback: "Incorrecto. El sodio es extracelular y la lipemia da aspecto lechoso, no rojizo." },
            { texto: "Coagulación precoz por exceso de EDTA", correcta: false, feedback: "Incorrecto. El EDTA quelaría el calcio pero no generaría suero rojizo." },
            { texto: "Ictericia preanalítica por degradación de glucosa", correcta: false, feedback: "Incorrecto. La ictericia tiñe de amarillo anaranjado por bilirrubina." }
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
        cargo: "Coordinación Académica y Medicina Social"
      },
      casos: [
        {
          id: "antrop-01",
          unidad: "Unidad III: Interculturalidad en Salud y Pluralismo Médico",
          paciente: "Madre de una comunidad rural acude con su hijo de 3 años deshidratado. Manifiesta que el niño tiene 'Ojéa / Mal de Ojo' y que antes de venir al hospital lo llevó al curandero para que le rece y le frote ruda. El médico de guardia se burla de su creencia y la madre se niega a internar al niño.",
          pregunta: "Desde la perspectiva de la competencia cultural y la relación médico-paciente (Modelo Deliberativo), ¿cuál debió ser la conducta profesional?",
          pistaDocente: "Recuerda que la interculturalidad no es imponer la biomedicina, sino construir un puente de diálogo respetando los saberes populares...",
          opciones: [
            { texto: "Validar y respetar la preocupación de la madre, explicar empáticamente la deshidratación y acordar el tratamiento médico sin descalificar sus creencias", correcta: true, feedback: "¡Excelente actitud médica! La competencia cultural busca el diálogo intercultural y la alianza terapéutica con la familia para garantizar la salud del niño." },
            { texto: "Expulsar a la madre por negligencia infantil y llamar a la policía", correcta: false, feedback: "Incorrecto. Criminalizar la creencia cultural destruye el acceso al sistema de salud." },
            { texto: "Darle la razón en que el mal de ojo es la causa biológica y no medicarlo", correcta: false, feedback: "Incorrecto. El médico no debe abandonar la evidencia científica ni la rehidratación urgente." },
            { texto: "Ignorar la conversación y medicarlo por la fuerza sin consentimiento", correcta: false, feedback: "Incorrecto. Viola el consentimiento informado y los principios bioéticos de autonomía y beneficencia." }
          ]
        }
      ]
    }
  ]
};
