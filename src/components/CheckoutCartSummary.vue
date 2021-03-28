<template>
  <div class="checkout-cart__order-summary shadow-md rounded-lg bg-white">
    <h4 class="text-lg font-medium text-gray-600 mb-4">Order Summary</h4>
    <p class="flex justify-between mb-1 text-gray-400">
      <span>Subtotal:</span>
      <span>${{ subTotal.toFixed(2) }}</span>
    </p>
    <p class="flex justify-between mb-1 text-gray-400">
      <span>Taxes:</span>
      <span>${{ taxes.toFixed(2) }}</span>
    </p>
    <hr class="my-4" />
    <p class="flex justify-between mb-1">
      <span>Total:</span>
      <span>${{ total.toFixed(2) }}</span>
    </p>
    <button
      class="p-2 border border-blue-500 bg-blue-500 rounded text-white focus:outline-none hover:bg-blue-700 hover:border-blue-700 text-sm w-full mt-4"
      @click="emitEvent('checkout-click', { data, subTotal, taxes, total })"
    >
      Checkout
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inject: ['data', 'emitEvent'],

  computed: {
    subTotal() {
      const vm = this as any;
      const { deliveryItems = [], pickupItems = [] } = vm.data;

      const deliveryItemsTotal = vm.getTotal(deliveryItems);
      const pickupItemsTotal = vm.getTotal(pickupItems);

      return deliveryItemsTotal + pickupItemsTotal;
    },

    taxes() {
      const vm = this as any;
      return vm.subTotal * (vm.data?.tax || 0.5);
    },

    total() {
      const vm = this as any;
      return vm.subTotal + vm.taxes;
    },
  },

  methods: {
    getTotal(items: any[]) {
      return (items || []).reduce((total: number, item: any) => {
        total += +item.quantity * +item.price;
        return total;
      }, 0);
    },
  },
});
</script>
