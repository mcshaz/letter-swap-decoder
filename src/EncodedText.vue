<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  modelValue: string,
  activeLetter: string,
  decryptionKeys: Record<string, string>
}>()

const emit = defineEmits<{
  (e: 'update:active-letter', letter: string): void
}>();

// let currentIndex = ref(-1)
let indx = 0;
const paras = computed(() => props.modelValue.split('\n').map(p => p.split('').map(
  l => {
    if (!/[a-z]/i.test(l)) return {
      id: 'l' + indx,
      display: l, 
      isNonAlpha: true 
    }
    const uc = l.toUpperCase()
    if (props.decryptionKeys[l]) {
      let display = props.decryptionKeys[l]
      if (l !== uc) display = display.toLowerCase()
      return {
        id: 'l' + ++indx,
        display,
        original: l,
        uc
      }
    }
    return {
      id: 'l' + indx,
      display: l,
      uc
    }
  })))

function letterClick(letter: string) {
  emit("update:active-letter", letter)
}
</script>

<template>
  <div id="coded-text">
    <div v-for="p in paras">
      <template v-for="l in p" :key="l.id">
        <span class="non-alpha" v-if="l.isNonAlpha">
          {{l.display}}
        </span>
        <span v-else class="alpha"
            :class="{current: l.uc === activeLetter, decrypted: l.original }"
            :title="l.original?`decoded from ${l.original}`:''"
            @click="letterClick(l.uc!)">
          {{l.display}}
        </span>
      </template>
    </div>
  </div>
</template>
<style scoped>
  #coded-text {
    width: 100%;
    resize: both;
    text-align: left;
    overflow-y: scroll;
    max-height: 50vh;
    font-family: 'Courier New', Courier, monospace;
  }
  .non-alpha {
    color: #444;
  }
  .alpha {
    border: 1px dotted #BBB;
    cursor: pointer;
  }
  .alpha:hover {
    border: 1px solid green
  }
  .current {
    color: red;
    font-weight: bold;
  }
  .decrypted {
    background-color: azure;
  }
  .source {
    background-color: yellow;
  }

</style>