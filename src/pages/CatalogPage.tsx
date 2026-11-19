import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Download, ShoppingBag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { FilterBar, ProductCard, ProductModal } from '@/components/catalog';
import { products } from '@/data/products';
import { ProductCategory, EmotionalBenefit, Product } from '@/types/product';

export const CatalogPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('TODOS');
  const [selectedBenefit, setSelectedBenefit] = useState<EmotionalBenefit | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync URL query params with state
  useEffect(() => {
    const catParam = searchParams.get('categoria');
    const benParam = searchParams.get('beneficio');

    if (catParam) {
      const upperCat = catParam.toUpperCase();
      if (['ACEITES_ESENCIALES', 'CUIDADO_CAPILAR', 'KITS_RITUALES'].includes(upperCat)) {
        setSelectedCategory(upperCat as ProductCategory);
      }
    }

    if (benParam) {
      const upperBen = benParam.toUpperCase();
      if (['RELAJACION', 'ENERGIA', 'ENFOQUE', 'CAPILAR'].includes(upperBen)) {
        setSelectedBenefit(upperBen as EmotionalBenefit);
      }
    }
  }, [searchParams]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'TODOS' || product.category === selectedCategory;

    const matchesBenefit =
      selectedBenefit === 'ALL' ||
      product.emotionalBenefit === selectedBenefit ||
      product.emotionalBenefit === 'INTEGRAL';

    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredientsList.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBenefit && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-[#FAF8F5]">
      <Container size="xl" className="space-y-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-sand-300">
          <div className="space-y-3 text-left">
            <h1 className="font-display font-medium text-4xl sm:text-6xl text-charcoal-800 tracking-tight">
              Productos & Catálogo
            </h1>
            <p className="font-body text-xs sm:text-base text-charcoal-500 font-light max-w-xl">
              Aromaterapia y cuidado capilar elaborados artesanalmente en Querétaro con plantas de cultivo consciente.
            </p>
          </div>

          {/* Download Official PDF Catalog */}
          <a
            href="/docs/Catalogo_Oficial_BIOJASI_2026.pdf"
            download="Catalogo_Oficial_BIOJASI_2026.pdf"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-sand-300 text-charcoal-800 text-xs font-sub uppercase font-bold tracking-wider hover:bg-sand-50 transition-all shadow-sm hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4 text-botanical-forest" />
            <span>Descargar Catálogo (PDF)</span>
          </a>
        </div>

        {/* Dual Axis Filters */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedBenefit={selectedBenefit}
          onSelectBenefit={setSelectedBenefit}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 rounded-3xl bg-white border border-sand-200 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sand-100 border border-sand-300 flex items-center justify-center mx-auto text-charcoal-400">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-medium text-2xl text-charcoal-800">
                No encontramos productos con esos filtros
              </h3>
              <p className="font-body text-xs text-charcoal-500 font-light max-w-sm mx-auto">
                Prueba seleccionando otra categoría o limpiando la búsqueda.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('TODOS');
                setSelectedBenefit('ALL');
                setSearchQuery('');
              }}
              className="px-6 py-2.5 rounded-full bg-charcoal-800 text-sand-50 text-xs font-sub uppercase font-bold tracking-wider hover:bg-charcoal-900"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenModal={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}

        {/* Shared Interactive Product Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={Boolean(selectedProduct)}
          onClose={() => setSelectedProduct(null)}
        />
      </Container>
    </div>
  );
};
