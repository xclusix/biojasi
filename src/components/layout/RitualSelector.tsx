import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useRitualStore } from '@/store/useRitualStore';
import { EmotionalBenefit } from '@/types/product';

interface RitualCardConfig {
  id: EmotionalBenefit;
  title: string;
  botanicalPlants: string;
  productName: string;
  desc: string;
  flowerIcon: string;
  watermarkFlower: string;
  cardBg: string;
  borderColor: string;
  hoverBorder: string;
  tagClass: string;
  arrowHoverClass: string;
  query: string;
}

const RITUAL_OPTIONS: RitualCardConfig[] = [
  {
    id: 'ENFOQUE',
    title: 'Despejar la Mente & Enfoque',
    botanicalPlants: 'Eucalipto, Menta Piperita & Té de Limón',
    productName: 'Brisa Respira',
    desc: 'Brisa herbal inspirada en el bosque para abrir el pecho, despejar la mente y volver a Tu centro.',
    flowerIcon: '/assets/branding/botanicals/margarita_azul_oficial.svg',
    watermarkFlower: '/assets/branding/botanicals/postal1_espiga_azul.svg',
    cardBg: 'bg-[#F4F8F7]/80 hover:bg-[#EEF5F3]',
    borderColor: 'border-[#6C86BD]/20',
    hoverBorder: 'hover:border-[#6C86BD]/80 hover:shadow-[0_16px_32px_-8px_rgba(108,134,189,0.18)]',
    tagClass: 'text-[#3B5B84] bg-[#6C86BD]/10 border-[#6C86BD]/25',
    arrowHoverClass: 'group-hover:bg-[#6C86BD] group-hover:text-white group-hover:border-[#6C86BD]',
    query: 'enfoque',
  },
  {
    id: 'RELAJACION',
    title: 'Calmar el Ritmo & Descanso',
    botanicalPlants: 'Lavanda Real, Jazmín & Palo Santo',
    productName: 'Brisa Armonía',
    desc: 'Brisa relajante que equilibra maderas, cítricos y flores para soltar tensiones y facilitar el descanso.',
    flowerIcon: '/assets/branding/botanicals/espiga_lavanda_oficial.svg',
    watermarkFlower: '/assets/branding/botanicals/espiga_lavanda_oficial.svg',
    cardBg: 'bg-[#F8F5FA]/80 hover:bg-[#F3EEF7]',
    borderColor: 'border-[#8A6FA0]/20',
    hoverBorder: 'hover:border-[#8A6FA0]/80 hover:shadow-[0_16px_32px_-8px_rgba(138,111,160,0.18)]',
    tagClass: 'text-[#64447D] bg-[#8A6FA0]/10 border-[#8A6FA0]/25',
    arrowHoverClass: 'group-hover:bg-[#8A6FA0] group-hover:text-white group-hover:border-[#8A6FA0]',
    query: 'relajacion',
  },
  {
    id: 'ENERGIA',
    title: 'Alegrar el Corazón & Gozo',
    botanicalPlants: 'Rosas de Huerto, Sándalo & Naranja Dulce',
    productName: 'Brisa Risa y Amor',
    desc: 'Brisa cálida y floral que despierta el placer de habitarte, liberar lo que pesa y consentir Tu día.',
    flowerIcon: '/assets/branding/botanicals/flor_rosa_cosmos_oficial.svg',
    watermarkFlower: '/assets/branding/botanicals/flor_rosa_cosmos_oficial.svg',
    cardBg: 'bg-[#FAF4F2]/80 hover:bg-[#F7ECE9]',
    borderColor: 'border-[#EC665B]/20',
    hoverBorder: 'hover:border-[#EC665B]/80 hover:shadow-[0_16px_32px_-8px_rgba(236,102,91,0.18)]',
    tagClass: 'text-[#B2483E] bg-[#EC665B]/10 border-[#EC665B]/25',
    arrowHoverClass: 'group-hover:bg-[#EC665B] group-hover:text-white group-hover:border-[#EC665B]',
    query: 'energia',
  },
  {
    id: 'CAPILAR',
    title: 'Renovar & Fortalecer Cabello',
    botanicalPlants: 'Romero Silvestre, Sábila & Nopal',
    productName: 'Shampoo BIOJÄSI 8',
    desc: 'Baño armónico con 8 extractos y aceites esenciales cítricos que remineralizan y fortalecen desde la raíz.',
    flowerIcon: '/assets/branding/botanicals/flor_caliz_verde_oficial.svg',
    watermarkFlower: '/assets/branding/botanicals/flor_slow_living_pino.svg',
    cardBg: 'bg-[#F2F8F4]/80 hover:bg-[#E8F3EB]',
    borderColor: 'border-[#177333]/20',
    hoverBorder: 'hover:border-[#177333] hover:shadow-[0_16px_32px_-8px_rgba(23,115,51,0.18)]',
    tagClass: 'text-[#177333] bg-[#177333]/10 border-[#177333]/25',
    arrowHoverClass: 'group-hover:bg-[#177333] group-hover:text-white group-hover:border-[#177333]',
    query: 'capilar',
  },
];

