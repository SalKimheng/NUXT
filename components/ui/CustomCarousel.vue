<script setup lang="ts">
import { ref } from 'vue'
import { cardItem } from '~/composables/dummy'
import CustomCard from './CustomCard.vue';
import arrowright from '~/assets/icons/arrowright.svg'
import arrowUp from '~/assets/icons/arrowup.svg'

const showCard = ref(false)
</script>

<template>
  <div class="px-20 m-auto flex justify-end mt-10">
    <span
      class="flex items-center gap-2 custom-text-black font-bold cursor-pointer"
      @click="showCard = !showCard"
    >
      <p>{{ showCard ? 'Thu gọn' : 'Xem tất cả' }}</p>
      <img :src="showCard ? arrowUp : arrowright" alt="" />
    </span>
  </div>
  <div v-if="!showCard" class="overflow-hidden xl:px-38 lg:px-20 md:px-25 m-auto border-t-2 rounded-t-2xl border-amber-200 pt-5 justify-center">
    <UCarousel 
     class="cursor-pointer"
      v-slot="{ item }"
      arrows
      dragFree
      :items="cardItem"
       :ui="{ item: 'basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ' }"
    >
      <CustomCard
      class="m-auto"
        :img="item.img"
        :title="item.title"
        :name="item.name"
        :logo="item.logo"
        :topIcon="item.topIcon"
        :bottomIcon="item.bottomIcon"
      />
    </UCarousel>
  </div>
  <div v-else class="flex flex-wrap gap-2 justify-center border-t-2 rounded-t-2xl border-amber-200 pt-5">
    <CustomCard
    v-for="(item, index) in [...cardItem, ...cardItem].slice(0, 20)"
    :key="index"
    :img="item.img"
    :title="item.title"
    :name="item.name"
    :logo="item.logo"
    :topIcon="item.topIcon"
    :bottomIcon="item.bottomIcon"
  />
  </div>
</template>
