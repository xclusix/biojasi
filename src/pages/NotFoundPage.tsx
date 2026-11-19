import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 bg-[#FAF8F5]">
      <Container size="sm" className="text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sand-100 border border-sand-300 flex items-center justify-center mx-auto text-botanical-amber">
          <Sun className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[10px] font-sub uppercase font-bold tracking-widest text-charcoal-400">
            Error 404
          </span>
          <h1 className="font-display font-medium text-4xl sm:text-5xl text-charcoal-800">
            Página No Encontrada
          </h1>
          <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light max-w-sm mx-auto">
            La senda que buscas no se encuentra disponible. Te invitamos a regresar al inicio y explorar nuestras creaciones.
          </p>
        </div>

        <div>
          <Link to="/">
            <button className="px-8 py-3.5 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900 transition-colors shadow-sm inline-flex items-center gap-2">
              <span>Regresar al Inicio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
