const test = require('node:test');
const assert = require('node:assert/strict');
const PlayerProfile = require('../js/core/player-profile.js');

test('PlayerProfile initializes with sensible defaults', () => {
  const profile = new PlayerProfile();
  const data = profile.get();
  assert.equal(typeof data.name, 'string');
  assert.ok(['m', 'f'].includes(data.gender));
  assert.ok(data.skin);
  assert.ok(data.outfit);
});

test('PlayerProfile uses student role titles instead of doctor', () => {
  const profile = new PlayerProfile({ name: 'Valentina Rolón', gender: 'f' });
  assert.equal(profile.getName(), 'Valentina Rolón');
  assert.equal(profile.getTitle(), 'Alumna');
  assert.equal(profile.getBadgeText(), 'ALUMNA: VALENTINA ROLÓN');
  assert.equal(profile.getBadgeText().includes('DRA.'), false);

  profile.update({ name: 'Carlos Rolón', gender: 'm' });
  assert.equal(profile.getName(), 'Carlos Rolón');
  assert.equal(profile.getTitle(), 'Alumno');
  assert.equal(profile.getBadgeText(), 'ALUMNO: CARLOS ROLÓN');
  assert.equal(profile.getBadgeText().includes('DR.'), false);
});

test('PlayerProfile trims and cleans excess spaces while preserving internal space', () => {
  const profile = new PlayerProfile();
  profile.update({ name: '   Valentina    Rolon   ' });
  assert.equal(profile.getName(), 'Valentina Rolon');
});
