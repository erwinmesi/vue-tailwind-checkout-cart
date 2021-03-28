<template>
  <div class="shadow-md p-5 rounded-lg bg-white">
    <div class="flex">
      <div>
        <img
          v-if="publisher.image"
          class="rounded mr-4"
          style="min-width: 75px; min-height: 75px; width: 75px; height: 75px"
          :src="publisher.image"
          :alt="publisher.username"
        />
      </div>
      <div class="flex flex-col justify-center">
        <h4 class="font-semibold text-xl text-blue-500">{{ publisher.username }}</h4>
        <p class="text-sm mb-2">
          This is some store information I want my users to know.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['data'],

  computed: {
    publisher() {
      return this.data.publisher || {};
    },
  },
};
</script>

<style>
</style>