import { defineStore } from "pinia";
import { ref } from "vue";

export const useRawMessageStore = defineStore("raw", () => {
  const message = ref("");
  return { message };
});
