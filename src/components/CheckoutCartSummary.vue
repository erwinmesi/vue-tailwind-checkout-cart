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
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  inject: ['data'],

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
      return vm.subTotal * (vm.data?.taxes || 0.5);
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
<style scoped lang="scss">
.checkout-cart__order-summary {
  min-width: 320px;
}
</style>