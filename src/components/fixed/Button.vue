<template>
  <button
    class="shadow cursor-pointer rounded-md"
    :disabled="disabled"
    @click="click"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
