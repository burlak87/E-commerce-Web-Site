<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';


</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped lang="scss">
  @import './assets/styles/HeaderStyle.scss';
  @import './assets/styles/FooterStyle.scss';
</style>