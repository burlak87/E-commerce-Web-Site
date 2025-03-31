<script setup>
  import BigSavingBannerV1 from './Base/BigSavingBannerV1.vue';
  import BigSavingBannerV2 from './Base/BigSavingBannerV2.vue';
  import BigSavingBannerV3 from './Base/BigSavingBannerV3.vue';
</script>

<template>
  <article class="bigSavingZone">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Big Saving Zone</h2>
    </section>
    <section class="containerBigSavingZone">
      <article class="containerBigSavingZoneFirst">
        <BigSavingBannerV1 id="bannerOne" title="Hawaiian Shirts" spanTxt="Dress up in summer vibe" paragraph="UPTO 50% OFF" />
        <BigSavingBannerV2 id="bannerTwo" title="Printed T-Shirt" spanTxt="New Designs Every Week" paragraph="UPTO 40% OFF" />
        <BigSavingBannerV1 id="bannerThree" title="Cargo Joggers" spanTxt="Move with style & comfort" paragraph="UPTO 50% OFF" />
      </article>
      <article class="containerBigSavingZoneSecond">
        <BigSavingBannerV3 id="bannerFour" title="Urban Shirts" spanTxt="Live In Confort" paragraph="FLAT 60% OFF" />
        <BigSavingBannerV3 id="bannerFive" title="Oversized T-Shirts" spanTxt="Street Style Icon" paragraph="FLAT 60% OFF" />
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/BigSavingZoneBlock.scss';

  #bannerOne {
    background-image: url(../assets/images/PhotoBigSavingZone1.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 20px;
    @include bannersLayout($jc: center, $ai: start, $gap: 10px );
  }
  #bannerTwo {
    background-image: url(../assets/images/PhotoBigSavingZone2.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding-right: 20px;
    @include bannersLayout($jc: center, $ai: end, $gap: 10px );
  }
  #bannerThree {
    background-image: url(../assets/images/PhotoBigSavingZone3.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding-right: 20px;
    @include bannersLayout($jc: center, $ai: end, $gap: 10px );
  }
  #bannerFour {
    background-image: url(../assets/images/PhotoBigSavingZone4.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @include bannersLayout($jc: center, $ai: end, $gap: 10px );
  }
  #bannerFive {
    background-image: url(../assets/images/PhotoBigSavingZone5.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    @include bannersLayout($jc: center, $ai: end, $gap: 10px );
  }
</style>