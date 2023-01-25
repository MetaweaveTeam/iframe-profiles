<template>
  <div
    class="h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
    <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-red-300">
      {{ errorCode }}
    </p>
    <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-red-500 mt-4">
      {{ errorTitle }}
    </p>
    <p class="text-red-500 mt-8 py-2 border-y-2 text-center" v-html="errorMessage"></p>
  </div>
</template>

<script setup lang="ts">
import { useErrorStore } from "@/stores/error";

const errorStore = useErrorStore();
const { getError } = errorStore;

const error = getError();
const errorCode = error.code;
const errorTitle = error.title;
const errorMessage = error.message;
</script>
