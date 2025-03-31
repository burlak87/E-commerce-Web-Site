<script setup>
</script>

<template>
  <main>
    <article class="error-page">
      <section class="icon">
        <img src="../assets/images/Error404.png" alt="Error Icon" />
      </section>
      <h3>Oops! Page not found</h3>
      <p>The page you are looking for might have been removed or temporarily unavailable.</p>
      <button @click="$router.push('/')">Back to HomePage</button>
    </article>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/ErrorPageStyle.scss';
  @import '../style.scss';
</style>