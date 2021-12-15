<template>
  <ul class="review-list main-layout">
    <li class="review" v-for="review in reviews" :key="review._id">
      <div class="image">
        <img :src="review.imgUrl" />
      </div>
      <div>
        <div class="email">{{ review.email }}</div>
        <div class="txt">{{ review.txt }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["reviews"],
  
};
</script>