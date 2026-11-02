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
  const profile = new PlayerProfile({ name: 'Valentina', gender: 'f' });
  assert.equal(profile.getName(), 'Valentina');
  assert.equal(profile.getTitle(), 'Alumna');
  assert.equal(profile.getBadgeText(), 'ALUMNA: VALENTINA');
  assert.equal(profile.getBadgeText().includes('DRA.'), false);

  profile.update({ name: 'Carlos', gender: 'm' });
  assert.equal(profile.getName(), 'Carlos');
  assert.equal(profile.getTitle(), 'Alumno');
  assert.equal(profile.getBadgeText(), 'ALUMNO: CARLOS');
  assert.equal(profile.getBadgeText().includes('DR.'), false);
});

test('PlayerProfile allows deleting characters down to empty string', () => {
  const profile = new PlayerProfile({ name: 'E' });
  profile.update({ name: '' });
  assert.equal(profile.getRawName(), '');
  assert.equal(profile.getName(), 'Estudiante'); // Fallback when reading empty name
});

test('PlayerProfile restricts name to exactly 15 characters max', () => {
  const profile = new PlayerProfile();
  profile.update({ name: '12345678901234567890' });
  assert.equal(profile.getRawName().length, 15);
  assert.equal(profile.getRawName(), '123456789012345');
});

test('PlayerProfile records professor endorsement stamps and detects completion', () => {
  const profile = new PlayerProfile();
  profile.resetStamps();
  assert.equal(profile.getTotalStamps(), 0);
  assert.equal(profile.hasAllStamps(), false);

  // Add 1st stamp
  const isNew1 = profile.addStamp('anatomia');
  assert.equal(isNew1, true);
  assert.equal(profile.getTotalStamps(), 1);
  assert.equal(profile.getStamps().anatomia, true);

  // Re-adding existing stamp returns false
  const isNewAgain = profile.addStamp('anatomia');
  assert.equal(isNewAgain, false);
  assert.equal(profile.getTotalStamps(), 1);

  // Add remaining 4 stamps
  profile.addStamp('bioquimica');
  profile.addStamp('laboratorios');
  profile.addStamp('ciclos');
  profile.addStamp('antropologia');

  assert.equal(profile.getTotalStamps(), 5);
  assert.equal(profile.hasAllStamps(), true);

  // Reset stamps
  profile.resetStamps();
  assert.equal(profile.getTotalStamps(), 0);
  assert.equal(profile.hasAllStamps(), false);
});
