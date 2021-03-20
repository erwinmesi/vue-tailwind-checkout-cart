<template>
  <div id="app">
    <VueTwCheckoutCart :cart="cart" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTwCheckoutCart from '@/VueTwCheckoutCart.vue';
import cart from '@/mocks/cart.json';

export default Vue.extend({
  name: 'ServeDev',

  components: {
    VueTwCheckoutCart,
  },

  data() {
    return {
      cart,
    };
  },
});
</script>
