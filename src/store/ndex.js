import { create } from "zustand";

const useProductStore = create((set) => ({
    product: 0,
    setProduct: (id) => set({ product: id }),
}));

export default useProductStore;