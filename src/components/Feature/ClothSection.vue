<script setup>
  defineProps({
    imgPath: String,
    title: String
  })
</script>

<template>
  <section class="categoriesBox">
    <img :src="imgPath" alt="" class="imgCategories">
    <article class="categoriesInfo">
      <section class="infoLink">
        <h4> {{ title }} </h4>
        <span>Explore Now!</span>
      </section>
      <i class="fal fa-long-arrow-right"></i>
    </article>
  </section>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/FeatureComponents/ClothSectionStyle.scss';
</style>