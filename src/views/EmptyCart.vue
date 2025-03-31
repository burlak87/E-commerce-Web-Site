<script setup>
  function backToHomePage() {
    this.$router.push('./home');
  }
</script>

<template>
  <main>
    <article class="empty-cart">
      <section class="icon">
        <img src="../assets/images/EmptyCart.png" alt="Empty cart Icon" />
      </section>
      <h3>Your cart is empty and sad :(</h3>
      <p>Add something to make it happy!</p>
      <button @click="backToHomePage">Continue Shopping</button>
    </article>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/EmptyCartStyle.scss';
  @import '../style.scss';
</style>