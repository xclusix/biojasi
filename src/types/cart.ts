import { EmotionalBenefit, ProductCategory } from './product';

export interface CartItem {
  productId: string;
  variantId: string;
  slug: string;
  name: string;
  variantLabel: string;
  priceMxn: number;
  imageUrl: string;
  emotionalBenefit: EmotionalBenefit;
  category: ProductCategory;
  quantity: number;
}

export interface AppliedDiscount {
  code: string;
  type: 'PERCENTAGE' | 'FIXED';
  value: number;
  description: string;
  minSubtotal?: number;
}

export interface CartTotals {
  itemCount: number;
  subtotalMxn: number;
  discountMxn: number;
  shippingMxn: number;
  totalMxn: number;
  isFreeShipping: boolean;
  freeShippingProgress: number; // 0 to 100
  amountNeededForFreeShipping: number;
}
