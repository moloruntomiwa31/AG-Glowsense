<template>
  <div class="flex justify-center items-center min-h-[80vh] md:min-h-[100vh]">
    <div class="spinner">
      <img src="../../assets/NoBackground.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.spinner {
  width: 100px;
  height: 100px;
}
.spinner > img {
  width: 100%;
  height: auto;
  animation: rotate 1s infinite;
}
@keyframes rotate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.4);
  }
}
</style>
