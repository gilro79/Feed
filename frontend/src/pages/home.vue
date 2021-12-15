<template>
  <div class="home">
    <insert-review @reload="reload()" />
    <review-filter @filter="filter" />
    <review-list :reviews="reviews" />
  </div>
</template>

<script>
import { reviewService } from "@/services/review.service";
import insertReview from "@/cmps/insert-review.vue";
import reviewFilter from "@/cmps/review-filter.vue";
import reviewList from "@/cmps/review-list.vue";

export default {
  name: "home",
  components: {
    insertReview,
    reviewFilter,
    reviewList,
  },
  data() {
    return {
      reviews: null,
    };
  },
  created() {
    this.reload();
  },
  methods: {
    async reload(filterBy) {
      this.reviews = await reviewService.query(filterBy);
    },
    filter(filterBy) {
      this.reload(filterBy)
    }
  },
};
</script>
