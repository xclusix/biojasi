import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal, EarthGrowthContainer, EarthGrowthItem } from '@/components/ui/ScrollReveal';
import { BotanicalCornerFlourish } from '@/components/ui/BotanicalCornerFlourish';

interface JournalEntry {
  id: string;
  image: string;
  tag: string;
  quote: string;
  author: string;
  location: string;
}

const entries: JournalEntry[] = [
  {
    id: 'entry-1',
    image: '/assets/instagram/01_shampoo_regadera.jpg',
    tag: 'Cuidado Capilar',
    quote: '“Llevo tres semanas usando el BIOJÄSI 8. Mi cabello recuperó su volumen natural y una ligereza que ya no recordaba.”',
    author: 'Valeria M.',
    location: 'Querétaro, Qro.',
  },
  {
    id: 'entry-2',
    image: '/assets/instagram/06_brisa_armonia_noche.jpg',
    tag: 'Pausa Consciente',
    quote: '“La brisa Armonía en mi espacio de trabajo o lectura es mi pausa para serenarme. La lavanda se siente pura y viva.”',
    author: 'Santiago R.',
    location: 'Ciudad de México',
  },
  {
    id: 'entry-3',
    image: '/assets/instagram/11_brisa_risa_rosas.jpg',
    tag: 'Aromaterapia Diaria',
    quote: '“Risa y Amor vive en mi escritorio. Dos rocíos a media tarde cambian la pesadez mental frente a la computadora.”',
    author: 'Elena G.',
    location: 'San Miguel de Allende',
  },
];

export const V3CommunityJournal: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF8F5]/90 border-t border-[#1C1917]/10">
      <Container size="xl">
        {/* Section Header */}
        <ScrollReveal
          direction="earth"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-5 border-b border-[#1C1917]/10 text-left"
        >
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917] tracking-tight font-light">
              La experiencia en manos reales.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/biojasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1C1917]/20 hover:border-[#177333] hover:text-[#177333] text-xs font-sans font-semibold tracking-wider text-[#1C1917] transition-all duration-150 self-start md:self-auto active:scale-[0.96]"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@biojasi en Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </ScrollReveal>

        {/* 3 Asymmetric Journal Cards with Staggered Earth Growth & Herbarium Corners */}
        <EarthGrowthContainer staggerDelay={0.14} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {entries.map((entry) => (
            <EarthGrowthItem
              key={entry.id}
              distance={30}
              className="bg-white/95 backdrop-blur-sm rounded-[28px] overflow-hidden border border-[#1C1917]/10 shadow-[0_8px_24px_rgba(0,0,0,0.02)] flex flex-col justify-between p-5 group hover:border-[#177333]/30 transition-all duration-300 relative"
            >
              {/* Herbarium Specimen Corner Flourish */}
              <BotanicalCornerFlourish position="top-right" size={28} />

              {/* Photo */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF6F0] mb-4 border border-[#1C1917]/5 relative">
                <img
                  src={entry.image}
                  alt={entry.tag}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              {/* Reflection */}
              <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10">
                <span className="text-[10px] font-sans font-semibold tracking-wider text-[#177333] uppercase">
                  {entry.tag}
                </span>

                <p className="font-serif italic text-sm sm:text-base text-[#1C1917] font-light leading-relaxed">
                  {entry.quote}
                </p>

                <div className="pt-3 border-t border-[#1C1917]/10 flex items-center justify-between text-[11px] font-sans text-charcoal-400">
                  <span className="font-medium text-charcoal-700">{entry.author}</span>
                  <span>{entry.location}</span>
                </div>
              </div>
            </EarthGrowthItem>
          ))}
        </EarthGrowthContainer>
      </Container>
    </section>
  );
};
