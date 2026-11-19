import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import { formatMxn } from '@/lib/formatters';
import { useCartStore } from '@/store/useCartStore';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

interface NewCreationsSectionProps {
  onOpenProductModal?: (product: Product) => void;
}

export const NewCreationsSection: React.FC<NewCreationsSectionProps> = ({
  onOpenProductModal,
}) => {
  const { addItem } = useCartStore();
  const [addedId, setAddedId] = useState<string | null>(null);

  // Take the first 4 products
  const creationProducts = products.slice(0, 4);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    const variant = product.variants[0];
    addItem({
      productId: product.id,
      variantId: variant.id,
      slug: product.slug,
      name: product.name,
      variantLabel: variant.sizeLabel,
      priceMxn: variant.priceMxn,
      imageUrl: product.heroImage,
      emotionalBenefit: product.emotionalBenefit,
      category: product.category,
      quantity: 1,
    });

    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F5EFE8] border-b border-[#1C1917]/10 overflow-hidden">
      <Container size="xl">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#1C1917]/10 text-left">
            <div className="space-y-2.5">
              <span className="text-[10px] font-sub uppercase tracking-[0.28em] text-charcoal-400 font-semibold block">
                Esencias para ti
              </span>
              <h2 className="font-display font-light text-3xl sm:text-5xl text-[#1C1917] tracking-tight">
                Nuestras creaciones
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="inline-flex items-center gap-2 text-xs font-sub uppercase tracking-[0.2em] text-[#177333] hover:opacity-80 transition-opacity whitespace-nowrap font-medium"
            >
              <span>Ver todo el catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 4 Sharp Rectangular Columns */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {creationProducts.map((product) => {
            const variant = product.variants[0];
            const isAdded = addedId === product.id;

            return (
              <StaggerItem key={product.id}>
                <div
                  onClick={() => onOpenProductModal && onOpenProductModal(product)}
                  className="group bg-[#FAF8F5] border border-[#1C1917]/10 p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#177333]/50 h-full text-left"
                >
                  {/* Image Stage */}
                  <div className="space-y-4">
                    <div className="relative aspect-square w-full overflow-hidden bg-[#FAF6F0] p-4 flex items-center justify-center border border-[#1C1917]/5 rounded-xl">
                      <img
                        src={product.heroImage}
                        alt={product.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-sub uppercase tracking-[0.2em] text-charcoal-400 block">
                        {product.subtitle}
                      </span>
                      <h3 className="font-display font-medium text-lg text-[#1C1917] group-hover:text-charcoal-600 transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Price & Add Button */}
                  <div className="pt-4 mt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                    <span className="font-mono text-sm text-[#1C1917]">
                      {formatMxn(variant.priceMxn)}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, product)}
                      aria-label={`Agregar ${product.name}`}
                      className={`px-3.5 py-1.5 text-[10px] font-sub uppercase tracking-[0.18em] font-medium border transition-all flex items-center gap-1 ${
                        isAdded
                          ? 'bg-[#177333] text-white border-[#177333]'
                          : 'border-[#177333] text-[#177333] hover:bg-[#177333] hover:text-[#FAF8F5]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Listo</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Agregar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
