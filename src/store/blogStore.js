import { defineStore, acceptHMRUpdate } from "pinia";
import blogs from "../../data/blog.js";
import { ref, computed } from "vue";

export const useBlog = defineStore("blogStore", () => {
  const blogDetails = ref(blogs);
  const getFavBlogs = computed(() =>
    blogDetails.value.filter((blog) => blog.fav)
  );
  return { blogs: blogDetails, getFavBlogs };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlog, import.meta.hot));
}
