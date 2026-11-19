import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Droplets } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const CategoryBlocks: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5]">
      <Container size="xl">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-[11px] font-sub uppercase font-bold tracking-[0.22em] text-charcoal-400">
            FÓRMULAS VIVAS DE CIENCIA ANCESTRAL
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
            Nuestros Dos Universos Botánicos
          </h2>
          <p className="font-body text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto font-light leading-relaxed">
            Hemos seleccionado cada botánico buscando ése equilibrio donde las plantas y sus aromas sean una guía para el cuidado que Tú mereces.
          </p>
        </div>

        {/* 2 Split Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Block 1: Aceites Esenciales / Aromaterapia */}
          <div className="group rounded-3xl bg-[#F5EFE8] border border-sand-300 p-8 sm:p-12 shadow-antigravity hover:shadow-antigravity-float transition-all duration-500 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-widest font-bold">
                <Sparkles className="w-3.5 h-3.5 text-botanical-amber" />
                <span>Aromaterapia Emocional</span>
              </div>

              <h3 className="font-display font-medium text-3xl sm:text-4xl text-charcoal-800">
                Aceites Esenciales, Brisas & Shots
              </h3>

              <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed max-w-md">
                Vapores herbales y extractos 100% puros destilados en Querétaro para modular el estado de ánimo: claridad mental con <em>Respira</em>, equilibrio y sueño sereno con <em>Armonía</em> y apapacho afectivo con <em>Risa y Amor</em>.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-charcoal-600">
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Lavanda Real
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Palo Santo Ético
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Menta & Eucalipto
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-sand-200 shadow-sm">
                <img
                  src="/assets/instagram/06_brisa_armonia_noche.jpg"
                  alt="Brisa Botánica Armonía"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-charcoal-500 font-medium">
                  Desde $135 MXN
                </span>
                <Link to="/catalogo?categoria=aceites_esenciales">
                  <button className="px-6 py-3 rounded-full bg-charcoal-800 hover:bg-charcoal-900 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider transition-all shadow-sm flex items-center gap-2">
                    <span>Ver Aceites & Brisas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Block 2: Cuidado Capilar / Shampoo BIOJÄSI 8 */}
          <div className="group rounded-3xl bg-[#F5EFE8] border border-sand-300 p-8 sm:p-12 shadow-antigravity hover:shadow-antigravity-float transition-all duration-500 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-widest font-bold">
                <Leaf className="w-3.5 h-3.5 text-botanical-forest" />
                <span>Cuidado Capilar Ancestral</span>
              </div>

              <h3 className="font-display font-medium text-3xl sm:text-4xl text-charcoal-800">
                Shampoo BIOJÄSI 8 & Activos Vivos
              </h3>

              <p className="font-body text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed max-w-md">
                Remineraliza el cuero cabelludo con 8 aceites esenciales puros, mucílago de nopal orgánico y jengibre fresco de Querétaro. Cero sulfatos, parabenos ni siliconas que sobrecarguen Tu cuero cabelludo.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-charcoal-600">
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Romero Silvestre
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Extracto de Nopal
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-sand-200">
                  Jengibre & Tea Tree
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white border border-sand-200 shadow-sm">
                <img
                  src="/assets/instagram/01_shampoo_regadera.jpg"
                  alt="Shampoo BIOJÄSI 8 en regadera"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-charcoal-500 font-medium">
                  Desde $280 MXN (250ml / 500ml)
                </span>
                <Link to="/catalogo?categoria=cuidado_capilar">
                  <button className="px-6 py-3 rounded-full bg-charcoal-800 hover:bg-charcoal-900 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider transition-all shadow-sm flex items-center gap-2">
                    <span>Ver Shampoos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
