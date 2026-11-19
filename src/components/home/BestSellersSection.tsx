import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Wind, Droplets } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Product } from '@/types/product';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface BestSellersSectionProps {
  onOpenProductModal?: (product: Product) => void;
}

export const BestSellersSection: React.FC<BestSellersSectionProps> = () => {
  const educationalLines = [
    {
      category: 'Cuidado capilar',
      title: 'Shampoo BIOJÄSI 8',
      image: '/assets/extracted/catalogo_p3_img1_1965x1775.jpeg',
      icon: Droplets,
      essence: 'Purificación & remineralización profunda del cuero cabelludo sin sulfatos agresivos.',
      idealFor: 'Fortalecer la fibra capilar, equilibrar la grasa natural y liberar cansancio acumulado.',
      botanicals: 'Romero, té de limón, menta, alhucema, eucalipto, naranja, tea tree y salvia.',
      ritual: 'En la regadera, vierte en Tus manos y respira hondo. Masajea con las yemas en círculos lentos permitiendo que los 8 aceites aporten frescura y vitalidad.',
      link: '/catalogo?categoria=cuidado_capilar',
    },
    {
      category: 'Aromaterapia emocional',
      title: 'Brisas botánicas',
      image: '/assets/extracted/catalogo_p4_img1_1966x1767.jpeg',
      icon: Wind,
      essence: 'Hidrolatos vivos y esencias puras para acompañar las transiciones y emociones del día.',
      idealFor: 'Liberar el estrés con Armonía, abrir el pecho y aclarar la mente con Respira, o gozar con Risa y Amor.',
      botanicals: 'Lavanda real, flores de jazmín, eucalipto silvestre, rosas de huerto y palo santo.',
      ritual: 'Atomiza 3 o 4 disparos alrededor de Tu rostro, sábanas o espacio de trabajo. Cierra los ojos y realiza tres respiraciones lentas y profundas.',
      link: '/catalogo?categoria=aceites_esenciales',
    },
    {
      category: 'Extractos puros',
      title: 'Shots concentrados',
      image: '/assets/extracted/catalogo_p7_img1_1586x1469.jpeg',
      icon: Sparkles,
      essence: 'Sinergias botánicas puras sin dilución acuosa en frascos ámbar con gotero dosificador.',
      idealFor: 'Aromatizar difusores de agua, aportar una sensación de aire puro y aplicar puntualmente en sienes.',
      botanicals: 'Eucalipto globulus, limón, tomillo, clavo, lavanda y menta piperita.',
      ritual: 'Coloca de 3 a 5 gotas en Tu difusor ultrasónico con agua purificada, o diluye 1 gota en aceite base para un suave masaje en pecho y muñecas.',
      link: '/catalogo?categoria=aceites_esenciales',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#fbecdd] border-b border-[#1C1917]/10 overflow-hidden">
      <Container size="xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#1C1917]/10 text-left">
            <div className="space-y-2.5">
              <span className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-500 font-semibold block">
                Sabiduría botánica
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Conoce nuestras líneas de cuidado
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-xs font-sub uppercase tracking-[0.2em] text-[#177333] hover:opacity-80 transition-opacity whitespace-nowrap font-medium"
            >
              <span>Explorar catálogo completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 3-Column Educational Narrative Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationalLines.map((line, idx) => {
            const IconComponent = line.icon;

            return (
              <StaggerItem key={idx}>
                <div className="bg-[#FAF8F5] border border-[#1C1917]/10 flex flex-col justify-between h-full text-left transition-all duration-300 hover:border-[#177333]/60 shadow-sm">
                  {/* Photo Frame from Authentic Catalog */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3D7]/50 border-b border-[#1C1917]/10">
                    <img
                      src={line.image}
                      alt={line.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#FAF8F5]/95 border border-[#1C1917]/10 text-[9px] font-sub uppercase tracking-[0.16em] font-semibold text-[#177333]">
                        {line.category}
                      </span>
                    </div>
                  </div>

                  {/* Educational Content & Ritual Description */}
                  <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#177333]" />
                        <h3 className="font-display font-light text-2xl sm:text-3xl text-[#1C1917] leading-snug">
                          {line.title}
                        </h3>
                      </div>

                      <p className="font-body text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                        {line.essence}
                      </p>
                    </div>

                    {/* Educational Details Grid */}
                    <div className="space-y-3 pt-3 border-t border-[#1C1917]/10 text-xs">
                      <div className="space-y-1">
                        <span className="text-[9px] font-sub uppercase tracking-[0.16em] font-semibold text-charcoal-500 block">
                          Ideal para:
                        </span>
                        <p className="font-body text-[11px] text-charcoal-600 font-light leading-relaxed">
                          {line.idealFor}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[9px] font-sub uppercase tracking-[0.16em] font-semibold text-charcoal-500 block">
                          Plantas & esencias:
                        </span>
                        <p className="font-body text-[11px] text-charcoal-700 font-medium leading-relaxed">
                          {line.botanicals}
                        </p>
                      </div>

                      <div className="p-3 bg-[#fbecdd]/60 border border-[#1C1917]/5 space-y-1">
                        <span className="text-[9px] font-sub uppercase tracking-[0.16em] font-semibold text-[#177333] block">
                          Modo de ritual:
                        </span>
                        <p className="font-body text-[11px] text-charcoal-700 font-light leading-relaxed italic">
                          &ldquo;{line.ritual}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Subtle Discover Link */}
                    <div className="pt-3 border-t border-[#1C1917]/10 flex items-center justify-end">
                      <Link
                        to={line.link}
                        className="inline-flex items-center gap-1.5 text-xs font-sub uppercase tracking-[0.18em] text-[#177333] font-semibold hover:underline"
                      >
                        <span>Conocer fórmulas</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
