<template>
  <div class="relative m-2">
    <div @click="open = !open" class="cursor-pointer">
      <Button
        class="text-left p-2 ml-auto rounded-lg text-white bg-red-500 border w-[120px] focus:shadow-md focus:shadow-purple-primary focus:border-purple-secondary"
        >{{ selectedOption.toUpperCase() }}</Button
      >
      <Transition name="dropdown">
        <div v-show="open" class="absolute z-10 bg-white w-full rounded-lg">
          <div
            v-for="option in options"
            @click.stop="selectOption(option)"
            class="hover:cursor-pointer hover:bg-gray-200 p-2 rounded-lg"
          >
            <span class="ml-2">{{ option.toUpperCase() }}</span>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../fixed/Button.vue";
const props = defineProps({
  modelValue: String,
  labelText: String,
  options: Array,
});

const emit = defineEmits(["update:modelValue"]);

const open = ref(false);
const selectedOption = ref(
  props.options.find((o) => o.value === props.modelValue)
);

const selectOption = (option) => {
  selectedOption.value = option;
  open.value = false;
  emit("update:modelValue", option);
};
</script>

<style scoped>
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
