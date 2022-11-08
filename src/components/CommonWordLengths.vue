<script lang="ts" setup>
import { wordFreqStats } from "@/helpers/wordFreqStats";
import { computed } from "vue";
const props = defineProps<{ wordLength: number }>();
const wordsOfLength = computed(() => wordFreqStats[props.wordLength]);
</script>
<template>
  <div id="words-of-length" v-if="wordLength">
    <h4>Word length: {{ wordLength }}</h4>
    <ol v-if="wordsOfLength">
      <li v-for="(v, k) of wordsOfLength" :key="k">
        "{{ k }}" <small>({{ v }}% of all words)</small>
      </li>
    </ol>
    <p v-else>No data</p>
  </div>
</template>
<style scoped>
li {
  text-align: left;
}
</style>
