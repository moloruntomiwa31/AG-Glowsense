import { defineStore, acceptHMRUpdate } from "pinia";
import products from "../../data/db"

export const useProductStore = defineStore('ProductStore', {
    state: () => ({
        products: products
    })
})

// hmr
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
  }