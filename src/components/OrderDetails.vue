<script setup>
  const orderDetails = {
    orderNumber: '123456789',
    placedOn: '2 June 2023 2:40 PM',
    total: 143.00,
    statusSteps: ['Order Placed', 'In Progress', 'Shipped', 'Delivered'],
    verificationMessage: 'Your order has been successfully verified.',
    verificationTime: '8 June 2023 3:40 PM',
  };

  const currentStep = 1;

  const items = [
    {
      name: 'Printed white cotes',
      quantity: 1,
      color: 'White',
      price: 29.00,
      image: '../../public/OrderDetails1.png', 
    },
    {
      name: 'Men Blue Shirt',
      quantity: 1,
      color: 'Blue',
      price: 29.00,
      image: '../../public/OrderDetails2.png',
    },
  ];

</script>

<template>
  <article class="order-details">
    <h2>Order Details</h2>
    <section class="order-info">
      <article>
        <p>Order no: <strong>#{{ orderDetails.orderNumber }}</strong></p>
        <p>Placed On: {{ orderDetails.placedOn }}</p>
      </article>
      <p>Total: <strong>${{ orderDetails.total }}</strong></p>
    </section>
    <section class="order-status">
      <article class="status-step" v-for="(step, index) in orderDetails.statusSteps" :key="index">
        <span :class="{'active': index <= currentStep}">
          {{ step }}
        </span>
      </article>
    </section>
    <section class="verification-message">
      <p>{{ orderDetails.verificationMessage }}</p>
      <p>{{ orderDetails.verificationTime }}</p>
    </section>
    <section class="order-items" v-for="(item, index) in items" :key="index">
      <article class="item">
        <img :src="item.image" alt="" />
        <section class="item-details">
          <h3>{{ item.name }}</h3>
          <p>Qty: {{ item.quantity }}</p>
          <p>Color: {{ item.color }}</p>
          <p class="price">${{ item.price }}</p>
        </section>
        <button class="remove-button">×</button>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/OrderDetailsStyle.scss';
</style>