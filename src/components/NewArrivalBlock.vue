<script setup>
  import NewArrivalBanner from './Base/NewArrivalBanner.vue';
</script>

<template>
  <article class="newArrival"> 
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">New Arrival</h2>
    </section>
    <section class="containerNewArrival">
      <NewArrivalBanner imgPath="../../public/PhotoNewArrival1 .png" title="Knitted Joggers" />
      <NewArrivalBanner imgPath="../../public/PhotoNewArrival2.png" title="Full Sleeve" />
      <NewArrivalBanner imgPath="../../public/PhotoNewArrival3.png" title="Active T-Shirts" />
      <NewArrivalBanner imgPath="../../public/PhotoNewArrival4.png" title="Urban Shirts" />    
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/NewArrivalBlockStyle.scss';

  .newArrival {
    height: 400px;
  }
</style>