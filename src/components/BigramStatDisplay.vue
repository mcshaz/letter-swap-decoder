<script setup lang="ts">
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";
import { computed } from "vue";
import { getFreqSortedNGrams, bigramFreq } from "@/helpers/bigramStats";

const store = useEncodedMessageStore();

const bigramStats = computed(() => getFreqSortedNGrams(store.message, 2));

const totalBigramCount = computed(() => {
  let rv = 0;
  for (const c of bigramStats.value.values()) rv += c;
  return rv;
});
</script>
<template>
  <div id="bigram-frequencies">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th colspan="3">Encoded Bigrams Found</th>
          </tr>
          <tr>
            <th>Bigram</th>
            <th>Count</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="[bigram, count] of bigramStats" :key="bigram">
            <td>{{ bigram }}</td>
            <td>{{ count }}</td>
            <td>{{ ((count * 100) / totalBigramCount).toFixed(1) }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-container">
      <table id="Expected">
        <thead>
          <tr>
            <th colspan="2">Common English Bigrams</th>
          </tr>
          <tr>
            <th>Bigram</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(freq, bigram) in bigramFreq" :key="bigram">
            <td>{{ bigram }}</td>
            <td>{{ freq }}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
#bigram-frequencies {
  display: flex;
  justify-content: flex-start;
}
.table-container {
  width: 50%;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
td,
th {
  padding: 0.2rem 0.6rem;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
th {
  background-color: rgb(249, 248, 235);
}
</style>
