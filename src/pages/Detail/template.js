import marked from "marked";
import blog from "@/api/blog";
import { mapGetters, mapActions } from "vuex";
import goTop from "@/components/goTop";

export default {
  data() {
    return {
      title: "",
      rawContent: "",
      user: {},
      createdAt: ""
    };
  },

  computed: {
    ...mapGetters(["isLogin"]),
    markdown() {
      return marked(this.rawContent);
    }
  },

  components: {
    goTop
  },

  created() {
    this.checkLogin();
    this.blogId = this.$route.params.blogId;
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title;
      this.rawContent = res.data.content;
      this.createdAt = res.data.createdAt;
      this.user = res.data.user;
    });
  },

  methods: {
    ...mapActions(["checkLogin"])
  }
};
