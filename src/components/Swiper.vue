<template>
  <div>
    <swiper ref="{swiperRef}" :slidesPerView="3" :centeredSlides="true" :spaceBetween="30" :pagination="{
      type: 'fraction',
    }" :navigation="true" :autoplay="{
  delay: 4000,
  disableOnInteraction: false
}" :breakpoints="{
  '240': {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  '640': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '768': {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  '1024': {
    slidesPerView: 5,
    spaceBetween: 30,
  },
}" :modules="[Pagination, Navigation, Autoplay]" class="mySwiper">
      <swiper-slide v-for="product in skinProducts" :key="product">
        <div class="shadow-lg rounded">
          <!-- <img :src="product.image" alt="" class="md:w-3/4 rounded-t"> -->
          <div class="p-4 space-y-4 flex flex-col justify-between items-start">
            <h3 class="capitalize font-bold text-lg">{{ product.name }}</h3>
            <p>₦{{ product.price }}</p>
            <button
              class="capitalize font-bold text-lg bg-red-300 p-2 text-[#6C4A4A] hover:shadow hover:bg-red-400 duration-150 rounded outline-none">Add
              to cart</button>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <p class="append-buttons"></p>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import "swiper/css/autoplay"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
defineProps(['skinProducts'])
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 50vh;
  padding: 1rem;
}

.swiper div {
  width: 100%;
  height: 200px;
}

.swiper div img {
  width: 100%;
}
</style>