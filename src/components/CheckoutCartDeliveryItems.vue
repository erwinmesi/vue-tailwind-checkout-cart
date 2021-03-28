<template>
  <div class="orders--delivery shadow-md rounded-lg mr-4 bg-white mb-4">
    <div class="p-4 font-semibold">Delivery Information</div>
    <hr />
    <div class="p-4">
      <div class="flex mb-4">
        <div class="delivery__address w-1/2 pr-4">
          <label class="text-sm text-gray-400 font-semibold mb-2 inline-block">
            Items to be delivered to
          </label>
          <p>{{ address.name }}</p>
          <p>{{ address.street }}</p>
          <p>{{ address.city }}, {{ address.state }}, {{ address.zip }}</p>
          <a
            href="javascript:void(0)"
            class="text-xs text-blue-500 cursor-pointer"
            @click="$emit('address-edit-click')"
          >
            Change
          </a>
        </div>
        <div class="delivery__schedule w-1/2 pr-4">
          <div class="flex justify-between">
            <label class="text-sm text-gray-400 font-semibold mb-2">
              Estimated Delivery Date
            </label>
          </div>
          <p>
            {{ deliveryDate }}
          </p>
        </div>
      </div>
      <div class="delivery__items mb-4">
        <div class="flex justify-between">
          <label class="text-sm text-gray-400 font-semibold mb-2">
            Delivery Items
          </label>
        </div>
        <div
          v-for="(item, i) in data.deliveryItems"
          :key="i"
          class="border p-2"
          :class="[
            { 'rounded-t-lg': i === 0 },
            { 'rounded-b-lg': i === data.deliveryItems.length - 1 },
            i < data.deliveryItems.length - 1 ? 'border-b-0' : 'border-b',
          ]"
        >
          <div class="flex items-center">
            <div class="mr-2 text-center">
              <img
                :src="item.image"
                class="object-contain bg-no-repeat"
                :alt="item.name"
                style="
                  min-width: 100px;
                  width: 100px;
                  min-height: 100px;
                  height: 100px;
                "
              />
            </div>
            <div class="flex-grow">
              <p>{{ item.name }}</p>
              <small class="text-gray-400">{{ item.selectedOptions }}</small>
            </div>
            <div class="p-4 text-right">
              <p class="text-blue-500 font-semibold">
                {{ item.quantity }} @ ${{ item.price.toFixed(2) }}
              </p>
            </div>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              class="text-xs text-green-500 cursor-pointer mr-2"
              @click="$emit('item-update-click', item)"
            >
              Update
            </a>
            <a
              href="javascript:void(0)"
              class="text-xs text-red-500 cursor-pointer"
              @click="$emit('item-remove-click', item)"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { monthsNames } from '@/helpers/date.helper';
export default {
  inject: ['data'],

  computed: {
    address() {
      return this.data.deliveryLocation;
    },

    deliveryDate() {
      const currentDate = Math.round(new Date().getTime() / 1000);

      const deliveryDate = new Date(
        (currentDate + this.data.deliveryLeadTime * 60) * 1000
      );

      return `${
        monthsNames[deliveryDate.getMonth()]
      } ${deliveryDate.getDate()}, ${deliveryDate.getFullYear()}`;
    },
  },
};
</script>

<style>
</style>