<template>
  <div v-if="props.identify">
    <GitHub v-if="'github' === identify" />
    <Instagram v-if="'instagram' === identify" />
    <Twitter v-if="'twitter' === identify" />
    <Facebook v-if="'facebook' === identify" />
  </div>
</template>

<script setup lang="ts">
import GitHub from "./GitHubIcon.vue";
import Instagram from "./InstagramIcon.vue";
import Twitter from "./TwitterIcon.vue";
import Facebook from "./FacebookIcon.vue";

const props = defineProps({
  identify: {
    type: String,
    required: true,
  },
});

const identify = props.identify.toLocaleLowerCase();
</script>
