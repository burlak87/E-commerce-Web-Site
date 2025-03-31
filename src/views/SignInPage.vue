<script setup>
  import { ref } from 'vue';

  const username = ref('');
  const password = ref('');
  const showPassword = ref(false);

  const handleSubmit = () => {
    console.debug('Username: ', username.value);
    console.debug('Password: ', password.value);
  };

  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  };
</script>

<template>
  <main class="sign">
    <article class="img-signIn">
      <img src="../assets/images/PhotoSignIn.png" alt="">
    </article>
    <article class="formSignIn">
      <h2>Sign In</h2>
      <form @submit.prevent="handleSubmit" class="login-form">
        <div class="input-group">
          <label for="username">User name or email address</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="btn-group">
          <button type="button" @click="togglePasswordVisibility">
            {{ showPassword ? 'Hide' : 'Show' }}
          </button>
          <a href="#" class="forgot-password">Forget your password?</a>
        </div>
        <button type="submit" class="sign-in-button">Sign In</button>
        <p class="signup-prompt">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </article>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/SignInPageStyle.scss';
  @import '../style.scss';
</style>