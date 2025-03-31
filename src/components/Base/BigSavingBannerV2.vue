<script setup>
  import ButtonV1 from './ButtonV1.vue';

  defineProps({
    title: String,
    spanTxt: String,
    paragraph: String
  })
</script>

<template>
  <article class="savingBanner">
    <section class="savingInfo">
      <button class="limitedBtn">Limited Stock</button>
      <h2> {{ title }} </h2>
      <span> {{ spanTxt }} </span>
      <p> {{ paragraph }} </p>
      <i class="fal fa-long-arrow-down"></i>
      <ButtonV1 />
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/BaseComponents/BigSavingBannerV2.scss';
</style>