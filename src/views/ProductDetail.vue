<script setup>
  import ProductCard from '../components/ProductCard.vue';
  import ProductDescription from '../components/ProductDescription.vue';
  import SimilarProducts from '../components/SimilarProducts.vue';
</script>

<template>
  <main>
    <ProductCard />
    <ProductDescription />
    <SimilarProducts />
  </main>
</template>

<style scoped lang="scss">
  @import '../style.scss';
</style>
