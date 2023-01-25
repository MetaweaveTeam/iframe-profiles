import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", () => {
  const loading = ref(true);

  const setLoading = (value: boolean) => {
    setTimeout(() => {
      loading.value = value;
    }, 4000);
  };

  const isLoading = () => {
    return loading.value;
  };

  return { isLoading, setLoading };
});
