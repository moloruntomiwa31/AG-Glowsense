import { defineStore } from "pinia";
import error from "../assets/error.svg";
import checked from "../assets/checked.svg";
import info from "../assets/info.svg";
import { ref, computed } from "vue";
export const useToast = defineStore("toast", () => {
  const showToast = ref(false);
  const toastText = ref("");
  const bgColor = ref("");
  const icon = ref("");
  //actions
  const addToast = (text, toastStatus) => {
    showToast.value = true;
    toastText.value = text;
    switch (toastStatus) {
      case "success":
        bgColor.value = "bg-green-600";
        icon.value = checked;
        break;
      case "warning":
        bgColor.value = "bg-yellow-400";
        icon.value = info;
        break;
      case "info":
        bgColor.value = "bg-blue-500";
        icon.value = info;
        break;
      default:
        bgColor.value = "bg-red-700";
        icon.value = error;
        break;
    }
    setTimeout(() => {
      showToast.value = false;
      toastText.value = "";
      bgColor.value = "";
      icon.value = "";
    }, 2500);
  };
  return { showToast, toastText, bgColor, icon, addToast };
});
