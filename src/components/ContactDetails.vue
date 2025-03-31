<script>
export default {
  methods: {
    edit(field) {
      // Logic to handle editing specific fields
      console.log(`Edit ${field}`);
    },
    removeAddress() {
      // Logic to remove address
      console.log('Remove address');
    },
    editAddress() {
      // Logic to edit address
      console.log('Edit address');
    },
    addAddress() {
      // Logic to add new address
      console.log('Add new address');
    }
  }
}
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