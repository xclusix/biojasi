import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/catalog/ProductCard';
import { products } from '@/data/products';
import { Product } from '@/types/product';

interface FeaturedCreationsCarouselProps {
  onOpenProductModal?: (product: Product) => void;
}

export const FeaturedCreationsCarousel: React.FC<FeaturedCreationsCarouselProps> = ({
  onOpenProductModal,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = products.filter((p) => p.isFeatured);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F7F2EC]/60 border-y border-sand-200/80">
      <Container size="xl">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-sand-300 text-charcoal-700 text-[10px] font-sub uppercase tracking-[0.2em] font-bold shadow-sm">
              <Sparkles className="w-3 h-3 text-botanical-amber" />
              <span>DESTILACIONES MÁS AMADAS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium text-charcoal-800 tracking-tight">
              Creaciones Destacadas
            </h2>
            <p className="font-body text-xs sm:text-sm text-charcoal-500 font-light max-w-lg">
              Presentaciones emblemáticas elaboradas en pequeños lotes con plantas frescas de nuestro huerto.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Desplazar a la izquierda"
              className="w-10 h-10 rounded-full bg-white hover:bg-sand-100 border border-sand-300 flex items-center justify-center text-charcoal-800 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Desplazar a la derecha"
              className="w-10 h-10 rounded-full bg-white hover:bg-sand-100 border border-sand-300 flex items-center justify-center text-charcoal-800 transition-colors shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featured.map((prod) => (
            <div
              key={prod.id}
              className="w-[280px] sm:w-[320px] flex-shrink-0 snap-start"
            >
              <ProductCard product={prod} onOpenModal={onOpenProductModal} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="pt-8 text-center">
          <Link to="/catalogo">
            <button className="inline-flex items-center gap-2 text-xs font-sub uppercase font-bold tracking-[0.18em] text-charcoal-800 hover:text-charcoal-950 pb-1 border-b border-charcoal-800 transition-all hover:gap-3">
              <span>Explorar Todo el Catálogo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
