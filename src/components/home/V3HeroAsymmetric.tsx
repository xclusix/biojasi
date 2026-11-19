import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface HeroProductSlide {
  id: string;
  name: string;
  format: string;
  botanicalKey: string;
  category: string;
  image: string;
  bgGradient: string;
  watermark: string;
  accentColor: string;
  link: string;
}

const HERO_PRODUCT_SLIDES: HeroProductSlide[] = [
  {
    id: 'shampoo-250',
    name: 'Shampoo BIOJÄSI 8',
    format: 'Presentación 250 ml • Botella Blanca con Cordón',
    botanicalKey: 'Romero silvestre, sábila & 8 aceites cítricos',
    category: 'Cuidado Capilar',
    image: '/assets/products/retouched_biojasi/square_crops/shampoo_8_250ml_cordon_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#EFF5F0] to-[#E2EFE5]',
    watermark: '/assets/branding/botanicals/flor_caliz_verde_oficial.svg',
    accentColor: '#177333',
    link: '/catalogo?beneficio=capilar',
  },
  {
    id: 'brisa-armonia',
    name: 'Brisa Aromática Armonía',
    format: 'Presentación 60 ml • Vidrio Ámbar',
    botanicalKey: 'Lavanda real, jazmín & palo santo ético',
    category: 'Aromaterapia',
    image: '/assets/products/retouched_biojasi/square_crops/brisa_armonia_60ml_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#F6F0F8] to-[#EEE5F3]',
    watermark: '/assets/branding/botanicals/espiga_lavanda_oficial.svg',
    accentColor: '#6B4E71',
    link: '/catalogo?beneficio=relajacion',
  },
  {
    id: 'brisa-respira',
    name: 'Brisa Aromática Respira',
    format: 'Presentación 60 ml • Vidrio Ámbar',
    botanicalKey: 'Menta piperita, eucalipto silvestre & té de limón',
    category: 'Aromaterapia',
    image: '/assets/products/retouched_biojasi/square_crops/brisa_respira_60ml_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#F0F5F8] to-[#E0EDF3]',
    watermark: '/assets/branding/botanicals/postal1_espiga_azul.svg',
    accentColor: '#405B8C',
    link: '/catalogo?beneficio=enfoque',
  },
  {
    id: 'brisa-risa-amor',
    name: 'Brisa Risa y Amor',
    format: 'Presentación 60 ml • Vidrio Ámbar',
    botanicalKey: 'Rosas de huerto, sándalo blanco & naranja dulce',
    category: 'Aromaterapia',
    image: '/assets/products/retouched_biojasi/square_crops/brisa_risa_y_amor_60ml_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#FAF1ED] to-[#F5E4DE]',
    watermark: '/assets/branding/botanicals/flor_rosa_cosmos_oficial.svg',
    accentColor: '#C85A32',
    link: '/catalogo?beneficio=energia',
  },
  {
    id: 'kit-esencial',
    name: 'Kit Esencial de Madera',
    format: 'Caja Artesanal Grabada con Viruta • 3 Piezas',
    botanicalKey: 'Brisa Respira + Brisa Armonía + Shot Gotero',
    category: 'Edición de Regalo',
    image: '/assets/products/retouched_biojasi/square_crops/kit_esencial_caja_abierta_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#F7F2E8] to-[#EFE4D3]',
    watermark: '/assets/branding/botanicals/postal_2_sello_ancestral.png',
    accentColor: '#8C6239',
    link: '/catalogo?categoria=KITS_RITUALES',
  },
  {
    id: 'shampoo-500',
    name: 'Shampoo BIOJÄSI 8 Familiar',
    format: 'Presentación 500 ml • Botella Ámbar con Dosificador',
    botanicalKey: 'Formato generoso para el ritual en casa',
    category: 'Cuidado Capilar',
    image: '/assets/products/retouched_biojasi/square_crops/shampoo_8_500ml_ambar_sq.jpg',
    bgGradient: 'from-[#FAF8F5] via-[#F5EEE8] to-[#EADFD6]',
    watermark: '/assets/branding/botanicals/flor_slow_living_pino.svg',
    accentColor: '#7A4B22',
    link: '/catalogo?beneficio=capilar',
  },
];

