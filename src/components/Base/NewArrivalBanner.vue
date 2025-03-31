<script setup>
  defineProps({
    imgPath: String,
    title: String
  })
</script>

<template>
  <section class="NewArrivalBanner">
    <img :src="imgPath" alt="">
    <h4>{{ title }}</h4>
  </section>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/BaseComponents/NewArrivalBanner.scss';
</style>