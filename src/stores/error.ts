import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLoadingStore } from "./loading";

export const useErrorStore = defineStore("error", () => {
  const loadingStore = useLoadingStore();
  const { setLoading } = loadingStore;
  const error = ref({
    message: "",
    code: 0,
    title: "",
  });

  const setError = (message: string, code: number, title: string | null) => {
    error.value.message = message;
    error.value.code = code ?? 500;
    error.value.title =
      title && title !== null && title !== undefined
        ? title
        : "Something Went Wrong";
    setLoading(false);
  };

  const clearError = () => {
    error.value.message = "";
    error.value.code = 0;
    error.value.title = "";
  };

  const getError = () => {
    return error.value;
  };

  return { setError, clearError, getError };
});
