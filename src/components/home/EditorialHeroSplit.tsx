import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';

export const EditorialHeroSplit: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] border-b border-[#1C1917]/10 overflow-hidden pt-20 lg:pt-24">
      {/* Full-width Photo Hero with Left Crisp Text Box */}
      <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex items-center justify-start overflow-hidden">
        {/* Full-width Background Image (Clean, No blurry gradient) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/inspo/02_hero_botanica_horizontal.jpg"
            alt="Herbolaria viva de Querétaro: romero silvestre, lavanda y palo santo"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Container aligned to the Left (Crisp solid card, no blur) */}
        <Container size="xl" className="relative z-10 w-full py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-lg bg-[#FAF8F5] border border-[#1C1917]/10 p-8 sm:p-10 shadow-sm text-left space-y-5"
          >
            <div className="flex items-center gap-2">
              <BiojasiOrnament size={16} color="#177333" />
              <p className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-500 font-semibold">
                Ciencia Ancestral
              </p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#1C1917] tracking-tight leading-[1.04]">
              Habita <span className="italic font-normal">tu</span> centro.
            </h1>

            <p className="font-body text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
              Fórmulas botánicas vivas destiladas a mano en Querétaro para acompañar el descanso, la claridad mental y la regeneración capilar sin sulfatos ni siliconas.
            </p>

            <div className="pt-2">
              <Link to="/catalogo">
                <button className="px-8 py-3.5 bg-[#177333] hover:bg-[#125c28] text-[#FAF8F5] text-[11px] font-sub uppercase tracking-[0.24em] font-medium transition-all flex items-center gap-3 shadow-sm">
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
