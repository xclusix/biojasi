import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Moon, Sun, Wind } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BotanicalLavenderBouquet } from '@/components/ui/BotanicalLavenderBouquet';
import { BotanicalWildflowerCluster } from '@/components/ui/BotanicalWildflowerCluster';
import { useCartStore } from '@/store/useCartStore';

interface StateOption {
  id: string;
  icon: React.ElementType;
  label: string;
  emotionalNeed: string;
  productName: string;
  price: number;
  image: string;
  quote: string;
  ritualNotes: {
    top: string;
    heart: string;
    base: string;
  };
  moment: string;
}

const states: StateOption[] = [
  {
    id: 'pausa',
    icon: Moon,
    label: 'Pausa & Descanso',
    emotionalNeed: 'Para cuando la mente no para y necesitas soltar la prisa del día.',
    productName: 'Brisa Botánica Armonía',
    price: 135,
    image: '/assets/products/retouched_biojasi/square_crops/brisa_armonia_60ml_sq.jpg',
    quote: '“Rocía sobre la almohada y en tu espacio personal antes de dormir para crear un ambiente de serenidad profunda.”',
    ritualNotes: {
      top: 'Lavanda silvestre y bergamota',
      heart: 'Salvia sclarea y manzanilla romana',
      base: 'Madera de cedro y resinas del semidesierto',
    },
    moment: 'Al atardecer o antes de dormir',
  },
  {
    id: 'claridad',
    icon: Wind,
    label: 'Claridad & Despeje',
    emotionalNeed: 'Para renovar el ambiente con una sensación de frescura despejada y recuperar el enfoque.',
    productName: 'Shot Concentrado Respira',
    price: 160,
    image: '/assets/products/retouched_biojasi/square_crops/shot_respira_10ml_sq.jpg',
    quote: '“Aplica una gota en las palmas, frota suavemente e inhala profundamente tres veces.”',
    ritualNotes: {
      top: 'Eucalipto globulus y menta piperita',
      heart: 'Romero de Querétaro y alcanfor blanco',
      base: 'Bálsamo de copaiba silvestre',
    },
    moment: 'Durante jornadas de trabajo o estudio',
  },
  {
    id: 'vitalidad',
    icon: Sun,
    label: 'Vitalidad & Gozo',
    emotionalNeed: 'Para encender el ánimo, reconectar con la ternura y la alegría interior.',
    productName: 'Brisa Risa y Amor',
    price: 135,
    image: '/assets/products/retouched_biojasi/square_crops/brisa_risa_y_amor_60ml_sq.jpg',
    quote: '“Rocía sobre el pecho y las muñecas al comenzar el día para recibir la luz de los cítricos.”',
    ritualNotes: {
      top: 'Mandarina dulce y naranja valenciana',
      heart: 'Jazmín sambac y azahar fresco',
      base: 'Vainilla pura y resina de copal',
    },
    moment: 'Por las mañanas o momentos de introspección',
  },
];

