# -*- coding: utf-8 -*-
import json
import os

print("Iniciando compilación del banco de 100 preguntas clínicas...")

# ==========================================
# 1. ANATOMÍA HUMANA I (40 CASOS)
# ==========================================
anat = [
    # 01-10 (Miembro Superior y Plexo Braquial)
    ("anat-01", "Miembro Superior", "Motociclista con fractura diafisaria de húmero y mano caída", "¿Qué nervio del plexo braquial está lesionado en el canal de torsión?", "Nervio Radial", ["Nervio Mediano", "Nervio Cubital", "Nervio Musculocutáneo"], "Pasa por el canal de torsión humeral."),
    ("anat-02", "Miembro Superior", "Caída con mano en hiperextensión y dolor en fondo de tabaquera anatómica", "¿Qué hueso del carpo presenta mayor riesgo de necrosis avascular?", "Hueso Escafoides", ["Hueso Semilunar", "Hueso Piramidal", "Hueso Trapecio"], "Forma el piso de la tabaquera anatómica."),
    ("anat-03", "Miembro Superior", "Parestesias nocturnas en 3 primeros dedos y atrofia tenar", "¿Qué nervio está comprimido en el túnel carpiano?", "Nervio Mediano", ["Nervio Cubital", "Nervio Radial", "Nervio Axilar"], "Inerva la eminencia tenar y cara palmar de los 3 primeros dedos."),
    ("anat-04", "Miembro Superior", "Incapacidad para abducir brazo >15° tras trauma axilar y anestesia en muñón", "¿Qué nervio que rodea el cuello quirúrgico humeral está afectado?", "Nervio Axilar (Circunflejo)", ["Nervio Supraescapular", "Nervio Torácico Largo", "Nervio Subescapular"], "Inerva al músculo deltoides."),
    ("anat-05", "Miembro Superior", "Dolor sordo al levantar brazo sobre cabeza, prueba de Jobe positiva", "¿Qué tendón del manguito rotador se desgarra con mayor frecuencia?", "Tendón del Supraespinoso", ["Tendón del Subescapular", "Tendón del Infraespinoso", "Tendón del Redondo Menor"], "Pasa por el estrecho espacio subacromial."),
    ("anat-06", "Miembro Superior", "Niño con tirón brusco del brazo ('codo de niñera') en pronación fija", "¿Qué ligamento se subluxa interponiéndose en la cabeza radial?", "Ligamento Anular del Radio", ["Ligamento Colateral Cubital", "Membrana Interósea", "Ligamento Cuadrado"], "Rodea como anillo a la cabeza del radio."),
    ("anat-07", "Miembro Superior", "Corte en muñeca medial, signo de Froment positivo y mano en garra", "¿Qué nervio motor de los músculos interóseos resultó seccionado?", "Nervio Cubital (Ulnar)", ["Nervio Mediano", "Nervio Radial", "Nervio Músculocutáneo"], "Pasa por el canal de Guyón e inerva interóseos y aductor del pulgar."),
    ("anat-08", "Pared Torácica", "Linfadenectomía axilar con escápula alada al empujar pared", "¿Qué nervio que desciende por la cara lateral del tórax fue dañado?", "Nervio Torácico Largo (de Bell)", ["Nervio Toracodorsal", "Nervio Accesorio (XI)", "Nervio Frénico"], "Inerva al músculo serrato anterior."),
    ("anat-09", "Vascularización", "Hemorragia en pliegue del codo, cirujano comprime canal bicipital interno", "¿Qué arteria principal del brazo transcurre medial al bíceps?", "Arteria Braquial (Humeral)", ["Arteria Axilar", "Arteria Radial", "Arteria Interósea"], "Continúa a la arteria axilar y da pulsos en el brazo."),
    ("anat-10", "Cintura Escapular", "Fractura de tercio medio de clavícula con fragmento medial elevado", "¿Qué músculo eleva activamente el fragmento clavicular medial?", "Músculo Esternocleidomastoideo", ["Músculo Pectoral Menor", "Músculo Trapecio", "Músculo Subclavio"], "Se inserta en la cara superior del tercio medial de la clavícula."),

    # 11-20 (Miembro Inferior)
    ("anat-11", "Miembro Inferior", "Torsión de rodilla con maniobra de Lachman y cajón anterior positivos", "¿Qué ligamento cruzado intraarticular se rompió por completo?", "Ligamento Cruzado Anterior (LCA)", ["Ligamento Cruzado Posterior", "Ligamento Colateral Medial", "Menisco Lateral"], "Se inserta en el área intercondílea anterior de la tibia."),
    ("anat-12", "Miembro Inferior", "Impacto anteroposterior sobre tibia ('trauma de tablero de auto') con cajón posterior positivo", "¿Qué ligamento estabilizador posterior de rodilla está lesionado?", "Ligamento Cruzado Posterior (LCP)", ["Ligamento Cruzado Anterior", "Ligamento Rotuliano", "Pata de Ganso"], "Evita el desplazamiento posterior de la tibia sobre el fémur."),
    ("anat-13", "Miembro Inferior", "Traumatismo en cara lateral de cabeza del peroné con pie péndulo/caído ('marcha equina')", "¿Qué nervio periférico que rodea el cuello del peroné está comprimido?", "Nervio Peroneo Común (Cíatico Poplíteo Externo)", ["Nervio Tibial Posterior", "Nervio Femoral", "Nervio Obturador"], "Rodea el cuello de la fíbula e inerva a los dorsiflexores del pie."),
    ("anat-14", "Miembro Inferior", "Inyección intramuscular glútea mal aplicada en cuadrante inferomedial", "¿Qué tronco nervioso voluminoso corre riesgo de lesión iatrogénica?", "Nervio Ciático Mayor", ["Nervio Femoral", "Nervio Pudendo", "Nervio Cutáneo Femoral Lateral"], "Las inyecciones deben aplicarse en cuadrante superoexterno."),
    ("anat-15", "Miembro Inferior", "Anciana con caída, acortamiento de miembro inferior y rotación externa marcada", "¿Qué tipo de fractura ósea de la extremidad proximal del fémur presenta?", "Fractura del Cuello Femoral (Subcapsular)", ["Fractura de Diáfisis Tibial", "Luxación Posterior de Cadera", "Fractura de Rótula"], "La rotación externa y acortamiento son signos patognomónicos."),
    ("anat-16", "Miembro Inferior", "Dolor en cara medial de tibia bajo la rodilla, tendinitis de la pata de ganso", "¿Cuáles son los 3 músculos que componen la pata de ganso anserina?", "Sartorio, Grácil y Semitendinoso", ["Bíceps femoral, Semimembranoso y Grácil", "Recto femoral, Vasto medial y Sartorio", "Pectíneo, Aductor largo y Grácil"], "Mnemotecnia clásica UPMS: Sartorio, Grácil (Recto interno) y Semitendinoso."),
    ("anat-17", "Miembro Inferior", "Chasquido en talón al correr con maniobra de Thompson positiva (no flexiona pie al comprimir pantorrilla)", "¿Qué tendón grueso del compartimento posterior se seccionó?", "Tendón de Aquiles (Calcáneo)", ["Tendón del Tibial Anterior", "Tendón Peroneo Lateral Largo", "Tendón Plantar Delgado"], "Formado por la unión de los gastrocnemios y el sóleo."),
    ("anat-18", "Miembro Inferior", "Evaluación de pulso arterial en dorso del pie entre tendones del extensor del dedo gordo", "¿Qué pulso distal de miembro inferior se está palpando?", "Pulso Pedio (Dorsal del Pie)", ["Pulso Tibial Posterior", "Pulso Poplíteo", "Pulso Femoral"], "Arteria pedia, continuación de la arteria tibial anterior."),
    ("anat-19", "Miembro Inferior", "Bloqueo anestésico para sutura en maléolo medial y planta del pie", "¿Qué nervio acompaña a la arteria tibial posterior detrás del maléolo interno?", "Nervio Tibial (Ciático Poplíteo Interno)", ["Nervio Peroneo Superficial", "Nervio Safeno", "Nervio Sural"], "Pasa por el túnel del tarso detrás del maléolo tibial."),
    ("anat-20", "Miembro Inferior", "Hernia femoral que protruye por debajo del ligamento inguinal en triángulo de Scarpa", "¿Cuál es el límite medial del anillo femoral por donde protruye la hernia?", "Ligamento Lacunar (de Gimbernat)", ["Vena Femoral", "Ligamento Inguinal", "Músculo Pectíneo"], "El límite medial es el ligamento lacunar de Gimbernat."),

    # 21-30 (Tórax y Sistema Cardiovascular)
    ("anat-21", "Tórax", "Punción pleural descompresiva por neumotórax hipertensivo en 2° espacio intercostal", "¿Por qué borde de la costilla debe deslizarse la aguja para no lesionar vasos?", "Borde Superior de la costilla inferior", ["Borde Inferior de la costilla superior", "Centro del espacio intercostal", "Cara profunda del cartílago"], "El paquete vasculonervioso intercostal (VAN) corre por el borde inferior costal."),
    ("anat-22", "Cardiología", "Infarto agudo de miocardio con elevación en cara anterior (V1-V4)", "¿Qué arteria coronaria rama de la coronaria izquierda se encuentra ocluida?", "Arteria Descendente Anterior (Interventricular Anterior)", ["Arteria Coronaria Derecha", "Arteria Circunfleja", "Arteria Marginal Derecha"], "Irriga los dos tercios anteriores del tabique y cara anterior del ventrículo izquierdo."),
    ("anat-23", "Cardiología", "Auscultación de soplo sistólico eyectivo en 2° espacio intercostal derecho paraesternal", "¿Qué foco valvular cardíaco anatómico se está auscultando?", "Foco Aórtico", ["Foco Pulmonar", "Foco Mitral", "Foco Tricuspídeo"], "2° espacio intercostal derecho, línea paraesternal."),
    ("anat-24", "Cardiología", "Auscultación de soplo en ápex cardíaco en 5° espacio intercostal izquierdo con línea medioclavicular", "¿Qué válvula auriculoventricular se evalúa en el choque de la punta?", "Válvula Mitral (Bicúspide)", ["Válvula Aórtica", "Válvula Pulmonar", "Válvula Tricúspide"], "El ápex cardíaco corresponde al ventrículo izquierdo y válvula mitral."),
    ("anat-25", "Mediastino", "Tumor pulmonar apical derecho comprime cadena simpática causando miosis, ptosis y anhidrosis (Claude Bernard-Horner)", "¿Qué ganglio simpático paravertebral o cadena cervical está infiltrado?", "Ganglio Estrellado (Cervicotorácico)", ["Ganglio Celíaco", "Nervio Vago", "Nervio Frénico"], "Síndrome de Pancoast por invasión del ganglio cervicotorácico."),
    ("anat-26", "Tórax", "Parálisis diafragmática derecha tras traumatismo cervical con elevación del hemidiafragma", "¿Qué nervio motor derivado de C3-C5 inerva exclusivamente al diafragma?", "Nervio Frénico", ["Nervio Vago", "Nervio Recurrente Laríngeo", "Nervio Intercostal 5°"], "El nervio frénico nace de las raíces cervicales C3, C4 y C5."),
    ("anat-27", "Grandes Vasos", "Aneurisma en cayado aórtico. ¿Cuál es la primera rama gruesa que nace del cayado aórtico?", "¿Cuál es el primer tronco arterial que emerge de la convexidad del arco aórtico?", "Tronco Braquiocefálico", ["Arteria Carótida Común Izquierda", "Arteria Subclavia Izquierda", "Arteria Coronaria Derecha"], "El tronco braquiocefálico es la 1° rama, luego carótida común izq y subclavia izq."),
    ("anat-28", "Tórax", "Cuerpo extraño aspirado por niño suele alojarse en el bronquio principal derecho", "¿Cuál es la característica anatómica del bronquio principal derecho respecto al izquierdo?", "Es más vertical, más corto y de mayor calibre", ["Es más horizontal y largo", "Tiene menor diámetro", "Cruza por delante del esófago"], "La anatomía vertical y ancha del bronquio derecho favorece la aspiración."),
    ("anat-29", "Tórax", "Linfadenopatía que comprime la vena cava superior causando edema en esclavina y plétora yugular", "¿Dónde desemboca anatómicamente la vena ácigos mayor en el mediastino?", "Vena Cava Superior", ["Aurícula Izquierda", "Vena Braquiocefálica Izquierda", "Vena Porta"], "La vena ácigos forma un cayado sobre el pedículo pulmonar derecho y drena en la VCS."),
    ("anat-30", "Corazón", "Marcapasos natural del corazón ubicado en la unión de la vena cava superior y aurícula derecha", "¿Qué estructura nodal especializada inicia la despolarización cardíaca?", "Nodo Sinoauricular (de Keith y Flack)", ["Nodo Auriculoventricular (de Aschoff-Tawara)", "Haz de His", "Fibras de Purkinje"], "El nodo sinusal es el marcapasos primario con frecuencia de 60-100 lpm."),

    # 31-40 (Abdomen, Pelvis y Cabeza/Cuello)
    ("anat-31", "Abdomen", "Dolor en fosa ilíaca derecha en el punto medio entre ombligo y espina ilíaca anterosuperior", "¿Qué signo semiológico y punto anatómico orienta fuertemente a apendicitis aguda?", "Punto de McBurney", ["Punto de Murphy", "Punto de Mayo-Robson", "Signo de Courvoisier"], "El punto de McBurney corresponde a la base de implantación apendicular."),
    ("anat-32", "Abdomen", "Cirugía laparoscópica de vesícula biliar. El cirujano identifica el triángulo hepatocístico de Calot", "¿Cuáles son los límites anatómicos del triángulo de Calot para localizar la arteria cística?", "Conducto Cístico, Conducto Hepático Común y Cara Inferior del Hígado", ["Colédoco, Vena Porta y Duodeno", "Conducto Pancreático, Bazo e Hígado", "Vena Cava, Cístico y Píloro"], "El triángulo de Calot es reparo quirúrgico clave para no lesionar la vía biliar principal."),
    ("anat-33", "Abdomen", "Hernia inguinal indirecta en adulto joven que protruye a través del orificio inguinal profundo", "¿Con respecto a qué vasos epigástricos se ubica el orificio profundo (lateral o medial)?", "Lateral a los vasos epigástricos inferiores", ["Medial a los vasos epigástricos inferiores", "Posterior a la aorta", "Anterior al músculo recto"], "Las hernias indirectas son laterales a los vasos epigástricos; las directas son mediales."),
    ("anat-34", "Abdomen", "Hemorragia por várices esofágicas en cirrosis por hipertensión portal", "¿Qué dos venas anastomosan el sistema porta con el sistema cava a nivel del cardias?", "Vena Gástrica Izquierda (Porta) y Venas Esofágicas Inferiores (Ácigos/Cava)", ["Vena Renal y Esplénica", "Vena Cava y Femoral", "Vena Mesentérica Superior e Ilíaca"], "La anastomosis portocava esofágica se dilata formando várices sangrantes."),
    ("anat-35", "Abdomen", "Maniobra de Murphy positiva con detención de la respiración al palpar hipocondrio derecho", "¿Qué órgano inflamado choca contra la mano del explorador al inspirar hondo?", "Vesícula Biliar (Colecistitis Aguda)", ["Bazo", "Páncreas", "Riñón Izquierdo"], "Murphy positivo indica inflamación vesicular al descender el diafragma."),
    ("anat-36", "Cabeza y Cuello", "Parálisis facial periférica (de Bell) con imposibilidad de cerrar el ojo y desvío de comisura bucal", "¿Qué par craneal emerge por el agujero estilomastoideo para inervar la mímica facial?", "Nervio Facial (VII Par)", ["Nervio Trigémino (V Par)", "Nervio Oculomotor (III Par)", "Nervio Hipogloso (XII Par)"], "El VII par inerva todos los músculos cutáneos de la mímica."),
    ("anat-37", "Cabeza y Cuello", "Dolor paroxístico punzante como descarga eléctrica en mejilla y mandíbula al tocarse la cara", "¿Qué nervio sensitivo craneal con 3 ramas está afectado en esta neuralgia?", "Nervio Trigémino (V Par)", ["Nervio Facial (VII Par)", "Nervio Glosofaríngeo (IX Par)", "Nervio Vago (X Par)"], "El V par (oftálmica V1, maxilar V2, mandibular V3) es el gran nervio sensitivo facial."),
    ("anat-38", "Cabeza y Cuello", "Ronquera permanente tras tiroidectomía por lesión nerviosa en surco traqueoesofágico", "¿Qué nervio motor intrínseco de la laringe rama del vago fue lesionado?", "Nervio Laríngeo Recurrente", ["Nervio Laríngeo Superior", "Nervio Frénico", "Tronco Simpático"], "El recurrente inerva todos los músculos laríngeos excepto el cricotiroideo."),
    ("anat-39", "Cabeza y Cuello", "Pupila derecha midriática fija arrefléxica con ptosis palpebral y ojo desviado hacia afuera y abajo", "¿Qué par craneal que pasa por la hendidura esfenoidal está paralizado?", "Nervio Oculomotor (III Par Craneal)", ["Nervio Troclear (IV Par)", "Nervio Abducens (VI Par)", "Nervio Óptico (II Par)"], "El III par inerva recto medial, superior, inferior, oblicuo menor y constrictor pupilar."),
    ("anat-40", "Cabeza y Cuello", "Fractura de la lámina cribosa del etmoides con anosmia y salida de líquido cefalorraquídeo nasal", "¿Qué par craneal atraviesa los orificios de la lámina cribosa?", "Nervio Olfatorio (I Par Craneal)", ["Nervio Óptico (II Par)", "Nervio Oftálmico (V1)", "Nervio Maxilar (V2)"], "Los filetes del nervio olfatorio atraviesan la lámina cribosa del etmoides hacia el bulbo olfatorio.")
]

