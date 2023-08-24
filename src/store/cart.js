import { defineStore, acceptHMRUpdate } from "pinia";

import data from "../../data/db";
import { groupBy } from "lodash";

const storedCart = localStorage.getItem("cartItems")
export const useStore = defineStore("cartStore", {
  state: () => ({
    cart: storedCart ? JSON.parse(storedCart) : [],
    pricesOfData: [],
    idOfPreviousProductPage: null,
  }),
  getters: {
    grouped: (state) => groupBy(state.cart,  cartItems => cartItems.name),
    cartLength: (state) => state.cart.length,
    totalPriceOfItems() {
      let totalPrice = 0;
      this.cart.forEach((p) => {
        totalPrice += parseInt(p.price)
      })
      return totalPrice;
    }
  },
  actions: {
    addToCart(id, count) {
      const productData = data.find((d) => d.id == parseInt(id));
      count = parseInt(count);
      for (let i = 0; i < count; i++) {
        this.cart = [...this.cart, { ...productData }];
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cart))
    },
    deleteItem(name) {
      this.cart = this.cart.filter(item => item.name !== name)
      localStorage.setItem("cartItems", JSON.stringify(this.cart))
    }
  },
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}