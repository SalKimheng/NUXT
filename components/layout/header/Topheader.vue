<script setup lang="ts">
import { ref } from 'vue'
import { topNavItem } from '~/composables/dummy'
import coin from '~/assets/icons/Coin.svg'
import plus from '~/assets/icons/Plus.svg'
import ring from '~/assets/icons/notification.svg'
import box from '~/assets/icons/Frame 211.svg'
import date from '~/assets/icons/calender.svg'
import profile from '~/assets/icons/User-avatar.svg'

const selected = ref<string | null>(null)
</script>

<template>
  <nav>
    <ul class="flex flex-wrap gap-10 text-sm font-medium justify-around">
      <!-- Render topNavItem links -->
      <li v-for="(item, index) in topNavItem" :key="index" class="flex items-center text-base font-normal uppercase">
        <UDropdownMenu
          v-if="item.dropdown"
          size="lg"
          :items="item.items.map(dropdownItem => ({
            label: dropdownItem.label,
            icon: dropdownItem.icon
          }))"
          :content="{ align: 'center', side: 'bottom', sideOffset: -8, collisionPadding: 0 }"
          :ui="{
            content: 'rounded-[20px] custom-bg-dropdown',
            item: 'my-2 px-4 py-2 text-black rounded-full shadow-lg '
          }"
        >
          <UButton
            size="xl"
            :label="item.name"
            class=" bg-primary-0 hover:bg-primary-0 custom-bg-hover hover:rounded-[20px] hover:text-amber-300 text-base font-normal uppercase cursor-pointer"
          />

          <template #item="{ item: dropdownItem }">
            <div class="flex items-center cursor-pointer">
              <img
                v-if="typeof dropdownItem.icon === 'string' && dropdownItem.icon.endsWith('.svg')"
                :src="dropdownItem.icon"
                :alt="dropdownItem.label"
                class="w-5 h-5"
              />
              <i v-else-if="dropdownItem.icon" :class="dropdownItem.icon"></i>
              <span class="ms-2 ">{{ dropdownItem.label }}</span>
            </div>
          </template>
        </UDropdownMenu>

        <NuxtLink
        class=""
          v-else
          :to="item.path || '#'"
        >
        <span class="text-black custom-bg-hover hover:rounded-[20px] hover:text-amber-300 hover:py-2 text-base font-normal uppercase">
         {{ item.name }}
        </span>
        </NuxtLink>
      </li>
      <li class="flex flex-wrap items-center gap-3 m-0 p-0 h-[60px]">
        <template v-if="!selected">
          <NuxtLink @click.prevent="selected = 'login'" class="bg-white text-black uppercase px-4 py-2 shadow-lg rounded-[20px] cursor-pointer">
            đăng ký
          </NuxtLink>
          <NuxtLink @click.prevent="selected = 'register'" class="custom-bg-btn text-amber-300 uppercase px-4 py-2 shadow-lg rounded-[20px] cursor-pointer">
            đăng nhập
          </NuxtLink>
        </template>
        <div v-else-if="selected" class="flex flex-col">
          <p class="text-center font-normal text-[10px] text-black p-0 m-0">Xin chào, NguyenVanDen</p>
          <div class="flex gap-3 rounded-[20px] custom-bg-btn">
            <span class="flex items-center bg-white text-black rounded-[20px] my-2 cursor-pointer px-1">
              <UDropdownMenu
                  size="lg"
                   :items="coinItem"
                  :ui="{
                    content: 'rounded-[20px] custom-bg-dropdown',
                    item: 'my-2 px-4 py-2 text-black rounded-full shadow-lg '
                  }"
                >
                <span class="flex">
                  <img :src="coin" alt="">
                  <p>1000</p>
                  <img class="bg-amber-200 rounded-2xl p-1 ms-2" :src="plus" alt="">
                </span>
                  <template #item="{ item: coinItem }">
                    <div class="flex items-center cursor-p  ointer">
                      <img
                        :src="coinItem.icon"
                        :alt="coinItem.label"
                      />
                      <span class="ms-2">{{ coinItem.label }}</span>
                    </div>
                  </template>
                </UDropdownMenu>
             
            </span>
            <span class="flex gap-3">
              <img class="w-[30px] cursor-pointer" :src="ring" alt="">
              <img class="w-[30px] cursor-pointer" :src="box" alt="">
              <img class="w-[30px] cursor-pointer" :src="date" alt="">
              <UDropdownMenu
                  size="lg"
                   :items="profileItems"
                  :ui="{
                    content: 'rounded-[20px] custom-bg-dropdown',
                    item: 'my-2 px-4 py-2 text-black rounded-full shadow-lg '
                  }"
                >
                <img label="Open" class="w-[40px] cursor-pointer" :src="profile" alt="">
                  <template #item="{ item: profileItems }">
                    <div class="flex items-center cursor-p  ointer">
                      <img
                        :src="profileItems.icon"
                        :alt="profileItems.label"
                      />
                      <span class="ms-2">{{ profileItems.label }}</span>
                    </div>
                  </template>
                </UDropdownMenu>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
