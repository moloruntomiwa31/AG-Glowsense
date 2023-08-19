<template>
    <input v-bind="$attrs" 
    @input="$emit($event.target.value)" 
    v-model="modelValue" 
    :placeholder="placeholder">
</template>

<script setup>
import {ref} from 'vue'
const modelValue = ref('')
defineProps(['placeholder'])
</script>
<style scoped></style>