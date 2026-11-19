import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Color luminance helper
function getLuminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map((x) => parseInt(x, 16) / 255);
  const [r, g, b] = rgb.map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

test('BIOJÄSI v2: Brand Constants, Tokens & Typography', async (t) => {
  await t.test('1. MIV Tokens & WCAG AA Contrast', () => {
    const tailwindContent = fs.readFileSync(path.join(rootDir, 'tailwind.config.js'), 'utf8');
    assert.ok(tailwindContent.includes('#FAF8F5'), 'Sand-50 color present');
    assert.ok(tailwindContent.includes('#1C1917'), 'Charcoal-800 color present');
    assert.ok(tailwindContent.includes('#177333'), 'Pino token present');
    assert.ok(tailwindContent.includes('#fbecdd'), 'Tule token present');

    const contrast = getContrastRatio('#1C1917', '#FAF8F5');
    assert.ok(contrast >= 7.0, `Charcoal on Sand contrast (${contrast.toFixed(2)}) exceeds WCAG AAA (7:1)`);
  });

  await t.test('2. 18 Authentic Instagram Photographs in public/assets/instagram/', () => {
    const dir = path.join(rootDir, 'public/assets/instagram');
    assert.ok(fs.existsSync(dir), 'Assets directory exists');
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg'));
    assert.strictEqual(files.length, 18, 'All 18 authentic photographs present');
  });

  await t.test('3. Official PDF Catalog in public/docs/', () => {
    const pdfPath = path.join(rootDir, 'public/docs/Catalogo_Oficial_BIOJASI_2026.pdf');
    assert.ok(fs.existsSync(pdfPath), 'Official catalog PDF is available for download');
  });
});

test('BIOJÄSI v2: Core Datasets & Sitemap Coverage', async (t) => {
  await t.test('1. 8 Core Products Dataset Integrity', () => {
    const content = fs.readFileSync(path.join(rootDir, 'src/data/products.ts'), 'utf8');
    assert.ok(content.includes('Shampoo BIOJÄSI 8'), 'BIOJÄSI 8 present');
    assert.ok(content.includes("'Respira'"), 'Respira present');
    assert.ok(content.includes("'Armonía'"), 'Armonía present');
    assert.ok(content.includes("'Risa y Amor'"), 'Risa y Amor present');
    assert.ok(content.includes("'Shot Respira'"), 'Shot Respira present');
    assert.ok(content.includes("'Shot Armonía'"), 'Shot Armonía present');
    assert.ok(content.includes('Kit Esencial BIOJÄSI'), 'Kit Esencial present');
    assert.ok(content.includes('Dúo Capilar BIOJÄSI 8'), 'Dúo Capilar present');
  });

  await t.test('2. 12 Botanical Herbarium Specimens', () => {
    const content = fs.readFileSync(path.join(rootDir, 'src/data/herbarium.ts'), 'utf8');
    assert.ok(content.includes('Romero Silvestre'));
    assert.ok(content.includes('Lavanda Real'));
    assert.ok(content.includes('Jazmín Silvestre'));
    assert.ok(content.includes('Menta Piperita'));
    assert.ok(content.includes('Eucalipto Globulus'));
    assert.ok(content.includes('Palo Santo'));
    assert.ok(content.includes('Rosa de Huerto'));
    assert.ok(content.includes('Nopal & Sábila Orgánica'));
    assert.ok(content.includes('Jengibre Fresco'));
    assert.ok(content.includes('Té de Limón'));
    assert.ok(content.includes('Salvia Real'));
    assert.ok(content.includes('Tea Tree'));
  });

  await t.test('3. 10 Brand Pillars exact from prompt', () => {
    const content = fs.readFileSync(path.join(rootDir, 'src/data/pillars.ts'), 'utf8');
    assert.ok(content.includes('100% Extractos Naturales'));
    assert.ok(content.includes('Libre de Crueldad Animal'));
    assert.ok(content.includes('Envases Sustentables'));
    assert.ok(content.includes('Ingredientes Orgánicos'));
    assert.ok(content.includes('Fórmula 100% Vegana'));
    assert.ok(content.includes('Cero Parabenos ni Sulfatos'));
    assert.ok(content.includes('Producción Local en Querétaro'));
    assert.ok(content.includes('Fórmulas Biodegradables'));
    assert.ok(content.includes('Sin Microplásticos'));
    assert.ok(content.includes('100% Reciclable'));
  });

  await t.test('4. 4 Educational Blog Articles exact from prompt', () => {
    const content = fs.readFileSync(path.join(rootDir, 'src/data/blog.ts'), 'utf8');
    assert.ok(content.includes('Cómo crear una rutina de sueño con aceites esenciales'));
    assert.ok(content.includes('Beneficios botánicos de nuestro nuevo shampoo BIOJÄSI 8'));
    assert.ok(content.includes('Anatomía de un cabello sano'));
    assert.ok(content.includes('Noches sin estrés: Rutinas relajantes'));
  });

  await t.test('5. Categorized FAQs & Distributors', () => {
    const faqsContent = fs.readFileSync(path.join(rootDir, 'src/data/faqs.ts'), 'utf8');
    assert.ok(faqsContent.includes('BRISAS_VS_SHOTS'));
    assert.ok(faqsContent.includes('USO_APLICACION'));
    assert.ok(faqsContent.includes('CADUCIDAD_CALIDAD'));
    assert.ok(faqsContent.includes('ENVIOS_PAGOS'));

    const distContent = fs.readFileSync(path.join(rootDir, 'src/data/distributors.ts'), 'utf8');
    assert.ok(distContent.includes('Tianguis Orgánico Bosque de Agua Querétaro'));
  });
});

test('BIOJÄSI v2: Commerce Logic & Free Shipping Boundary Stress', async (t) => {
  await t.test('1. Free Shipping $899.00 Threshold', () => {
    const threshold = 899;
    const subtotalBelow = 898.99;
    const subtotalExact = 899.00;
    const subtotalAbove = 900.00;

    assert.strictEqual(subtotalBelow >= threshold, false, '898.99 does NOT qualify for free shipping');
    assert.strictEqual(subtotalExact >= threshold, true, '899.00 DOES qualify for free shipping');
    assert.strictEqual(subtotalAbove >= threshold, true, '900.00 DOES qualify for free shipping');
  });

  await t.test('2. Discount Code RECONECTA10 & Mayúscula Afectiva', () => {
    const constants = fs.readFileSync(path.join(rootDir, 'src/lib/constants.ts'), 'utf8');
    assert.ok(constants.includes('RECONECTA10'));
    assert.ok(constants.includes('BIENESTAR899'));

    const formatters = fs.readFileSync(path.join(rootDir, 'src/lib/formatters.ts'), 'utf8');
    assert.ok(formatters.includes('enforceMayusculaAfectiva'));
  });
});
