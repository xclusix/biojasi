import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';
import { useCartStore } from '@/store/useCartStore';

interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  image: string;
  bgClass: string;
  badge: string;
}

const featuredProducts: ProductItem[] = [
  {
    id: 'biojasi-8-shampoo',
    name: 'Shampoo BIOJÄSI 8',
    subtitle: 'Regeneración capilar y romero silvestre',
    price: 380,
    priceFormatted: '$380.00 MXN',
    image: '/assets/extracted/catalogo_p3_img1_1965x1775.jpeg',
    bgClass: 'bg-[#DEECDF]',
    badge: 'Más amado',
  },
  {
    id: 'brisa-armonia',
    name: 'Brisa Botánica Armonía',
    subtitle: 'Lavanda y cedro para el descanso profundo',
    price: 320,
    priceFormatted: '$320.00 MXN',
    image: '/assets/extracted/catalogo_p4_img1_1966x1767.jpeg',
    bgClass: 'bg-[#DEE7F2]',
    badge: 'Más amado',
  },
  {
    id: 'brisa-risa-amor',
    name: 'Brisa Risa y Amor',
    subtitle: 'Cítricos dulces y jazmín para el ánimo',
    price: 320,
    priceFormatted: '$320.00 MXN',
    image: '/assets/extracted/catalogo_p5_img1_1966x1773.jpeg',
    bgClass: 'bg-[#F7E2DA]',
    badge: 'Más amado',
  },
  {
    id: 'shot-respira',
    name: 'Shot Concentrado Respira',
    subtitle: 'Eucalipto y menta piperita para despejar',
    price: 290,
    priceFormatted: '$290.00 MXN',
    image: '/assets/extracted/catalogo_p6_img1_1950x1773.jpeg',
    bgClass: 'bg-[#F5EBD7]',
    badge: 'Más amado',
  },
];

export const V2BestSellersColorGrid: React.FC = () => {
  const { addItem, openCart } = useCartStore();

  const handleQuickAdd = (product: ProductItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      productId: product.id,
      variantId: `${product.id}-std`,
      slug: product.id,
      name: product.name,
      variantLabel: 'Presentación Estándar',
      priceMxn: product.price,
      imageUrl: product.image,
      emotionalBenefit: 'CAPILAR',
      category: 'CUIDADO_CAPILAR',
      quantity: 1,
    });
    openCart();
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FAF8F5]">
      <Container size="xl">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex items-center justify-between gap-4 mb-10 sm:mb-14 pb-4 border-b border-[#1C1917]/10 text-left">
            <div>
              <h2 className="font-sans font-bold text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Los más amados
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="inline-flex items-center justify-center rounded-full border border-[#1C1917]/25 px-6 py-2.5 text-xs font-sans font-semibold tracking-wider text-[#1C1917] hover:bg-[#177333] hover:text-white hover:border-[#177333] transition-all duration-300 group"
            >
              <span>Ver catálogo</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 4 Cards in Vibrant Rounded Color Blocks */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {featuredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <div className="group flex flex-col text-left">
                {/* Rounded Color Block Frame */}
                <div
                  className={`relative w-full aspect-[4/5] rounded-[28px] sm:rounded-[32px] p-6 flex flex-col items-center justify-between overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)] ${product.bgClass}`}
                >
                  {/* Top Badge */}
                  <div className="w-full flex justify-start z-10">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-[#1C1917] text-[10px] font-sans font-semibold px-3 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  </div>

                  {/* Product Image floating */}
                  <div className="relative w-full h-[65%] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain filter drop-shadow-lg transition-transform duration-700 ease-out group-hover:scale-108"
                    />
                  </div>

                  {/* Quick Add Pill Button on Hover */}
                  <div className="w-full z-10">
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="w-full py-2.5 rounded-full bg-white text-[#1C1917] hover:bg-[#177333] hover:text-white font-sans text-xs font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Agregar a la canasta</span>
                    </button>
                  </div>
                </div>

                {/* Typography details underneath card */}
                <div className="mt-4 space-y-1">
                  <h3 className="font-sans font-bold text-base sm:text-lg text-[#1C1917] group-hover:text-[#177333] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-charcoal-500 font-sans font-normal leading-snug">
                    {product.subtitle}
                  </p>
                  <p className="font-sans font-semibold text-sm text-[#1C1917] pt-1">
                    {product.priceFormatted}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};
