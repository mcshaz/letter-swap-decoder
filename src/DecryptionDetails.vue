<script setup lang="ts">import { computed } from 'vue';

  const props = defineProps<{
    decryptionKeys: Record<string, string>,
    stats: Record<string, {
        count: number;
        pValues: Record<string, number>;
    }>
  }>()
  const results = computed(() => 
    Object.keys(props.decryptionKeys).map(encoded => {
      const decoded = props.decryptionKeys[encoded]
      const stats = props.stats[encoded]
      const pValue = stats.pValues[decoded]
      const descPValues = Object.values(stats.pValues).sort((a, b) => b - a)
      const pToReadable = (p: number) => (p * 100).toFixed(3) + '%'
      return {
        encoded,
        decoded,
        count: stats.count,
        pValue: pToReadable(pValue),
        rank: descPValues.indexOf(pValue) + 1,
        maxP: pToReadable(descPValues[0])
      }
    })
  )
  defineEmits<{e:'update:active-letter', letter: string}>()
  const decoded = computed(() => Object.keys(props.stats).map(c => props.decryptionKeys[c] || ''))
</script>
<template>
  <div id="letter-details">
    <table>
      <tbody>
        <tr>
          <th rowspan="2">Encoded</th>
          <th rowspan="2">Decodes to</th>
          <th rowspan="2">Occurences</th>
          <th colspan="3">p value</th>
        </tr>
        <tr>
          <th>Value (%)</th>
          <th>Rank / 26</th>
          <th>max (all letters)</th>
        </tr>
        <tr v-for="r in results">
          <td>
            {{r.encoded}}
          </td>
          <td>
            {{r.decoded}}
          </td>
          <td>
            {{r.count}}
          </td>
          <td>
            {{r.pValue}}
          </td>
          <td>
            {{r.rank}}
          </td>
          <td>
            {{r.maxP}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  width: 100%
}
</style>
