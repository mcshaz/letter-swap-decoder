import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import { alphabetDetails, type englishLetter } from "@/helpers/letterFreqStats";

export const useEncodedMessageStore = defineStore("encoded", () => {
  const message = ref("");
  const decryptionKeys = reactive(new Map<string, englishLetter>());
  const allLetterStats = computed(() => alphabetDetails(message.value));
  const getKeyByValue = <KeyType, ValueType>(
    map: Map<KeyType, ValueType>,
    searchValue: ValueType
  ) => {
    for (const [key, value] of map.entries()) {
      if (value === searchValue) return key;
    }
  };
  const keyTest = (l: string) => l.length === 1 && /[a-z]/i.test(l);
  const addKey = (encodedLetter: string, decodesToLetter: string) => {
    if (!keyTest(encodedLetter) || !keyTest(decodesToLetter)) return false;
    encodedLetter = encodedLetter.toUpperCase();
    decodesToLetter = decodesToLetter.toUpperCase();
    const existing = getKeyByValue(decryptionKeys, decodesToLetter);
    if (existing) decryptionKeys.delete(existing);
    decryptionKeys.set(encodedLetter, decodesToLetter as englishLetter);
    return true;
  };
  return {
    message,
    decryptionKeys,
    allLetterStats,
    addKey,
  };
});