# ==========================================
# 2. BIOQUÍMICA CLÍNICA I (25 CASOS)
# ==========================================
bioq = [
    ("bioq-01", "Equilibrio Ácido-Base", "Diabetes Tipo 1 confuso, respiración de Kussmaul. pH 7.22 | HCO3 11 mEq/L | pCO2 28 mmHg", "¿Cuál es el trastorno ácido-base primario y su compensación?", "Acidosis Metabólica con compensación respiratoria (hiperventilación)", ["Alcalosis Respiratoria pura", "Acidosis Respiratoria descompensada", "Alcalosis Metabólica pura"], "pH bajo por consumo de HCO3- compensado con caída de pCO2 por hiperventilación."),
    ("bioq-02", "Equilibrio Ácido-Base", "Mujer con vómitos incoercibles de 48 hs. pH 7.52 | HCO3 34 mEq/L | pCO2 46 mmHg", "¿Qué alteración ácido-base causó la pérdida masiva de ácido clorhídrico gástrico?", "Alcalosis Metabólica hipoclorémica", ["Acidosis Metabólica con anion gap elevado", "Acidosis Respiratoria aguda", "Alcalosis Respiratoria primaria"], "La pérdida de H+ y Cl- en el jugo gástrico genera alcalosis metabólica."),
    ("bioq-03", "Equilibrio Ácido-Base", "Fumador pesado con EPOC y somnolencia. Gasometría: pH 7.30 | pCO2 62 mmHg | HCO3 30 mEq/L", "¿Qué trastorno produce la hipoventilación alveolar y retención de dióxido de carbono?", "Acidosis Respiratoria con compensación renal de bicarbonato", ["Alcalosis Respiratoria", "Acidosis Metabólica láctica", "Alcalosis Metabólica aguda"], "La retención de CO2 (ácido volátil) baja el pH; el riñón retiene HCO3- lentamente."),
    ("bioq-04", "Soluciones y pH", "¿Cuál es el principal sistema tampón (buffer) extracelular del organismo humano?", "¿Qué par conjugado regula instantáneamente el pH en el plasma sanguíneo?", "Sistema Bicarbonato / Ácido Carbónico (HCO3- / H2CO3)", ["Sistema Hemoglobina / Oxihemoglobina", "Sistema Fosfato Monocálcico", "Proteínas intracelulares"], "El buffer bicarbonato es el más abundante en el líquido extracelular y es regulado por pulmón y riñón."),
    ("bioq-05", "Metabolismo de Glúcidos", "Maratonista en el km 35 agota su glucógeno muscular y hepático. Comienza gluconeogénesis", "¿Cuál es el principal precursor no glucídico que proviene de la lipólisis para la gluconeogénesis?", "Glicerol (derivado de triacilgliceroles)", ["Ácidos grasos libres de cadena par", "Acetil-CoA", "Colesterol libre"], "El glicerol se fosforila a glicerol-3-fosfato y entra a la vía gluconeogénica."),
    ("bioq-06", "Metabolismo de Glúcidos", "Bebé con catarata precoz y vómitos tras tomar leche. Déficit de galactosa-1-fosfato uridiltransferasa", "¿Qué patología metabólica congénita del metabolismo de glúcidos padece?", "Galactosemia Clásica", ["Intolerancia a la Lactosa", "Fructosuria Esencial", "Glucogenosis Tipo I"], "La acumulación de galactitol por vía alterna genera catarata bilateral temprana."),
    ("bioq-07", "Metabolismo de Glúcidos", "Fármaco antidiabético (metformina) disminuye la producción hepática de glucosa. ¿Qué vía inhibe?", "¿Qué vía biosintética hepática de glucosa a partir de lactato y alanina es inhibida por la metformina?", "Gluconeogénesis Hepática", ["Glucólisis Anaeróbica", "Glucogenogénesis", "Vía de las Pentosas Fosfato"], "La metformina activa AMPK e inhibe la gluconeogénesis hepática."),
    ("bioq-08", "Vía de las Pentosas", "Soldado que toma antipalúdico (primaquina) presenta anemia hemolítica súbita e ictericia", "¿Qué enzima que genera NADPH para mantener reducido el glutatión está deficiente?", "Glucosa-6-Fosfato Deshidrogenasa (G6PD)", ["Piruvato Quinasa", "Hexoquinasa", "Fosfofructoquinasa-1"], "El déficit de G6PD impide regenerar glutatión reducido frente a estrés oxidativo."),
    ("bioq-09", "Enzimología Clínica", "Dolor precordial opresivo de 3 horas. Laboratorio busca biomarcador de necrosis miocárdica", "¿Qué proteína globular sarcomérica es el patrón de oro (gold standard) por alta especificidad?", "Troponina I y T de alta sensibilidad", ["LDH (Lactato Deshidrogenasa)", "GOT / AST Transaminasa", "Fosfatasa Alcalina"], "Las troponinas cardíacas son altamente específicas de necrosis de miocitos cardíacos."),
    ("bioq-10", "Enzimología Clínica", "Bebedor crónico con dolor abdominal epigástrico en barra y náuseas. Laboratorio confirma pancreatitis aguda", "¿Qué dos enzimas pancreáticas elevadas en sangre confirman el diagnóstico bioquímico?", "Amilasa y Lipasa séricas", ["Transaminasas GOT y GPT", "Fosfatasa Ácida y Aldolasa", "Troponina y CPK"], "La lipasa es más específica y perdura más tiempo elevada que la amilasa en pancreatitis."),
    ("bioq-11", "Cinética Enzimática", "Paciente toma estatina (atorvastatina) para bajar el colesterol LDL compitiendo con el sustrato de HMG-CoA reductasa", "¿Qué efecto cinético produce un inhibidor competitivo sobre la Km y la Vmax?", "Aumenta la Km aparente sin modificar la Vmax", ["Disminuye la Vmax sin alterar Km", "Disminuye tanto Km como Vmax", "Aumenta la Vmax"], "Un inhibidor competitivo compite por el sitio activo: requiere más sustrato (aumenta Km) pero alcanza Vmax."),
    ("bioq-12", "Metabolismo de Lípidos", "Joven con xantomas tendinosos en tendón de Aquiles y colesterol total > 400 mg/dL", "¿Qué receptor celular mutado impide la endocitosis de partículas ricas en colesterol?", "Receptor de LDL (Apo B-100 / E)", ["Receptor Scavenger de macrófagos", "Receptor de Quilomicrones", "Lipoproteína Lipasa"], "La hipercolesterolemia familiar se debe a mutaciones en el receptor de LDL."),
    ("bioq-13", "Metabolismo de Lípidos", "Paciente en ayuno estricto de 7 días. Su cerebro comienza a consumir cuerpos cetónicos como combustible", "¿Cuáles son los 3 cuerpos cetónicos sintetizados por el hígado a partir de exceso de Acetil-CoA?", "Acetoacetato, Beta-hidroxibutirato y Acetona", ["Lactato, Piruvato y Malato", "Oxaloacetato, Citrato y Succinato", "Glicerol, Alanina y Colina"], "Sintetizados en mitocondria hepática durante ayuno prolongado o cetoacidosis."),
    ("bioq-14", "Metabolismo de Lípidos", "Suero lechoso tras comida copiosa con alto contenido graso por elevación de lipoproteínas de menor densidad", "¿Qué lipoproteína transporta los triglicéridos de origen exógeno (dietario) desde el intestino?", "Quilomicrones", ["VLDL (Muy Baja Densidad)", "LDL (Baja Densidad)", "HDL (Alta Densidad)"], "Los quilomicrones se ensamblan en enterocitos con Apo B-48 para transportar grasa de la dieta."),
    ("bioq-15", "Metabolismo de Proteínas", "Cirrótico descompensado ingresa confuso con asterixis (flapping) por acumulación de amoníaco tóxico", "¿En qué ciclo metabólico hepático se convierte normalmente el amoníaco libre en urea?", "Ciclo de la Urea (de Krebs-Henseleit)", ["Ciclo de Krebs (Ácido Cítrico)", "Ciclo de Cori", "Ciclo de la Alanina"], "El ciclo de la urea detoxifica el amoníaco mitocondrial y citosólico en hepatocitos."),
    ("bioq-16", "Metabolismo de Proteínas", "Recién nacido sometido a pesquisa neonatal (test del piecito) para detectar fenilcetonuria", "¿Qué enzima deficiente impide transformar fenilalanina en tirosina acumulando fenilpiruvato?", "Fenilalanina Hidroxilasa (PAH)", ["Tirosinasa", "Homogentisato Oxidasa", "Metionina Sintasa"], "El déficit de PAH genera fenilcetonuria y daño neurológico prevenible con dieta."),
    ("bioq-17", "Metabolismo de Purinas", "Hombre de 50 años con dolor nocturno agudo y enrojecimiento en 1° articulación metatarsofalángica (podagra)", "¿Qué producto final del catabolismo de las bases púricas precipita en forma de cristales de urato?", "Ácido Úrico", ["Urea", "Creatinina", "Bilirrubina"], "La hiperuricemia causa precipitación de cristales de urato monosódico en articulaciones (gota)."),
    ("bioq-18", "Cadena Respiratoria", "Intoxicación con cianuro por inhalación de humo en incendio. Asfixia celular inmediata", "¿Qué complejo IV de la cadena de transporte de electrones es inhibido irreversiblemente por el cianuro?", "Citocromo c Oxidasa (Complejo IV)", ["NADH Deshidrogenasa (Complejo I)", "Succinato Deshidrogenasa (Complejo II)", "ATP Sintasa (Complejo V)"], "El cianuro se une al hierro férrico (Fe3+) del hemo a3 en el complejo IV frenando la respiración celular."),
    ("bioq-19", "Cadena Respiratoria", "Intoxicación con monóxido de carbono (CO) por brasero en habitación cerrada", "¿Por qué el monóxido de carbono bloquea el transporte de oxígeno hacia los tejidos?", "Tiene una afinidad por la Hemoglobina 200 veces superior a la del Oxígeno", ["Destruye la membrana del eritrocito en el bazo", "Inhibe la síntesis de eritropoyetina renal", "Provoca deshidratación plasmática aguda"], "Forma carboxihemoglobina irreversible desplazando la curva de disociación hacia la izquierda."),
    ("bioq-20", "Metabolismo del Hemo", "Ictericia a expensas de bilirrubina indirecta (no conjugada) con orinas claras y heces de color normal", "¿En qué órgano y por qué enzima se conjuga la bilirrubina indirecta con ácido glucurónico?", "Hígado por la UDP-Glucuronosiltransferasa", ["Bazo por la Hemo Oxigenasa", "Riñón por la Glucocinasa", "Intestino por la Urobilinógeno Sintasa"], "La bilirrubina no conjugada liposoluble se conjuga en el retículo endoplásmico hepático."),
    ("bioq-21", "Metabolismo del Hemo", "Ictericia obstructiva por cálculo en colédoco con coluria (orina oscura) y acolia (heces blancas)", "¿Qué fracción de la bilirrubina se encuentra elevada en el plasma al estar tapada la vía biliar?", "Bilirrubina Directa (Conjugada)", ["Bilirrubina Indirecta (Libre)", "Urobilinógeno urinario puro", "Biliverdina sérica"], "Al no poder drenar al duodeno, la bilirrubina directa refluye a sangre y se filtra por orina (coluria)."),
    ("bioq-22", "Bioquímica Nutricional", "Alcohólico indigente con ataxia, oftalmoplejía y confusión mental (Encefalopatía de Wernicke)", "¿Qué vitamina hidrosoluble cofactor de la piruvato deshidrogenasa y transcetolasa está deficiente?", "Vitamina B1 (Tiamina)", ["Vitamina B12 (Cobalamina)", "Vitamina C (Ácido Ascórbico)", "Vitamina D (Calciferol)"], "La tiamina (pirofosfato de tiamina) es cofactor esencial en el metabolismo energético cerebral."),
    ("bioq-23", "Bioquímica Nutricional", "Marinero con encías sangrantes, petequias perifoliculares y mala cicatrización de heridas (escorbuto)", "¿Qué vitamina cofactor de la prolil y lisil hidroxilasa es indispensable para el colágeno?", "Vitamina C (Ácido Ascórbico)", ["Vitamina A (Retinol)", "Vitamina E (Tocoferol)", "Vitamina K (Fitomenadiona)"], "La vitamina C hidroxila residuos de prolina y lisina permitiendo la triple hélice estable de colágeno."),
    ("bioq-24", "Metabolismo de Calcio", "Tiroidectomía total complica con espasmos carpopedales (signo de Trousseau) por extirpación inadvertida de paratiroides", "¿Qué ión sérico desciende críticamente causando hiperexcitabilidad neuromuscular?", "Calcio Iónico (Ca2+)", ["Potasio (K+)", "Magnesio (Mg2+)", "Sodio (Na+)"], "La PTH eleva la calcemia; su ausencia brusca desencadena hipocalcemia y tetania aguda."),
    ("bioq-25", "Función Renal", "Laboratorio reporta creatinina sérica de 3.5 mg/dL y urea de 110 mg/dL", "¿Por qué la creatinina es el mejor biomarcador endógeno habitual de la tasa de filtrado glomerular?", "Se produce a tasa constante por el músculo y se filtra libremente sin reabsorberse", ["Es sintetizada activamente por el túbulo distal", "Depende del consumo diario de carbohidratos", "Es degradada por las bacterias colónicas"], "La creatinina proviene del fosfato de creatina muscular y se excreta proporcional al filtrado glomerular.")
]

