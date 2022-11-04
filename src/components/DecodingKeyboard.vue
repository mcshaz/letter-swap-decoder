<script setup lang="ts">
import { computed } from "vue";
import { interpolateBetweenColors, normalise } from "@/helpers/letterFreqStats";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";

const props = defineProps<{ activeEncodedLetter: string }>();

defineEmits<{
  (e: "key", key: string): void;
  (e: "enter"): void;
}>();

const encodedMsgStore = useEncodedMessageStore();

const kb = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  [..."ZXCVBNM".split(""), "enter"],
];

const noSelectFreq = Object.fromEntries(
  Array.from({ length: 26 }, (_, i) => [String.fromCharCode(i + 65), 1 / 26])
);

const letterData = computed(() =>
  props.activeEncodedLetter
    ? encodedMsgStore.allLetterStats.letterDetails[props.activeEncodedLetter]
        .decodesToProbs
    : noSelectFreq
);

const rows = computed(() => {
  const highPColour = { r: 0, g: 255, b: 0 };
  const lowPColour = { r: 255, g: 0, b: 0 };

  const normalised = normalise(...Object.values(letterData.value));
  const deltas = Object.fromEntries(
    Object.keys(letterData.value).map((k, i) => [k, normalised[i]])
  );

  return kb.map((k) =>
    k.map((c) =>
      c.length === 1
        ? {
            value: c,
            colour: interpolateBetweenColors(
              lowPColour,
              highPColour,
              deltas[c] || 0
            ),
            p: `probability=${
              letterData.value[c]?.toFixed(3) || "[select letter]"
            }`,
            isInUse: encodedMsgStore.decryptionKeys.has(c),
          }
        : {
            value: c,
          }
    )
  );
});
</script>

<template>
  <fieldset id="keyboard" :disabled="!activeEncodedLetter">
    <div class="row" v-for="(row, i) in rows" :key="i">
      <div :class="`spacer${i}`"></div>
      <template v-for="key in row" :key="key">
        <button
          type="button"
          v-if="key.colour"
          :class="key.isInUse ? 'used-key' : ''"
          :style="{
            borderColor: `rgb(${key.colour.r},${key.colour.g},${key.colour.b})`,
          }"
          @click="$emit('key', key.value)"
          :title="key.p"
        >
          <span>{{ key.value }}</span>
        </button>
        <button v-else type="button" class="non-alpha" @click="$emit('enter')">
          <span>{{ key.value }}</span>
        </button>
      </template>
      <div :class="`spacer${i}`"></div>
    </div>
  </fieldset>
</template>

<style scoped>

#keyboard {
  margin: 30px 75px 0;
  user-select: none;
}
.row {
  display: flex;
  width: 100%;
  margin: 0 auto 8px;
  touch-action: manipulation;
}
.spacer1 {
  flex: 0.5;
}
.spacer2 {
  flex: 1;
}
.used-key {
  color: rgb(119, 165, 211);
}
button {
  font-family: inherit;
  font-weight: bold;
  border-width: 3px;
  padding: 0;
  margin: 0 6px 0 0;
  height: 58px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #d3d6da;
  color: #1a1a1b;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
}
button:disabled {
  pointer-events: none;
  opacity: 0.65;
}
button:last-of-type {
  margin: 0;
}
button:hover {
  background-color: #e5e5e5;
}
button.big {
  flex: 1.5;
}
.non-alpha {
  padding: 0 7px;
  font-size: 90%;
  text-transform: lowercase;
}
.depressed {
  background: #e5e5e5;
  -webkit-box-shadow: inset 2px 2px 0 0 #777;
  -moz-box-shadow: inset 2px 2px 0 0 #777;
  box-shadow: inset 2px 2px 0 0 #777;
  outline: none;
}
</style>
