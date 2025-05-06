<script setup>
  import ContactDetails from '../components/ContactDetails.vue';
  import AddressInfo from '../components/AddressInfo.vue';
  import Wishlist from '../components/Wishlist.vue';
  import MyOrder from '../components/MyOrder.vue';

  import { ref, computed } from "vue";

  const activePage = ref(1);
  const url = computed({
    get(){
      window.location.href;
    },
    set(value) {
      window.history.pushState({}, '', value);
    }
  })
</script>

<template>
  <main class="profile">
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
          <li class="menu-item" @click.prevent="activePage = 4"> <img src="../assets/images/my orders.png" alt=""> <p>My orders</p></li>
          <li class="menu-item" @click.prevent="activePage = 3"> <img src="../assets/images/heart.png" alt=""> <p>Wishlist</p></li>
          <li class="menu-item" @click.prevent="activePage = 1"> <img src="../assets/images/user.png" alt=""> <p>My info</p></li>
          <li class="menu-item" @click.prevent="activePage = 2"> <img src="../assets/images/sign out.png" alt=""> <p>Add address</p></li>
        </ul>
      </section>  
    </article>
    <ContactDetails v-if="activePage === 1" />
    <AddressInfo v-else-if="activePage === 2" />
    <Wishlist v-else-if="activePage === 3" />
    <MyOrder v-else-if="activePage === 4" />
  </main>
</template>

<style scoped lang="scss">
  @import '../style.scss';
  @import '../assets/styles/ProfileNavBlockStyle.scss';
</style>