# ==========================================
# 3. ANTROPOLOGÍA MÉDICA Y SALUD PÚBLICA (15 CASOS)
# ==========================================
antrop = [
    ("antrop-01", "Interculturalidad", "Madre acude con niño deshidratado con diarrea asegurando que tiene 'Ojéa' y cinta roja en muñeca", "¿Cuál es la conducta deliberativa y con competencia cultural correcta del médico?", "Validar la preocupación materna, consensuar la hidratación oral sin descalificar su cosmovisión", ["Burlarse de la creencia y expulsarla del hospital", "Aceptar que el mal de ojo es la causa biológica y no medicar", "Amenazar con denunciar a la policía"], "El modelo deliberativo busca alianza terapéutica respetando la diversidad cultural."),
    ("antrop-02", "Interculturalidad Guaraní", "Paciente rural consulta por dispepsia y afirma que 'ikambyryrujere' tras un susto fuerte", "¿Qué representa el concepto de 'Kambyryrujere' en la etnomedicina popular paraguaya?", "Un síndrome cultural ligado a desplazamiento visceral o somatización tras un sobresalto emocional", ["Una infección bacteriana aguda por Clostridium", "Un trastorno psicótico primario incurable", "Una patología quirúrgica de emergencia"], "En la antropología médica de la región, los síndromes culturales expresan angustia somatizada."),
    ("antrop-03", "Bioética Clínica", "Paciente adulto, lúcido y hemodinámicamente estable rechaza recibir una transfusión de sangre por ser Testigo de Jehová", "¿Qué principio bioético primordial ampara su derecho a rechazar el procedimiento tras ser informado?", "Principio de Autonomía", ["Principio de Beneficencia paternalista", "Principio de No Maleficencia coercitiva", "Principio de Justicia distributiva"], "El paciente competente tiene derecho a autodeterminación sobre su propio cuerpo."),
    ("antrop-04", "Bioética en Urgencias", "Niño de 6 años llega exanguinado por hemorragia masiva. Padres testigos de Jehová se oponen a transfundir", "¿Cuál es el deber ético y jurídico prioritario del equipo médico en pediatría?", "Transfundir de inmediato invocando el interés superior del menor y el deber de salvar la vida", ["Esperar la orden de un juez mientras el niño fallece", "Acatar la negativa de los padres sin actuar", "Dar el alta contra voluntad"], "El derecho a la vida del niño prevalece sobre las convicciones religiosas de los progenitores en riesgo vital."),
    ("antrop-05", "Relación Médico-Paciente", "Médico que toma decisiones unilaterales sin consultar ni explicar opciones al paciente considerándolo ignorante", "¿A qué modelo clásico de la relación médico-paciente (según Emanuel y Emanuel) corresponde?", "Modelo Paternalista", ["Modelo Informativo (Científico)", "Modelo Interpretativo", "Modelo Deliberativo"], "El modelo paternalista asume que el médico sabe qué es mejor sin requerir el consentimiento activo."),
    ("antrop-06", "Relación Médico-Paciente", "Médico que ayuda al paciente a dilucidar sus valores y elegir el mejor tratamiento de mutuo acuerdo", "¿A qué modelo óptimo de relación médico-paciente corresponde esta práctica moderna?", "Modelo Deliberativo", ["Modelo Paternalista", "Modelo Tecnocrático", "Modelo Contractual puro"], "El modelo deliberativo fomenta una toma de decisiones compartida e informada."),
    ("antrop-07", "Confidencialidad", "Compañero de trabajo de un paciente diagnosticado con Hepatitis B llama a recepción exigiendo conocer el diagnóstico", "¿Qué obligación deontológica prohíbe revelar los datos de salud del paciente a terceros?", "Secreto Médico y Derecho a la Privacidad", ["Principio de Beneficencia institucional", "Obligación de Notificación pública", "Ley de Libre Acceso a la Información privada"], "El secreto profesional es absoluto salvo consentimiento expreso o mandamiento judicial."),
    ("antrop-08", "Epidemiología y Salud Pública", "Brote de Dengue en Alto Paraná. La estrategia más costo-efectiva de salud pública es:", "¿Cuál es la medida preventiva de impacto comunitario más eficaz contra el vector Aedes aegypti?", "Eliminación de criaderos de agua estancada y movilización comunitaria", ["Fumigación aérea indiscriminada de toda la ciudad", "Administración masiva de antibióticos", "Distribución de analgésicos en farmacias"], "El control vectorial mediante eliminación domiciliaria de recipientes es la base del control del dengue."),
    ("antrop-09", "Determinantes Sociales", "Familia que vive en asentamiento sin agua potable ni red cloacal sufre diarreas parasitarias recurrentes", "¿Bajo qué categoría de los determinantes de la salud de Lalonde se clasifica esta causa?", "Medio Ambiente Físico y Saneamiento Básico", ["Biología Humana / Genética", "Estilo de Vida individual puro", "Sistema de Organización de Servicios de Salud"], "El informe Lalonde destaca el medio ambiente y saneamiento como determinantes clave de la morbilidad."),
    ("antrop-10", "Medicina Tradicional", "Abuela administra té de poleo y menta a un recién nacido de 15 días causando intoxicación y apnea", "¿Por qué el uso de infusiones de hierbas (pohã ñana) está contraindicado en neonatos y lactantes pequeños?", "Por inmadurez hepatorrenal para metabolizar alcaloides y riesgo de sobredosis tóxica", ["Porque las plantas no contienen principios activos", "Porque el agua hervida destruye los glóbulos rojos", "Porque neutralizan la leche materna"], "Los órganos neonatales son inmaduros para metabolizar metabolitos secundarios vegetales."),
    ("antrop-11", "Comunicación Intercultural", "Paciente que solo habla guaraní asiente con la cabeza por timidez aunque no comprendió las indicaciones de su medicación", "¿Qué barrera comunicacional y qué recurso debe implementar el profesional médico?", "Barrera lingüística: debe utilizar mediación intercultural o comunicación bilingüe clara", ["Debe gritar en español para que entienda mejor", "Debe asumir que entendió todo y despedirlo", "Debe derivarlo a psiquiatría"], "El bilingüismo y la empatía son indispensables para garantizar la adherencia en Paraguay."),
    ("antrop-12", "Consentimiento Informado", "Cirujano opera de apendicitis a un paciente despierto sin haberle explicado los riesgos ni firmado consentimiento", "¿Cuáles son los 3 elementos esenciales que componen un Consentimiento Informado válido?", "Información suficiente y comprensible, Voluntariedad (sin coacción) y Capacidad del paciente", ["Firma de testigos, Pago del arancel y Aprobación policial", "Explicación médica compleja en latín y sumisión", "Presencia obligatoria de un abogado"], "Información clara, voluntariedad y competencia cognitiva son los 3 pilares del consentimiento."),
    ("antrop-13", "Ética en la Investigación", "Estudio clínico administra un nuevo fármaco experimental sin informar a los participantes sobre efectos adversos graves", "¿Qué documento fundacional de la bioética médica moderna prohíbe la experimentación humana sin consentimiento voluntario?", "Código de Núremberg (1947)", ["Juramento Hipocrático clásico", "Tratado de Versalles", "Informe Lalonde"], "El Código de Núremberg y la Declaración de Helsinki exigen consentimiento libre e informado absoluto."),
    ("antrop-14", "Violencia y Salud", "Mujer ingresa con hematomas múltiples en rostro y refiere haberse caído de la escalera con tono temeroso", "¿Cuál es el rol y la obligación ética del médico ante la sospecha fundada de violencia doméstica?", "Contener en privado con empatía, documentar minuciosamente en ficha clínica y activar protocolo de protección", ["Confrontar a la paciente delante del acompañante", "Ignorar las lesiones ya que la paciente dijo que se cayó", "Expulsar al acompañante a los golpes"], "El registro médico riguroso y la contención psicológica sin revictimización salvan vidas."),
    ("antrop-15", "Salud Pública: Vacunación", "Padres antivacunas se niegan a aplicar las vacunas del Programa Ampliado de Inmunizaciones (PAI) a su hijo", "¿Qué concepto de salud colectiva fundamenta la obligatoriedad de la vacunación infantil?", "Inmunidad Colectiva (de Rebaño) y Protección del Derecho Colectivo a la Salud", ["Libertad absoluta de mercado farmacéutico", "Experimentación biológica obligatoria", "Aislamiento voluntario de la población"], "La inmunidad de rebaño protege a los inmunocomprometidos y es un deber solidario y legal en salud pública.")
]

