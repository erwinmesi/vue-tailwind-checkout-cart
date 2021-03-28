<template>
  <div id="app" class="p-4">
    <h4 class="font-semibold text-xl text-gray-600 mb-4">Checkout</h4>
    <VueTwCheckoutCart :data="cart" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import VueTwCheckoutCart from '@/components/VueTwCheckoutCart.vue';
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
<style scoped lang="scss">
@import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

html * {
  font-family: 'Montserrat', sans-serif;
}
</style>
