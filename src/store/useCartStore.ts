import { create } from 'zustand';
import { CartItem, AppliedDiscount, CartTotals } from '@/types/cart';
import { COMMERCE_CONFIG } from '@/lib/constants';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  appliedDiscount: AppliedDiscount | null;
  discountError: string | null;

  // Actions
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, quantity: number) => void;
  clearCart: () => void;
  applyDiscountCode: (code: string) => boolean;
  removeDiscount: () => void;
  getTotals: () => CartTotals;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  appliedDiscount: null,
  discountError: null,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (newItem) => {
    set((state) => {
      const quantityToAdd = newItem.quantity ?? 1;
      const existingIndex = state.items.findIndex(
        (i) => i.productId === newItem.productId && i.variantId === newItem.variantId
      );

      if (existingIndex > -1) {
        const updated = [...state.items];
        updated[existingIndex].quantity += quantityToAdd;
        return { items: updated, isOpen: true };
      }

      return {
        items: [...state.items, { ...newItem, quantity: quantityToAdd }],
        isOpen: true,
      };
    });
  },

  removeItem: (productId, variantId) => {
    set((state) => ({
      items: state.items.filter(
        (i) => !(i.productId === productId && i.variantId === variantId)
      ),
    }));
  },

  updateQuantity: (productId, variantId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId, variantId);
      return;
    }

    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId && i.variantId === variantId
          ? { ...i, quantity: Math.min(quantity, 99) }
          : i
      ),
    }));
  },

  clearCart: () => set({ items: [], appliedDiscount: null, discountError: null }),

  applyDiscountCode: (code) => {
    const cleanCode = code.trim().toUpperCase();
    const found = COMMERCE_CONFIG.discountCodes.find((d) => d.code === cleanCode);

    if (!found) {
      set({ discountError: 'Cupón no válido para Tu compra' });
      return false;
    }

    const currentSubtotal = get()
      .items.reduce((sum, item) => sum + item.priceMxn * item.quantity, 0);

    if (found.minSubtotal && currentSubtotal < found.minSubtotal) {
      set({
        discountError: `Este cupón requiere un subtotal mínimo de $${found.minSubtotal} MXN`,
      });
      return false;
    }

    set({ appliedDiscount: found, discountError: null });
    return true;
  },

  removeDiscount: () => set({ appliedDiscount: null, discountError: null }),

  getTotals: () => {
    const { items, appliedDiscount } = get();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalMxn = items.reduce(
      (sum, item) => sum + item.priceMxn * item.quantity,
      0
    );

    let discountMxn = 0;
    if (appliedDiscount) {
      if (appliedDiscount.type === 'PERCENTAGE') {
        discountMxn = (subtotalMxn * appliedDiscount.value) / 100;
      } else {
        discountMxn = Math.min(appliedDiscount.value, subtotalMxn);
      }
    }

    const isFreeShipping = subtotalMxn >= COMMERCE_CONFIG.freeShippingThresholdMxn;
    const shippingMxn = isFreeShipping || itemCount === 0 ? 0 : COMMERCE_CONFIG.standardShippingFeeMxn;
    const totalMxn = Math.max(0, subtotalMxn - discountMxn + shippingMxn);

    const threshold = COMMERCE_CONFIG.freeShippingThresholdMxn;
    const freeShippingProgress = Math.min(100, Math.round((subtotalMxn / threshold) * 100));
    const amountNeededForFreeShipping = Math.max(0, threshold - subtotalMxn);

    return {
      itemCount,
      subtotalMxn,
      discountMxn,
      shippingMxn,
      totalMxn,
      isFreeShipping,
      freeShippingProgress,
      amountNeededForFreeShipping,
    };
  },
}));
