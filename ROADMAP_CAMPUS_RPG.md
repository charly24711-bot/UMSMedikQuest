# 🏛️ ROADMAP & GUÍA DE DISEÑO: MEDIKQUEST CAMPUS RPG (UPMS)

Documento maestro para la evolución de **MedikQuest** de simulador clínico a **RPG de exploración de campus y guardia médica 16-bit**.

---

## 🗺️ 1. Mapa de Sectores e Instalaciones (Campus Central Filial CDE)

El flujo integrará un mapa o selector interactivo de instalaciones donde el alumno se desplaza entre los sectores de la facultad antes de asumir los casos:

| Sector / Instalación | Cátedra / Área | Encargado / Docente Responsable | Asset Visual / Avatar | Minimisión de Acceso |
| :--- | :--- | :--- | :--- | :--- |
| **0. Recepción & Secretaría** | Mesa de Entrada y Credenciales | **Lic. Patricia Gómez** | `patricia_gomez_pixel.jpg` | Check-in, retiro de libreta de prácticas y carnet estudiantil. |
| **1. Pabellón de Morfología y Morgue** | Anatomía Humana I (`MED-01-01`) | **Dr. Ernaldo René Amarilla** | `dr_rene_amarilla_pixel.jpg` | *Checklist de Bioseguridad*: Equipar EPP (bata, guantes nitrilo, N95) antes de acceder a las piezas anatómicas. |
| **2. Laboratorio de Análisis Clínicos** | Bioquímica Clínica I (`MED-01-03`) | **Dra. Antonella Antico** | `dra_antonella_antico_pixel.jpg` | *Fase Preanalítica*: Elegir el tubo correcto (tapa roja/suero vs. tapa lila/EDTA) para la determinación solicitada. |
| **3. Box de Urgencias y Triaje** | Ciclos de Formación Médica | **Dr. Ángel Adrián Gómez Rosso** | `dr_angel_pixel.jpg` | *Triaje In Situ*: Clasificar pacientes por código de riesgo vital antes de pasar a la cama de guardia. |
| **4. Decanato y Sala de Ateneo** | Antropología Médica (`MED-01-06`) | **Dra. Nidia Viviana Ruiz** | `dra_viviana_ruiz_fiel.jpg` | *Defensa de Criterio*: Pase de guardia final y evaluación bioética/intercultural ante el tribunal. |

---

## 🎮 2. Mecánicas de Jugabilidad y Adicción (Gamificación Médica)

### A. Inventario / Mochila del Alumno
- **Objetos recolectables en pasillos:**
  - *Estetoscopio Littmann:* Desbloquea pistas auditivas de soplos o ruidos pulmonares.
  - *Martillo de Reflejos de Taylor:* Permite evaluar reflejos rotuliano/aquiliano (Unidad III y VII de Anatomía).
  - *Glucómetro portátil:* Revela valores glucémicos exactos en casos metabólicos de urgencias.
  - *Guía Farmacológica de Bolsillo:* Reduce opciones erróneas en decisiones de tratamiento.

### B. Tensión de Guardia en Tiempo Real
- **Monitor ECG Dinámico con Pulso Retro:** 
  - Ritmo sinusal normal (verde / 75 lpm) en casos estables.
  - Taquicardia o fibrilación audible con pitidos acelerados en pacientes críticos (ej. cetoacidosis o shock).
  - Tensión psicológica que premia la rapidez y exactitud del diagnóstico.

### C. Racha de Diagnósticos ("Guardia Impecable")
- Multiplicadores de puntaje acumulables:
  - 3 aciertos seguidos: Multiplicador **x1.5 XP** + efecto visual dorado.
  - 5 aciertos seguidos: Multiplicador **x2.0 XP** + *"Criterio Clínico Distinguido"*.

### D. Libreta Oficial de Prácticas y Sellos de Cátedra
- Sistema de progresión por rangos:
  1. *Alumno Observador (0 a 300 XP)*
  2. *Practicante de Laboratorio (400 a 700 XP)*
  3. *Médico Interno de Guardia (800 a 1100 XP)*
  4. *Jefe de Residentes con Mención de Honor (1200+ XP)*
- Cada profesor firma digitalmente su sección en la libreta al completar los casos de su sector.

---

## 📋 3. Plantilla Estándar para Incorporar Nuevos Sectores y Profesores

Para cuando se dispongan de las fotos, sectores o datos de nuevos docentes, se utilizará esta estructura en `js/data/questions.js`:

```javascript
{
  id: "sector-id",
  nombreSector: "Nombre Oficial del Espacio Físico (ej. Aula Tecnológica 2)",
  fondoVisual: "sector_fondo_pixel.jpg",
  docente: {
    nombre: "Nombre Completo y Grado Académico",
    cargo: "Cátedra o Departamento Responsable",
    avatar: "profesor_pixel.jpg"
  },
  minimisionPrevia: {
    titulo: "Nombre de la minimisión",
    descripcion: "Objetivo práctico basado en el programa analítico",
    recompensaItem: "item_inventario_id"
  },
  casos: [
    // Casos clínicos asociados a ese sector
  ]
}
```
