<script setup>
  import { ref, computed } from 'vue';

  const cartItems = ref([
    { id: 1, name: 'Blue Flower Print Crop Top', color: 'Yellow', size: 'M', price: 29.00, quantity: 1, shipping: 'FREE', image: '../../public/AddToCart1.png' },
    { id: 2, name: 'Lavender Hoodie', color: 'Lavender', size: 'XXL', price: 119.00, quantity: 2, shipping: 'FREE', image: '../../public/AddToCart2.png' },
    { id: 3, name: 'Black Sweatshirt', color: 'Black', size: 'XXL', price: 123.00, quantity: 2, shipping: 5.00, image: '../../public/AddToCart3.png' },
  ]);

  const coupon = ref('');

  const subTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + calculateSubtotal(item), 0);
  }); 
  const shippingCost = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.shipping === 'FREE' ? 0 : item.shipping), 0);
  });
  const grandTotal = computed(() => {
    return subTotal.value + shippingCost.value;
  });
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };
  const increment = (item) => {
    item.quantity++;
  };
  const decrement = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
    }
  };
  const removeItem = (id) => {
    cartItems.value = cartItems.value.filter(item => item.id !== id);
  };
  const applyCoupon = () => {
    alert(`Applied coupon: ${coupon.value}`);
  };
  const continueShopping = () => {
    alert('Continue shopping!');
  };
  const proceedToCheckout = () => {
    alert('Proceed to checkout!');
  };
</script>

<template>
  <main>
    <article class="shopping-cart">
      <h2>Add To Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Shipping</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id">
            <td>
              <img :src="item.image" alt="Product Image" />
              <article>
                <p>{{ item.name }}</p>
                <p>Color: {{ item.color }}</p>
                <p>Size: {{ item.size }}</p>
              </article>
            </td>
            <td>{{ formatPrice(item.price) }}</td>
            <td>
              <button @click="decrement(item)">-</button>
              {{ item.quantity }}
              <button @click="increment(item)">+</button>
            </td>
            <td>{{ item.shipping }}</td>
            <td>{{ formatPrice(calculateSubtotal(item)) }}</td>
            <td><button @click="removeItem(item.id)">🗑️</button></td>
          </tr>
        </tbody>
      </table>
      <section class="shoppingPrice">
        <article class="discount-codes">
          <h3>Discount Codes</h3>
          <input v-model="coupon" placeholder="Enter your coupon code if you have one">
          <button @click="applyCoupon">Apply Coupon</button>
          <button @click="continueShopping">Continue Shopping</button>
        </article>
        <article class="totals">
          <p>Sub Total: {{ formatPrice(subTotal) }}</p>
          <p>Shipping: {{ formatPrice(shippingCost) }}</p>
          <p>Grand Total: {{ formatPrice(grandTotal) }}</p>
          <button @click="proceedToCheckout" class="checkout-btn">Proceed To Checkout</button>
        </article>
      </section>
    </article>
  </main>
</template>

<style scoped lang="scss">
  @import '../assets/styles/AddToCartStyle.scss';
</style>