const test = require('node:test');
const assert = require('node:assert/strict');
const AvatarGenerator = require('../js/ui/avatar-generator.js');

test('AvatarGenerator exports correctly and produces valid student SVG', () => {
  assert.ok(AvatarGenerator);
  assert.equal(typeof AvatarGenerator.generateSVG, 'function');
  assert.equal(typeof AvatarGenerator.generatePatientBedSVG, 'function');

  const svg = AvatarGenerator.generateSVG({
    gender: 'f',
    skin: 'moreno',
    hairColor: 'negro',
    hairStyle: 'coleta',
    outfit: 'guardapolvo'
  });

  assert.ok(svg.includes('<svg'));
  assert.ok(svg.includes('viewBox="0 0 40 64"'));
  assert.ok(svg.includes('</svg>'));
});

test('generatePatientBedSVG generates 16-bit hospital bed with interactive hotspots', () => {
  const bedSvg = AvatarGenerator.generatePatientBedSVG();

  assert.ok(bedSvg.includes('viewBox="0 0 64 42"'));
  assert.ok(bedSvg.includes('data-zone="head"'));
  assert.ok(bedSvg.includes('data-zone="chest"'));
  assert.ok(bedSvg.includes('data-zone="arm"'));
  assert.ok(bedSvg.includes('data-zone="knee"'));
  assert.ok(bedSvg.includes('patient-pixel-art-bed'));
});
