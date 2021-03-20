<template>
  <div class="vue-tw-checkout-cart">
    <CheckoutCartPublisher class="mr-4 mb-4" />
    <div class="flex">
      <div class="checkout-cart__orders shadow-md p-5 rounded-lg mr-4">
        <strong class="text-semibold">Items will appear here</strong> | Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Minima maiores quaerat consectetur,
        voluptate fuga veniam laboriosam sed voluptatem, fugit nulla distinctio
        cumque optio blanditiis dolor perferendis? Quaerat autem laboriosam ab!
      </div>
      <div class="checkout-cart__order-summary shadow-md p-5 rounded-lg">
        <h4 class="text-lg font-medium text-gray-600 mb-4">Order Summary</h4>
        <p class="flex justify-between mb-1 text-gray-500">
          <span>Subtotal:</span>
          <span>$0.00</span>
        </p>
        <p class="flex justify-between mb-1 text-gray-500">
          <span>Taxes:</span>
          <span>$0.00</span>
        </p>
        <hr class="my-4" />
        <p class="flex justify-between mb-1">
          <span>Total:</span>
          <span>$0.00</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckoutCartPublisher from '@/CheckoutCartPublisher.vue';

export default /*#__PURE__*/ Vue.extend({
  name: 'VueTailwindCheckoutCart',

  provide() {
    return {
      data: this.data,
    };
  },

  components: {
    CheckoutCartPublisher,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
.checkout-cart__order-summary {
  min-width: 320px;
}
</style>