export const V3SensoryAromaWheel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('pausa');
  const current = states.find((s) => s.id === activeTab) || states[0];
  const { addItem, openCart } = useCartStore();

  const handleQuickAdd = () => {
    addItem({
      productId: current.id,
      variantId: `${current.id}-std`,
      slug: current.id,
      name: current.productName,
      variantLabel: 'Presentación de 60 ml',
      priceMxn: current.price,
      imageUrl: current.image,
      emotionalBenefit: current.id === 'pausa' ? 'RELAJACION' : current.id === 'claridad' ? 'ENFOQUE' : 'ENERGIA',
      category: 'ACEITES_ESENCIALES',
      quantity: 1,
    });
    openCart();
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF6F0]/80 backdrop-blur-sm border-t border-[#1C1917]/10">
      <Container size="xl">
        <ScrollReveal direction="earth" className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917] tracking-tight font-light">
            Abre los sentidos: ¿qué cuidado necesitas hoy?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-charcoal-600 font-light max-w-[50ch] mx-auto">
            Acompaña tus momentos del día con plantas y aromas pensados para liberar el cansancio, despejar la mente o simplemente regalarte una pausa.
          </p>
        </ScrollReveal>

        {/* State Selection Pills */}
        <ScrollReveal direction="earth" delay={0.1} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          {states.map((st) => {
            const Icon = st.icon;
            const isActive = st.id === activeTab;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveTab(st.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-semibold tracking-wider transition-all duration-200 active:scale-[0.96] shadow-sm ${
                  isActive
                    ? 'bg-[#177333] text-white'
                    : 'bg-white text-charcoal-700 hover:bg-[#FAF8F5] border border-[#1C1917]/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{st.label}</span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Interactive Content Card */}
        <ScrollReveal direction="earth" delay={0.2} className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-10 border border-[#1C1917]/10 shadow-[0_16px_36px_rgba(0,0,0,0.03)] relative overflow-hidden">
          {/* Authentic Brand Floral Watermark */}
          <img
            src="/assets/branding/botanicals/postal1_espiga_azul.svg"
            alt=""
            className="absolute -bottom-8 -right-8 w-36 h-auto opacity-15 pointer-events-none select-none"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center text-left relative z-10"
            >
              {/* Left Column (7 cols): Olfactive & Ritual Guidance */}
              <div className="lg:col-span-7 space-y-5">
                <span className="text-[10px] font-sans font-semibold tracking-widest text-charcoal-400 uppercase">
                  Momento recomendado: {current.moment}
                </span>

                <h3 className="font-serif text-2xl sm:text-4xl text-[#1C1917] font-medium tracking-tight">
                  {current.productName}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  {current.emotionalNeed}
                </p>

                <p className="font-serif italic text-xs sm:text-sm text-[#177333] border-l-2 border-[#177333] pl-3 py-1">
                  {current.quote}
                </p>

                {/* Olfactive Pyramid Notes */}
                <div className="pt-2 border-t border-[#1C1917]/10 space-y-1.5 text-xs font-sans">
                  <p className="text-charcoal-400 font-medium">Notas olfativas vivas:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-charcoal-600">
                    <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#1C1917]/5">
                      <span className="block font-semibold text-charcoal-800 text-[10px] uppercase tracking-wider">Salida</span>
                      {current.ritualNotes.top}
                    </div>
                    <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#1C1917]/5">
                      <span className="block font-semibold text-charcoal-800 text-[10px] uppercase tracking-wider">Corazón</span>
                      {current.ritualNotes.heart}
                    </div>
                    <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#1C1917]/5">
                      <span className="block font-semibold text-charcoal-800 text-[10px] uppercase tracking-wider">Fondo</span>
                      {current.ritualNotes.base}
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleQuickAdd}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#177333] hover:bg-[#135c29] text-white text-xs font-sans font-semibold tracking-wider transition-all duration-150 active:scale-[0.96] shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Agregar a la canasta (${current.price}.00 MXN)</span>
                  </button>
                </div>
              </div>

              {/* Right Column (5 cols): Product Visual in Warm Light with State-Specific Flora */}
              <div className="lg:col-span-5 flex items-center justify-center relative">
                <div className="w-full aspect-[4/5] bg-[#FAF8F5] rounded-2xl p-6 flex items-center justify-center border border-[#1C1917]/10 relative overflow-hidden">
                  {/* Dynamic Living Plant Illustration based on state */}
                  {current.id === 'pausa' && (
                    <div className="absolute -top-3 -right-3 pointer-events-none opacity-80 drop-shadow-sm">
                      <BotanicalLavenderBouquet size={110} />
                    </div>
                  )}
                  {current.id === 'vitalidad' && (
                    <div className="absolute -top-2 -right-2 pointer-events-none opacity-80 drop-shadow-sm">
                      <BotanicalWildflowerCluster size={105} />
                    </div>
                  )}
                  {current.id === 'claridad' && (
                    <div className="absolute -top-3 -right-3 pointer-events-none opacity-80 drop-shadow-sm">
                      <img
                        src="/assets/branding/botanicals/postal1_espiga_azul.svg"
                        alt=""
                        className="w-20 h-auto filter drop-shadow-sm"
                      />
                    </div>
                  )}

                  <img
                    src={current.image}
                    alt={current.productName}
                    className="max-h-full max-w-full object-contain filter drop-shadow-lg relative z-10 transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </Container>
    </section>
  );
};
