<script setup>
  defineProps({
    title: String,
    spanTxt: String
  })
</script>

<template>
  <section class="banner">
    <span> {{ spanTxt }} </span>
    <article class="bannerInfo">
      <h1> {{ title }} </h1>
      <span>UPTO 50% OFF</span>
    </article>
    <a href="">Explore Items</a>
  </section>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/BaseComponents/BannerStyle.scss';
</style>