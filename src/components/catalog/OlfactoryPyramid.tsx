import React from 'react';
import { Wind, Heart, Droplets, Sparkle } from 'lucide-react';
import { OlfactoryPyramid as OlfactoryPyramidType } from '@/types/product';

interface OlfactoryPyramidProps {
  pyramid: OlfactoryPyramidType;
}

export const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({ pyramid }) => {
  return (
    <div className="space-y-4 rounded-2xl bg-sand-50 border border-sand-200 p-5 sm:p-6 text-left">
      <div className="flex items-center gap-2 text-charcoal-800">
        <Sparkle className="w-4 h-4 text-botanical-amber" />
        <h4 className="font-display font-medium text-lg">Pirámide Olfativa Botánica</h4>
      </div>

      <div className="space-y-3 divide-y divide-sand-200/80 text-xs">
        {/* Salida */}
        <div className="pt-2 first:pt-0 space-y-1">
          <div className="flex items-center justify-between text-[11px] font-sub uppercase font-bold text-charcoal-700">
            <span className="flex items-center gap-1.5 text-blue-900">
              <Wind className="w-3.5 h-3.5" />
              <span>Notas de Salida (0 - 15 min)</span>
            </span>
          </div>
          <p className="text-charcoal-600 font-light pl-5">
            {pyramid.salida.join(' • ')}
          </p>
        </div>

        {/* Corazón */}
        <div className="pt-3 space-y-1">
          <div className="flex items-center justify-between text-[11px] font-sub uppercase font-bold text-charcoal-700">
            <span className="flex items-center gap-1.5 text-pink-900">
              <Heart className="w-3.5 h-3.5" />
              <span>Notas de Corazón (2 - 4 hrs)</span>
            </span>
          </div>
          <p className="text-charcoal-600 font-light pl-5">
            {pyramid.corazon.join(' • ')}
          </p>
        </div>

        {/* Fondo */}
        <div className="pt-3 space-y-1">
          <div className="flex items-center justify-between text-[11px] font-sub uppercase font-bold text-charcoal-700">
            <span className="flex items-center gap-1.5 text-stone-900">
              <Droplets className="w-3.5 h-3.5" />
              <span>Notas de Fondo (4+ hrs)</span>
            </span>
          </div>
          <p className="text-charcoal-600 font-light pl-5">
            {pyramid.fondo.join(' • ')}
          </p>
        </div>
      </div>
    </div>
  );
};
