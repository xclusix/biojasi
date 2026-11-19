import React from 'react';
import { Container } from '@/components/ui/Container';
import { EarthGrowthContainer, EarthGrowthItem } from '@/components/ui/ScrollReveal';

export const V3TerroirBar: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Ciencia Ancestral',
      desc: 'Herbolaria viva cultivada y destilada en Querétaro',
    },
    {
      index: '02',
      title: 'Pureza Botánica',
      desc: 'Sin sulfatos, siliconas ni fragancias sintéticas',
    },
    {
      index: '03',
      title: 'Elaboración Artesanal',
      desc: 'Destilación lenta por arrastre de vapor de agua',
    },
    {
      index: '04',
      title: 'Aromaterapia Emocional',
      desc: 'Aromas naturales para reconectar con Tu centro',
    },
  ];

  return (
    <section className="w-full border-y border-[#1C1917]/10 bg-white/90 backdrop-blur-sm py-7 sm:py-8">
      <Container size="xl">
        <EarthGrowthContainer
          staggerDelay={0.12}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {pillars.map((item, idx) => (
            <EarthGrowthItem key={idx} distance={20} className="flex items-start gap-3.5 text-left">
              <span className="font-serif text-sm text-[#177333]/80 font-medium shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#177333]/10 flex items-center justify-center text-[11px]">
                {item.index}
              </span>
              <div>
                <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#1C1917] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-charcoal-500 font-light leading-snug mt-0.5">
                  {item.desc}
                </p>
              </div>
            </EarthGrowthItem>
          ))}
        </EarthGrowthContainer>
      </Container>
    </section>
  );
};
