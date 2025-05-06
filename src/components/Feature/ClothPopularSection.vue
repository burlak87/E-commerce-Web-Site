<script setup>
  defineProps({
    imgPath: String,
    title: String,
    brand: String,
    price: String
  })
</script>

<template>
  <section class="clothContainer">
    <img :src="imgPath" alt="" class="clothItem">
    <article class="clothInfo">
      <section class="clothInfoBrand">
        <h4> {{ title }} </h4>
        <p> {{ brand }} </p>
      </section>
      <section class="btn">
        <button class="saveLikeBtn"><img src="../../assets/images/Header&FooterImg/heart.png" alt=""></button>
        <button class="clothInfoPrice" @click.prevent="$router.push({ name: 'ProductDetail' })"> {{ price }} </button>
      </section>
    </article>  
  </section>
</template>

<style scoped lang="scss">
  @import '../../assets/styles/FeatureComponents/ClothPopularSectionStyle.scss';

  #bannerOne {
    background-image: url(../assets/images/PhotoLimeLight1.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #bannerTwo {
    background-image: url(../assets/images/PhotoLimeLight2.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #bannerThree {
    background-image: url(../assets/images/PhotoLimeLight3.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #bannerFour {
    background-image: url(../assets/images/PhotoLimeLight4.png);
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>