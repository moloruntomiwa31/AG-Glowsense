<template>
  <div
    v-for="message in messages"
    :key="message.content"
    :class="[
      'p-4 rounded-md mb-4',
      message.isUser ? 'bg-pink-100 ml-auto' : 'bg-gray-100 mr-auto',
    ]"
    style="max-width: 80%"
  >
    {{ message.content }}
  </div>
</template>

<script setup>
defineProps({
  messages: Array,
});
</script>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: opacity 0.5s ease;
}

.message-enter-from,
.message-leave-to {
  opacity: 0;
}
</style>
