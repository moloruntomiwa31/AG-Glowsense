<template>
  <section id="blogs" class="w-full min-h-[60vh]">
    <div class="header border-2 relative border-gray-400 mt-20 min-w-full">
      <h1
        class="absoluteCenter bg-white px-4 md:px-8 py-4 text-2xl text-red-500 uppercase font-medium rounded-3xl whitespace-nowrap"
      >
        The Blogs
      </h1>
    </div>
    <!-- Tab Buttons -->
    <div class="flex space-x-4 justify-center mt-8">
      <button
        @click="activeComponent = MainBlogs"
        :class="{
          'bg-red-500 text-white': activeComponent === MainBlogs,
          'bg-[#FDF6F0]': activeComponent !== MainBlogs,
        }"
        class="text-xl p-2 rounded-md cursor-pointer transition-colors duration-300"
      >
        Main Blogs
      </button>
      <button
        @click="activeComponent = FavBlogs"
        :class="{
          'bg-red-500 text-white': activeComponent === FavBlogs,
          'bg-[#FDF6F0]': activeComponent !== FavBlogs,
        }"
        class="text-xl p-2 rounded-md cursor-pointer transition-colors duration-300"
      >
        Favourite Blogs
      </button>
    </div>
    <component :is="activeComponent" />
  </section>
</template>

<script setup>
import { shallowRef } from "vue";
import MainBlogs from "./MainBlogs.vue";
import FavBlogs from "./FavBlogs.vue";
const activeComponent = shallowRef(MainBlogs);
console.log(activeComponent.value);
import { useBlog } from "../../store/blogStore";
const blogStore = useBlog();
console.log(blogStore.blogs);
</script>

<style scoped>
</style>
