<script setup lang="ts">
import { computed, ref } from 'vue';
import { interpolateBetweenColors, normalise, orderNormalise } from './stats';

let props = defineProps<{
  decryptionKeys: Record<string, string>;
  pValues: Record<string, number>;
}>();

defineEmits<{
  (e: 'key', key: string): void
  (e: 'enter'): void}>()

let isRank = ref(false)

const kb = [
  'QWERTYUIOP'.split(''),
  'ASDFGHJKL'.split(''),
  ['rank', ...'ZXCVBNM'.split(''),'enter'],
];

const isNoPValues = computed(() => !Object.keys(props.pValues).length)

const rows = computed(() => {
  const used = new Set(Object.values(props.decryptionKeys))
  const highPColour = {r: 0, g: 255, b: 0}
  const lowPColour = {r: 255, g: 0, b: 0}
  const transform = isRank.value ? orderNormalise : normalise
  const normalised = transform(...Object.values(props.pValues))
  const deltas = Object.fromEntries(Object.keys(props.pValues).map((k, i) => [k, normalised[i]]))

  return kb.map(k => k.map(c => c.length === 1
    ? {
      value: c,
      colour: interpolateBetweenColors(lowPColour, highPColour, deltas[c] || 0),
      p: `probability=${props.pValues[c]?.toFixed(3) || '[Select a letter]'}`,
      isInUse: used.has(c)
    }
    : {
      value: c,
    }
))})

</script>

<template>
  <fieldset id="keyboard" :disabled="isNoPValues">
    <div class="row" v-for="(row, i) in rows">
      <div :class="`spacer${i}`"></div>
      <template v-for="key in row" :key="key">
        <button type="button"
          v-if="key.colour"
          :class="key.isInUse ? 'used-key' : ''"
          :style="{borderColor:`rgb(${key.colour.r},${key.colour.g},${key.colour.b})`}"
          @click="$emit('key', key.value)"
          :title="key.p"
        >
          <span>{{ key.value }}</span>
        </button>
        <button type="button"
          v-else-if="key.value==='rank'"
          class="non-alpha"
          :class="isRank ? 'depressed' : ''"
          @click="isRank=!isRank"
          :title="`Show red (unlikely) to green (likely) graduated according to probability ${isRank?'value':'rank only'}`"
        >
          <span>{{ key.value }}</span>
        </button>
        <button v-else type="button"
          class="non-alpha"
          @click="$emit('enter')"
        >
          <span>{{ key.value }}</span>
        </button>
      </template>
      <div :class="`spacer${i}`"></div>
    </div>
  </fieldset>
</template>

<style scoped>
fieldset {
  border: 0 none;
}
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
  flex: 0.2;
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
button:disabled {
	pointer-events: none;
	opacity: 0.65;
}
button:last-of-type {
  margin: 0;
}
button.big {
  flex: 1.5;
}
.non-alpha {
  padding: 0 7px;
  font-size:90%;
  text-transform: lowercase;
}
.depressed {
  background: #e5e5e5;
  -webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
  -moz-box-shadow: inset 0px 0px 5px #c1c1c1;
  box-shadow: inset 0px 0px 5px #c1c1c1;
  outline: none;
}
</style>
