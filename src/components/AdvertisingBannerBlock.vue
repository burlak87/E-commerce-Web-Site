<script setup>

</script>

<template>
  <article class="advertisingBanner">
    <section class="advertisingInfo">
      <article class="information">
        <h2>
          WE MADE YOUR EVERYDAY <br/>
          FASHION BETTER!
        </h2>
        <p>
          In our journey to improve everyday fashion, <br/>
          euphoria presents EVERYDAY wear range - <br/> 
          Comfortable & Affordable fashion 24/7
        </p>
        <button>Shop Now</button>
      </article>
    </section>
    <section class="photoCollage"></section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/AdvertisingBannerBlockStyle.scss';
  .advertisingInfo {
    background-image: url(../assets/images/PhotoCollage2.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .photoCollage {
    background-image: url(../assets/images/PhotoCollage1.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>