<script setup lang="ts">
import {onMounted } from 'vue'
const loading = defineEmits(['loaded'])
onMounted(() => {
  setTimeout(() => {
    loading('loaded')
  }, 500)
})
</script>

<template>
  <div class="w-full h-full relative rounded-[15px] overflow-hidden bg-neutral-100">
    <div class="absolute inset-0 bg-neutral-200 animate-pulse" />
    <div class="absolute top-0 right-0 w-[40px] h-[40px] bg-neutral-300 rounded-full opacity-60 animate-pulse" />
    <div class="absolute bottom-[50px] left-2 w-[30px] h-[30px] bg-neutral-300 rounded-full opacity-40 animate-spin" />
    <div class="absolute bottom-0 left-0 right-0 px-1 py-0.5 bg-gradient-to-b from-neutral-200 to-neutral-300 rounded-[20px] flex items-center justify-between z-0 shadow-sm">
      <div class="text-center mx-auto leading-tight">
        <div class="h-3 w-[80px] bg-neutral-400 rounded mb-1 animate-pulse" />
        <div class="h-4 w-[60px] bg-neutral-300 rounded animate-pulse" />
      </div>
      <div class="w-[40px] h-[40px] bg-neutral-400 rounded-full ml-2 animate-pulse" />
    </div>
  </div>
</template>
