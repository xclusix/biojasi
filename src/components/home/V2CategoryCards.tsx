import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  link: string;
  bgTint: string;
}

const categories: CategoryItem[] = [
  {
    id: 'cuidado-capilar',
    name: 'Cuidado capilar',
    subtitle: 'Regeneración sin sulfatos ni siliconas',
    image: '/assets/extracted/catalogo_p3_img1_1965x1775.jpeg',
    link: '/catalogo?categoria=cuidado-capilar',
    bgTint: 'bg-[#DEECDF]',
  },
  {
    id: 'aromaterapia',
    name: 'Aromaterapia emocional',
    subtitle: 'Brisas botánicas para tu bienestar y descanso',
    image: '/assets/extracted/armonia_botanical_nest.jpg',
    link: '/catalogo?categoria=aromaterapia',
    bgTint: 'bg-[#DEE7F2]',
  },
  {
    id: 'extractos-puros',
    name: 'Extractos puros',
    subtitle: 'Shots botánicos concentrados',
    image: '/assets/extracted/catalogo_p7_img1_1586x1469.jpeg',
    link: '/catalogo?categoria=extractos-puros',
    bgTint: 'bg-[#F7EBD7]',
  },
];

export const V2CategoryCards: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#1C1917]/10">
      <Container size="xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14 pb-4 border-b border-[#1C1917]/10 text-left">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Explora por categoría
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center rounded-full border border-[#1C1917]/25 px-6 py-2.5 text-xs font-sans font-semibold tracking-wider text-[#1C1917] hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-all duration-300 group"
            >
              <span>Ver todo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3 Large Category Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <Link to={cat.link} className="group block text-left">
                {/* Large Rounded Card Wrapper */}
                <div className="relative w-full aspect-[3/4] rounded-[32px] sm:rounded-[36px] overflow-hidden shadow-sm border border-[#1C1917]/10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  {/* Photo */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>

                {/* Pill Button Enclosure underneath (Home Biojäsi 1 style) */}
                <div className="mt-5 flex justify-center">
                  <div className="w-full text-center py-3.5 px-6 rounded-2xl sm:rounded-full border border-[#1C1917]/20 bg-white group-hover:bg-[#177333] group-hover:border-[#177333] transition-all duration-300 shadow-sm">
                    <span className="font-sans font-bold text-sm sm:text-base text-[#1C1917] group-hover:text-white transition-colors tracking-wide">
                      {cat.name}
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
