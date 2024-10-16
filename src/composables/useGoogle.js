import { useUserStore } from "../store/user";
import { useToast } from "../store/toast";
import { useRouter } from "vue-router";

const { signInWithGoogle } = useUserStore();
const toast = useToast();
const router = useRouter();

export const useGoogle = () => {
  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
      toast.addToast("User Logged In", "success");
    } catch (e) {
      toast.addToast(e.message.split(":")[1], "error");
    }
  };
  return { loginWithGoogle };
};