# ==========================================
# 4. GESTIÓN DE LABORATORIOS Y BIOSEGURIDAD (10 CASOS)
# ==========================================
lab = [
    ("lab-01", "Fase Preanalítica", "Muestra de sangre para ionograma fue agitada bruscamente y dejada al calor, resultando roja intensa por lisis celular", "¿Por qué Patricia rechaza la muestra y qué ión saldrá falsamente disparado por hemólisis?", "Muestra hemolizada con falsa hiperpotasemia (K+ intracelular elevado)", ["Muestra lipémica con alteración de sodio", "Muestra coagulada con aumento de cloro", "Muestra ictérica normal"], "El potasio intracelular es 30 veces mayor al plasmático; la lisis eritrocitaria arruina el ionograma."),
    ("lab-02", "Tubos de Extracción", "Orden médica solicita hemograma completo con recuento de plaquetas y frotis de sangre periférica", "¿Qué color de tapón tiene el tubo al vacío que contiene anticoagulante EDTA dipotásico?", "Tubo Tapa Lila / Morada (EDTA)", ["Tubo Tapa Roja (Seco sin anticoagulante)", "Tubo Tapa Celeste (Citrato de Sodio)", "Tubo Tapa Gris (Fluoruro de Sodio)"], "El tubo lila con EDTA quelante de calcio preserva la morfología de células sanguíneas."),
    ("lab-03", "Tubos de Extracción", "Paciente prequirúrgico requiere coagulograma (Tiempo de Protrombina y KPTT)", "¿Qué anticoagulante líquido en proporción 1:9 contiene el tubo con tapón celeste?", "Citrato de Sodio al 3.2%", ["Heparina de Litio", "EDTA tripotásico", "Oxalato de potasio"], "El citrato sódico quelante reversible de calcio es el tubo estándar para pruebas de hemostasia."),
    ("lab-04", "Fase Preanalítica", "Torniquete colocado en el brazo durante más de 3 minutos mientras se busca vena dificultosa", "¿Qué artefacto bioquímico produce la estasis venosa y hemoconcentración prolongada?", "Falsa elevación de Proteínas totales, Calcio ligado y Enzimas", ["Falsa disminución de hematocrito", "Dilución excesiva de electrolitos", "Disminución artificial de urea"], "La estasis prolongada filtra agua hacia el intersticio concentrando solutos de gran peso molecular."),
    ("lab-05", "Bioseguridad", "Enfermero descarta una aguja con la que extrajo sangre en una bolsa plástica común en vez del descartador rígido", "¿Qué riesgo inminente de accidente laboral genera esta práctica negligente?", "Punción accidental y transmisión de patógenos sanguíneos (VIH, Hepatitis B y C)", ["Contaminación bacteriana de la jeringa limpia", "Gasto excesivo de bolsas plásticas", "Ruptura del émbolo plástico"], "Los objetos cortopunzantes deben descartarse en contenedores rígidos imperforables sin reencapuchar."),
    ("lab-06", "Bioseguridad", "Derrame de sangre en la mesada del laboratorio tras rotura de tubo de ensayo centrífugo", "¿Qué solución desinfectante a dilución 1:10 es el agente de elección para descontaminar la superficie?", "Hipoclorito de Sodio (Lavandina) al 0.5% - 1%", ["Alcohol en gel al 70%", "Agua oxigenada de 10 volúmenes", "Jabón líquido neutro"], "El hipoclorito de sodio al 0.5% es el desinfectante de referencia contra VHB, VHC y VIH en derrames biológicos."),
    ("lab-07", "Residuos Hospitalarios", "Algodones y gasas empapadas con sangre de una curación deben ser clasificados según su bioseguridad", "¿En qué bolsa y código de color deben desecharse los residuos patológicos biológicos?", "Bolsa Roja (Residuos Biopatogénicos / Peligrosos)", ["Bolsa Negra (Residuos Comunes)", "Bolsa Amarilla (Residuos Químicos)", "Caja de cartón blanca"], "La bolsa roja es la convención universal hospitalaria para material biológico con riesgo infeccioso."),
    ("lab-08", "Fase Preanalítica", "Extracción para glucemia basal en paciente que consumió café con azúcar y medialuna 30 minutos antes", "¿Qué conducta debe asumir el laboratorio ante el incumplimiento del ayuno requerido de 8 horas?", "Reprogramar la extracción advirtiendo que la glucemia e insulina saldrán artefactadas por la ingesta", ["Realizar el análisis y restar 50 mg/dL al resultado a ojo", "Procesar la muestra sin registrar la transgresión", "Administrar insulina al paciente antes de extraer"], "El ayuno estandarizado de 8 a 12 horas es requisito crítico para evaluar el metabolismo hidrocarbonado."),
    ("lab-09", "Accidente Biológico", "Estudiante de medicina se pincha un dedo con una aguja con sangre al intentar reencapucharla", "¿Cuál es la primera medida inmediata que debe realizar el estudiante en el lavatorio?", "Lavar la herida inmediatamente con abundante agua y jabón dejando sangrar la zona", ["Apretarse con un torniquete proximal apretado", "Chupar la sangre de la herida con la boca", "Colocarse lavandina pura en la herida"], "El lavado con agua y jabón arrastra el inóculo; nunca se debe reencapuchar agujas ni exprimir con violencia."),
    ("lab-10", "Bioseguridad", "Técnico procesa muestra respiratoria con sospecha de Tuberculosis activa (baciloscopía / Ziehl-Neelsen)", "¿Qué equipo de protección respiratoria con filtro de partículas de alta eficiencia debe utilizar?", "Mascarilla / Respirador N95 o FFP2", ["Barbijo quirúrgico triple hoja común", "Barbijo de tela casero", "Máscara de oxígeno con reservorio"], "El bacilo de Koch se transmite por aerosoles; los barbijos quirúrgicos comunes no sellan ni filtran partículas < 5 micras.")
]