export const RitualSelector: React.FC = () => {
  const { isSelectorOpen, closeSelector, setSelectedUniverse } = useRitualStore();
  const navigate = useNavigate();

  const handleSelect = (option: RitualCardConfig) => {
    setSelectedUniverse(option.id);
    closeSelector();
    navigate(`/catalogo?beneficio=${option.query}`);
  };

  return (
    <AnimatePresence>
      {isSelectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Botanical Atmospheric Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSelector}
            className="fixed inset-0 bg-[#1C1917]/65 backdrop-blur-md transition-all"
            aria-hidden="true"
          />

          {/* Floral Botanical Modal Folio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#1C1917]/10 rounded-[32px] p-6 sm:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] z-10 space-y-6 sm:space-y-8 overflow-hidden text-left"
          >
            {/* Background Botanical Watermarks */}
            <img
              src="/assets/branding/botanicals/mural_botanico_completo_transparent.png"
              alt=""
              className="absolute -top-16 -right-16 w-80 h-auto opacity-[0.05] pointer-events-none select-none"
            />
            <img
              src="/assets/branding/botanicals/flor_slow_living_tierra_blanca.svg"
              alt=""
              className="absolute -bottom-16 -left-16 w-64 h-auto opacity-[0.04] pointer-events-none select-none"
            />

            {/* Header with Authentic Brand Floral Emblem */}
            <div className="flex items-start justify-between gap-4 border-b border-[#1C1917]/10 pb-5 relative z-10">
              <div className="space-y-2">
                {/* Botanical Category Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#177333]/10 border border-[#177333]/20 text-[#177333] text-[10px] font-sub uppercase tracking-[0.2em] font-semibold">
                  <img
                    src="/assets/branding/botanicals/flor_caliz_verde_oficial.svg"
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                  <span>Acompañamiento Botánico</span>
                </div>

                <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-[#1C1917] tracking-tight leading-snug">
                  ¿Qué necesita Tu cuerpo hoy?
                </h3>

                <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed max-w-xl">
                  Selecciona la intención que mejor resuene con Tu momento. Las plantas medicinales y aromas vivos de nuestro huerto te guiarán a la creación ideal.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeSelector}
                aria-label="Cerrar selector botánico"
                className="w-10 h-10 rounded-full bg-white/90 hover:bg-[#177333] hover:text-white border border-[#1C1917]/10 flex items-center justify-center text-charcoal-600 transition-all duration-200 shadow-sm shrink-0 active:scale-[0.95]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Botanical Floral Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 relative z-10">
              {RITUAL_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt)}
                  className={`relative overflow-hidden rounded-2xl p-5 sm:p-6 border transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between h-full active:scale-[0.98] ${opt.cardBg} ${opt.borderColor} ${opt.hoverBorder}`}
                >
                  {/* Watermark Flower Asset floating in the bottom-right corner */}
                  <img
                    src={opt.watermarkFlower}
                    alt=""
                    className="absolute -bottom-4 -right-4 w-28 h-28 object-contain pointer-events-none select-none opacity-15 group-hover:opacity-35 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Card Header: Flora Icon Pill + Product Badge + Arrow */}
                  <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                    {/* Flower emblem badge */}
                    <div className="w-11 h-11 rounded-xl bg-white/95 shadow-sm border border-[#1C1917]/8 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300 shrink-0">
                      <img
                        src={opt.flowerIcon}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-sub uppercase tracking-wider font-semibold border ${opt.tagClass}`}>
                        {opt.productName}
                      </span>
                      <div className={`w-7 h-7 rounded-full bg-white/90 border border-[#1C1917]/10 flex items-center justify-center text-charcoal-400 transition-all duration-200 shadow-2xs ${opt.arrowHoverClass}`}>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Body: Title, Botanical Plants & Description */}
                  <div className="space-y-1.5 relative z-10">
                    <h4 className="font-display font-medium text-lg sm:text-xl text-[#1C1917] group-hover:text-charcoal-900 transition-colors leading-snug">
                      {opt.title}
                    </h4>

                    {/* Botanical Herbal Extract Descriptor */}
                    <div className="flex items-center gap-1.5 text-[11px] font-sans font-medium text-charcoal-500 pb-1">
                      <span className="text-[#177333] font-semibold">•</span>
                      <span>{opt.botanicalPlants}</span>
                    </div>

                    <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Modal Botanical Footer */}
            <div className="pt-4 border-t border-[#1C1917]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-charcoal-500 relative z-10">
              <div className="flex items-center gap-2">
                <img
                  src="/assets/branding/botanicals/abeja_polinizadora_pino.svg"
                  alt=""
                  className="w-4 h-4 opacity-70"
                />
                <span>Elaborado artesanalmente en Querétaro con plantas de cultivo consciente</span>
              </div>
              <span className="text-charcoal-400 font-light hidden sm:inline">
                Pulsa cualquier opción para descubrir su fórmula y ritual
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
