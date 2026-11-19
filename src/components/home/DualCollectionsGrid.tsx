import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';

export const DualCollectionsGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#1C1917]/10 overflow-hidden">
      <Container size="xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#1C1917]/10 text-left">
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <BiojasiOrnament size={14} color="#177333" />
                <span className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-400 font-semibold block">
                  Abre los sentidos
                </span>
              </div>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Reconecta con tu esencia
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-xs font-sub uppercase tracking-[0.2em] text-[#177333] hover:opacity-80 transition-opacity whitespace-nowrap font-medium"
            >
              <span>Explorar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 2 Sharp Rectangular Columns */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1: Cuidado Capilar */}
          <StaggerItem>
            <div className="group border border-[#1C1917]/10 bg-[#FAF8F5] flex flex-col justify-between text-left h-full transition-all duration-300 hover:border-[#177333]/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D7]/40 border-b border-[#1C1917]/10">
                <img
                  src="/assets/inspo/03_nopal_sabila_jengibre.jpg"
                  alt="Ingredientes botánicos de Shampoo BIOJÄSI 8: nopal, sábila y jengibre"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-light text-3xl sm:text-4xl text-[#1C1917]">
                    Cuidado capilar
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    Shampoo con 8 aceites esenciales puros, mucílago de nopal y jengibre fresco para revitalizar la hebra capilar y limpiar el cuero cabelludo sin sulfatos.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-end">
                  <Link
                    to="/catalogo?categoria=cuidado_capilar"
                    className="inline-flex items-center gap-1.5 text-xs font-sub uppercase tracking-[0.18em] text-[#177333] font-semibold group-hover:underline"
                  >
                    <span>Descubrir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Column 2: Un momento para Ti */}
          <StaggerItem>
            <div className="group border border-[#1C1917]/10 bg-[#FAF8F5] flex flex-col justify-between text-left h-full transition-all duration-300 hover:border-[#177333]/50">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D7]/40 border-b border-[#1C1917]/10">
                <img
                  src="/assets/inspo/04_brisa_ritual_niebla.jpg"
                  alt="Ritual de brisa aromática con hidrolato botánico"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="p-8 sm:p-10 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-display font-light text-3xl sm:text-4xl text-[#1C1917]">
                    Un momento para ti
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    Brisas corporales e hidrolatos puros formulados para modular estados de ánimo: descanso profundo con <em>Armonía</em>, claridad mental con <em>Respira</em> y gozo con <em>Risa y Amor</em>.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-end">
                  <Link
                    to="/catalogo?categoria=aceites_esenciales"
                    className="inline-flex items-center gap-1.5 text-xs font-sub uppercase tracking-[0.18em] text-[#177333] font-semibold group-hover:underline"
                  >
                    <span>Descubrir</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </Container>
    </section>
  );
};
