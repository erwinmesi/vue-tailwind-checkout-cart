<template>
  <div class="vue-tw-checkout-cart">
    <h1>Hello, World! This is Vue-Tailwind Checkout Cart!</h1>
    <pre>cart {{ cart }}</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default /*#__PURE__*/ Vue.extend({
  name: 'VueTailwindCheckoutCart', // vue component name,
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },
});
</script>
