import { defineStore } from "pinia";
import blogs from "../../data/blog";

export const useBlog = defineStore("useBlog", {
  state: () => ({
    blogs: blogs,
  }),
  getters: {
    getFavBlogs() {
      return this.blogs.filter((blog) => blog.fav);
    },
  },
});
