const test = require('node:test');
const assert = require('node:assert/strict');
const QuestionsData = require('../js/data/questions.js');

test('Questions Data contains 100 official cases and version v1.4.2', () => {
  assert.equal(QuestionsData.version, 'v1.4.2');
  assert.equal(QuestionsData.totalQuestions, 100);

  const flat = QuestionsData.getFlatCases();
  assert.equal(flat.length, 100);

  // Assert representation across the 5 materias
  const materias = new Set(flat.map(c => c.materiaId));
  assert.ok(materias.has('anatomia'));
  assert.ok(materias.has('bioquimica'));
  assert.ok(materias.has('antropologia'));
  assert.ok(materias.has('laboratorios'));
  assert.ok(materias.has('ciclos'));

  // Assert every question has exactly 4 options with 1 correct
  // and incorrect options offer pedagogical hints without spoiling the answer
  flat.forEach((c) => {
    assert.equal(c.opciones.length, 4, `Case ${c.id} should have 4 options`);
    const correctCount = c.opciones.filter(o => o.correcta).length;
    assert.equal(correctCount, 1, `Case ${c.id} must have exactly 1 correct option`);

    c.opciones.filter(o => !o.correcta).forEach(distractor => {
      assert.ok(distractor.feedback.includes('Orientación del docente'), `Case ${c.id} distractor feedback must contain teacher hint`);
      assert.ok(!distractor.feedback.includes('La respuesta clínica correcta es'), `Case ${c.id} distractor feedback must not spoil the answer`);
    });
  });
});

test('getRandomRotation returns requested count with shuffled options', () => {
  const rotation = QuestionsData.getRandomRotation(10);
  assert.equal(rotation.length, 10);

  rotation.forEach((c) => {
    assert.equal(c.opciones.length, 4);
    const correctCount = c.opciones.filter(o => o.correcta).length;
    assert.equal(correctCount, 1);
  });
});
