<template>
  <div class="vue-tw-checkout-cart p-2" :class="twBgColor">
    <CheckoutCartPublisher v-if="data.publisher" class="mb-4" />
    <div class="flex flex-col md:flex-row">
      <div class="checkout-cart__orders flex flex-col flex-grow">
        <template v-if="deliveryItems.length || pickupItems.length">
          <CheckoutCartDeliveryItems v-if="deliveryItems.length" />
          <CheckoutCartPickupItems v-if="pickupItems.length" />
        </template>
        <div v-else class="shadow-md rounded-lg bg-white mb-4 p-4">
          No orders to show.
        </div>
      </div>
      <div class="md:ml-4">
        <CheckoutCartSummary class="p-5 sticky top-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckoutCartPublisher from '@/components/CheckoutCartPublisher.vue';
import CheckoutCartSummary from '@/components/CheckoutCartSummary.vue';
import CheckoutCartDeliveryItems from '@/components/CheckoutCartDeliveryItems.vue';
import CheckoutCartPickupItems from '@/components/CheckoutCartPickupItems.vue';

export default /*#__PURE__*/ Vue.extend({
  name: 'VueTailwindCheckoutCart',

  provide() {
    const vm = this as any;
    return {
      data: vm.data,
      emitEvent: vm.emitEvent,
    };
  },

  components: {
    CheckoutCartPublisher,
    CheckoutCartSummary,
    CheckoutCartDeliveryItems,
    CheckoutCartPickupItems,
  },

  props: {
    twBgColor: {
      type: String,
      default: 'bg-gray-100',
    },

    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    deliveryItems() {
      return (this as any).data.deliveryItems || [];
    },

    pickupItems() {
      return (this as any).data.pickupItems || [];
    },
  },

  methods: {
    emitEvent(eventName: string, data: any) {
      this.$emit(eventName, data);
    },
  },
});
</script>
<style scoped lang="scss">
.checkout-cart__order-summary {
  min-width: 320px;
}
</style>