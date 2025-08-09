<script setup lang="ts">
import type { PropType } from 'vue'
defineProps({
  label: { type: String, required: true },
  items: {
    type: Array as PropType<Array<{ label: string; icon?: string; path?: string }>>,
    required: true
  }
})
</script>

<template>
  <UDropdownMenu
    class="custom-text-black text-base font-normal uppercase p-0 m-0"
    trigger="hover"
    :popper="{ offset: [0, 0] }"
  >
    <UButton
      :label="label"
      variant="link"
      trailing-icon="i-lucide-chevron-down"
      class="text-base font-normal uppercase p-0 m-0"
    />
  </UDropdownMenu>
</template>