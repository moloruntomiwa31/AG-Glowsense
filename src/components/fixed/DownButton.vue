<template>
    <button @click="scroll">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
            <path fill="#F25287"
                d="m208.49 152.49l-72 72a12 12 0 0 1-17 0l-72-72a12 12 0 0 1 17-17L116 187V40a12 12 0 0 1 24 0v147l51.51-51.52a12 12 0 0 1 17 17Z" />
        </svg>
    </button>
</template>

<script setup>
const emit = defineEmits(["scroll"])
const scroll = () => {
    emit('scroll')
}
</script>

<style scoped></style>