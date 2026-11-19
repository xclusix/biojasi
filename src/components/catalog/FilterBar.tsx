import React from 'react';
import { Search, Sparkles, Wind, Heart, Droplets, Leaf, SlidersHorizontal } from 'lucide-react';
import { ProductCategory, EmotionalBenefit } from '@/types/product';

interface FilterBarProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  selectedBenefit: EmotionalBenefit | 'ALL';
  onSelectBenefit: (ben: EmotionalBenefit | 'ALL') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
}

const CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: 'TODOS', label: 'Todas las Creaciones' },
  { id: 'ACEITES_ESENCIALES', label: 'Aceites & Brisas' },
  { id: 'CUIDADO_CAPILAR', label: 'Cuidado Capilar (BIOJÄSI 8)' },
  { id: 'KITS_RITUALES', label: 'Kits & Regalos' },
];

const EMOTIONAL_BENEFITS: { id: EmotionalBenefit | 'ALL'; label: string; icon: any }[] = [
  { id: 'ALL', label: 'Todos los Beneficios', icon: Sparkles },
  { id: 'RELAJACION', label: 'Relajación (Armonía)', icon: Droplets },
  { id: 'ENERGIA', label: 'Energía & Gozo (Risa y Amor)', icon: Heart },
  { id: 'ENFOQUE', label: 'Enfoque & Claridad (Respira)', icon: Wind },
  { id: 'CAPILAR', label: 'Salud Capilar (BIOJÄSI 8)', icon: Leaf },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  selectedBenefit,
  onSelectBenefit,
  searchQuery,
  onSearchChange,
  totalResults,
}) => {
  return (
    <div className="space-y-6 rounded-3xl bg-white border border-sand-300/80 p-6 sm:p-8 shadow-sm">
      {/* Top Search & Results Counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-charcoal-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por nombre, romero, lavanda, nopal..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-sand-50 border border-sand-300 text-xs text-charcoal-800 placeholder:text-charcoal-400 focus:outline-none focus:border-charcoal-800"
          />
        </div>

        <div className="text-xs text-charcoal-500 font-mono text-right">
          Mostrando <strong>{totalResults}</strong> {totalResults === 1 ? 'creación' : 'creaciones'}
        </div>
      </div>

      {/* Categories Row */}
      <div className="space-y-2 border-t border-sand-200/80 pt-4">
        <span className="text-[10px] font-sub uppercase font-bold tracking-widest text-charcoal-400 block text-left">
          Filtrar por Categoría:
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sub uppercase tracking-wider font-semibold transition-all ${
                  isActive
                    ? 'bg-charcoal-800 text-sand-50 shadow-sm'
                    : 'bg-sand-50 border border-sand-200 text-charcoal-600 hover:bg-sand-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Emotional Benefits Row */}
      <div className="space-y-2 border-t border-sand-200/80 pt-4">
        <span className="text-[10px] font-sub uppercase font-bold tracking-widest text-charcoal-400 block text-left">
          Filtrar por Beneficio Emocional:
        </span>
        <div className="flex flex-wrap gap-2">
          {EMOTIONAL_BENEFITS.map((ben) => {
            const isActive = selectedBenefit === ben.id;
            const IconComponent = ben.icon;
            return (
              <button
                key={ben.id}
                type="button"
                onClick={() => onSelectBenefit(ben.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-botanical-forest text-white shadow-sm'
                    : 'bg-sand-50 border border-sand-200 text-charcoal-600 hover:bg-sand-100'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{ben.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
