import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('BIOJÄSI v3: Kickers, Lotes & Editorial Tone Verification', async (t) => {
  await t.test('1. Absence of fake lotes (Lote 08, Lote 09, etc.) in customer UI and data', () => {
    const filesToCheck = [
      'src/components/home/V3HeroAsymmetric.tsx',
      'src/components/home/V3BentoShowcase.tsx',
      'src/components/home/V3SensoryAromaWheel.tsx',
      'src/components/home/V3CraftsmanshipStory.tsx',
      'src/components/home/V3CommunityJournal.tsx',
      'src/components/layout/FooterV3.tsx',
      'src/components/layout/Header.tsx',
      'src/data/products.ts',
    ];

    for (const relPath of filesToCheck) {
      const fullPath = path.join(rootDir, relPath);
      if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        assert.ok(!content.includes('Lote 08'), `Forbidden 'Lote 08' found in ${relPath}`);
        assert.ok(!content.includes('Lote 09'), `Forbidden 'Lote 09' found in ${relPath}`);
        assert.ok(!content.includes('LOTE 08'), `Forbidden 'LOTE 08' found in ${relPath}`);
        assert.ok(!content.includes('LOTE 09'), `Forbidden 'LOTE 09' found in ${relPath}`);
      }
    }
  });

  await t.test('2. Absence of artificial over-headings / kickers in home hero and sections', () => {
    const hero = fs.readFileSync(path.join(rootDir, 'src/components/home/V3HeroAsymmetric.tsx'), 'utf8');
    assert.ok(!hero.includes('Taller de Destilación en Querétaro • Lote 09'));

    const bento = fs.readFileSync(path.join(rootDir, 'src/components/home/V3BentoShowcase.tsx'), 'utf8');
    assert.ok(!bento.includes('Creaciones de la Casa'));

    const wheel = fs.readFileSync(path.join(rootDir, 'src/components/home/V3SensoryAromaWheel.tsx'), 'utf8');
    assert.ok(!wheel.includes('Acompañamiento Emocional'));

    const story = fs.readFileSync(path.join(rootDir, 'src/components/home/V3CraftsmanshipStory.tsx'), 'utf8');
    assert.ok(!story.includes('El Huerto & El Alambique'));

    const journal = fs.readFileSync(path.join(rootDir, 'src/components/home/V3CommunityJournal.tsx'), 'utf8');
    assert.ok(!journal.includes('Diario de la Comunidad'));
  });

  await t.test('3. Absence of internal persona leaks ("La Amiga Sabia") in customer UI & blog authors', () => {
    const filesToCheck = [
      'src/components/layout/RitualSelector.tsx',
      'src/components/layout/WhatsAppConcierge.tsx',
      'src/components/contact/ContactForm.tsx',
      'src/data/blog.ts',
    ];

    for (const relPath of filesToCheck) {
      const fullPath = path.join(rootDir, relPath);
      const content = fs.readFileSync(fullPath, 'utf8');
      assert.ok(!content.includes('La Amiga Sabia'), `Leaked internal persona 'La Amiga Sabia' in ${relPath}`);
    }
  });

  await t.test('4. Official 2026 Catalog Pricing & Botanical Formula Truth', () => {
    const products = fs.readFileSync(path.join(rootDir, 'src/data/products.ts'), 'utf8');

    // Brisa prices must be 135 MXN
    assert.ok(products.includes('priceMxn: 135'), 'Brisa 135 MXN present in products');

    // Shampoo 8 formula must not contain fake ingredients
    assert.ok(!products.includes('cola de caballo'), 'Shampoo does not contain fake cola de caballo');
    assert.ok(!products.includes('aceite de ricino'), 'Shampoo does not contain fake aceite de ricino');
    assert.ok(products.includes('Romero Silvestre'), 'Shampoo contains authentic Romero Silvestre');
    assert.ok(products.toLowerCase().includes('nopal orgánico'), 'Shampoo contains authentic nopal orgánico');
  });

  await t.test('5. Brand Manual Botanical Vector Illustrations Present', () => {
    const botanicalsDir = path.join(rootDir, 'public/assets/branding/botanicals');
    assert.ok(fs.existsSync(botanicalsDir), 'Botanicals directory exists');

    const expectedSvgs = [
      'flor_slow_living_pino.svg',
      'espiga_lavanda_oficial.svg',
      'flor_caliz_verde_oficial.svg',
      'flor_rosa_cosmos_oficial.svg',
      'postal1_espiga_azul.svg',
    ];

    for (const svg of expectedSvgs) {
      assert.ok(
        fs.existsSync(path.join(botanicalsDir, svg)),
        `Official botanical SVG ${svg} exists in public folder`
      );
    }
  });
});
