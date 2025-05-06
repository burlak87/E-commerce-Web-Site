<script setup>
  import ProductCard from '../components/ProductCard.vue';
  import ProductDescription from '../components/ProductDescription.vue';
  import SimilarProducts from '../components/SimilarProducts.vue';

  import { ref, onMounted } from 'vue';

  const productId = ref(1); 
  const product = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function getProductById(id) {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching product:', err);
      throw err;
    }
  }

  async function loadProduct() {
    loading.value = true;
    error.value = null;
    try {
      product.value = await getProductById(productId.value);
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    loadProduct();
  });
</script>

<template>
  <main>
    <ProductCard />
    <ProductDescription />
    <SimilarProducts />
  </main>
</template>

<style scoped lang="scss">
  @import '../style.scss';
</style>