# ==========================================
# 5. CICLOS DE FORMACIÓN Y TRIAJE CLÍNICO (10 CASOS)
# ==========================================
ciclo = [
    ("ciclo-01", "Triaje en Urgencias", "Llegan 2 pacientes: uno con sospecha de infarto opresivo diaforético y otro con luxación dolorosa de hombro", "¿Cuál es el criterio clínico y bioético de priorización médica que debe aplicarse?", "Priorizar al dolor torácico por riesgo vital inmediato (Síndrome Coronario Agudo)", ["Atender primero por orden de llegada al que se anotó antes", "Atender a la luxación porque grita más fuerte de dolor", "Derivar a ambos a otro nosocomio"], "El triaje médico prioriza riesgo de muerte sobre el dolor subjetivo articular."),
    ("ciclo-02", "Reanimación Básica (BLS)", "Hombre colapsa en el pasillo de la facultad, no responde a estímulos verbales ni dolorosos y no respira", "¿Cuál es el primer paso inmediato tras constatar la inconsciencia y ausencia de respiración normal?", "Pedir ayuda, activar el sistema de emergencias, solicitar un DEA e iniciar compresiones torácicas", ["Tomar la presión arterial con manguito", "Buscar una vena periférica para colocar suero", "Sentar al paciente y darle agua"], "En el paro cardiorrespiratorio el inicio precoz de RCP de alta calidad salva vidas."),
    ("ciclo-03", "RCP de Alta Calidad", "Estudiante realiza maniobras de masaje cardíaco en un adulto en paro cardiorrespiratorio", "¿Cuáles son los parámetros de frecuencia y profundidad de compresiones torácicas recomendados por la AHA?", "100 a 120 compresiones por minuto con al menos 5 cm de profundidad permitiendo reexpansión torácica", ["60 compresiones por minuto con 2 cm de profundidad", "160 compresiones superficiales muy rápidas", "Solo ventilación boca a boca sin comprimir"], "100-120 cpm y 5 cm de profundidad garantizan gasto cardíaco mínimo para perfusión cerebral y coronaria."),
    ("ciclo-04", "Signos Vitales", "Politraumático por accidente en moto presenta PA 80/40 mmHg, FC 130 lpm, frialdad acral y relleno capilar > 4 seg", "¿Qué cuadro hemodinámico crítico de shock presenta con mayor probabilidad?", "Shock Hipovolémico Hemorrágico", ["Shock Cardiogénico puro", "Shock Anafiláctico", "Shock Neurógeno caliente"], "La tríada de hipotensión, taquicardia refleja y palidez acral indica pérdida intravascular aguda masiva."),
    ("ciclo-05", "Trauma - ABCDE", "Ingresa herido por arma blanca en tórax. En la mnemotecnia ABCDE del trauma de ATLS, ¿qué evalúa la letra 'A'?", "¿Cuál es la máxima prioridad evaluada en el paso 'A' del trauma?", "Vía Aérea permeable con control de la columna cervical", ["Auscultación de ruidos cardíacos", "Acceso venoso periférico", "Administración de antibióticos"], "Airway: asegurar permeabilidad de vía aérea protegiendo siempre la columna cervical."),
    ("ciclo-06", "Shock Anafiláctico", "Paciente alérgico a la penicilina recibe inyección y en 3 minutos desarrolla estridor laríngeo, urticaria e hipotensión", "¿Cuál es el fármaco de primera línea que debe administrarse de inmediato por vía intramuscular?", "Adrenalina (Epinefrina) 1:1000 intramuscular en cara anterolateral del muslo", ["Hidrocortisona endovenosa en bolo", "Difenhidramina vía oral", "Salbutamol en aerosol solo"], "La adrenalina IM es el único fármaco que revierte el broncoespasmo y el colapso vascular en minutos."),
    ("ciclo-07", "Sistema de Triaje RAC", "Paciente con cefalea leve de 2 días de evolución sin signos de alarma ingresa a la guardia colmada", "¿Qué color del sistema Manchester / RAC le corresponde y cuál es el tiempo de espera estimado?", "Código Verde o Azul (No urgente, tiempo de espera hasta 120-240 minutos)", ["Código Rojo (Atención inmediata con riesgo de muerte)", "Código Naranja (Emergencia con espera máxima de 10 min)", "Código Amarillo (Urgencia de 30 min)"], "La cefalea crónica sin banderas rojas es de prioridad baja (verde/azul)."),
    ("ciclo-08", "Coma y Glasgow", "Paciente con trauma de cráneo abre los ojos al dolor (2), emite sonidos incomprensibles (2) y flexiona anormalmente (3)", "¿Cuál es el puntaje en la Escala de Coma de Glasgow y qué decisión de vía aérea impone?", "Glasgow 7/15: Impone intubación orotraqueal inmediata para protección de la vía aérea", ["Glasgow 14/15: Observación domiciliaria", "Glasgow 11/15: Oxígeno por bigotera", "Glasgow 3/15: Paciente fallecido"], "Un puntaje de Glasgow ≤ 8 define coma e indicación obligatoria de aislamiento de vía aérea."),
    ("ciclo-09", "Semiología Respiratoria", "Auscultación en base pulmonar derecha con matidez a la percusión, abolición de murmullo vesicular y broncofonía", "¿Qué síndrome pleuropulmonar clásico corresponde al derrame pleural libre?", "Síndrome de Derrame Pleural", ["Síndrome de Neumotórax", "Atelectasia obstructiva pura", "Enfisema pulmonar bilateral"], "El líquido en la pleura amortigua la transmisión del sonido (silencio auscultatorio) y da matidez percutoria."),
    ("ciclo-10", "Desfibrilación Automática", "Durante el uso del DEA en un colapso súbito, el equipo analiza el ritmo y anuncia: '¡Se aconseja descarga!'", "¿Cuáles son los dos únicos ritmos de paro desfibrilables por el DEA?", "Fibrilación Ventricular (FV) y Taquicardia Ventricular sin Pulso (TVSP)", ["Asistolia y Actividad Eléctrica sin Pulso (AESP)", "Bradicardia sinusal y Taquicardia sinusal", "Fibrilación Auricular controlada"], "FV y TVSP son los ritmos desorganizados que se resetean con la descarga eléctrica sincronizada del DEA.")
]

