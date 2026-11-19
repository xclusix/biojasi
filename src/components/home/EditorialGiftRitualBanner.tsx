import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const EditorialGiftRitualBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#ECE3D7]/60 border-b border-[#1C1917]/10 overflow-hidden">
      <Container size="xl">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#1C1917]/10 bg-[#FAF8F5] overflow-hidden shadow-sm">
            {/* Left Text (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-14 lg:p-16 flex flex-col justify-between text-left space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-400 font-semibold block">
                  Edición limitada
                </span>
                <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                  Rituales de apapacho consciente
                </h2>
                <p className="font-body text-xs sm:text-base text-charcoal-600 font-light leading-relaxed max-w-lg">
                  Diseñados para compartir el bienestar: combinaciones de Brisa Botánica, Shot Concentrado y Shampoo BIOJÄSI 8 en empaques biodegradables listos para obsequiar.
                </p>
              </div>

              <div>
                <Link
                  to="/catalogo?categoria=kits_rituales"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#177333] hover:bg-[#125c28] text-[#FAF8F5] text-[11px] font-sub uppercase tracking-[0.22em] font-medium transition-colors shadow-sm"
                >
                  <span>Explorar kits & regalos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Photographic Feature (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#1C1917]/10 bg-[#F5EFE8] overflow-hidden">
              <img
                src="/assets/instagram/11_brisa_risa_rosas.jpg"
                alt="Kit de ritual botánico con rosas y esencias naturales"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
