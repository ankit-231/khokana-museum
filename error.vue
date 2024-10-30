<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <div class="text-center">
        <h1 class="text-9xl font-bold">404</h1>
        <p class="text-2xl">Page not found</p>
        <NuxtLink to="/" class="mt-6 text-xl font-bold hover:underline">Go back home</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>