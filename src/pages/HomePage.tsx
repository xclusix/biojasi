import React, { useState } from 'react';
import { V2HeroRounded } from '@/components/home/V2HeroRounded';
import { V2EditorialDivider } from '@/components/home/V2EditorialDivider';
import { V2BestSellersColorGrid } from '@/components/home/V2BestSellersColorGrid';
import { V2CategoryCards } from '@/components/home/V2CategoryCards';
import { V2StoryParallaxSection } from '@/components/home/V2StoryParallaxSection';
import { V2InstagramFeed } from '@/components/home/V2InstagramFeed';
import { ProductModal } from '@/components/catalog';
import { Product } from '@/types/product';

export const HomePage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#FAF8F5]">
      {/* 1. Hero in Rounded Outer Frame (Abre los sentidos / Reconecta con tu esencia) */}
      <V2HeroRounded />

      {/* 2. Elegant Botanical Divider with Brand Ornament */}
      <V2EditorialDivider />

      {/* 3. Más Amados in Rounded Color Pastel Blocks */}
      <V2BestSellersColorGrid />

      {/* 4. Explora por Categoría (3 Large Vertical Cards + Pill Buttons) */}
      <V2CategoryCards />

      {/* 5. Nuestra Historia with Organic Flower Petal Mask & 3D Parallax */}
      <V2StoryParallaxSection />

      {/* 6. Instagram Community Grid (Follow Us on Instagram #biojasi) */}
      <V2InstagramFeed />

      {/* Shared Interactive Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};
