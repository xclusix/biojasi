import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { BotanicalCornerFlourish } from '@/components/ui/BotanicalCornerFlourish';
import { BotanicalLavenderBouquet } from '@/components/ui/BotanicalLavenderBouquet';
import { BotanicalWildflowerCluster } from '@/components/ui/BotanicalWildflowerCluster';
import { useCartStore } from '@/store/useCartStore';

export const V3BentoShowcase: React.FC = () => {
  const { addItem, openCart } = useCartStore();
  const [shampooSize, setShampooSize] = React.useState<'250' | '500'>('250');

  const is250 = shampooSize === '250';
  const shampooImage = is250
    ? '/assets/products/retouched_biojasi/square_crops/shampoo_8_250ml_cordon_sq.jpg'
    : '/assets/products/retouched_biojasi/square_crops/shampoo_8_500ml_ambar_sq.jpg';
  const shampooPrice = is250 ? 280 : 460;
  const shampooLabel = is250 ? '250 ml (Blanca & Cordón)' : '500 ml (Ámbar & Dosificador)';

  const handleAddProduct = (
    id: string,
    name: string,
    price: number,
    image: string,
    category: 'CUIDADO_CAPILAR' | 'ACEITES_ESENCIALES',
    emotionalBenefit: 'CAPILAR' | 'RELAJACION' | 'ENERGIA',
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: id,
      variantId: `${id}-std`,
      slug: id,
      name: name,
      variantLabel: 'Presentación Oficial',
      priceMxn: price,
      imageUrl: image,
      emotionalBenefit: emotionalBenefit,
      category: category,
      quantity: 1,
    });
    openCart();
  };

  return (
    <section className="w-full py-14 sm:py-20">
      <Container size="xl">
        {/* Section Header with Editorial Measure & Earth Growth Entrance */}
        <ScrollReveal
          direction="earth"
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-5 border-b border-[#1C1917]/10 text-left"
        >
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1C1917] tracking-tight font-light">
              Los Más Amados.{' '}
              <span className="italic font-normal text-charcoal-500">
                Botánica viva para el cuerpo.
              </span>
            </h2>
          </div>

          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1C1917]/20 hover:border-[#177333] hover:text-[#177333] text-xs font-sans font-semibold tracking-wider text-[#1C1917] transition-all duration-150 self-start md:self-auto active:scale-[0.96]"
          >
            <span>Ver catálogo completo</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>

        {/* Asymmetric Bento Composition ("One Thing Leads") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8">
          {/* Dominant Hero Bento Card (7 Cols): Shampoo BIOJÄSI 8 */}
          <ScrollReveal
            direction="earth"
            delay={0.1}
            className="lg:col-span-7 bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-9 border border-[#1C1917]/10 shadow-[0_14px_36px_rgba(0,0,0,0.03)] flex flex-col justify-between text-left group hover:border-[#177333]/35 transition-all duration-300 relative overflow-hidden"
          >
            {/* 4 Hand-drawn Botanical Corner Flourishes */}
            <BotanicalCornerFlourish position="top-left" size={36} />
            <BotanicalCornerFlourish position="top-right" size={36} />
            <BotanicalCornerFlourish position="bottom-left" size={36} />
            <BotanicalCornerFlourish position="bottom-right" size={36} />

            {/* Authentic Brand Hand-Drawn Flora Watermark in Card Background */}
            <img
              src="/assets/branding/botanicals/flor_caliz_verde_oficial.svg"
              alt=""
              className="absolute -top-6 -right-6 w-36 h-auto opacity-15 pointer-events-none select-none"
            />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-sans font-semibold tracking-widest text-[#177333] uppercase bg-[#177333]/10 px-3 py-1 rounded-full border border-[#177333]/15">
                  Fórmula Insignia
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1917] font-medium tracking-tight">
                  Shampoo BIOJÄSI 8
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-600 font-light mt-2 max-w-[50ch] leading-relaxed">
                  Destilado artesanalmente para revitalizar el cabello y consentir el cuero cabelludo sin sulfatos, siliconas ni agentes espumantes sintéticos. El romero silvestre aporta fuerza y brillo natural mientras la sábila pura hidrata y reconforta.
                </p>
              </div>

              {/* Genuine Botanical Actives Note */}
              <p className="text-xs font-sans text-[#177333] font-medium pt-1">
                Romero silvestre, nopal orgánico, jengibre y 8 aceites esenciales cítricos y refrescantes.
              </p>
            </div>

            {/* Presentation Switcher Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-3 relative z-10">
              <span className="text-[11px] font-sub uppercase tracking-wider text-charcoal-400">Presentación:</span>
              <button
                type="button"
                onClick={() => setShampooSize('250')}
                className={`px-3 py-1 text-xs rounded-full font-mono transition-all border ${
                  is250
                    ? 'bg-[#177333] text-white border-[#177333] font-semibold shadow-xs'
                    : 'bg-[#FAF8F5] text-charcoal-600 border-[#1C1917]/10 hover:border-[#177333]'
                }`}
              >
                250 ml (Blanca)
              </button>
              <button
                type="button"
                onClick={() => setShampooSize('500')}
                className={`px-3 py-1 text-xs rounded-full font-mono transition-all border ${
                  !is250
                    ? 'bg-[#177333] text-white border-[#177333] font-semibold shadow-xs'
                    : 'bg-[#FAF8F5] text-charcoal-600 border-[#1C1917]/10 hover:border-[#177333]'
                }`}
              >
                500 ml (Ámbar)
              </button>
            </div>

            {/* Central Product Asset Display */}
            <div className="relative my-4 sm:my-6 aspect-[16/10] flex items-center justify-center bg-[#FAF6F0] rounded-2xl overflow-hidden p-4 border border-[#1C1917]/5">
              <img
                key={shampooImage}
                src={shampooImage}
                alt={`Shampoo BIOJÄSI 8 - ${shampooLabel}`}
                className="max-h-full max-w-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Purchase Row */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1C1917]/10 relative z-10">
              <div>
                <p className="text-[11px] font-sans text-charcoal-400">{shampooLabel}</p>
                <p className="font-sans font-bold text-lg text-[#1C1917]">${shampooPrice}.00 MXN</p>
              </div>

              <button
                type="button"
                onClick={(e) =>
                  handleAddProduct(
                    'prod-biojasi-8',
                    `Shampoo BIOJÄSI 8 (${is250 ? '250 ml' : '500 ml'})`,
                    shampooPrice,
                    shampooImage,
                    'CUIDADO_CAPILAR',
                    'CAPILAR',
                    e
                  )
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#177333] hover:bg-[#135c29] text-white text-xs font-sans font-semibold tracking-wider transition-all duration-150 active:scale-[0.96] shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Agregar a la canasta</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Secondary Stack (5 Cols): Brisa Armonía & Brisa Risa y Amor */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-7">
            {/* Secondary Card 1: Brisa Armonía */}
            <ScrollReveal
              direction="earth"
              delay={0.2}
              className="bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-7 border border-[#1C1917]/10 shadow-[0_12px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between text-left group hover:border-[#177333]/35 transition-all duration-300 relative"
            >
              {/* Corner flourishes for framing */}
              <BotanicalCornerFlourish position="top-right" size={32} />
              <BotanicalCornerFlourish position="bottom-left" size={32} />

              {/* Hand-drawn Lavender bouquet watermark */}
              <div className="absolute -bottom-4 right-28 opacity-25 pointer-events-none hidden sm:block">
                <BotanicalLavenderBouquet size={65} />
              </div>

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium tracking-tight">
                    Brisa Botánica Armonía
                  </h4>
                  <p className="font-sans text-xs text-charcoal-600 font-light mt-1 max-w-[34ch] leading-relaxed">
                    Lavanda, jazmín y palo santo para soltar tensiones y preparar el cuerpo para el descanso.
                  </p>
                </div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#FAF6F0] rounded-2xl p-2 shrink-0 flex items-center justify-center border border-[#1C1917]/5 relative">
                  <img
                    src="/assets/products/retouched_biojasi/square_crops/brisa_armonia_60ml_sq.jpg"
                    alt="Brisa Armonía"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-108"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#1C1917]/10 relative z-10">
                <span className="font-sans font-bold text-sm text-[#1C1917]">$135.00 MXN</span>
                <button
                  type="button"
                  onClick={(e) =>
                    handleAddProduct(
                      'brisa-armonia',
                      'Brisa Botánica Armonía',
                      135,
                      '/assets/products/retouched_biojasi/square_crops/brisa_armonia_60ml_sq.jpg',
                      'ACEITES_ESENCIALES',
                      'RELAJACION',
                      e
                    )
                  }
                  className="px-4 py-2 rounded-full border border-[#1C1917]/20 hover:bg-[#177333] hover:text-white hover:border-[#177333] text-xs font-sans font-semibold transition-all duration-150 active:scale-[0.96]"
                >
                  Agregar
                </button>
              </div>
            </ScrollReveal>

            {/* Secondary Card 2: Brisa Risa y Amor */}
            <ScrollReveal
              direction="earth"
              delay={0.3}
              className="bg-white/95 backdrop-blur-sm rounded-[32px] p-6 sm:p-7 border border-[#1C1917]/10 shadow-[0_12px_32px_rgba(0,0,0,0.03)] flex flex-col justify-between text-left group hover:border-[#177333]/35 transition-all duration-300 relative overflow-hidden"
            >
              {/* Corner flourishes for framing */}
              <BotanicalCornerFlourish position="top-right" size={32} />
              <BotanicalCornerFlourish position="bottom-left" size={32} />

              {/* Hand-drawn Wildflower cluster watermark */}
              <div className="absolute -bottom-2 right-28 opacity-25 pointer-events-none hidden sm:block">
                <BotanicalWildflowerCluster size={65} />
              </div>

              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-medium tracking-tight">
                    Brisa Risa y Amor
                  </h4>
                  <p className="font-sans text-xs text-charcoal-600 font-light mt-1 max-w-[34ch] leading-relaxed">
                    Rosas, sándalo y geranio para apapacharte, liberar lo que pesa y abrir el corazón.
                  </p>
                </div>

                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#FAF6F0] rounded-2xl p-2 shrink-0 flex items-center justify-center border border-[#1C1917]/5 relative">
                  <img
                    src="/assets/products/retouched_biojasi/square_crops/brisa_risa_y_amor_60ml_sq.jpg"
                    alt="Brisa Risa y Amor"
                    className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#1C1917]/10 relative z-10">
                <span className="font-sans font-bold text-sm text-[#1C1917]">$135.00 MXN</span>
                <button
                  type="button"
                  onClick={(e) =>
                    handleAddProduct(
                      'brisa-risa-amor',
                      'Brisa Risa y Amor',
                      135,
                      '/assets/products/retouched_biojasi/square_crops/brisa_risa_y_amor_60ml_sq.jpg',
                      'ACEITES_ESENCIALES',
                      'ENERGIA',
                      e
                    )
                  }
                  className="px-4 py-2 rounded-full border border-[#1C1917]/20 hover:bg-[#177333] hover:text-white hover:border-[#177333] text-xs font-sans font-semibold transition-all duration-150 active:scale-[0.96]"
                >
                  Agregar
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
