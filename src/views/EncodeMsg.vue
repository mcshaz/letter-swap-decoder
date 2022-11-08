<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRawMessageStore } from "@/stores/useRawMessageStore";
import { replaceLetters } from "@/helpers/simpleLetterSubstitutions";
import { useRouter } from "vue-router";
// note NOT reactive here - not needed
const rawMessage = useRawMessageStore().message;
const encoded = ref(replaceLetters(rawMessage));
const noWhitespace = ref(false);
const noPunctuation = ref(false);
const allCaps = ref(false);

if (!rawMessage) useRouter().push("/");

const display = computed(() => {
  let rv = encoded.value;
  if (noWhitespace.value) rv = rv.replace(/\s/g, "");
  if (noPunctuation.value) rv = rv.replace(/[^a-zA-Z\s]/g, "");
  if (allCaps.value) rv = rv.toUpperCase();
  return rv;
});

const encode = () => {
  encoded.value = replaceLetters(rawMessage);
};
</script>
<template>
  <div>
    <textarea readonly :value="display"></textarea>
  </div>
  <fieldset>
    <label for="noSpaces">
      <input type="checkbox" v-model="noWhitespace" id="noSpaces" />
      Exclude whitespace
    </label>
    <label for="noSpaces">
      <input type="checkbox" v-model="noPunctuation" id="noSpaces" />
      Exclude punctuation
    </label>
    <label for="noSpaces">
      <input type="checkbox" v-model="allCaps" id="noSpaces" />
      Capitals Only
    </label>
  </fieldset>
  <button class="btn" @click="encode">New random key</button>
</template>
<style scoped>
fieldset {
  display: flexbox;
}
label {
  width: 33%;
}
</style>
