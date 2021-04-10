<template>
  <div class="orders--pickup shadow-md rounded-lg bg-white mb-4">
    <div class="p-4 font-semibold">Pickup Information</div>
    <hr />
    <div class="p-4">
      <div class="flex flex-col lg:flex-row mb-4">
        <div class="pickup__address w-full lg:w-1/2 pr-4 mb-2 lg:mb-0">
          <label class="text-sm text-gray-400 font-semibold mb-2 inline-block">
            Items to be picked up at
          </label>
          <p>{{ address.name }}</p>
          <p>{{ address.street }}</p>
          <p>{{ address.city }}, {{ address.state }}, {{ address.zip }}</p>
          <a
            href="javascript:void(0)"
            class="text-xs text-blue-500 cursor-pointer hover:text-blue-700"
            @click="emitEvent('edit-pickup-address-click', data)"
          >
            Change
          </a>
        </div>
        <div class="pickup__schedule w-full lg:w-1/2 pr-4">
          <label class="text-sm text-gray-400 font-semibold mb-2 inline-block">
            Selected Pickup Date
          </label>
          <template v-if="selectedPickupDate">
            <p>
              {{ selectedPickupDate }}
            </p>
            <a
              href="javascript:void(0)"
              class="text-xs text-blue-500 cursor-pointer hover:text-blue-700"
              @click="
                emitEvent('schedule-pickup-click', {
                  data,
                  suggestedDate: data.selectedPickupDate,
                })
              "
            >
              Change
            </a>
          </template>
          <template v-else>
            <div>
              <button
                class="p-2 border border-blue-500 rounded text-blue-500 focus:outline-none hover:bg-blue-100 text-sm"
                @click="
                  emitEvent('schedule-pickup-click', { data, suggestedDate })
                "
              >
                Schedule Pickup
              </button>
            </div>
          </template>
        </div>
      </div>
      <div class="pickup__items mb-4">
        <div class="flex justify-between">
          <label class="text-sm text-gray-400 font-semibold mb-2">
            Pickup Items
          </label>
        </div>
        <div
          v-for="(item, i) in data.pickupItems"
          :key="i"
          class="border p-2"
          :class="[
            { 'rounded-t-lg': i === 0 },
            { 'rounded-b-lg': i === data.pickupItems.length - 1 },
            i < data.pickupItems.length - 1 ? 'border-b-0' : 'border-b',
          ]"
        >
          <div class="flex flex-col lg:flex-row items-center">
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
            <div class="flex-grow text-center lg:text-left">
              <p>{{ item.name }}</p>
              <small class="text-gray-400">{{ item.selectedOptions }}</small>
            </div>
            <div class="py-2 lg:p-4 text-right">
              <p class="text-blue-500 font-semibold">
                {{ item.quantity }} @ ${{ item.price.toFixed(2) }}
              </p>
            </div>
          </div>
          <div class="text-center lg:text-left">
            <a
              href="javascript:void(0)"
              class="text-xs text-green-500 cursor-pointer mr-2 hover:text-green-700"
              @click="emitEvent('update-pickup-item-click', item)"
            >
              Update
            </a>
            <a
              href="javascript:void(0)"
              class="text-xs text-red-500 cursor-pointer hover:text-red-700"
              @click="emitEvent('remove-pickup-item-click', item)"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { formatDateWithLeadTime, formatDate } from '@/helpers/cart.helper';

export default Vue.extend({
  inject: ['data', 'emitEvent'],

  computed: {
    address() {
      return (this as any).data.pickupLocation;
    },

    suggestedDate() {
      return formatDateWithLeadTime((this as any).data.pickupLeadTime).base;
    },

    selectedPickupDate() {
      const vm = this as any;
      if (!vm.data.selectedPickupDate) {
        return null;
      }

      return formatDate(new Date(vm.data.selectedPickupDate)).formatted;
    },
  },
});
</script>

<style>
</style>