import React, { useState } from 'react';
import { Instagram, ArrowRight, X, Heart, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BRAND } from '@/lib/constants';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  category: string;
  likes: number;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 'ig-1', image: '/assets/instagram/01_shampoo_regadera.jpg', caption: 'El ritual matutino con Shampoo BIOJÄSI 8 en la regadera.', category: 'Cuidado Capilar', likes: 142 },
  { id: 'ig-2', image: '/assets/instagram/02_flores_huerto.jpg', caption: 'Cosecha de flores y hierbas al amanecer en Querétaro.', category: 'El Huerto', likes: 218 },
  { id: 'ig-3', image: '/assets/instagram/03_difusor_shot.jpg', caption: 'Shot concentrado puro para difusores de agua ultrasónicos.', category: 'Aromaterapia', likes: 98 },
  { id: 'ig-4', image: '/assets/instagram/04_romero_concentracion.jpg', caption: 'Romero fresco cosechado a mano para revitalizar el cuero cabelludo.', category: 'Ingredientes Vivos', likes: 175 },
  { id: 'ig-5', image: '/assets/instagram/05_shampoo_nopal.jpg', caption: 'Mucílago puro de nopal orgánico y sábila queretana.', category: 'Cuidado Capilar', likes: 133 },
  { id: 'ig-6', image: '/assets/instagram/06_brisa_armonia_noche.jpg', caption: 'Brisa Armonía: lavanda real y palo santo para soltar la prisa.', category: 'Aromaterapia', likes: 245 },
  { id: 'ig-7', image: '/assets/instagram/07_brisa_respira_escritorio.jpg', caption: 'Un respiro de claridad mental en el escritorio de trabajo.', category: 'Rituales', likes: 119 },
  { id: 'ig-8', image: '/assets/instagram/08_cielo_golondrinas.jpg', caption: 'Tardes de campo y libertad en el semidesierto queretano.', category: 'Querétaro', likes: 89 },
  { id: 'ig-9', image: '/assets/instagram/09_mujer_lino_campo.jpg', caption: 'Pausas conscientes y conexión íntima con la naturaleza.', category: 'Comunidad', likes: 204 },
  { id: 'ig-10', image: '/assets/instagram/10_eucalipto_sol.jpg', caption: 'Eucalipto bajo el sol de la mañana. Sensación de frescura y aire limpio.', category: 'El Huerto', likes: 167 },
  { id: 'ig-11', image: '/assets/instagram/11_brisa_risa_rosas.jpg', caption: 'Brisa Risa y Amor: rosas frescas de huerto y naranja dulce.', category: 'Aromaterapia', likes: 289 },
  { id: 'ig-12', image: '/assets/instagram/12_manos_gracias_tierra.jpg', caption: 'Gratitud a la tierra por cada cosecha de nuestra botica.', category: 'Filosofía', likes: 312 },
];

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <Container size="xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-[0.2em] font-bold shadow-sm">
              <Instagram className="w-3 h-3 text-botanical-rose" />
              <span>DIARIO VISUAL EN VIVO</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
              Síguenos en @biojasi
            </h2>
            <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light max-w-lg">
              Cosechas al amanecer, destilaciones artesanales y momentos de calma desde nuestro taller en Querétaro.
            </p>
          </div>

          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-sand-300 text-charcoal-800 text-xs font-sub uppercase font-bold tracking-wider hover:bg-sand-50 transition-colors shadow-sm"
          >
            <span>Visitar Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Column Grid of 12 Authentic Photos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-sand-100 border border-sand-200 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-sand-50 text-center">
                <Instagram className="w-5 h-5 mb-1 text-botanical-amber" />
                <span className="text-[10px] font-sub uppercase font-bold tracking-wider">
                  {post.category}
                </span>
                <span className="text-[10px] text-sand-200 font-light mt-1 flex items-center gap-1">
                  <Heart className="w-3 h-3 fill-current text-botanical-rose" />
                  {post.likes}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Image Modal Viewer */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm">
            <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-sand-300 rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-sand-300 flex items-center justify-center text-charcoal-700 hover:text-charcoal-950"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-sand-100 border border-sand-200">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs text-charcoal-500">
                  <span className="font-sub uppercase font-bold text-botanical-forest">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Heart className="w-3.5 h-3.5 text-botanical-rose fill-current" />
                    {selectedPost.likes} me gusta
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={BRAND.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900 transition-colors"
                >
                  <span>Ver en Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
