import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Product } from '@/types/product';
import { OlfactoryPyramid } from './OlfactoryPyramid';
import { formatMxn } from '@/lib/formatters';
import { useCartStore } from '@/store/useCartStore';
import { ShoppingBag, Check, Sparkle, Heart, Leaf } from 'lucide-react';
import { BRAND } from '@/lib/constants';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'RITUAL' | 'INGREDIENTES' | 'PIRAMIDE'>('RITUAL');
  const [activeImage, setActiveImage] = useState<string>('');
  const [isAdded, setIsAdded] = useState(false);

  const { addItem, openCart } = useCartStore();

  if (!product) return null;

  const activeVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const displayImage = activeImage || activeVariant.imageUrl || product.heroImage;

  const handleAddToCart = () => {
    if (!activeVariant) return;

    addItem({
      productId: product.id,
      variantId: activeVariant.id,
      slug: product.slug,
      name: product.name,
      variantLabel: activeVariant.sizeLabel,
      priceMxn: activeVariant.priceMxn,
      imageUrl: displayImage,
      emotionalBenefit: product.emotionalBenefit,
      category: product.category,
      quantity: 1,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
      openCart();
    }, 600);
  };

  const cleanPhone = BRAND.social.whatsappNumber.replace(/[^0-9]/g, '');
  const waProductUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `¡Hola! Tengo una duda sobre ${product.name} (${activeVariant.sizeLabel}) de BIOJÄSI ®.`
  )}`;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={product.name}
      subtitle={product.subtitle}
      maxWidth="4xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="aspect-square bg-[#FAF8F5] rounded-3xl overflow-hidden p-6 border border-sand-200 flex items-center justify-center">
            <img
              src={displayImage}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-md"
            />
          </div>

          {/* Thumbnail Strip */}
          {product.galleryImages && product.galleryImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {product.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border p-1 bg-white shrink-0 transition-all ${
                    displayImage === img
                      ? 'border-charcoal-800 shadow-sm'
                      : 'border-sand-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info, Tabs & Purchase (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <p className="font-body text-sm text-charcoal-700 font-light leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="border-b border-sand-200">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setActiveTab('RITUAL')}
                className={`pb-2.5 text-xs font-sub uppercase font-bold tracking-wider transition-colors relative ${
                  activeTab === 'RITUAL'
                    ? 'text-charcoal-900 border-b-2 border-charcoal-800'
                    : 'text-charcoal-400 hover:text-charcoal-700'
                }`}
              >
                Ritual & Uso
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('INGREDIENTES')}
                className={`pb-2.5 text-xs font-sub uppercase font-bold tracking-wider transition-colors relative ${
                  activeTab === 'INGREDIENTES'
                    ? 'text-charcoal-900 border-b-2 border-charcoal-800'
                    : 'text-charcoal-400 hover:text-charcoal-700'
                }`}
              >
                Ingredientes & INCI
              </button>

              {product.olfactoryPyramid && (
                <button
                  type="button"
                  onClick={() => setActiveTab('PIRAMIDE')}
                  className={`pb-2.5 text-xs font-sub uppercase font-bold tracking-wider transition-colors relative ${
                    activeTab === 'PIRAMIDE'
                      ? 'text-charcoal-900 border-b-2 border-charcoal-800'
                      : 'text-charcoal-400 hover:text-charcoal-700'
                  }`}
                >
                  Pirámide Olfativa
                </button>
              )}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[120px]">
            {activeTab === 'RITUAL' && (
              <div className="space-y-3 p-4 rounded-2xl bg-white border border-sand-200">
                <span className="text-[10px] font-sub uppercase font-bold tracking-wider text-charcoal-400 block">
                  Modo de uso recomendado:
                </span>
                <p className="font-body text-xs text-charcoal-600 font-light leading-relaxed">
                  {product.ritualInstructions}
                </p>
              </div>
            )}

            {activeTab === 'INGREDIENTES' && (
              <div className="space-y-3 p-4 rounded-2xl bg-white border border-sand-200 text-xs">
                <div className="space-y-1">
                  <strong className="text-[10px] font-sub uppercase font-bold tracking-wider text-charcoal-700 block">
                    Activos Clave:
                  </strong>
                  <p className="text-charcoal-600 font-light leading-relaxed">
                    {product.ingredientsList}
                  </p>
                </div>
                <div className="pt-2 border-t border-sand-200/80 space-y-1">
                  <strong className="text-[10px] font-sub uppercase font-bold tracking-wider text-charcoal-400 block">
                    INCI Botánico Completo:
                  </strong>
                  <p className="font-mono text-[10px] text-charcoal-500 font-light leading-relaxed">
                    {product.inci}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'PIRAMIDE' && product.olfactoryPyramid && (
              <OlfactoryPyramid pyramid={product.olfactoryPyramid} />
            )}
          </div>

          {/* Variants Selector */}
          {product.variants.length > 1 && (
            <div className="space-y-2">
              <span className="text-[10px] font-sub uppercase font-bold tracking-wider text-charcoal-400 block">
                Selecciona la Presentación:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, idx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVariantIndex(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all border ${
                      selectedVariantIndex === idx
                        ? 'bg-[#177333] text-white border-[#177333] font-bold shadow-sm'
                        : 'bg-white border-sand-300 text-charcoal-700 hover:bg-sand-50'
                    }`}
                  >
                    {v.sizeLabel} • {formatMxn(v.priceMxn)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pricing & Add to Cart */}
          <div className="pt-4 border-t border-sand-200/80 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="text-[10px] font-sub uppercase tracking-wider text-charcoal-400">
                Precio
              </span>
              <p className="font-display font-medium text-3xl text-charcoal-800">
                {formatMxn(activeVariant.priceMxn)} MXN
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-sand-300 bg-white hover:bg-sand-50 text-charcoal-700 text-xs font-sub uppercase font-bold tracking-wider transition-colors shadow-sm"
              >
                Consultar por WhatsApp
              </a>

              <button
                type="button"
                onClick={handleAddToCart}
                className={`px-8 py-3 rounded-full text-xs font-sub uppercase font-bold tracking-widest transition-all duration-300 shadow-antigravity flex items-center gap-2 ${
                  isAdded
                    ? 'bg-botanical-forest text-white'
                    : 'bg-charcoal-800 hover:bg-charcoal-900 text-sand-50 hover:-translate-y-0.5'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>¡Agregado a tu canasta!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar a la canasta</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
