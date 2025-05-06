<script setup>

</script>

<template>
  <article class="productCard">
    <aside>
      <article class="containerClothImage"><img src="../../public/clothImage1.png" alt=""></article>
      <article class="containerClothImage active"><img src="../../public/clothImage2.png" alt=""></article>
      <article class="containerClothImage"><img src="../../public/clothImage3.png" alt=""></article>
      <article class="containerArrow">
        <button>
          <img src="../assets/images/WhiteUpArrow.png" alt="">
        </button>
        <button>
          <img src="../assets/images/DarkDownArrow.png" alt="">
        </button>
      </article>
    </aside>
    <img src="../../public/clothBigImage.png" alt="">
    <section>
      <span class="clothPath"> Shop > Women > Top </span>
      <h2 class="clothName">Raven Hoodie With Black colored Design</h2>
      <article class="clothGrade">
        <section class="clothStar">
          <img src="../assets/images/star.png" alt="">
          <img src="../assets/images/star.png" alt="">
          <img src="../assets/images/star.png" alt="">
          <img src="../assets/images/star.png" alt="">
          <img src="../assets/images/star.png" alt="">
          <p>3.5</p>
        </section>
        <section class="clothComment">
          <img src="../assets/images/MessegeIcon.png" alt="">
          <p>120 comment</p>
        </section>
      </article>
      <article class="clothParam">
        <h3>Select Size</h3>
        <section class="clothDimensions">
          <button>XS</button>
          <button>S</button>
          <button>M</button>
          <button class="active">L</button>
          <button>XL</button>
        </section>
      </article>
      <article class="clothColor">
        <h3>Colors Available</h3>
        <section class="clothSelectColor">
          <button class="active"><span></span></button>
          <button><span></span></button>
          <button><span></span></button>
          <button><span></span></button>
        </section>
      </article>
      <article class="clothAddToCart">
        <button class="addToCart"><img src="../assets/images/ShoppingCart.png" alt=""> Add to cart</button>
        <span class="price">$63.00</span>
      </article>
      <article class="clothInfo">
        <section class="clothInfoContainer">
          <article>
            <span><img src="../assets/images/CreditCard.png" alt=""></span>
            <p>Secure payment</p>
          </article>
          <article>
            <span><img src="../assets/images/FreeShipping&Returns.png" alt=""></span>
            <p>Free Shipping & Returns</p>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/ProductCardStyle.scss';
</style>