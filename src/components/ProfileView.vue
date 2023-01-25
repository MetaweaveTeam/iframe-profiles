<template>
  <div class="h-full w-full bg-[#18152e]">
    <div class="max-h-64 overflow-hidden object-center">
      <img class="w-full object-center bg-white" :src="banner" alt="User Banner" />
    </div>
    <div class="flex justify-start px-5 -mt-12 mb-5">
      <span clspanss="block relative h-32 w-32 object-center">
        <img alt="Profile Avatar" :src="avatar" class="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
      </span>
    </div>
    <div class="px-7 mb-8">
      <h2 class="text-3xl font-bold text-white">{{ name }}</h2>
      <p class="text-gray-200 mt-2">{{ handle }}</p>
      <p class="mt-2 text-gray-400">{{ bio }}</p>
      <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
        <a v-for="link in links" :key="link.identify" :href="link.href" target="_blank"
          class="text-gray-500 hover:text-gray-200 hover:scale-110 ease-in duration-150 p-1 sm:p-2 inline-flex items-center">
          <span class="sr-only">{{ link.identify }}</span>
          <GetIcon :identify="link.identify" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GetIcon from "../components/Icons/GetIcon.vue";
import { useProfileStore } from "@/stores/profile";

const profileStore = useProfileStore();
const { getProfile } = profileStore;

const name = getProfile().name;
const handle = getProfile().handle;
const avatar = getProfile().avatarURL;
const banner = getProfile().bannerURL;
const bio = getProfile().bio;
const links = getProfile().links;
</script>
