import { defineStore, acceptHMRUpdate } from "pinia";

import data from "../../data/db";
import { groupBy } from "lodash";

export const useStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
    pricesOfData: [],
    totalPrice: 0,
    idOfPreviousProductPage: null,
  }),
  getters: {
    grouped: (state) => groupBy(state.cart,  cartItems => cartItems.name),
    cartLength: (state) => state.cart.length,
    totalPriceOfItems() {
      let data = this.cart.map((c) => c.price);
      let totalPrice = 0;
      for (let i = 0; i < data.length; i++) {
        totalPrice += parseInt(data[i]);
      }
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
    },
    deleteItem(name) {
      this.cart = this.cart.filter(item => item.name !== name)
    }
  },
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
}