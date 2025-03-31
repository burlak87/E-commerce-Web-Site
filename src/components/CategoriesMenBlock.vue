<script setup>
  import ClothSection from './Feature/ClothSection.vue';
</script>

<template>
  <article class="categoriesBlock">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Categories For Man</h2>
    </section>
    <section class="containerCategories">
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan1.png" title="Shirts" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan2.png" title="Printed T-Shirts" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan3.png" title="Plain T-Shirt" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan4.png" title="Polo T-Shirt" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan5.png" title="Hoodies & Sweetshirt" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan6.png" title="Jeans" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan7.png" title="Activewear" />
      <ClothSection imgPath="../../public/PhotoCatigoriesForMan8.png" title="Boxers" /> 
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/CategoriesBlockStyle.scss';
</style>