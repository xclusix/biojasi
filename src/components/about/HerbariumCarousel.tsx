import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkle, Leaf, MapPin, Calendar } from 'lucide-react';
import { herbariumSpecimens } from '@/data/herbarium';
import { BotanicalSpecimen } from '@/types/blog';

export const HerbariumCarousel: React.FC = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<BotanicalSpecimen>(
    herbariumSpecimens[0]
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -280 : 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="space-y-12">
      {/* Selected Botanical Spotlight Card */}
      <div className="rounded-3xl bg-[#F5EFE8] border border-sand-300 p-6 sm:p-10 shadow-antigravity grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
        {/* Left: Botanical Photography (5 cols) */}
        <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-square w-full rounded-2xl overflow-hidden bg-sand-200 border border-sand-300">
          <img
            src={selectedSpecimen.imageUrl}
            alt={selectedSpecimen.commonName}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-sand-300 text-charcoal-800 text-[10px] font-sub uppercase font-bold tracking-wider shadow-sm">
              Activo Vivo
            </span>
          </div>
        </div>

        {/* Right: Botanical Data Sheet (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="font-serif italic text-sm text-botanical-forest block">
              {selectedSpecimen.scientificName}
            </span>
            <h3 className="font-display font-medium text-3xl sm:text-4xl text-charcoal-800">
              {selectedSpecimen.commonName}
            </h3>
            <span className="text-xs font-sub uppercase font-bold tracking-wider text-charcoal-400 block pt-1">
              {selectedSpecimen.role}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-sand-300/80 text-xs text-charcoal-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-botanical-amber flex-shrink-0" />
              <span>Cosecha: {selectedSpecimen.harvestSeason}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-botanical-forest flex-shrink-0" />
              <span>{selectedSpecimen.origin}</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <span className="text-[10px] font-sub uppercase font-bold tracking-widest text-charcoal-400 block">
              Virtudes Botánicas & Sensoriales:
            </span>
            <ul className="space-y-1.5 text-xs text-charcoal-700 font-light">
              {selectedSpecimen.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Leaf className="w-3.5 h-3.5 text-botanical-forest flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scent notes */}
          <div className="p-3.5 rounded-xl bg-white border border-sand-200 text-xs text-charcoal-600 font-light flex items-center gap-2">
            <Sparkle className="w-4 h-4 text-botanical-amber flex-shrink-0" />
            <span>
              <strong>Perfil Olfativo:</strong> {selectedSpecimen.olfactoryNotes}
            </span>
          </div>
        </div>
      </div>

      {/* 12 Plants Selector Rail with Arrows */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-sub uppercase font-bold tracking-[0.2em] text-charcoal-600">
            Catálogo de las 12 Plantas Vivas del Huerto:
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Desplazar a la izquierda"
              className="w-9 h-9 rounded-full bg-white hover:bg-sand-100 border border-sand-300 flex items-center justify-center text-charcoal-800 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Desplazar a la derecha"
              className="w-9 h-9 rounded-full bg-white hover:bg-sand-100 border border-sand-300 flex items-center justify-center text-charcoal-800 shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {herbariumSpecimens.map((spec) => {
            const isSelected = selectedSpecimen.id === spec.id;
            return (
              <button
                key={spec.id}
                type="button"
                onClick={() => setSelectedSpecimen(spec)}
                className={`p-3 rounded-2xl border text-left transition-all duration-300 w-[180px] sm:w-[200px] flex-shrink-0 snap-start flex flex-col gap-2.5 ${
                  isSelected
                    ? 'bg-charcoal-800 text-sand-50 border-charcoal-800 shadow-md scale-105'
                    : 'bg-white border-sand-200 hover:border-sand-300 text-charcoal-800'
                }`}
              >
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-sand-100">
                  <img
                    src={spec.imageUrl}
                    alt={spec.commonName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <strong className="font-display font-medium text-sm block leading-tight">
                    {spec.commonName}
                  </strong>
                  <span
                    className={`font-serif italic text-[10px] block ${
                      isSelected ? 'text-sand-300' : 'text-charcoal-400'
                    }`}
                  >
                    {spec.scientificName}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
