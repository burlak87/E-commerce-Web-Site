<script setup>
  function continueShopping() {
    this.$router.push('./shop');
  }
</script>

<template>
  <article class="wishlist-empty">
    <section class="icon">
      <img src="../assets/images/GreenHeart.png" alt="Wishlist Icon" />
    </section>
    <h3>Your wishlist is empty.</h3>
    <p>You don't have any products in the wishlist yet. You will find a lot of interesting products on our Shop page.</p>
    <button @click="continueShopping">Continue Shopping</button>
  </article>
</template>

<style lang="scss" scoped>
  @import '../assets/styles/EmptyWishlistStyle.scss';
</style>