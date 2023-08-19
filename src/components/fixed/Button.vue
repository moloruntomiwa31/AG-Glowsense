<template>
      <button class="shadow" @click="click">
    <slot></slot>
  </button>
</template>

<script setup>
const emit = defineEmits(["click"])
const click = () => {
  emit("click")
}
</script>
