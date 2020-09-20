import blog from "@/api/blog.js";
import goTop from "@/components/goTop";

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      page: 1
    };
  },
  components: {
    goTop
  },
  created() {
    blog.getIndexBlogs({ page: this.page }).then(res => {
      this.blogs = res.data;
      this.total = res.total;
      this.page = res.page;
    });
  }
};
