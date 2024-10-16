import { useUserStore } from "../store/user";
import { useToast } from "../store/toast";
const { signInWithGoogle } = useUserStore();
const toast = useToast();
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
