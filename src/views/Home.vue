<script setup>
  import WelcomeBlock from '../components/WelcomeBlock.vue';
  import BannerBlock from '../components/BannerBlock.vue';
  import NewArrivalBlock from '../components/NewArrivalBlock.vue';
  import BigSavingBlock from '../components/BigSavingBlock.vue';
  import AdvertisingBannerBlock from '../components/AdvertisingBannerBlock.vue';
  import CategoriesMenBlock from '../components/CategoriesMenBlock.vue';
  import CategoriesWomenBlock from '../components/CategoriesWomenBlock.vue';
  import BrandsBannerBlock from '../components/BrandsBannerBlock.vue';
  import CategoriesPopularBlock from '../components/CategoriesPopularBlock.vue';
  import FeedbackBlock from '../components/FeedbackBlock.vue';
</script>

<template>
  <main>
    <WelcomeBlock />
    <BannerBlock />
    <NewArrivalBlock />
    <BigSavingBlock />
    <AdvertisingBannerBlock />
    <CategoriesMenBlock />
    <CategoriesWomenBlock />
    <BrandsBannerBlock />
    <CategoriesPopularBlock />
    <FeedbackBlock />
  </main>
</template>

<style scoped lang="scss">
  @import '../style.scss';
</style>