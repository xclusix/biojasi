import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BiojasiLogo } from '@/components/ui/BiojasiLogo';
import { BiojasiOrnament } from '@/components/ui/BiojasiOrnament';
import { useCartStore } from '@/store/useCartStore';
import { useRitualStore } from '@/store/useRitualStore';

export const HeaderV3: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const { openCart, getTotals } = useCartStore();
  const { openSelector } = useRitualStore();
  const { itemCount } = getTotals();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Catálogo', href: '/catalogo' },
    { name: 'El Huerto', href: '/nosotros' },
    { name: 'Notas de Bienestar', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
        isScrolled ? 'pt-3' : 'pt-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-white/90 backdrop-blur-md rounded-full px-5 sm:px-7 py-2.5 sm:py-3 border border-[#1C1917]/10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all">
          {/* Logo Oficial BIOJÄSI */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="BIOJÄSI - Inicio"
          >
            <BiojasiLogo className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-102" />
          </Link>

          {/* Menú Central Discreto & Editorial */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-sans tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#177333] font-semibold'
                      : 'text-charcoal-600 hover:text-[#177333]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#177333]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Acciones Rápidas */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Selector Sensorial */}
            <button
              type="button"
              onClick={openSelector}
              className="hidden lg:inline-flex items-center gap-2 text-xs font-sans font-medium text-charcoal-700 bg-[#FAF8F5] hover:bg-[#177333] hover:text-white px-3.5 py-1.5 rounded-full border border-[#1C1917]/10 transition-all duration-150 active:scale-[0.96]"
            >
              <BiojasiOrnament size={14} color="#177333" />
              <span>¿Cómo te sientes hoy?</span>
            </button>

            {/* Carrito de Compras */}
            <button
              type="button"
              onClick={openCart}
              aria-label={`Ver canasta de compras con ${itemCount} productos`}
              className="inline-flex items-center gap-2 text-xs font-sans font-medium text-[#1C1917] bg-[#FAF8F5] hover:bg-[#177333] hover:text-white px-3 sm:px-3.5 py-1.5 rounded-full border border-[#1C1917]/10 transition-all duration-150 active:scale-[0.96]"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="font-semibold" aria-live="polite">{itemCount}</span>
            </button>

            {/* Menú Móvil */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden p-1.5 text-charcoal-700 hover:text-[#177333] transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isMobileOpen && (
        <div className="md:hidden mt-3 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-[#1C1917]/10 shadow-lg p-5 text-left animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-sans font-medium py-2 px-3 rounded-lg text-charcoal-700 hover:bg-[#FAF8F5] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#1C1917]/10">
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  openSelector();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#177333] text-white text-xs font-sans font-medium active:scale-[0.96]"
              >
                <BiojasiOrnament size={14} color="#ffffff" />
                <span>¿Cómo te sientes hoy?</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
