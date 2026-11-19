import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BRAND } from '@/lib/constants';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const INSTAGRAM_PHOTOS = [
  { img: '/assets/instagram/01_shampoo_regadera.jpg', title: 'Shampoo BIOJÄSI 8 en la regadera' },
  { img: '/assets/instagram/02_flores_huerto.jpg', title: 'Flores frescas del huerto en Querétaro' },
  { img: '/assets/inspo/02_romero_lavanda_palosanto.jpg', title: 'Herbolaria viva recolectada a mano' },
  { img: '/assets/inspo/04_brisa_ritual_niebla.jpg', title: 'Bruma aromática en luz de mañana' },
  { img: '/assets/inspo/03_nopal_sabila_jengibre.jpg', title: 'Mucílago puro de nopal y sábila' },
  { img: '/assets/instagram/12_manos_gracias_tierra.jpg', title: 'Gratitud a la tierra y alambiques' },
];

export const EditorialInstagramPress: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] overflow-hidden">
      <Container size="xl">
        {/* Instagram Header with ScrollReveal (No eyebrow, Síguenos en Instagram, no arrow) */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Síguenos en Instagram
              </h2>
            </div>

            <a
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sub uppercase tracking-[0.2em] text-[#177333] hover:opacity-80 transition-opacity font-medium"
            >
              @biojasi
            </a>
          </div>
        </ScrollReveal>

        {/* 6 Sharp Rectangular Columns Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-20">
          {INSTAGRAM_PHOTOS.map((item, idx) => (
            <StaggerItem key={idx}>
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden bg-[#ECE3D7]/40 border border-[#1C1917]/10 block"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1C1917]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Simplified Newsletter Box with Green Button & ScrollReveal */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center space-y-5 pt-12 border-t border-[#1C1917]/10">
            <h3 className="font-display font-light text-2xl sm:text-3xl text-[#1C1917] tracking-tight">
              Suscríbete a nuestro boletín para recibir noticias, promociones e información.
            </h3>

            {subscribed ? (
              <div className="p-4 border border-[#177333]/30 bg-[#177333]/5 text-[#177333] text-xs font-medium flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>Gracias por suscribirte a nuestro boletín.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex items-center gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa Tu correo electrónico..."
                  className="flex-1 px-4 py-3 bg-transparent border-b border-[#1C1917] text-xs text-[#1C1917] placeholder:text-charcoal-400 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Suscribirse al boletín"
                  className="px-6 py-3 bg-[#177333] hover:bg-[#125c28] text-[#FAF8F5] text-[10px] font-sub uppercase tracking-[0.2em] font-medium transition-colors shadow-sm"
                >
                  Suscribir
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
