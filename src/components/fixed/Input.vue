<template>
    <input v-bind="$attrs" 
    @input="$emit($event.target.value)" 
    v-model.trim="modelValue" 
    :placeholder="placeholder"
    class="rounded-md">
</template>

<script setup>
import {ref} from 'vue'
const modelValue = ref('')
defineProps(['placeholder'])
</script>
<style scoped></style>