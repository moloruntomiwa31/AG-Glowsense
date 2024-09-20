import { defineStore, acceptHMRUpdate } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref(null);
  const userSet = ref(false);

  //authenticate  users
  const signUp = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      user.value = res.user;
    }
  };
  const logIn = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      user.value = res.user;
    }
  };
  const logOut = async () => {
    await signOut(auth);
    user.value = null;
  };
  return { user, userSet, signUp, logIn, logOut };
});

//getUserOnPageLoad
onAuthStateChanged(auth, (user) => {
  useUserStore().user = user;
  useUserStore().userSet = true;
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
