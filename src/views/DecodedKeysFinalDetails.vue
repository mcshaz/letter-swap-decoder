<script setup lang="ts">
import { computed } from "vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";
import {
  getOrderedLikelihood,
  type englishLetter,
} from "@/helpers/letterFreqStats";

const encodedMessageStore = useEncodedMessageStore();
const results = computed(() =>
  [...encodedMessageStore.decryptionKeys.keys()].map((encoded) => {
    const decoded = encodedMessageStore.decryptionKeys.get(encoded)!;
    const stats = encodedMessageStore.allLetterStats.letterDetails[encoded];
    const probOrders = getOrderedLikelihood(stats.decodesToProbs);
    const pToReadable = (p: number) => p.toFixed(4);
    return {
      encoded,
      decoded,
      count: stats.count,
      pValue: pToReadable(stats.decodesToProbs[decoded]),
      rank: probOrders.indexOf(decoded) + 1,
      maxP: stats.decodesToProbs[probOrders[0] as englishLetter].toFixed(3),
      maxLetter: probOrders[0],
    };
  })
);
defineEmits<{ e: "update:active-letter"; letter: string }>();
</script>
<template>
  <div id="letter-details">
    <table>
      <tbody>
        <tr>
          <th rowspan="2">Encoded</th>
          <th rowspan="2">Decodes to</th>
          <th rowspan="2">Occurences</th>
          <th colspan="3">probabilities</th>
        </tr>
        <tr>
          <th>Value</th>
          <th>Rank / 26</th>
          <th>max (all letters)</th>
        </tr>
        <tr v-for="r in results" :key="r.encoded">
          <td>
            {{ r.encoded }}
          </td>
          <td>
            {{ r.decoded }}
          </td>
          <td>
            {{ r.count }}
          </td>
          <td>
            {{ r.pValue }}
          </td>
          <td>
            {{ r.rank }}
          </td>
          <td>{{ r.maxP }}&nbsp;({{ r.maxLetter }})</td>
        </tr>
      </tbody>
    </table>
  </div>
  <RouterLink to="/decode" custom v-slot="{ navigate }">
    <button class="btn" @click="navigate" role="link">Back to decoding</button>
  </RouterLink>
</template>

<style scoped>
#letter-details {
  overflow-x: scroll;
}
.active {
  background-color: yellow;
  color: red;
  border: 1px dotted #ccc;
}
table {
  width: 100%;
}
</style>
