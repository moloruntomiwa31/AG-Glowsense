import { defineStore } from "pinia";
import error from "../assets/error.svg";
import checked from "../assets/checked.svg";
import info from "../assets/info.svg";
export const useToast = defineStore("toast", {
  state: () => ({
    showToast: false,
    toastText: "",
    bgColor: "",
    icon: "",
  }),
  actions: {
    addToast(text, toastStatus) {
      this.showToast = true;
      this.toastText = text;
      if (toastStatus == "success") {
        this.bgColor = "bg-green-600";
        this.icon = checked;
      } else if (toastStatus == "warning") {
        this.bgColor = "bg-yellow-400";
        this.icon = info;
      } else if (toastStatus == "info") {
        this.bgColor = "bg-blue-500";
        this.icon = info;
      } else {
        this.bgColor = "bg-red-700";
        this.icon = error;
      }
      setTimeout(() => {
        this.showToast = false;
        this.toastText = "";
        this.bgColor = "";
        this.icon = "";
      }, 3500);
    },
  },
});
