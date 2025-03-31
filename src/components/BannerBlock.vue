<script setup>
  import Banner from './Base/Banner.vue';
</script>

<template>
  <article class="bannerBlock">
    <Banner class="bannerOne" title="High Coziness" spanTxt="Low Price" />
    <Banner class="bannerTwo" title="Breezy Summer" spanTxt="Beyoung Presents" />
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/BannerBlockStyle.scss';
  .bannerOne {
    background-image: url('../assets/images/PhotoForBanner.png');
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .bannerTwo {
    background-image: url('../assets/images/PhotoForBanner2.png');
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>