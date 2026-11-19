import React from 'react';
import { Instagram } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const instagramPhotos = [
  { id: 1, src: '/assets/extracted/catalogo_p1_img1_1080x1920.jpeg', alt: 'Esencias botánicas Querétaro' },
  { id: 2, src: '/assets/extracted/armonia_botanical_nest.jpg', alt: 'Brisa botánica Armonía' },
  { id: 3, src: '/assets/inspo/03_romero_lavanda_harvest.jpg', alt: 'Cosecha de romero y lavanda' },
  { id: 4, src: '/assets/extracted/catalogo_p7_img1_1586x1469.jpeg', alt: 'Shots botánicos puros' },
  { id: 5, src: '/assets/extracted/direccion_creativa_p12_img1_1920x1080.jpeg', alt: 'Goteros de alquimia botánica' },
  { id: 6, src: '/assets/extracted/catalogo_p8_img2_935x1637.jpeg', alt: 'Rutinas de apapacho diario' },
];

export const V2InstagramFeed: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#1C1917]/10">
      <Container size="xl">
        {/* Section Header (Page 7 of Home Biojäsi 1) */}
        <ScrollReveal>
          <div className="text-center space-y-2 mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#177333]/10 text-[#177333] mb-1">
              <Instagram className="w-5 h-5" />
            </div>
            <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight">
              Follow Us on Instagram
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-charcoal-600 font-light">
              <a
                href="https://www.instagram.com/biojasi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#177333] transition-colors"
              >
                #biojasi
              </a>
            </p>
          </div>
        </ScrollReveal>

        {/* Rounded-3xl Grid of Authentic Photos */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {instagramPhotos.map((photo) => (
            <StaggerItem key={photo.id}>
              <a
                href="https://www.instagram.com/biojasi"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-sm border border-[#1C1917]/10 bg-white"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#177333]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-7 h-7 text-white filter drop-shadow-md" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
