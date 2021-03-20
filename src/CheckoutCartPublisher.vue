<template>
  <div class="shadow-md p-5 rounded-lg">
    <div class="flex">
      <div class="mr-3">
        <img
          class="min-h-24 min-w-24 rounded"
          :src="data.publisher.image"
          :alt="data.publisher.username"
        />
      </div>
      <div>
        <h4 class="font-semibold">{{ data.publisher.username }}</h4>
        <p class="text-sm mb-2">
          <span class="font-medium">Publiser ID:</span>
          {{ data.publisher.id }}
        </p>
        <small
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          iure quis magnam excepturi similique alias tenetur quos. Pariatur et
          fugit culpa consectetur officia eligendi nam voluptatum corrupti nisi!
          Quas, voluptates?</small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['data'],
};
</script>

<style>
</style>