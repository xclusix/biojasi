import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * BotanicalGrowthCanvas (Manual de Identidad Oficial BIOJÄSI ®)
 * 
 * 1. Flor de la Página 25 (Postal 3 - "Slow Living"):
 *    - Nace y crece desde la tierra conforme se hace scroll.
 *    - Tallo y hoja inferior emergen desde el fondo del viewport.
 *    - La corola se abre hacia el sol con balanceo orgánico.
 *    - La abeja/polinizador ilustrada a mano revolotea y asciende.
 *    - Esporas de polen y destellos se dispersan hacia arriba.
 * 
 * 2. Flora y Texturas de la Página 26:
 *    - Margaritas azules en técnica de crayón/lápiz suave (#6c86bd Lago).
 *    - Espigas de lavanda oficiales (#ed73aa Cosmos con tallo #177333 Pino).
 *    - Destellos verdes de 4 puntas (#177333 / #41af65) pulsando y flotando.
 *    - Gran espiga azul de la Postal 1 trepando por el flanco izquierdo.
 */
export const BotanicalGrowthCanvas: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Física de resorte orgánica para emular crecimiento vegetal natural
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 18,
    restDelta: 0.001,
  });

  // ========================================================
  // 1. FLOR DE LA TIERRA ("SLOW LIVING" - PÁGINA 25)
  // ========================================================
  // Crecimiento vertical desde la tierra (bottom edge)
  const earthFlowerY = useTransform(smoothProgress, [0, 0.85], [140, -60]);
  const earthFlowerScale = useTransform(smoothProgress, [0, 0.4, 0.85], [0.75, 1, 1.15]);
  const earthFlowerRotate = useTransform(smoothProgress, [0, 0.5, 1], [-4, 3, -2]);
  const earthFlowerOpacity = useTransform(smoothProgress, [0, 0.08, 0.9], [0.35, 0.95, 0.85]);

  // Abeja polinizadora que revolotea sobre la flor
  const beeY = useTransform(smoothProgress, [0, 1], [40, -180]);
  const beeX = useTransform(smoothProgress, [0, 0.3, 0.6, 1], [0, 15, -12, 10]);
  const beeRotate = useTransform(smoothProgress, [0, 0.5, 1], [-8, 12, -4]);

  // Esporas y polen flotando al cielo
  const sporesY = useTransform(smoothProgress, [0, 1], [60, -320]);
  const sporesOpacity = useTransform(smoothProgress, [0, 0.3, 0.8, 1], [0.2, 0.8, 0.6, 0.1]);

  // ========================================================
  // 2. MARGARITAS AZULES FLOTANTES (PÁGINA 26 Y POSTAL 1)
  // ========================================================
  // Margarita 1: Flanco superior izquierdo (cerca de Hero & Terroir)
  const daisy1Y = useTransform(smoothProgress, [0, 0.5], [0, -160]);
  const daisy1Rotate = useTransform(smoothProgress, [0, 0.5], [0, 75]);
  const daisy1Scale = useTransform(smoothProgress, [0, 0.25, 0.5], [0.85, 1.05, 0.9]);

  // Margarita 2: Flanco medio derecho (cerca de Bento Showcase)
  const daisy2Y = useTransform(smoothProgress, [0.15, 0.75], [120, -180]);
  const daisy2Rotate = useTransform(smoothProgress, [0.15, 0.75], [-20, 85]);
  const daisy2Scale = useTransform(smoothProgress, [0.15, 0.45], [0.7, 1.1]);

  // Margarita 3: Flanco inferior izquierdo (cerca de Sensory Wheel & Journal)
  const daisy3Y = useTransform(smoothProgress, [0.4, 1], [140, -120]);
  const daisy3Rotate = useTransform(smoothProgress, [0.4, 1], [15, -60]);

  // ========================================================
  // 3. ESPIGAS DE LAVANDA OFICIALES (PÁGINA 26 Y POSTAL 1)
  // ========================================================
  // Gran espiga azul de la Postal 1 en flanco izquierdo
  const blueSpikeY = useTransform(smoothProgress, [0, 0.9], [120, -140]);
  const blueSpikeScaleY = useTransform(smoothProgress, [0, 0.6], [0.7, 1.05]);
  const blueSpikeSway = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [-2, 3, -3, 2]);

  // Espiga de lavanda rosa (Página 26) flanco derecho
  const pinkLavenderY1 = useTransform(smoothProgress, [0.05, 0.8], [90, -170]);
  const pinkLavenderRotate1 = useTransform(smoothProgress, [0.05, 0.8], [6, -10]);
  const pinkLavenderScale1 = useTransform(smoothProgress, [0.05, 0.4], [0.75, 1.1]);

  // Espiga de lavanda rosa secundaria inferior
  const pinkLavenderY2 = useTransform(smoothProgress, [0.45, 1], [130, -140]);
  const pinkLavenderRotate2 = useTransform(smoothProgress, [0.45, 1], [-8, 12]);

  // ========================================================
  // 4. DESTELLOS Y ESTRELLAS VERDES (PÁGINA 26)
  // ========================================================
  const sparkleY1 = useTransform(smoothProgress, [0, 1], [0, -260]);
  const sparkleRotate1 = useTransform(smoothProgress, [0, 1], [0, 180]);

  const sparkleY2 = useTransform(smoothProgress, [0, 1], [40, -320]);
  const sparkleRotate2 = useTransform(smoothProgress, [0, 1], [0, -160]);

  const sparkleY3 = useTransform(smoothProgress, [0.3, 1], [80, -220]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* ========================================================
          FLOR DE LA TIERRA ("SLOW LIVING" - PÁGINA 25 OFICIAL)
          Naciendo y floreciendo desde el suelo inferior
          ======================================================== */}
      <motion.div
        style={{
          y: earthFlowerY,
          scale: earthFlowerScale,
          rotate: earthFlowerRotate,
          opacity: earthFlowerOpacity,
          transformOrigin: 'bottom center',
        }}
        className="absolute -bottom-10 right-4 sm:right-16 lg:right-28 w-44 sm:w-64 lg:w-76 pointer-events-none"
      >
        {/* Tallo, flor y hojas oficiales */}
        <img
          src="/assets/branding/botanicals/flor_slow_living_tierra_pino.svg"
          alt=""
          className="w-full h-auto drop-shadow-[0_8px_24px_rgba(23,115,51,0.06)] opacity-85"
        />

        {/* Abeja / Polinizador oficial en órbita sobre la flor */}
        <motion.div
          style={{
            y: beeY,
            x: beeX,
            rotate: beeRotate,
          }}
          className="absolute top-10 left-6 sm:left-10 w-8 sm:w-11"
        >
          <img
            src="/assets/branding/botanicals/abeja_polinizadora_pino.svg"
            alt=""
            className="w-full h-auto animate-pulse opacity-90"
          />
        </motion.div>
      </motion.div>

      {/* Esporas y polvo de polen flotando al cielo desde la tierra */}
      <motion.div
        style={{
          y: sporesY,
          opacity: sporesOpacity,
        }}
        className="absolute bottom-32 right-12 sm:right-32 w-48 sm:w-64 pointer-events-none flex flex-wrap gap-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#177333]/30 blur-[0.5px]" />
        <span className="w-2 h-2 rounded-full bg-[#fec82f]/35 blur-[0.5px] ml-8" />
        <span className="w-1 h-1 rounded-full bg-[#177333]/40 blur-[0.5px] ml-16" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ed73aa]/25 blur-[0.5px] ml-6" />
      </motion.div>

      {/* ========================================================
          GRAN ESPIGA AZUL TREPADORA (POSTAL 1 DE LA PÁGINA 25)
          Flanco izquierdo, acompaña el scroll como planta trepadora
          ======================================================== */}
      <motion.div
        style={{
          y: blueSpikeY,
          scaleY: blueSpikeScaleY,
          rotate: blueSpikeSway,
          transformOrigin: 'bottom left',
        }}
        className="absolute bottom-0 -left-2 sm:left-4 lg:left-8 w-28 sm:w-40 lg:w-48 opacity-45 lg:opacity-60"
      >
        <img
          src="/assets/branding/botanicals/postal1_espiga_azul.svg"
          alt=""
          className="w-full h-auto drop-shadow-[0_4px_16px_rgba(108,134,189,0.08)]"
        />
      </motion.div>

      {/* ========================================================
          MARGARITAS AZULES A MANO ALZADA (PÁGINA 26 OFICIAL)
          Flotando con rotación y paralaje suave
          ======================================================== */}
      {/* Margarita 1: Superior Izquierda */}
      <motion.div
        style={{
          y: daisy1Y,
          rotate: daisy1Rotate,
          scale: daisy1Scale,
        }}
        className="absolute top-28 sm:top-36 left-4 sm:left-14 lg:left-24 w-20 sm:w-28 lg:w-32 opacity-40 hover:opacity-75 transition-opacity"
      >
        <img
          src="/assets/branding/botanicals/margarita_azul_oficial.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* Margarita 2: Centro-Derecha (Bento & Aroma Wheel) */}
      <motion.div
        style={{
          y: daisy2Y,
          rotate: daisy2Rotate,
          scale: daisy2Scale,
        }}
        className="absolute top-[42%] right-4 sm:right-12 lg:right-20 w-24 sm:w-32 lg:w-36 opacity-35"
      >
        <img
          src="/assets/branding/botanicals/margarita_azul_oficial.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* Margarita 3: Inferior Izquierda (Historias del Huerto) */}
      <motion.div
        style={{
          y: daisy3Y,
          rotate: daisy3Rotate,
        }}
        className="absolute top-[72%] left-6 sm:left-20 w-24 sm:w-32 opacity-35"
      >
        <img
          src="/assets/branding/botanicals/postal1_margarita_azul.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* ========================================================
          ESPIGAS DE LAVANDA OFICIALES (PÁGINA 26)
          En rosa cosmos (#ed73aa) con tallo verde (#177333)
          ======================================================== */}
      {/* Lavanda 1: Lateral derecho superior */}
      <motion.div
        style={{
          y: pinkLavenderY1,
          rotate: pinkLavenderRotate1,
          scale: pinkLavenderScale1,
        }}
        className="absolute top-48 sm:top-64 right-2 sm:right-10 lg:right-16 w-14 sm:w-20 lg:w-24 opacity-50"
      >
        <img
          src="/assets/branding/botanicals/espiga_lavanda_oficial.svg"
          alt=""
          className="w-full h-auto drop-shadow-[0_4px_12px_rgba(237,115,170,0.1)]"
        />
      </motion.div>

      {/* Lavanda 2: Lateral derecho inferior */}
      <motion.div
        style={{
          y: pinkLavenderY2,
          rotate: pinkLavenderRotate2,
        }}
        className="absolute top-[65%] right-6 sm:right-14 w-16 sm:w-22 opacity-45"
      >
        <img
          src="/assets/branding/botanicals/espiga_lavanda_oficial.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* ========================================================
          DESTELLOS Y ESTRELLAS VERDES DE 4 PUNTAS (PÁGINA 26)
          Pulsando delicadamente en el fondo
          ======================================================== */}
      {/* Destello 1: Cerca del Hero */}
      <motion.div
        style={{
          y: sparkleY1,
          rotate: sparkleRotate1,
        }}
        className="absolute top-24 right-[25%] w-7 sm:w-9 opacity-50 animate-pulse"
      >
        <img
          src="/assets/branding/botanicals/destello_verde_estrella.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* Destello 2: Zona Media */}
      <motion.div
        style={{
          y: sparkleY2,
          rotate: sparkleRotate2,
        }}
        className="absolute top-[48%] left-[18%] w-6 sm:w-8 opacity-40 animate-pulse"
      >
        <img
          src="/assets/branding/botanicals/destello_verde_estrella_alt.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* Destello 3: Zona Baja */}
      <motion.div
        style={{
          y: sparkleY3,
        }}
        className="absolute top-[80%] right-[22%] w-7 sm:w-10 opacity-45 animate-pulse"
      >
        <img
          src="/assets/branding/botanicals/destello_verde_estrella.svg"
          alt=""
          className="w-full h-auto"
        />
      </motion.div>

      {/* ========================================================
          BROTE Y FLOR ROSA COSMOS (PÁGINA 26)
          Acentos botánicos orgánicos
          ======================================================== */}
      <div className="absolute top-[35%] left-3 sm:left-10 w-12 sm:w-16 opacity-35">
        <img
          src="/assets/branding/botanicals/brote_corazon_verde.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>

      <div className="absolute top-[58%] right-4 sm:right-24 w-16 sm:w-22 opacity-35">
        <img
          src="/assets/branding/botanicals/flor_rosa_cosmos_oficial.svg"
          alt=""
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
