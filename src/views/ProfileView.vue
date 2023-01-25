<template>
  <div>
    <LoadingScreen v-if="isLoading()" />
    <ErrorView v-else-if="getError().message || getError().code || getError().title" />
    <ProfileView v-else />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useProfileStore } from "@/stores/profile";
import { useErrorStore } from "@/stores/error";
import { useLoadingStore } from "@/stores/loading";
import LoadingScreen from "../components/LoadingScreen.vue";
import ProfileView from "../components/ProfileView.vue";
import ErrorView from "../components/ErrorView.vue";

const profileStore = useProfileStore();
const errorStore = useErrorStore();
const loadingStore = useLoadingStore();

const { setProfile } = profileStore;
const { setError, getError } = errorStore;
const { isLoading } = loadingStore;

const route = useRoute();
const param = route.params.param as string;
const getValue = () => {
  const url = location.href.substring(
    location.href.indexOf(location.host) + location.host.length + 1
  );

  const params = url.split("/");

  if (params.length < 3) {
    return params[1];
  } else {
    return params[2];
  }
};
const value = getValue();

const paramExists = param && "undefined" !== typeof param;
if (!paramExists) {
  setError(
    "(/:param/) Param Value cannot be undefined",
    404,
    "Invalid Param Method Detected"
  );
}

const valueExists = value && "undefined" !== typeof value;
if (!paramExists && !valueExists) {
  setError(
    "(/:value/) Param Value cannot be undefined",
    404,
    "Invalid Param Method Detected"
  );
}
console.log(value);

if (paramExists && valueExists) {
  switch (param.toLowerCase()) {
    case "address":
    case "addr":
    case "a":
      setProfile("address", value);
      break;
    case "handle":
    case "handler":
    case "h":
      setProfile("handle", value);
      break;
    default:
      setError(
        `Invalid Param (/:param/) Method. It should be 'address | handler' but instead you used ${param}`,
        404,
        "Invalid Param Method Detected"
      );
      break;
  }
}
</script>
