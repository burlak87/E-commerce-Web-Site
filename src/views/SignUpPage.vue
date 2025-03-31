<script setup>
  import { ref } from 'vue';

  const email = ref('');
  const password = ref('');
  const emailError = ref('');
  const agreeToTerms = ref(false);
  const subscribeNewsletter = ref(false);

  const handleSubmit = () => {
    if (!email.value.includes('@')) {
      emailError.value = 'Please enter a valid email address';
    } else {
      emailError.value = '';
    }
  }
</script>

<template>
  <main class="sign">
    <article class="img-signUp">
      <img src="../assets/images/PhotoSignUp.png" alt="">
    </article>
    <article class="formSignUp">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email" placeholder="designer@gmail.com" required />
          <span class="error-message">{{ emailError }}</span>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="********" required />
          <span class="password-hint">Use 8 or more characters with mix of letters, numbers & symbols</span>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="terms" v-model="agreeToTerms" />
          <label for="terms">Agree to our <a href="#">Terms of use</a> and <a href="#">Privacy Policy</a></label>
        </div>
        <div class="checkbox-group">
          <input type="checkbox" id="newsletter" v-model="subscribeNewsletter" />
          <label for="newsletter">Subscribe to our monthly newsletter</label>
        </div>
        <button type="submit" class="submit-button">Sign Up</button>
        <p class="login-link">
          Already have an account? <a href="#">Log in</a>
        </p>
      </form>
    </article>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/SignUpPageStyle.scss';
  @import '../style.scss';
</style>