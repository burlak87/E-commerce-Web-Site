<script setup>
  import { ref, onMounted } from 'vue';

  const reviewId = ref(1); 
  const review = ref(null);
  const reviews = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function getReviews() {
    try {
      const response = await fetch('http://localhost:8000/reviews');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching reviews:', err);
      throw err;
    }
  }

  async function getReviewById(id) {
    try {
      const response = await fetch(`http://localhost:8000/reviews/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching review:', err);
      throw err;
    }
  }

  async function loadReviews() {
    loading.value = true;
    error.value = null;
    try {
      reviews.value = await getReviews();
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  async function loadReview() {
    loading.value = true;
    error.value = null;
    try {
      review.value = await getReviewById(reviewId.value);
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    loadReviews();
    loadReview();
  });
</script>

<template>
  <article class="similarProducts">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Similar Products</h2>
    </section>
    <section class="description">
      <article class="descriptionContainer">
        <section class="textDescriptionContainer">
          <article class="linkDescriptionContainer">
            <a href="" class="active">Description</a>
            <a href="">User comments <span class="firstSpanItem">21</span></a>
            <a href="">Question & Answer <span class="secondSpanItem">4</span></a>
          </article>
          <article class="infoDescriptionContainer">
            <p>100% Bio-washed Cotton – makes the fabric extra soft & silky. Flexible ribbed crew neck. Precisely stitched with no pilling & no fading. Provide  all-time comfort. Anytime, anywhere. Infinite range of matte-finish HD prints.</p>
          </article>
        </section>
        <section class="tableDescriptionContainer">
          <article>
            <section>
              <article class="tableInfo"><span>Fabric</span> Bio-washed Cotton </article>
              <article class="tableInfo"><span>Pattern</span> Printed </article>
            </section>
            <section>
              <article class="tableInfo"><span>Fit</span> Regular-fit </article>
              <article class="tableInfo"><span>Neck</span> Round Neck </article>
            </section>
            <section>
              <article class="tableInfo"><span>Sleeve</span> Half-sleeves </article>
              <article class="tableInfo"><span>Style</span> Casual Wear </article>
            </section>
          </article>
        </section>
      </article>
      <article class="videoContainer">
        <img src="../assets/videos/Videos.png" alt="">
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/ProductDescriptionStyle.scss';
</style>