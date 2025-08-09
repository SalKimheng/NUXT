<script setup lang="ts">
import { bottomNavItem } from '~/composables/dummy';
import flag from '~/assets/icons/flag.svg';
import toggle from '~/assets/icons/toogle.svg';
const isChecked = ref(false)
</script>

<template>
  <nav class="bg-black text-white">
    <ul class="flex flex-wrap gap-10 text-sm font-medium lg:mt-2 items-center justify-around">
      <li v-for="(item, index) in bottomNavItem" :key="index">
        <NuxtLink :to="item.path" class="flex items-center gap-2">
          <img :src="item.icon" alt="" class="w-5 h-5" />
          {{ item.name }}
        </NuxtLink>
      </li>
      
      <li class="flex flex-wrap gap-3">
        <NuxtLink
          to="#"
          class="flex items-center gap-2 bg-white text-black rounded-full px-3 py-1 h-[34px] uppercase"
        >
          <img
            :src="flag"
            alt="Vietnamese Flag"
            class="w-6 h-6 rounded-full"
          />
          <span class="text-sm font-medium">tiếng việt</span>
        </NuxtLink>
        <label class="relative inline-block w-[60px] h-[30px] cursor-pointer">
          <input
            type="checkbox"
            v-model="isChecked"
            class="sr-only"
          />
          <div
            class="block bg-black border border-amber-400 w-full h-full rounded-full transition duration-300"
            :class="{ 'bg-black': isChecked }"
          ></div>

          <div
            class="absolute bottom-[0.5px] left-[2px] w-[30px] h-[30px] bg-white rounded-full shadow-md transform transition duration-300"
            :class="{ 'translate-x-7': isChecked }">
            <img
              :src="toggle"
              alt="Sun"
              class="my-auto"
            />
          </div>
        </label>
      </li>
      
    </ul>
  </nav>
</template>

