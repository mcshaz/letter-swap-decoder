<script setup lang="ts">
import { computed } from 'vue';
import { interpolateBetweenColors } from './stats';

let props = defineProps<{
  decryptionKeys: Record<string, string>;
  pValues: Record<string, number>;
}>();

const kb = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  'ZXCVBNM'.split(''),
];

const rows = computed(() => {
  const used = new Set(Object.values(props.decryptionKeys))
  const highPColour = {r: 0, g: 255, b: 0}
  const lowPColour = {r: 255, g: 0, b: 0}
  return kb.map(k => k.map(c => ({
    value: c,
    colour: interpolateBetweenColors(lowPColour, highPColour, props.pValues[c] || 0),
    p: `p-value=${props.pValues[c]?.toFixed(3) || 'N/A'}`,
    isInUse: used.has(c)
  })
))})

</script>

<template>
  <div id="keyboard">
    <div class="row" v-for="(row, i) in rows">
      <div :class="`spacer${i}`"></div>
      <button
        v-for="key in row"
        :class="key.isInUse ? 'used-key' : ''"
        :style="{borderColor:`rgb(${key.colour.r},${key.colour.g},${key.colour.b})`}"
        @click="$emit('key', key.value)"
        :title="key.p"
      >
        <span>{{ key.value }}</span>
      </button>
      <div :class="`spacer${i}`"></div>
    </div>
  </div>
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
  flex: 1.6;
}
.used-key {
  color: #AAA;
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
button:last-of-type {
  margin: 0;
}
button.big {
  flex: 1.5;
}
</style>
