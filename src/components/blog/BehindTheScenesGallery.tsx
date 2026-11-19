import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const BEHIND_THE_SCENES = [
  {
    image: '/assets/instagram/02_flores_huerto.jpg',
    title: 'Cosecha de Flores al Amanecer',
    desc: 'Seleccionamos las corolas de jazmín y rosas cuando el rocío conserva su aceite esencial.',
  },
  {
    image: '/assets/instagram/12_manos_gracias_tierra.jpg',
    title: 'Destilación en Pequeños Lotes',
    desc: 'Cada alambique se calienta a fuego lento para no quemar las notas sutiles de las plantas.',
  },
  {
    image: '/assets/instagram/09_mujer_lino_campo.jpg',
    title: 'Talleres de Bienestar Consciente',
    desc: 'Compartimos la Ciencia Ancestral Mexicana en encuentros comunitarios en Querétaro.',
  },
  {
    image: '/assets/instagram/17_cosecha_naranja.jpg',
    title: 'Prensado en Frío de Cítricos',
    desc: 'Extracción de la cáscara de naranja dulce para nuestras brisas aromáticas.',
  },
];

export const BehindTheScenesGallery: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F5EFE8] border-y border-sand-300">
      <Container size="xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase font-bold tracking-wider shadow-sm">
            <Camera className="w-3.5 h-3.5 text-botanical-forest" />
            <span>DETRÁS DE CÁMARAS</span>
          </div>
          <h3 className="font-display font-medium text-3xl sm:text-4xl text-charcoal-800">
            El Taller & Los Procesos
          </h3>
          <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light">
            Un vistazo a nuestro día a día entre alambiques, tierra fértil y recolección manual.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {BEHIND_THE_SCENES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-sand-200 overflow-hidden shadow-sm hover:shadow-antigravity transition-all duration-300 space-y-3 p-4 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 p-2">
                <h4 className="font-display font-medium text-base text-charcoal-800">
                  {item.title}
                </h4>
                <p className="font-body text-xs text-charcoal-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
