import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BiojasiLogo } from '@/components/ui/BiojasiLogo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#1C1917]/10 text-[#1C1917] pt-16 sm:pt-20 pb-12 text-left">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1C1917]/10">
          {/* Col 1: Shop / Navegación (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#1C1917] tracking-wide">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs font-sans text-charcoal-600 font-normal">
              <li>
                <Link to="/" className="hover:text-[#177333] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-[#177333] transition-colors">
                  Productos & catálogo
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#177333] transition-colors">
                  Nosotros & huerto
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#177333] transition-colors">
                  Blog de bienestar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Contacto & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Políticas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#1C1917] tracking-wide">
              Políticas
            </h4>
            <ul className="space-y-2 text-xs font-sans text-charcoal-600 font-normal">
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Aviso de privacidad
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Política de envíos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Cambios y devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacto (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#1C1917] tracking-wide">
              Contacto
            </h4>
            <div className="space-y-1.5 text-xs font-sans text-charcoal-600 font-normal">
              <p>Querétaro, Qro., México</p>
              <p>contacto@biojasi.com</p>
              <p>Lotes artesanales de herbolaria viva</p>
            </div>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/biojasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#1C1917]/15 flex items-center justify-center text-charcoal-700 hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-colors"
                aria-label="Instagram @biojasi"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#1C1917]/15 flex items-center justify-center text-charcoal-700 hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-colors"
                aria-label="Facebook Biojäsi"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-sans font-bold text-sm text-[#1C1917] tracking-wide">
              Suscríbete a nuestro boletín
            </h4>
            <p className="text-xs font-sans text-charcoal-600 font-light leading-relaxed">
              Recibe noticias, promociones e información de nuevos lotes y rituales.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-[#177333]/10 text-[#177333] text-xs font-sans font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-[#177333]" />
                <span>Gracias por unirte a nuestro círculo consciente.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-4 py-2.5 rounded-full border border-[#1C1917]/20 bg-white text-xs font-sans focus:outline-none focus:border-[#177333] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#177333] text-white hover:bg-[#145f2b] text-xs font-sans font-semibold tracking-wider transition-all duration-200 shadow-sm whitespace-nowrap"
                  >
                    Suscribirme
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar with Logo Watermark and Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-charcoal-500">
          <div className="flex items-center gap-3">
            <BiojasiLogo className="h-6 w-auto object-contain opacity-80" />
            <span>© {new Date().getFullYear()} BIOJÄSI ® — Ciencia Ancestral</span>
          </div>
          <p className="text-[11px] text-charcoal-400">
            Elaborado artesanalmente en pequeños lotes en Querétaro
          </p>
        </div>
      </Container>
    </footer>
  );
};
