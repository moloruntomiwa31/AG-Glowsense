import { defineStore, acceptHMRUpdate } from "pinia";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

import data from "../../data/db";
import { groupBy } from "lodash";
import { ref, computed } from "vue";

export const useStore = defineStore("cartStore", () => {
  const cart = ref([]);
  const pricesOfData = ref([]);
  const idOfPreviousProductPage = ref(null);
  //getters
  const grouped = computed(() =>
    groupBy(cart.value, (cartItems) => cartItems.name)
  );
  const cartLength = computed(() => cart.value.length);
  const totalPriceOfItems = computed(() => {
    return cart.value.reduce((acc, p) => acc + parseInt(p.price), 0);
  });
  //actions
  const addToCart = async (id, quantity) => {
    const productData = data.find((d) => d.id == parseInt(id));
    quantity = parseInt(quantity);

    //getCurrentUser
    const user = auth.currentUser;
    const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
    for (let i = 0; i < quantity; i++) {
      await addDoc(cartCollectionRef, productData);
    }
  };
  const deleteItem = async (id) => {
    const user = auth.currentUser;
    const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
    await deleteDoc(doc(cartCollectionRef, id));
  };
  const deleteAllItems = async () => {
    const user = auth.currentUser;
    const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
    const querySnapshot = await getDocs(query(cartCollectionRef));
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    cart.value = [];
  };
  return {
    cart,
    pricesOfData,
    idOfPreviousProductPage,
    grouped,
    cartLength,
    totalPriceOfItems,
    addToCart,
    deleteItem,
    deleteAllItems,
  };
});

//get item on page load
onAuthStateChanged(auth, (user) => {
  if (user) {
    const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
    onSnapshot(cartCollectionRef, (querySnapshot) => {
      let cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push({ ...doc.data(), id: doc.id });
      });
      useStore().cart = cartItems;
    });
  } else {
    // If the user is not authenticated, clear the cart
    useStore().cart = [];
  }
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
