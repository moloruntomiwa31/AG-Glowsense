<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-4 gap-8 md:p-6 min-h-[50vh]"
  >
    <div
      class="w-[75%] md:w-[300px]"
      v-for="blog in blogStore.blogs"
      :key="blog.id"
    >
      <div class="relative">
        <div
          class="absolute top-0 hover:bg-[#00000041] rounded-md duration-300 left-0 w-full h-full"
        ></div>
        <img
          :src="blog.image"
          alt="Blog Image Picture"
          class="w-full rounded-md"
        />
        <p
          class="absolute bg-red-500 rounded-full p-2 top-1 right-4"
          v-if="blog.fav"
        ></p>
      </div>
      <div class="space-y-2">
        <RouterLink
          :to="`/blogs/${blog.id * 4780}`"
          class="font-bold text-lg hover:underline duration-300"
          >{{ blog.title }}
        </RouterLink>
        <p
          class="capitalize tracking-wider font-bold text-gray-400 text-sm font-sans"
        >
          {{ blog.date }}
        </p>
        <Button
          class="block p-2 bg-black text-white"
          @click="toggleFav(blog)"
          v-if="!blog.fav"
          >Make Favorite</Button
        >
        <Button
          class="block p-2 bg-red-500 text-white whitespace-nowrap"
          @click="toggleFav(blog)"
          v-if="blog.fav"
          >Remove From Favorite</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../fixed/Button.vue";
import { RouterLink } from "vue-router";
import { useBlog } from "../../store/blogStore";
const blogStore = useBlog();
const toggleFav = (blog) => {
  blog.fav = !blog.fav;
};
</script>
