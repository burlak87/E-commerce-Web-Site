<script setup>
  import { RouterLink } from 'vue-router';
  import InputSearchForm from './Base/InputSearch.vue';
</script>

<template>
  <header class="header">
    <img src="../assets/images/Header&FooterImg/Logo.png" alt="" class="logo">
    <article class="links">
      <RouterLink to="/" class="link">Home</RouterLink>
      <RouterLink to="/productlist" class="link">Shop</RouterLink>
      <RouterLink to="/productlist" class="link">Popular Cloth</RouterLink>
    </article>
    <InputSearchForm/>
    <article class="iconsButton">
      <button class="btn"><router-link to="/signin"><img src="../assets/images/Header&FooterImg/heart.png" alt=""></router-link></button>
      <button class="btn"><router-link to="/profile"><img src="../assets/images/Header&FooterImg/user.png" alt=""></router-link></button>
      <button class="btn"><router-link to="/signin"><img src="../assets/images/Header&FooterImg/shopping cart.png" alt=""></router-link></button>
    </article>
  </header>
</template>

<style scoped lang="scss">
  @import '../assets/styles/HeaderStyle.scss';
</style>