def build_case_obj(item, docente_info):
    cid, unidad, paciente, pregunta, correcta, distractores, pista = item
    
    opciones = [{"texto": correcta, "correcta": True, "feedback": f"¡Criterio clínico correcto! {pista}"}]
    for d in distractores:
        opciones.append({"texto": d, "correcta": False, "feedback": f"Conducta no indicada. Orientación del docente: '{pista}'"})
    
    return {
        "id": cid,
        "unidad": unidad,
        "paciente": paciente,
        "pregunta": pregunta,
        "pistaDocente": pista,
        "semiologia": {
            "signosVitales": {"pa": "120/80 mmHg", "fc": "76 lpm", "fr": "16 rpm", "temp": "36.6 °C", "sato2": "98%"},
            "auscultacion": "R1 y R2 en 4 focos. Murmullo vesicular conservado sin ruidos agregados.",
            "maniobra": f"Evaluación dirigida para {unidad}: hallazgos compatibles con el cuadro clínico descripto.",
            "anamnesis": f"— Paciente: 'Doctor, empecé con este cuadro de forma súbita y necesito que evalúen qué me pasó...'",
            "zonas": {
                "head": "Paciente orientado en tiempo y espacio, vigil y colaborador.",
                "chest": "Excursión torácica simétrica sin tiraje intercostal.",
                "arm": "Pulsos periféricos radiales y braquiales simétricos.",
                "knee": "Miembros inferiores sin edemas con motilidad adecuada."
            }
        },
        "opciones": opciones
    }

