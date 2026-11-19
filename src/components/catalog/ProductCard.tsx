import React, { useState } from 'react';
import { Eye, Check, Plus } from 'lucide-react';
import { Product } from '@/types/product';
import { formatMxn } from '@/lib/formatters';
import { useCartStore } from '@/store/useCartStore';

interface ProductCardProps {
  product: Product;
  onOpenModal?: (product: Product) => void;
  priorityImage?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCartStore();

  const activeVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const currentImage = activeVariant.imageUrl || product.heroImage;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      productId: product.id,
      variantId: activeVariant.id,
      slug: product.slug,
      name: product.name,
      variantLabel: activeVariant.sizeLabel,
      priceMxn: activeVariant.priceMxn,
      imageUrl: currentImage,
      emotionalBenefit: product.emotionalBenefit,
      category: product.category,
      quantity: 1,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onOpenModal && onOpenModal(product)}
      className="group relative bg-[#FAF8F5] border border-[#1C1917]/10 p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#177333]/50"
    >
      {/* Top Image Stage */}
      <div className="space-y-4">
        <div className="relative aspect-square w-full overflow-hidden bg-[#FAF6F0] p-4 sm:p-5 flex items-center justify-center border border-[#1C1917]/5 rounded-xl">
          <img
            key={currentImage}
            src={currentImage}
            alt={`${product.name} - ${activeVariant.sizeLabel}`}
            loading="lazy"
            className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Quick View Floating Eye */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-8 h-8 bg-[#FAF8F5]/90 border border-[#1C1917]/10 flex items-center justify-center text-charcoal-700 shadow-sm">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1.5 text-left">
          <span className="text-[9px] font-sub uppercase tracking-[0.2em] text-charcoal-400 block">
            {product.subtitle}
          </span>
          <h3 className="font-display font-medium text-lg sm:text-xl text-[#1C1917] group-hover:text-charcoal-600 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="font-body text-xs text-charcoal-500 font-light leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Bottom Variants & Price / Cart */}
      <div className="pt-4 mt-4 border-t border-[#1C1917]/10 space-y-3">
        {/* Variant Selectors if multiple */}
        {product.variants.length > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-wrap gap-1.5"
          >
            {product.variants.map((v, idx) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVariantIndex(idx)}
                className={`px-2.5 py-1 text-[10px] font-mono transition-all border ${
                  selectedVariantIndex === idx
                    ? 'bg-[#177333] text-[#FAF8F5] border-[#177333] font-semibold'
                    : 'bg-white border-[#1C1917]/10 text-charcoal-600 hover:border-[#177333]'
                }`}
              >
                {v.sizeLabel}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <div className="space-y-0.5 text-left">
            <span className="font-mono text-base text-[#1C1917]">
              {formatMxn(activeVariant.priceMxn)}
            </span>
            {activeVariant.compareAtPrice && (
              <span className="text-xs text-charcoal-400 line-through block font-mono">
                {formatMxn(activeVariant.compareAtPrice)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            aria-label={`Agregar ${product.name} a la canasta`}
            className={`px-4 py-2 text-[10px] font-sub uppercase tracking-[0.18em] font-medium border transition-all flex items-center gap-1.5 ${
              isAdded
                ? 'bg-[#177333] text-white border-[#177333]'
                : 'border-[#177333] text-[#177333] hover:bg-[#177333] hover:text-[#FAF8F5]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Listo</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Agregar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
