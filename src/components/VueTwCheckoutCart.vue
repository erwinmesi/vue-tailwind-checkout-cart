<template>
  <div class="vue-tw-checkout-cart p-2" :class="twBgColor">
    <CheckoutCartPublisher v-if="data.publisher" class="mb-4" />
    <div class="flex">
      <div class="checkout-cart__orders flex flex-col flex-grow">
        <CheckoutCartDeliveryItems v-if="data.deliveryItems.length" />
      </div>
      <div>
        <CheckoutCartSummary class="p-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CheckoutCartPublisher from '@/components/CheckoutCartPublisher.vue';
import CheckoutCartSummary from '@/components/CheckoutCartSummary.vue';
import CheckoutCartDeliveryItems from '@/components/CheckoutCartDeliveryItems.vue';

export default /*#__PURE__*/ Vue.extend({
  name: 'VueTailwindCheckoutCart',

  provide() {
    return {
      data: this.data,
    };
  },

  components: {
    CheckoutCartPublisher,
    CheckoutCartSummary,
    CheckoutCartDeliveryItems,
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
});
</script>
<style scoped lang="scss">
.checkout-cart__order-summary {
  min-width: 320px;
}
</style>