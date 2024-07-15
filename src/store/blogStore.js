import { defineStore, acceptHMRUpdate } from "pinia";
import blogs from "../../data/blog.js";

export const useBlog = defineStore("blogStore", {
  state: () => ({
    blogs: blogs,
  }),
  getters: {
    getFavBlogs() {
      return this.blogs.filter((blog) => blog.fav);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlog, import.meta.hot));
}

