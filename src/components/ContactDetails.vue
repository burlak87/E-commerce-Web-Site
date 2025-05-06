<script>
import { ref, onMounted } from 'vue';

function edit(field) { alert(`Edit ${field}`); }

function removeAddress() { alert('Remove Address'); }

function editAddress() { alert('Edit address'); }

function addAddress() { alert('Add new address'); }

const userId = ref(1);
const addresses = ref([]);
const user = ref(null);
const loading = ref(false);
const error = ref(null);

async function getUser(id) {
  try {
    const response = await fetch(`http://localhost:8000/users/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    console.error('Error fetching user:', err);
    throw err;
  }
}

async function fetchUser() {
  error.value = null;
  user.value = null;

  if (!userId.value) {
    error.value = 'Please enter a user ID';
    return;
  }

  loading.value = true;
  try {
    user.value = await getUser(userId.value);
  } catch (err) {
    error.value = err.message || 'Unknown error';
  } finally {
    loading.value = false;
  }
}

async function getAddresses() {
  try {
    const response = await fetch('http://localhost:8000/addresses');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching addresses:', err);
    throw err;
  }
}

async function loadAddresses() {
  loading.value = true;
  error.value = null;
  try {
    addresses.value = await getAddresses();
  } catch (err) {
    error.value = err.message || 'Unknown error';
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchUser();
  loadAddresses();
});
</script>

<template>
  <article class="contactDetails">
    <h2>My Info</h2>
    <section class="contact-details">
      <h3>Contact Details</h3>
      <article class="detail">
        <section>
          <span>Your Name</span>
          <span class="detail-value">Jhanvi Shah</span>
        </section>
        <button @click="edit('name')">Change</button>
      </article>
      <article class="detail">
        <section>
          <span>Email Address</span>
          <span class="detail-value">Jhanvi@gmail.com</span>
        </section>
        <button @click="edit('email')">Change</button>
      </article>
      <article class="detail">
        <section>
          <span>Phone Number</span>
          <span class="detail-value">8902524545</span>
        </section>
        <button @click="edit('phone')">Change</button>
      </article>
      <article class="detail">
        <section>
          <span>Password</span>
          <span class="detail-value">********</span>
        </section>
        <button @click="edit('password')">Change</button>
      </article>
    </section>
    <section class="addressTitle">
      <h3>Address</h3>
      <button class="add-address" @click="addAddress">Add New</button>
    </section>
    <section class="address-list">
      <article class="address">
        <p>Jhanvi Shah</p>
        <p>8902524545</p>
        <p>1/4 Pragatinagar Flats, app. jain dersasar, near Jain dersasar, Vijaynagar road</p>
        <section class="default">
          <button>Home</button>
          <button>Default billing address</button>
        </section>
        <section class="address-actions">
          <button @click="removeAddress">Remove</button>
          <button @click="editAddress">Edit</button>
        </section>
      </article>
      <article class="address">
        <p>Jhanvi Shah</p>
        <p>8902524545</p>
        <p>1/4 Pragatinagar Flats, app. jain dersasar, near Jain dersasar, Vijaynagar road</p>
        <section class="default">
          <button>Home</button>
          <button>Default shipping address</button>
        </section>
        <section class="address-actions">
          <button @click="removeAddress">Remove</button>
          <button @click="editAddress">Edit</button>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/ContactDetailsBlockStyle.scss';
</style>