import { useUserStore } from "../store/user";
import { useToast } from "../store/toast";
import { useRouter } from "vue-router";
import { ref } from "vue";

export const useGoogle = () => {
  const userStore = useUserStore();
  const toast = useToast();
  const router = useRouter();
  const error = ref(null);

  const loginWithGoogle = async () => {
    try {
      await userStore.signInWithGoogle();
      router.push("/");
      toast.addToast("User Logged In", "success");
    } catch (e) {
      error.value = e.message.split(":")[1];
      toast.addToast(error.value, "error");
    }
  };

  return { loginWithGoogle, error };
};
