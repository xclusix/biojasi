import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Sun, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BRAND } from '@/lib/constants';
import { useRitualStore } from '@/store/useRitualStore';
import { EmotionalBenefit } from '@/types/product';

export const HeroFullscreen: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedUniverse, openSelector } = useRitualStore();

  const handleMoodClick = (benefit: EmotionalBenefit, query: string) => {
    setSelectedUniverse(benefit);
    navigate(`/catalogo?beneficio=${query}`);
  };

  return (
    <section className="relative min-h-[92vh] bg-[#FAF8F5] border-b border-sand-200/80 overflow-hidden flex items-center pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background Soft Mist */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#F5EFE8] blur-3xl opacity-70" />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-[#ECE3D7]/60 blur-3xl opacity-50" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Manifesto & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[11px] font-sub uppercase tracking-[0.22em] shadow-antigravity-sm">
              <Sun className="w-3.5 h-3.5 text-botanical-amber" />
              <span>CIENCIA ANCESTRAL MEXICANA • QUERÉTARO</span>
            </div>

            {/* Massive Display Title */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-charcoal-800 leading-[1.04] tracking-[-0.02em]">
                Reconecta con <br />
                <span className="italic font-normal text-charcoal-500">Tu esencia.</span>
              </h1>
              <p className="font-sub text-xs uppercase font-semibold tracking-[0.2em] text-charcoal-400 pt-1">
                Cuidado Personal & Aromaterapia Emocional Artesanal
              </p>
            </div>

            {/* Brand Manifesto */}
            <p className="font-body text-base sm:text-lg text-charcoal-600 font-light leading-relaxed max-w-xl">
              &ldquo;{BRAND.manifesto}&rdquo;
            </p>

            {/* Interactive Mood Selector Pills */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] font-sub uppercase tracking-wider text-charcoal-400 font-bold block">
                ¿Qué necesita Tu cuerpo hoy?
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleMoodClick('ENFOQUE', 'enfoque')}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-sand-100 border border-sand-200 text-charcoal-700 text-xs font-normal transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  🍃 Despejar la mente
                </button>
                <button
                  type="button"
                  onClick={() => handleMoodClick('RELAJACION', 'relajacion')}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-sand-100 border border-sand-200 text-charcoal-700 text-xs font-normal transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  🦋 Calmar el ritmo
                </button>
                <button
                  type="button"
                  onClick={() => handleMoodClick('ENERGIA', 'energia')}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-sand-100 border border-sand-200 text-charcoal-700 text-xs font-normal transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  🌸 Alegrar el corazón
                </button>
                <button
                  type="button"
                  onClick={() => handleMoodClick('CAPILAR', 'capilar')}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-sand-100 border border-sand-200 text-charcoal-700 text-xs font-normal transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  🌿 Revitalizar cabello
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link to="/catalogo">
                <button className="px-8 py-4 rounded-full bg-charcoal-800 hover:bg-charcoal-900 text-sand-50 text-xs font-sub uppercase font-bold tracking-[0.2em] transition-all duration-300 shadow-antigravity hover:-translate-y-0.5 hover:shadow-antigravity-lg flex items-center gap-2">
                  <span>Explorar Creaciones</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>

              <button
                type="button"
                onClick={openSelector}
                className="px-6 py-4 rounded-full border border-sand-300 bg-white/80 hover:bg-white text-charcoal-800 text-xs font-sub uppercase font-bold tracking-[0.16em] transition-all duration-300 shadow-sm hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-botanical-amber" />
                <span>Test de Bienestar</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Full-height Photographic Composition (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-sand-200/50 border border-sand-300 shadow-antigravity-float">
              <img
                src="/assets/instagram/02_flores_huerto.jpg"
                alt="Flores y plantas vivas del huerto en Querétaro"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Glass Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className="glass-luxury px-4 py-2 rounded-full flex items-center gap-2 shadow-antigravity">
                  <span className="w-2 h-2 rounded-full bg-botanical-forest animate-pulse" />
                  <span className="text-[11px] font-sub uppercase tracking-wider font-bold text-charcoal-800">
                    Huerto Agroecológico en Querétaro
                  </span>
                </div>
              </div>

              {/* Bottom Glass Tag */}
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="glass-luxury p-3.5 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-botanical-forest" />
                    <span className="text-xs font-sub uppercase font-bold text-charcoal-800">
                      100% Extractos Vivos & Puros
                    </span>
                  </div>
                  <Link
                    to="/nosotros"
                    className="text-xs text-charcoal-600 hover:text-charcoal-950 font-medium underline"
                  >
                    Nuestra Historia
                  </Link>
                </div>
              </div>
            </div>

            {/* Micro floating tile */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-36 h-36 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-sand-100">
              <img
                src="/assets/instagram/04_romero_concentracion.jpg"
                alt="Romero silvestre de Querétaro"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur-sm text-center">
                <span className="text-[9px] font-sub uppercase font-bold tracking-widest text-charcoal-800">
                  Romero Silvestre
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