docentes = {
    "anatomia": {
        "nombre": "Dr. Ernaldo René Amarilla (Director de Medicina)",
        "avatar": "dr_rene_amarilla_pixel.jpg",
        "cargo": "Cátedra de Anatomía Humana y Cirugía"
    },
    "bioquimica": {
        "nombre": "Dra. Antonella Antico (Coordinación de Práctica)",
        "avatar": "dra_antonella_antico_pixel.jpg",
        "cargo": "Cátedra de Bioquímica y Fisiopatología"
    },
    "antropologia": {
        "nombre": "Dra. Nidia Viviana Ruiz (Coordinadora Académica)",
        "avatar": "dra_viviana_ruiz_fiel.jpg",
        "cargo": "Coordinación General Académica"
    },
    "laboratorios": {
        "nombre": "Lic. Patricia Gómez (Encargada de Laboratorios)",
        "avatar": "patricia_gomez_pixel.jpg",
        "cargo": "Coordinación de Laboratorios de Simulación y Ciencias"
    },
    "ciclos": {
        "nombre": "Dr. Ángel Adrián Gómez Rosso",
        "avatar": "dr_angel_pixel.jpg",
        "cargo": "Coordinación de Ciclos de Formación Médica"
    }
}

banco = {
    "materias": [
        {
            "id": "anatomia",
            "nombre": "Anatomía Humana: Descriptiva y Funcional I (MED-01-01)",
            "docente": docentes["anatomia"],
            "casos": [build_case_obj(c, docentes["anatomia"]) for c in anat]
        },
        {
            "id": "bioquimica",
            "nombre": "Bioquímica Clínica y Laboratorial I (MED-01-03)",
            "docente": docentes["bioquimica"],
            "casos": [build_case_obj(c, docentes["bioquimica"]) for c in bioq]
        },
        {
            "id": "antropologia",
            "nombre": "Antropología y Sociología Médica (MED-01-06)",
            "docente": docentes["antropologia"],
            "casos": [build_case_obj(c, docentes["antropologia"]) for c in antrop]
        },
        {
            "id": "laboratorios",
            "nombre": "Gestión de Laboratorio y Bioseguridad (MED-01-03)",
            "docente": docentes["laboratorios"],
            "casos": [build_case_obj(c, docentes["laboratorios"]) for c in lab]
        },
        {
            "id": "ciclos",
            "nombre": "Ciclos de Formación y Medicina Interna",
            "docente": docentes["ciclos"],
            "casos": [build_case_obj(c, docentes["ciclos"]) for c in ciclo]
        }
    ]
}

