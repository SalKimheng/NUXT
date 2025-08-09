<script setup lang="ts">
import Bottomheader from './header/Bottomheader.vue';
import Topheader from './header/Topheader.vue';


</script>

<template>
    <header class="shadow-lg custom-gradient">
      <div class="flex xl:flex-nowrap flex-wrap m-0 ">
        <div class="h-[107px] bg-black p-[10px] flex items-center justify-center rounded-tr-[60px] ps-0 lg:ps-20 xxl:ps-25">
          <h1 class="text-white text-[96px] ms-auto uppercase">
            Logo
          </h1>
        </div>
        <div class="flex flex-col w-full flex-wrap">
          <Topheader class="min-h-[60px] xl:py-0 py-5" />
          <Bottomheader class="min-h-[47px] xl:py-0 py-5" />
        </div>
      </div>
    </header>
  </template>
  