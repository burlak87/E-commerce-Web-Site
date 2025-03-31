<script setup>
  import Filters from './FiltersBlock.vue';
  import ClothPopularSection from './Feature/ClothPopularSection.vue';
</script>

<template>
  <article class="productList">
    <section class="filter">
      <Filters />
    </section>
    <section class="productListContainer">
      <article class="productListTitle">
        <h3>Women’s Clothing</h3>
        <section>
          <button class="active">New</button>
          <button>Recommended</button>
        </section>
      </article>
      <article class="productListItem">
        <ClothPopularSection imgPath="../../public/PhotoLimeLight1.png" title="White T-Shirt" brand="Priya’s  Brand" price="$13.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight2.png" title="Dark Green Sweatshirt...." brand="Roboto’s  Brand" price="$127.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight3.png" title="Levender Sweatshirt ...." brand="MJhanvi’s  Brand" price="$133.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight4.png" title="Urban jacket with white ...." brand="Sagar’s  Brand" price="$79.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight1.png" title="Plain White T-Shirt" brand="Jhanvi’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight2.png" title="Checks Shirt with white....." brand="H.M’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight3.png" title="One piece black top & ...." brand="Nike’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight4.png" title="Denim Blue Shirt" brand="MOMO’s  Brand" price="$38.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight1.png" title="Plain White T-Shirt" brand="Jhanvi’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight2.png" title="Checks Shirt with white....." brand="H.M’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight3.png" title="One piece black top & ...." brand="Nike’s  Brand" price="$123.00" />
        <ClothPopularSection imgPath="../../public/PhotoLimeLight4.png" title="Denim Blue Shirt" brand="MOMO’s  Brand" price="$38.00" />
      </article>
    </section>
  </article>



   
</template>

<style scoped lang="scss">
  @import '../assets/styles/ProductListBlockStyle.scss';
</style>