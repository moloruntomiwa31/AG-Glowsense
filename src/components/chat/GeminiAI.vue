<template>
  <div class="flex flex-col h-[80vh]">
    <div class="flex-grow overflow-y-auto p-8">
      <h1 v-if="messages.length === 0" class="text-xl">
        Hello I'm your AI Chat Assistant, ask me anything, I'm happy ro help
      </h1>
      <div v-else class="pb-4 text-2xl font-bold text-center">Let's chat</div>
      <TransitionGroup name="message" tag="div">
        <Messages :messages="messages" />
      </TransitionGroup>
    </div>
    <form
      class="bg-pink-100 p-4 flex gap-2 rounded-lg"
      @submit.prevent="fetchAnswer"
    >
      <input
        placeholder="Enter the question"
        class="flex-grow p-4 rounded-md"
        v-model="inputQuestion"
      />
      <Button
        type="submit"
        :disabled="!inputQuestion"
        class="bg-red-400 p-3 rounded text-white w-14 h-14 cursor-pointer hover:bg-red-300"
      >
        {{ `${isLoading ? "......" : "Ask"}` }}
      </Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGetGenerativeModelGP } from "../../composables/useGetGenerativeModelGP.js";
import Button from "../fixed/Button.vue"
import Messages from "./Messages.vue";

const inputQuestion = ref("");
const messages = ref([]);
const aiAnswer = ref("");
const isLoading = ref(false);

const fetchAnswer = async () => {
  if (!inputQuestion.value.trim()) return;
  isLoading.value = true;
  messages.value.push({ content: inputQuestion.value, isUser: true });

  try {
    aiAnswer.value = await useGetGenerativeModelGP(inputQuestion.value);
    messages.value.push({ content: aiAnswer.value, isUser: false });
  } catch (error) {
    console.log({ error });
  } finally {
    isLoading.value = false;
    inputQuestion.value = "";
  }
};
</script>

<style scoped>
</style>
