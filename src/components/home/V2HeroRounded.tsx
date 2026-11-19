import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const V2HeroRounded: React.FC = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.97]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.9]);
  const yText = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section className="relative w-full pt-20 sm:pt-24 pb-6 px-3 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-7xl mx-auto min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#1C1917]/10 flex items-end justify-start p-6 sm:p-12 lg:p-16 text-left"
      >
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/inspo/02_hero_botanica_horizontal.jpg"
            alt="BIOJÄSI - Botánica viva y bienestar artesanal"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out hover:scale-100"
          />
          {/* Warm organic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/15" />
        </div>

        {/* Content Box with Dramatic Entrance Animation */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-xl space-y-4 text-white"
        >
          {/* Main Display Headline (Punchy Bold Sans) */}
          <h1 className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-white">
            Abre los sentidos
          </h1>

          {/* Subtitle in Elegant Italic Serif */}
          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
            Reconecta con tu esencia
          </p>

          {/* Simple CTA Pill Button */}
          <div className="pt-2">
            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/15 hover:bg-white hover:text-[#177333] backdrop-blur-md text-white font-sans text-xs sm:text-sm font-semibold tracking-wider px-8 py-3.5 transition-all duration-300 shadow-md group"
            >
              <span>Explorar</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
