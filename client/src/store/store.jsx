import { create } from 'zustand'

export const productsStore = create((set) => ({
  products: [],
  setProducts: (products) => set(() => ({ products })),
}));

export const userStore = create((set) => ({
  user: {},
  setUser: (user) => set(() => ({ user })),
}));