total_casos = sum(len(m["casos"]) for m in banco["materias"])
print(f"Total de casos clínicos estructurados: {total_casos}")
assert total_casos == 100, f"Error: Se esperaban 100 casos pero se generaron {total_casos}"

# Generar archivo JS con soporte para aleatorización y barajado Fisher-Yates
js_content = f"""// Data layer: UPMS 1st Year Clinical Cases (BANCO OFICIAL 100 CASOS CLÍNICOS)
// Versión: v1.1.0 - Generado automáticamente con barajado dinámico Fisher-Yates
(function (root, factory) {{
  if (typeof module === 'object' && module.exports) {{
    module.exports = factory();
  }} else {{
    root.MedikQuest = root.MedikQuest || {{}};
    root.MedikQuest.Data = factory();
  }}
}})(typeof globalThis !== 'undefined' ? globalThis : this, function () {{
  'use strict';

  const BANCO_UPMS_PRIMER_ANHO = {json.dumps(banco, indent=2, ensure_ascii=False)};

  // Algoritmo de barajado Fisher-Yates puro
  function shuffleArray(array) {{
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {{
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }}
    return arr;
  }}

  function getFlatCases() {{
    const list = [];
    BANCO_UPMS_PRIMER_ANHO.materias.forEach(mat => {{
      mat.casos.forEach(caso => {{
        list.push({{
          ...caso,
          materiaId: mat.id,
          materiaNombre: mat.nombre,
          docente: {{ ...mat.docente }}
        }});
      }});
    }});
    return list;
  }}

  // Obtiene una rotación aleatoria de N casos con sus 4 opciones barajadas
  function getRandomRotation(count = 10) {{
    const all = getFlatCases();
    const shuffledCases = shuffleArray(all).slice(0, count);

    // Barajar también las opciones dentro de cada caso para evitar copia de orden
    return shuffledCases.map(c => ({{
      ...c,
      opciones: shuffleArray(c.opciones)
    }}));
  }}

  return {{
    version: "v1.4.3",
    raw: BANCO_UPMS_PRIMER_ANHO,
    getFlatCases,
    getRandomRotation,
    totalQuestions: {total_casos}
  }};
}});
"""

out_path = r"c:\ENTORNO LOCAL\NetAlertX\MedikQuest\js\data\questions.js"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"¡Éxito! Archivo questions.js generado con {total_casos} casos en {out_path}")
