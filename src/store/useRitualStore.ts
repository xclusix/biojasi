import { create } from 'zustand';
import { EmotionalBenefit } from '@/types/product';

interface RitualState {
  selectedUniverse: EmotionalBenefit;
  isSelectorOpen: boolean;
  setSelectedUniverse: (universe: EmotionalBenefit) => void;
  openSelector: () => void;
  closeSelector: () => void;
  toggleSelector: () => void;
}

export const useRitualStore = create<RitualState>((set) => ({
  selectedUniverse: 'ENFOQUE',
  isSelectorOpen: false,
  setSelectedUniverse: (universe) => set({ selectedUniverse: universe }),
  openSelector: () => set({ isSelectorOpen: true }),
  closeSelector: () => set({ isSelectorOpen: false }),
  toggleSelector: () => set((state) => ({ isSelectorOpen: !state.isSelectorOpen })),
}));
