import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const V3CraftsmanshipStory: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white/70 backdrop-blur-sm border-t border-[#1C1917]/10">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column (5 cols): Authentic Artisanal Workshop Still Life */}
          <ScrollReveal direction="earth" className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden bg-[#FAF6F0] border border-[#1C1917]/10 shadow-[0_16px_36px_rgba(0,0,0,0.04)] aspect-[4/5] flex items-center justify-center p-3">
              <img
                src="/assets/extracted/catalogo_p6_img1_1966x1773.jpeg"
                alt="Destilación en el taller de Querétaro"
                className="w-full h-full object-cover rounded-[24px] filter saturate-[0.95]"
              />

              {/* Quiet Micro-Caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#1C1917]/10 text-left shadow-xs">
                <p className="text-xs font-serif font-normal text-[#1C1917]">
                  Taller familiar en Querétaro
                </p>
                <p className="text-[11px] font-sans text-charcoal-600 mt-0.5 font-light">
                  Destilación lenta por arrastre de vapor de agua.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column (7 cols): Editorial Chronicle & Provenance */}
          <ScrollReveal direction="earth" delay={0.15} className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917] tracking-tight font-light leading-[1.08]">
              No aceleramos la tierra.{' '}
              <span className="italic font-normal text-charcoal-500">
                Destilamos lo que florece a su debido tiempo.
              </span>
            </h2>

            <div className="space-y-4 font-sans text-xs sm:text-base text-charcoal-600 font-light leading-relaxed max-w-[58ch]">
              <p>
                En el semidesierto queretano, la sequedad del aire concentra la resina y los aceites esenciales de las plantas aromáticas. Cosechamos el romero silvestre, la lavanda y el nopal al amanecer, antes de que el sol evapore sus principios activos más sutiles.
              </p>
              <p>
                En nuestro taller familiar no existen reactores industriales ni fragancias sintéticas creadas para engañar al olfato. Cada extracto se destila en vapor de agua en pequeños volúmenes, extrayendo hidrolatos puros y moléculas vivas que el cuerpo reconoce de inmediato.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#177333] hover:text-[#135c29] tracking-wider uppercase border-b border-[#177333] pb-1 transition-colors active:scale-[0.96]"
              >
                <span>Leer la historia completa del taller</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
