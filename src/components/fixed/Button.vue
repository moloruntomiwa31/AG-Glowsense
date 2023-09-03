<template>
      <button class="shadow cursor-pointer" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"])
const click = () => {
  emit("click")
}
</script>
