<script setup>
  import { ref, onMounted } from 'vue';

  const wishlistId = ref(1);
  const wishlist = ref(null);
  const wishlistItems = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const items = [
    { id: 1, imgPath: '../../public/WishlistPhoto1.png', name: 'Blue Flower Print Crop Top', color: 'Yellow', quantity: 1, price: '$29.00' },
    { id: 2, imgPath: '../../public/WishlistPhoto2.png', name: 'Yellow Flower Print Dress', color: 'Yellow', quantity: 1, price: '$78.00' },
    { id: 3, imgPath: '../../public/WishlistPhoto3.png', name: 'White Hoodie long sleeve', color: 'White', quantity: 1, price: '$134.00' },
    { id: 4, imgPath: '../../public/WishlistPhoto4.png', name: 'Brown men’s long sleeve T-shirt', color: 'Brown', quantity: 1, price: '$93.00' }
  ];

  function removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  async function getWishlistById(id) {
    try {
      const response = await fetch(`http://localhost:8000/wishlists/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching wishlist:', err);
      throw err;
    }
  }

  async function loadWishlist() {
    loading.value = true;
    error.value = null;
    try {
      wishlist.value = await getWishlistById(wishlistId.value);
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  async function getWishlistItems() {
    try {
      const response = await fetch('http://localhost:8000/wishlist-items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching wishlist items:', err);
      throw err;
    }
  }

  async function loadWishlistItems() {
    loading.value = true;
    error.value = null;
    try {
      wishlistItems.value = await getWishlistItems();
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    loadWishlist();
    loadWishlistItems();
  });
</script>

<template>
  <article class="wishlist">
    <h2>Wishlist</h2>
    <section class="wishlist-item" v-for="item in items" :key="item.id">
      <button class="remove-item" @click.prevent="removeItem(item.id)">x</button>
      <img class="item-img" :src="item.imgPath" alt="">
      <article class="item-details">
        <p class="item-name">{{ item.name }}</p>
        <p class="item-color">Color: {{ item.color }}</p>
        <p class="item-quantity">Quantity: {{ item.quantity }}</p>
        <p class="item-price">{{ item.price }}</p>
      </article>
      <button class="add-to-cart" @click.prevent="$router.push({ name: 'AddToCart' })">Add to cart</button>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/WishlistStyle.scss';
</style>