import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Check, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BiojasiLogo } from '@/components/ui/BiojasiLogo';

export const FooterV3: React.FC = () => {
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
          {/* Col 1: Explorar (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-semibold text-xs text-[#1C1917] tracking-wider uppercase">
              Explorar
            </h4>
            <ul className="space-y-2 text-xs font-sans text-charcoal-600">
              <li>
                <Link to="/" className="hover:text-[#177333] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="hover:text-[#177333] transition-colors">
                  Catálogo de productos
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-[#177333] transition-colors">
                  El huerto y la familia
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#177333] transition-colors">
                  Notas de bienestar
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-[#177333] transition-colors">
                  Contacto & preguntas frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Políticas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans font-semibold text-xs text-[#1C1917] tracking-wider uppercase">
              Políticas
            </h4>
            <ul className="space-y-2 text-xs font-sans text-charcoal-600">
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

          {/* Col 3: Contacto & Taller (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans font-semibold text-xs text-[#1C1917] tracking-wider uppercase">
              Taller & Huerto
            </h4>
            <div className="space-y-1.5 text-xs font-sans text-charcoal-600">
              <p>Querétaro, Qro., México</p>
              <p>contacto@biojasi.com</p>
              <p className="text-charcoal-400">Destilación artesanal en pequeños lotes</p>
            </div>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/biojasi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-charcoal-700 hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-colors"
                aria-label="Instagram @biojasi"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-[#1C1917]/10 flex items-center justify-center text-charcoal-700 hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-colors"
                aria-label="Facebook Biojäsi"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 4: Círculo de Bienestar (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-sans font-semibold text-xs text-[#1C1917] tracking-wider uppercase">
              Círculo Consciente
            </h4>
            <p className="text-xs font-sans text-charcoal-600 font-light leading-relaxed">
              Noticias sobre nuevas cosechas, destilaciones de temporada e invitaciones al huerto. Cero saturación.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-[#177333]/10 text-[#177333] text-xs font-sans font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-[#177333]" />
                <span>Gracias por unirte a nuestro círculo consciente.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2 pt-1">
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
                    className="px-5 py-2.5 rounded-full bg-[#177333] text-white hover:bg-[#135c29] text-xs font-sans font-semibold tracking-wider transition-all duration-150 active:scale-[0.96] shadow-sm whitespace-nowrap"
                  >
                    Suscribirme
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar with Logo and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-sans text-charcoal-500">
          <div className="flex items-center gap-3">
            <BiojasiLogo className="h-6 w-auto object-contain opacity-80" />
            <span>© {new Date().getFullYear()} BIOJÄSI ® — Ciencia Ancestral</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/assets/branding/botanicals/flor_slow_living_pino.svg"
              alt=""
              className="w-8 h-auto opacity-70"
            />
            <p className="text-[11px] text-charcoal-400 max-w-[34ch] text-center md:text-right">
              Elaborado artesanalmente en Querétaro con plantas cultivadas con respeto a los ciclos de la tierra.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
