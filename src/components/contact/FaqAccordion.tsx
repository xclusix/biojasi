import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';
import { FaqItem } from '@/types/blog';

const FAQ_CATEGORIES: { id: FaqItem['category'] | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'Todas las Preguntas' },
  { id: 'BRISAS_VS_SHOTS', label: 'Brisas vs. Shots' },
  { id: 'USO_APLICACION', label: 'Uso & Aplicación en Piel' },
  { id: 'CADUCIDAD_CALIDAD', label: 'Caducidad & Conservación' },
  { id: 'ENVIOS_PAGOS', label: 'Envíos & Pagos' },
];

export const FaqAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FaqItem['category'] | 'ALL'>('ALL');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0].id);

  const filteredFaqs =
    activeCategory === 'ALL'
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div id="faqs" className="space-y-8 text-left">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase font-bold tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-botanical-forest" />
          <span>RESPUESTAS CLARAS</span>
        </div>
        <h3 className="font-display font-medium text-3xl sm:text-4xl text-charcoal-800">
          Preguntas Frecuentes (FAQs)
        </h3>
        <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light leading-relaxed">
          Resolvemos tus dudas sobre modo de uso, precauciones en la piel, dilución, caducidad y envíos.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {FAQ_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-sub uppercase tracking-wider font-semibold transition-all ${
                isActive
                  ? 'bg-charcoal-800 text-sand-50 shadow-sm'
                  : 'bg-white border border-sand-200 text-charcoal-600 hover:bg-sand-100'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-sand-300/80 shadow-sm overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-medium text-lg sm:text-xl text-charcoal-800 hover:text-charcoal-600 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-charcoal-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-charcoal-800' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 border-t border-sand-100 font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
