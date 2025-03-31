<script setup>
  import ProductList from '../components/ProductListBlock.vue';
  import InfoClothingCategoriesBlock from '../components/InfoClothingCategoriesBlock.vue';
  import BestPriceBlock from '../components/BestPriceBlock.vue';
</script>

<template>
  <main>
    <ProductList />
    <InfoClothingCategoriesBlock />
    <BestPriceBlock />
  </main>
</template>

<style scoped lang="scss">
  @import '../style.scss';
</style>