import { defineStore, acceptHMRUpdate } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { ref } from "vue";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const useUserStore = defineStore("userStore", () => {
  const user = ref(null);
  const userSet = ref(false);

  const signUp = async (email, password, firstName, lastName, phoneNumber) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (res) {
      user.value = res.user;
      // Store additional user information
      await setDoc(doc(db, "users", res.user.uid), {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        email: email,
      });
    }
  };

  const logIn = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (res) {
      // Retrieve additional user information
      const userDoc = await getDoc(doc(db, "users", res.user.uid));
      if (userDoc.exists()) {
        user.value = { ...res.user, ...userDoc.data() };
      } else {
        user.value = res.user;
      }
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    user.value = user;
    // User is signed in via Google.
    // Store additional user information
    await setDoc(doc(db, "users", user.uid), {
      first_name: user.displayName.split(" ")[0],
      last_name: user.displayName.split(" ")[1],
      email: user.email,
    });
  };

  const logOut = async () => {
    await signOut(auth);
    user.value = null;
  };

  return { user, userSet, signUp, logIn, logOut, signInWithGoogle };
});

// Get user on page load
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      useUserStore().user = { ...user, ...userDoc.data() };
    } else {
      useUserStore().user = user;
    }
  } else {
    useUserStore().user = null;
  }
  useUserStore().userSet = true;
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
