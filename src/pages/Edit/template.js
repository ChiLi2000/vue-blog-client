import blog from "@/api/blog";
export default {
  data() {
    return {
      blogId: null,
      title: "",
      description: "",
      content:"",
      atIndex: false
    };
  },

  created() {
    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title;
      this.description = res.data.description;
      this.content = res.data.content;
      this.atIndex = res.data.atIndex;
    });
  },

  methods: {
    onEdit() {
      blog
        .updateBlog(
          { blogId: this.blogId },
          {
            title: this.title,
            content: this.content,
            description: this.description,
            atIndex: this.atIndex
          }
        )
        .then(res => {
          this.$message.success(res.msg);
          this.$router.push({ path: `/detail/${res.data.id}` });
        });
    },
    // 计算title值，超过最大值则直接截断
    overTitleLength() {
      this.title = this.title.substring(0, 20);
      this.$emit("change", this.title);
    },
    overDescriptionLength() {
      this.description = this.description.substring(0, 300);
      this.$emit("change", this.description);
    },
    overContentLength() {
      this.content = this.content.substring(0, 5000);
      this.$emit("change", this.content);
    }
  }
};