export const V3HeroAsymmetric: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_PRODUCT_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_PRODUCT_SLIDES.length) % HERO_PRODUCT_SLIDES.length);
  }, []);

  // Continuous automatic rotation every 4.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_PRODUCT_SLIDES.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = HERO_PRODUCT_SLIDES[currentSlideIndex];

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 bg-transparent overflow-hidden">
      <Container size="xl">
        {/* Asymmetric 7/5 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Editorial Typography & Direct Craft */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left relative"
          >
            {/* Display Headline: Pure Editorial Weight */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] leading-[1.04] text-[#1C1917] tracking-tight font-light max-w-[18ch]">
              Ciencia Ancestral.{' '}
              <span className="italic font-normal text-[#177333]">
                Reconecta con tu esencia.
              </span>
            </h1>

            {/* Grounded Human Copy without AI Fluff */}
            <p className="font-sans text-sm sm:text-base text-charcoal-600 font-light leading-relaxed max-w-[58ch]">
              Fórmulas botánicas elaboradas a mano con romero silvestre, nopal y lavanda de Querétaro. Creadas para acompañar tu descanso, despejar la mente y cuidar tu cabello sin sulfatos, siliconas ni fragancias artificiales.
            </p>

            {/* CTAs with Tactile Press Feedback */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to="/catalogo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#177333] hover:bg-[#135c29] text-white text-xs font-sans font-semibold tracking-wider transition-all duration-150 shadow-sm active:scale-[0.96]"
              >
                <span>Explorar creaciones</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                to="/nosotros"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-charcoal-800 text-xs font-sans font-medium border border-[#1C1917]/15 transition-all duration-150 active:scale-[0.96]"
              >
                <span>El huerto y la familia</span>
              </Link>
            </div>

            {/* Terroir & Craftsmanship Note */}
            <div className="pt-3 text-xs font-sans text-charcoal-500 border-t border-[#1C1917]/10 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Elaborado artesanalmente en Querétaro</span>
              <span className="text-[#1C1917]/20 hidden sm:inline">•</span>
              <span>Sin sulfatos, siliconas ni fragancias sintéticas</span>
            </div>
          </motion.div>

          {/* Right Column (5 cols): Continuous Smooth Automatic Product Carousel with Official Floral Ornaments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative group"
          >
            {/* Authentic Brand Floral Ornament from Identity Manual (Top-Right) */}
            <div className="absolute -top-10 -right-6 sm:-top-14 sm:-right-8 z-30 pointer-events-none drop-shadow-md select-none">
              <img
                src="/assets/branding/botanicals/flor_slow_living_pino.svg"
                alt=""
                className="w-24 sm:w-28 h-auto opacity-95 filter drop-shadow-sm"
              />
            </div>

            {/* Authentic Brand Floral Element from Identity Manual (Bottom-Left) */}
            <div className="absolute -bottom-10 -left-8 z-30 hidden sm:block pointer-events-none drop-shadow-sm select-none">
              <img
                src="/assets/branding/botanicals/espiga_lavanda_oficial.svg"
                alt=""
                className="w-16 h-auto opacity-90 filter drop-shadow-sm"
              />
            </div>

            {/* Framed Still Life Card (Concentric Outer Radius = Inner + Padding) */}
            <div className="relative rounded-[32px] p-3 bg-white/95 backdrop-blur-sm border border-[#1C1917]/10 shadow-[0_18px_42px_rgba(0,0,0,0.04)] relative overflow-hidden">

              {/* Carousel Inner Stage */}
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-[#FAF6F0] flex items-center justify-center select-none">
                {/* Animated Slide Transition with Continuous Automatic Rotation */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide.id}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      scale: 0.94,
                      filter: 'blur(8px)',
                      y: direction > 0 ? 10 : -10,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.04,
                      filter: 'blur(8px)',
                      y: direction > 0 ? -10 : 10,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-8 bg-gradient-to-br ${currentSlide.bgGradient}`}
                  >
                    {/* Background Botanical Watermark */}
                    <img
                      src={currentSlide.watermark}
                      alt=""
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain opacity-15 pointer-events-none select-none filter blur-[0.4px] transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Central Product Bottle / Presentation */}
                    <Link
                      to={currentSlide.link}
                      className="relative z-10 w-full h-full flex flex-col items-center justify-between"
                    >
                      {/* Generous Product Image Showcase without Cuts */}
                      <div className="flex-1 w-full flex items-center justify-center min-h-0 pt-2 pb-4">
                        <img
                          src={currentSlide.image}
                          alt={currentSlide.name}
                          className="max-h-[82%] max-w-[88%] object-contain filter drop-shadow-[0_22px_36px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Integrated Editorial Caption (Quiet, Non-Pushy, Elegant) */}
                      <div className="w-full text-center pb-2 pointer-events-none">
                        <h3 className="font-serif text-lg sm:text-xl text-[#1C1917]/90 font-normal tracking-wide">
                          {currentSlide.name}
                        </h3>
                        <p className="font-sans text-xs text-charcoal-600 font-light mt-1 tracking-wider">
                          {currentSlide.botanicalKey}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </AnimatePresence>

                {/* Subtle Discrete Indicator Dots */}
                <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-auto">
                  {HERO_PRODUCT_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => {
                        setDirection(idx > currentSlideIndex ? 1 : -1);
                        setCurrentSlideIndex(idx);
                      }}
                      aria-label={`Ver ${slide.name}`}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentSlideIndex
                          ? 'w-5 bg-[#177333]/80'
                          : 'w-1.5 bg-[#1C1917]/20 hover:bg-[#1C1917]/40'
                      }`}
                    />
                  ))}
                </div>

                {/* Left & Right Subtle Chevron Controls (Soft Hover) */}
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Producto anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-25 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-[#1C1917]/10 flex items-center justify-center text-charcoal-700 shadow-sm opacity-0 group-hover:opacity-75 hover:!opacity-100 transition-all duration-200 active:scale-[0.92]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Siguiente producto"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-25 w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-[#1C1917]/10 flex items-center justify-center text-charcoal-700 shadow-sm opacity-0 group-hover:opacity-75 hover:!opacity-100 transition-all duration-200 active:scale-[0.92]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
