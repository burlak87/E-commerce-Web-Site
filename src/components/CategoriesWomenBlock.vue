<script setup>
  import ClothSection from './Feature/ClothSection.vue';
</script>

<template>
  <article class="categoriesBlock">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Categories For Women</h2>
    </section>
    <section class="containerCategories">
      <ClothSection imgPath="../../public/PhotoCatigoriesForWomen1.png" title="Hoodies & Sweetshirt" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForWomen2.png" title="Coats & Parkas" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForWomen3.png" title="Tees & T-Shirt" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForWomen4.png" title="Boxers" />
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/CategoriesBlockStyle.scss';
</style>