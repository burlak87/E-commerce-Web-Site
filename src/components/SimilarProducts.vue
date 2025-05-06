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
  <article class="similarProducts">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Similar Products</h2>
    </section>
    <section class="containerSimilarProducts">
      <ClothPopularSection imgPath="../../public/PhotoLimeLight1.png" title="White T-Shirt" brand="Priya’s  Brand" price="$13.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight2.png" title="Dark Green Sweatshirt...." brand="Roboto’s  Brand" price="$127.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight3.png" title="Levender Sweatshirt ...." brand="MJhanvi’s  Brand" price="$133.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight4.png" title="Urban jacket with white ...." brand="Sagar’s  Brand" price="$79.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight1.png" title="Plain White T-Shirt" brand="Jhanvi’s  Brand" price="$123.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight2.png" title="Checks Shirt with white....." brand="H.M’s  Brand" price="$123.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight3.png" title="One piece black top & ...." brand="Nike’s  Brand" price="$123.00" />
      <ClothPopularSection imgPath="../../public/PhotoLimeLight4.png" title="Denim Blue Shirt" brand="MOMO’s  Brand" price="$38.00" />
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/SimilarProductsStyle.scss';
</style>