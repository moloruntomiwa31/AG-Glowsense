<template>
      <button class="shadow cursor-pointer rounded-md" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"])
const click = () => {
  emit("click")
}
</script>
