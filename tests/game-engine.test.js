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
