<script setup>

</script>

<template>
  <article class="addressInfo">
    <h2>My Info</h2>
    <section class="address-details">
      <h3>Add <Address></Address></h3>
      <article class="detail">
        <section class="inputFields">
          <p>First Name*</p>
          <input type="text" placeholder="First Name">
        </section>
        <section class="inputFields">
          <p>Lost Name*</p>
          <input type="text" placeholder="Lost Name">
        </section>
      </article>
      <article class="detail">
        <section class="inputFields">
          <p>Country / Region*</p>
          <input type="text" placeholder="Country / Region">
        </section>
        <section class="inputFields">
          <p>Company Name</p>
          <input type="text" placeholder="Company (optional)">
        </section>
      </article>
      <article class="detail">
        <section class="inputFields">
          <p>Street Address*</p>
          <input type="text" placeholder="House number and street name">
        </section>
        <section class="inputFields">
          <p>Apt, suite, unit</p>
          <input type="text" placeholder="apartment, suite, unit, etc. (optional)">
        </section>
      </article>
      <article class="detail">
        <section class="inputFields">
          <p>City*</p>
          <input type="text" placeholder="Town / City">
        </section>
        <section class="inputFields">
          <p>State</p>
          <input type="text" placeholder="State">
        </section>
      </article>
      <article class="detail">
        <section class="inputFields">
          <p>Phone*</p>
          <input type="text" placeholder="Phone">
        </section>
        <section class="inputFields">
          <p>Postal Code*</p>
          <input type="text" placeholder="Postal Code">
        </section>
      </article>
      <article class="detail">
        <section class="inputDeliveryInstruction">
          <p>Delivery Instruction</p>
          <textarea name="" id="" placeholder="Delivery Instruction"></textarea>
        </section>
      </article>
      <article class="detail">
        <section class="checkboxInput">
          <article>
            <input type="checkbox" name="" id="">
            <p>Set as default shipping address</p>
          </article>
          <article>
            <input type="checkbox" name="" id="">
            <p>Set as default billing address</p>
          </article>
        </section>
      </article>
      <article class="detail">
        <section class="detailBtn">
          <button id="saveBtn">Save</button>
          <button>Cancel</button>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/AddressInfo.scss';
</style>