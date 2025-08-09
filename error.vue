<!-- ~/error.vue -->
<template>
    <div class="text-center p-10 text-black">
      <h1 class="text-3xl font-bold ">Oops! {{ error.statusCode }}</h1>
      <p class="my-5">{{ error.message }}</p>
      <span>
         <NuxtLink to="/" class="bg-green-800 text-white rounded-3xl px-3 py-2">Go back</NuxtLink>
      </span>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{ error: { statusCode: number; message: string } }>()
  </script>
  