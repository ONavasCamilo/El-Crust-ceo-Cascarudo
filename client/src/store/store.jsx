import { create } from 'zustand'

export const wordsStore = create((set) => ({
  products: [],
  setProducts: (products) => set(() => ({ products })),
}));