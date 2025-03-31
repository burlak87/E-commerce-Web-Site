<script setup>
  defineProps({
    imgPath: String,
    title: String,
    span: String,
    paragraph: String
  })
</script>

<template>
  <section class="feedback">
    <article class="writerInfo">
      <img :src="imgPath" alt="">
      <section class="stars">
        <img src="../../assets/images/star.png" alt="">
        <img src="../../assets/images/star.png" alt="">
        <img src="../../assets/images/star.png" alt="">
        <img src="../../assets/images/star_half.png" alt="">
        <img src="../../assets/images/star_outline.png" alt="">
      </section>
    </article>
    <h3> {{ title }} </h3>
    
    <p><span> {{ span }} </span> <br/> {{ paragraph }} </p>
  </section>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/FeatureComponents/FeedbackStyle.scss';
</style>