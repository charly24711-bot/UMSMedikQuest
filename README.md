# 🩺 MedikQuest: RPG Clínico de Medicina (1er Año - UPMS)

Videojuego de rol educativo en estilo pixel art 16-bit diseñado para estudiantes de Medicina de la **Universidad Privada María Serrana (Filial Ciudad del Este)**.

---

## 🎯 Concepto del Juego
El alumno asume el rol de un estudiante en su primera guardia médica. Para resolver los casos clínicos y aprobar las materias, cuenta con la ayuda de los **Profesores de Cátedra Pixelados**, quienes aparecen en cuadros de diálogo retro brindando pistas fisiopatológicas y anatómicas basadas en el programa académico.

---

## 📁 Estructura del Proyecto
- `index.html`: Gabinete retro interactivo y pantalla RPG (sin eventos inline).
- `styles.css`: Estilo visual 16-bit (fuentes retro, bordes de diálogo, barras de HP/MP).
- `js/`: Arquitectura modular desacoplada:
  - `data/questions.js`: Banco de casos clínicos y cátedras de 1er Año.
  - `audio/sound-system.js`: Síntesis de sonido retro desacoplada (Web Audio API).
  - `core/game-engine.js`: Dominio puro (máquina de estados, XP, HP, lógica sin dependencias de DOM).
  - `ui/typewriter.js`: Controlador de efecto de texto retro con soporte de cancelación y skip.
  - `ui/view-manager.js`: Renderizado de escenarios, HUD y diálogos.
  - `app.js`: Orquestador principal e inyección de dependencias.
- `tests/`: Batería de pruebas automatizadas unitarias (`tests/game-engine.test.js`).

---

## 🚀 Cómo jugar localmente
Hacer doble clic en `index.html` o ejecutar `JUGAR_MEDIKQUEST.bat` en cualquier navegador web. No requiere servidor ni conexión a internet.

---

## 🧪 Pruebas Automatizadas
Ejecutar el runner nativo de Node.js:
```bash
node --test tests/game-engine.test.js
```
