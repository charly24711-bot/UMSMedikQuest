const test = require('node:test');
const assert = require('node:assert/strict');
const GameEngine = require('../js/core/game-engine.js');
const questionsData = require('../js/data/questions.js');

test('GameEngine initializes with correct defaults', () => {
  const cases = questionsData.getFlatCases();
  const engine = new GameEngine(cases);

  const state = engine.getState();
  assert.equal(state.hp, 3);
  assert.equal(state.xp, 0);
  assert.equal(state.currentCaseIndex, 0);
  assert.equal(state.screen, 'intro');
  assert.equal(state.cases.length, cases.length);
  assert.ok(cases.length > 0);
});

test('GameEngine starts rotation and resets stats', () => {
  const cases = questionsData.getFlatCases();
  const engine = new GameEngine(cases);
  engine.startRotation();

  const state = engine.getState();
  assert.equal(state.screen, 'game');
  assert.equal(state.hp, 3);
  assert.equal(state.xp, 0);
  assert.equal(state.currentCaseIndex, 0);
});

test('GameEngine awards XP on correct answer', () => {
  const cases = questionsData.getFlatCases();
  const engine = new GameEngine(cases);
  engine.startRotation();

  const currentCase = engine.getCurrentCase();
  const correctIdx = currentCase.opciones.findIndex(o => o.correcta);

  const outcome = engine.submitAnswer(correctIdx);
  assert.equal(outcome.isCorrect, true);
  assert.equal(outcome.pointsEarned, 100);
  assert.equal(outcome.totalXp, 100);
  assert.equal(outcome.remainingHp, 3);
});

test('GameEngine docks HP on wrong answer and triggers game over at 0 HP', () => {
  const cases = questionsData.getFlatCases();
  const engine = new GameEngine(cases, { maxHp: 2 });
  engine.startRotation();

  const currentCase = engine.getCurrentCase();
  const wrongIdx = currentCase.opciones.findIndex(o => !o.correcta);

  // 1st wrong answer
  const outcome1 = engine.submitAnswer(wrongIdx);
  assert.equal(outcome1.isCorrect, false);
  assert.equal(outcome1.remainingHp, 1);
  assert.equal(outcome1.isGameOver, false);

  // 2nd wrong answer
  const outcome2 = engine.submitAnswer(wrongIdx);
  assert.equal(outcome2.isCorrect, false);
  assert.equal(outcome2.remainingHp, 0);
  assert.equal(outcome2.isGameOver, true);
  assert.equal(engine.getState().screen, 'gameover');
});

test('GameEngine detects victory on last question answered correctly', () => {
  const dummyCases = [
    {
      id: 'c1',
      paciente: 'Test',
      pregunta: 'Q1',
      opciones: [{ texto: 'A', correcta: true }]
    }
  ];
  const engine = new GameEngine(dummyCases);
  engine.startRotation();

  const outcome = engine.submitAnswer(0);
  assert.equal(outcome.isVictory, true);
  assert.equal(engine.getState().screen, 'victory');
});

test('GameEngine notifies subscribers on events', () => {
  const cases = questionsData.getFlatCases();
  const engine = new GameEngine(cases);

  const events = [];
  engine.subscribe((event, payload) => {
    events.push({ event, payload });
  });

  engine.setScreen('title');
  engine.startRotation();

  assert.equal(events.some(e => e.event === 'screenChanged'), true);
  assert.equal(events.some(e => e.event === 'rotationStarted'), true);
});

test('GameEngine tracks streaks and awards multipliers (1.5x and 2.0x)', () => {
  const dummyCases = Array.from({ length: 7 }, (_, i) => ({
    id: `c-${i}`,
    paciente: `Paciente ${i}`,
    pregunta: `Pregunta ${i}`,
    opciones: [
      { texto: 'Correcta', correcta: true },
      { texto: 'Incorrecta', correcta: false }
    ]
  }));

  const engine = new GameEngine(dummyCases);
  engine.startRotation();

  // 1st correct answer: streak 1, multiplier 1.0x (100 XP)
  let o1 = engine.submitAnswer(0);
  assert.equal(o1.streak, 1);
  assert.equal(o1.multiplier, 1.0);
  assert.equal(o1.pointsEarned, 100);
  assert.equal(engine.getState().xp, 100);
  engine.advanceCase();

  // 2nd correct answer: streak 2, multiplier 1.0x (100 XP)
  let o2 = engine.submitAnswer(0);
  assert.equal(o2.streak, 2);
  assert.equal(o2.multiplier, 1.0);
  assert.equal(engine.getState().xp, 200);
  engine.advanceCase();

  // 3rd correct answer: streak 3 -> MULTIPLIER 1.5x (150 XP)
  let o3 = engine.submitAnswer(0);
  assert.equal(o3.streak, 3);
  assert.equal(o3.multiplier, 1.5);
  assert.equal(o3.pointsEarned, 150);
  assert.equal(engine.getState().xp, 350);
  engine.advanceCase();

  // 4th correct answer: streak 4 -> multiplier 1.5x (150 XP)
  let o4 = engine.submitAnswer(0);
  assert.equal(o4.streak, 4);
  assert.equal(o4.multiplier, 1.5);
  assert.equal(engine.getState().xp, 500);
  engine.advanceCase();

  // 5th correct answer: streak 5 -> MULTIPLIER 2.0x (200 XP - Guardia Impecable)
  let o5 = engine.submitAnswer(0);
  assert.equal(o5.streak, 5);
  assert.equal(o5.multiplier, 2.0);
  assert.equal(o5.pointsEarned, 200);
  assert.equal(engine.getState().xp, 700);
  assert.equal(engine.getState().maxStreak, 5);
  engine.advanceCase();

  // 6th answer is WRONG: streak resets to 0, multiplier resets to 1.0x
  let o6 = engine.submitAnswer(1);
  assert.equal(o6.isCorrect, false);
  assert.equal(o6.streak, 0);
  assert.equal(o6.streakBroken, true);
  assert.equal(o6.multiplier, 1.0);
  assert.equal(engine.getState().streak, 0);
  assert.equal(engine.getState().maxStreak, 5); // maxStreak preserved
});
