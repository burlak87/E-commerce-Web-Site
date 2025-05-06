<script setup>
  import { ref, computed, onMounted } from 'vue';

  const orderItems = ref([]);
  const orderDetails = ref(null);
  const myOrder = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const orderId = ref(1);

  const activeTab = ref('Active');
  const tabs = ref([
    'Active',
    'Cancelled',
    'Completed'
  ]);
  const orders = ref([
    {
      id: '#123456789',
      date: '3 June 2023 5:40 PM',
      deliveryDate: '8 June 2023',
      status: 'In Progress',
      payment: 'Cash on delivery',
      product: { imgPath: '../../public/Order3.png', name: 'Black Printed T-shirt', colour: 'Pink', qty: 1, total: 23.00 }
    },
    {
      id: '#123456790',
      date: '2 June 2023 5:40 PM',
      deliveryDate: '8 June 2023',
      status: 'Shipped',
      payment: 'Cash on delivery',
      product: { imgPath: '../../public/Order1.png', name: 'Printed blue & white Cote', colour: 'White', qty: 1, total: 148.00 }
    },
    {
      id: '#123456791',
      date: '3 June 2023 2:49 PM',
      deliveryDate: '8 June 2023',
      status: 'In Progress',
      payment: 'Cash on delivery',
      product: { imgPath: '../../public/Order2.png', name: 'Blue Shirt', colour: 'Blue', qty: 1, total: 91.00 }
    }
  ]);

  const filteredOrders = computed(() => {
    return orders.value.filter(order => {
      if (activeTab.value === 'Active') return order.status === 'In Progress' || order.status === 'Shipped';
      if (activeTab.value === 'Cancelled') return order.status === 'Cancelled';
      if (activeTab.value === 'Completed') return order.status === 'Completed';
    })
  });

  async function getOrderItems() {
    try {
      const response = await fetch('http://localhost:8000/order-items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching order items:', err);
      throw err;
    }
  }

  async function getOrderDetailsById(id) {
    try {
      const response = await fetch(`http://localhost:8000/order-details/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching order details:', err);
      throw err;
    }
  }

  async function getMyOrderById(id) {
    try {
      const response = await fetch(`http://localhost:8000/my-orders/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching my order:', err);
      throw err;
    }
  }

  async function loadOrderData() {
    loading.value = true;
    error.value = null;

    try {
      orderItems.value = await getOrderItems();
      orderDetails.value = await getOrderDetailsById(orderId.value);
      myOrder.value = await getMyOrderById(orderId.value);
    } catch (err) {
      error.value = err.message || 'Unknown error';
    } finally {
      loading.value = false;
    }
  }

  onMounted(() => {
    loadOrderData();
  });
</script>

<template>
  <article class="my-orders">
    <h2>My Orders</h2>
    <section class="tabs">
      <button class="tab" v-for="tab in tabs" :key="tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">
        {{ tab }}
      </button>
    </section>
    <section class="order-list">
      <article v-for="order in filteredOrders" :key="order.id" class="order-item">
        <section>
          <article>
            <p>Order no: {{ order.id }}</p>
            <p>Order Date: {{ order.date }}</p>
            <p>Estimated Delivery Date: {{ order.deliveryDate }}</p>
          </article>
          <article>
            <p>Order Status: {{ order.status }}</p>
            <p>Payment Method: {{ order.payment }}</p>
          </article>
        </section>
        <section>
          <article class="product">
            <img :src="order.product.imgPath" alt="">
            <section class="product-info">
              <p>{{ order.product.name }}</p>
              <p>Colour: {{ order.product.colour }}</p>
              <p>Qty: {{ order.product.qty }}</p>
              <p>Total: ${{ order.product.total }}</p>
            </section>
          </article>
          <article>
            <button class="view-detail" @click.prevent="$router.push({ name: 'OrderDetails' })">View Detail</button>
          </article>
        </section>
      </article>
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/MyOrderStyle.scss';
</style>