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
          <th v-for="k in Object.keys(stats)" :key="k">
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
          <td v-for="(v, k) in stats" :key="k">
            {{v.count}}
          </td>
        </tr>
        <tr>
          <th>
            decoded
          </th>
          <td v-for="c in decoded" :key="c">
            {{c}}
          </td>
        </tr>
        <tr v-for="n in 3">
          <th>
            p dif {{n}}
          </th>
          <td v-for="(v, k) in stats" :key="k">
            {{(v.topPDifs[n-1]).toFixed(3)}}
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
