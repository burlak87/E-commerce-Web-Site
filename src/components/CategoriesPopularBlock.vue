<script setup>
  import ClothPopularSection from './Feature/ClothPopularSection.vue';

  import { ref, onMounted } from 'vue';

  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function getProducts() {
    try {
      const response = await fetch('http://localhost:8000/products');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching products:', err);
      throw err;
    }
  }

  async function loadProducts() {
    loading.value = true;
    error.value = null;
    try {
      products.value = await getProducts();
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    loadProducts();
  });
</script>

<template>
  <article class="categoriesPopularBlock">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">In The Limelight</h2>
    </section>
    <section class="containerCategoriesPopular">
      <ClothPopularSection id="bannerOne" imgPath="../../public/PhotoLimeLight1.png" title="Black Sweatshirt with ...." brand="Jhanvi’s  Brand" price="$123.00" />
      <ClothPopularSection id="bannerTwo" imgPath="../../public/PhotoLimeLight2.png" title="line Pattern Black H..." brand="AS’s  Brand" price="$37.00" />
      <ClothPopularSection id="bannerThree" imgPath="../../public/PhotoLimeLight3.png" title="Black Shorts" brand="MM’s  Brand" price="$37.00" />
      <ClothPopularSection id="bannerFour" imgPath="../../public/PhotoLimeLight4.png" title="Levender Hoodie with ...." brand="Nike’s  Brand" price="$119.00" />
    </section>
  </article>
</template>

<style scoped lang="scss">

  @import '../assets/styles/CategoriesPopularBlock.scss';

  .categoriesBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 70px;
  }
  .title {
    width: 500px;
    padding-bottom: 70px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px; 
  }
  .textTitle {
    color: #3C4242;
    font-size: 34px;    
  }
  .spanTitle {
    display: block;
    width: 6px;
    height: 30px;
    background-color: #8A33FD;
  }
  .containerCategoriesPopular {
    width: 1240px;
    height: 450px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 36px;
    flex-wrap: nowrap;
  }
</style>