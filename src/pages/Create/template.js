import blog from "@/api/blog";
import goTop from "@/components/goTop";

export default {
  data() {
    return {
      title: "",
      description: "",
      content: "",
      atIndex: false
    };
  },

  computed: {
    // 计算当前文本框中内容的字数
    titleLength() {
      return this.title.length;
    }
  },

  components: {
    goTop
  },

  methods: {
    onCreate() {
      blog
        .createBlog({
          title: this.title,
          content: this.content,
          description: this.description,
          atIndex: this.atIndex
        })
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
