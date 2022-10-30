<script setup lang="ts">import { computed } from 'vue';

  const props = defineProps<{
    decryptionKeys: Record<string, string>,
    stats: Record<string, {count: number, topPDifs: number[]}>,
    activeLetter: string
  }>()
  defineEmits<{e:'update:active-letter', letter: string}>()
  const decoded = computed(() => Object.keys(props.stats).map(c => props.decryptionKeys[c] || ''))
</script>
<template>
  <div id="letter-details">
    <table>
      <tbody>
        <tr>
          <td></td>
          <th v-for="k in Object.keys(stats)">
            <a href="#" :class="activeLetter === k ? 'active' : ''" 
                @click.prevent="$emit('update:active-letter', k)">
              {{k}}
            </a>
          </th>
        </tr>
        <tr>
          <th>
            count
          </th>
          <td v-for="v of stats">
            {{v.count}}
          </td>
        </tr>
        <tr>
          <th>
            decoded
          </th>
          <td v-for="c in decoded">
            {{c}}
          </td>
        </tr>
        <tr>
          <th>
            p dif 1
          </th>
          <td v-for="v of stats">
            {{(v.topPDifs[0]*100).toFixed(1)}}%
          </td>
        </tr>
        <tr>
          <th>
            p dif 2
          </th>
          <td v-for="v of stats">
            {{(v.topPDifs[1]*100).toFixed(1)}}%
          </td>
        </tr>
        <tr>
          <th>
            p dif 3
          </th>
          <td v-for="v of stats">
            {{(v.topPDifs[2]*100).toFixed(1)}}%
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
</style>
