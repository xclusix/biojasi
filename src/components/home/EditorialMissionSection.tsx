import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, RefreshCw, Heart, Sparkles, Sprout } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const EditorialMissionSection: React.FC = () => {
  const brandValues = [
    { icon: Leaf, title: '100% extractos vivos' },
    { icon: Heart, title: 'Libre de crueldad' },
    { icon: RefreshCw, title: 'Envases reutilizables' },
    { icon: ShieldCheck, title: 'Cero sulfatos / siliconas' },
    { icon: Sparkles, title: 'Destilación en Querétaro' },
    { icon: Sprout, title: 'Vegano' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#1C1917]/10 overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
          {/* Left: Sharp Macro Photo (6 cols) */}
          <ScrollReveal direction="left" className="lg:col-span-6 relative aspect-[4/5] overflow-hidden bg-[#ECE3D7]/40 border border-[#1C1917]/10">
            <img
              src="/assets/inspo/01_mision_artesanal_queretaro.jpg"
              alt="Artesana recolectando y atando ramilletes de romero y lavanda en el taller de Querétaro"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF8F5]/90 backdrop-blur-sm border border-[#1C1917]/10 text-left">
              <span className="font-serif italic text-sm text-[#1C1917]">
                &ldquo;Destilamos plantas vivas a fuego lento respetando el ritmo de la tierra.&rdquo;
              </span>
            </div>
          </ScrollReveal>

          {/* Right: Editorial Narrative & 6 Stamps (6 cols) */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-400 font-semibold block">
                Nuestra filosofía
              </span>

              <h2 className="font-display font-light text-4xl sm:text-5xl text-[#1C1917] tracking-tight leading-[1.1]">
                La misión <br />
                <span className="font-normal">BIOJÄSI</span>
                <sup className="text-xs sm:text-sm align-super ml-0.5 font-sans font-normal text-charcoal-400">®</sup>
              </h2>

              <div className="space-y-4 font-body text-xs sm:text-base text-charcoal-600 font-light leading-relaxed">
                <p>
                  Creemos en el cuidado honesto, pausado y transparente. Formulamos cada lote a partir de hidrolatos puros y aceites esenciales extraídos de plantas cultivadas en nuestro huerto agroecológico en Querétaro.
                </p>
                <p>
                  Rechazamos los rellenos químicos, las fragancias sintéticas y los sulfatos agresivos. Cada gota está pensada para cuidar tu cuerpo de forma natural y acompañar tu bienestar cotidiano.
                </p>
              </div>
            </div>

            {/* 6 Outlined Value Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2 border-t border-[#1C1917]/10">
              {brandValues.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-3 border border-[#1C1917]/10 bg-[#F5EFE8] flex flex-col items-center justify-center text-center space-y-1.5 transition-colors hover:border-[#177333]"
                  >
                    <IconComponent className="w-4 h-4 text-[#177333]" />
                    <span className="text-[10px] font-sub uppercase tracking-[0.12em] font-semibold text-[#1C1917] leading-tight">
                      {val.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Link to About */}
            <div className="pt-2">
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-xs font-sub uppercase tracking-[0.2em] text-[#177333] hover:opacity-80 transition-opacity font-medium"
              >
                <span>Conocer nuestra historia</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
