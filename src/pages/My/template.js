import blog from "@/api/blog";
import { mapGetters } from "vuex";
import goTop from "@/components/goTop";
export default {
  data() {
    return {
      blogs: [],
      page: 1,
      total: 0
    };
  },

  computed: {
    ...mapGetters(["user"])
  },

  components: {
    goTop
  },

  created() {
    blog.getBlogsByUserId(this.user.id, { page: this.page }).then(res => {
      console.log(res);
      this.page = res.page;
      this.total = res.total;
      this.blogs = res.data;
    });
  },

  methods: {
    async onDelete(blogId) {
      await this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      });
      await blog.deleteBlog({ blogId });
      this.$message.success("删除成功");
      // 从dom上消失，无需刷新
      this.blogs = this.blogs.filter(blog => blog.id != blogId);
    },

    splitDate(dataStr) {
      let dateObj = typeof dataStr === "object" ? dataStr : new Date(dataStr);
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      };
    }
  }
};
