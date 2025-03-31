<script setup>

</script>

<template>
  <article class="profileNav">
    <section class="profilePath">
      <p>Home > My Account > Personal Info</p>
    </section>
    <section class="profileTitle">
      <article class="title">
        <span class="spanTitle"></span>
        <h2 class="textTitle">Hello Jhanvi</h2>
      </article>
      <article class="titleHello">
        <p>Welcome to your Account</p>
      </article>
    </section>
    <section class="profileNav">
      <ul class="menu">
        <li class="menu-item" > <img src="../assets/images/my orders.png" alt=""> <p>My orders</p></li>
        <li class="menu-item active"> <img src="../assets/images/heart.png" alt=""> <p>Wishlist</p></li>
        <li class="menu-item"> <img src="../assets/images/user.png" alt=""> <p>My info</p></li>
        <li class="menu-item"> <img src="../assets/images/sign out.png" alt=""> <p>Sign out</p></li>
      </ul>
    </section>  
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/ProfileNavBlockStyle.scss';
</style>