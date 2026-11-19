export type ProductCategory =
  | 'TODOS'
  | 'ACEITES_ESENCIALES'
  | 'CUIDADO_CAPILAR'
  | 'KITS_RITUALES';

export type EmotionalBenefit =
  | 'RELAJACION'
  | 'ENERGIA'
  | 'ENFOQUE'
  | 'CAPILAR'
  | 'INTEGRAL';

export type ProductFormat =
  | 'BRISA_SPRAY'
  | 'SHOT_GOTAS'
  | 'SHAMPOO_BOTTLE'
  | 'KIT_BOX';

export interface ProductVariant {
  id: string;
  sku: string;
  sizeLabel: string;
  sizeValue: number;
  sizeUnit: 'ml' | 'g' | 'piezas';
  priceMxn: number;
  compareAtPrice?: number;
  inStock: boolean;
  stockQuantity: number;
  weightGrams: number;
  imageUrl?: string;
}

export interface OlfactoryPyramid {
  salida: string[];
  corazon: string[];
  fondo: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  emotionalBenefit: EmotionalBenefit;
  formatType: ProductFormat;
  shortDescription: string;
  fullDescription: string;
  ritualInstructions: string;
  ingredientsList: string;
  inci: string;
  olfactoryNotes?: string;
  olfactoryPyramid?: OlfactoryPyramid;
  heroImage: string;
  galleryImages: string[];
  badgeText?: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  active: boolean;
  sortOrder: number;
  variants: ProductVariant[];
}
