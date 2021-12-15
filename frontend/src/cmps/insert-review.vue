<template>
  <form class="insert-review main-layout" @submit.prevent="saveReview">
    <el-input class="email" placeholder="Email" v-model="email"></el-input>
    <el-input
      class="message"
      type="textarea"
      :rows="2"
      placeholder="Message"
      v-model="txt"
    >
      ></el-input
    >
    <button class="submit-btn">Submit</button>
  </form>
</template>

<script>
import { reviewService } from "../services/review.service";
import MD5 from "crypto-js/md5";
export default {
  data() {
    return {
      email: "",
      txt: "",
    };
  },
  methods: {
    async saveReview() {
      var imgUrl = "https://s.gravatar.com/avatar/" + MD5(this.email.trim()).toString();
    //   var imgUrl = MD5("gilro79@gmail.com").toString();
      console.log('imgUrl',imgUrl);
      console.log('this.email',this.email);
      await reviewService.add({ email: this.email, txt: this.txt, imgUrl});
      this.$emit("reload");
      this.email = '';
      this.txt = '';
    },
  },
};
</script>