<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";
import {
  getOrderedLikelihood,
  type englishLetter,
} from "@/helpers/letterFreqStats";

const props = defineProps<{
  activeLetter: string;
}>();

defineEmits<{ e: "update:active-letter"; letter: string }>();

const store = useEncodedMessageStore();

const mainDiv = ref<HTMLDivElement>();

const orderedKeys = computed(() =>
  Object.keys(store.allLetterStats.letterDetails)
);

const decoded = computed(() =>
  orderedKeys.value.map((c, i) => ({
    display: store.decryptionKeys.get(c) || "",
    id: store.decryptionKeys.get(c) || i,
  }))
);

const highestProbs = computed(() =>
  Object.values(store.allLetterStats.letterDetails).map((d) =>
    getOrderedLikelihood(d.decodesToProbs).map((ol) => ({
      letter: ol,
      prob: d.decodesToProbs[ol as englishLetter].toFixed(3),
    }))
  )
);

const getSuffix = (inpt: number) => {
  switch (Math.round(inpt % 10)) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

watch(
  () => props.activeLetter,
  (newActiveLetter) => {
    if (newActiveLetter && mainDiv.value) {
      if (mainDiv.value.scrollWidth > mainDiv.value.clientWidth) {
        // this is assumuing header column is the same width as the others, which might not be true
        const elWidth =
          mainDiv.value.scrollWidth / (orderedKeys.value.length + 1);
        const activeLetterIndex = orderedKeys.value.indexOf(newActiveLetter);
        let scroll =
          (activeLetterIndex + 1.5) * elWidth - 0.5 * mainDiv.value.clientWidth;
        if (scroll < 0) scroll = 0;
        // assuming if > available scroll width it will be limited
        mainDiv.value.scrollLeft = scroll;
      }
    }
  }
);
</script>
<template>
  <div id="letter-details" ref="mainDiv">
    <table>
      <tbody>
        <tr>
          <td></td>
          <th v-for="k in orderedKeys" :key="k">
            <a
              href="#"
              :class="activeLetter === k ? 'active' : ''"
              @click.prevent="$emit('update:active-letter', k)"
            >
              {{ k }}
            </a>
          </th>
        </tr>
        <tr>
          <th>count</th>
          <td v-for="(v, k) in store.allLetterStats.letterDetails" :key="k">
            {{ v.count }}
          </td>
        </tr>
        <tr>
          <th>decoded</th>
          <td v-for="c in decoded" :key="c.id">
            {{ c.display }}
          </td>
        </tr>
        <tr v-for="n in 3" :key="n">
          <th>
            {{ n }}<sup>{{ getSuffix(n) }}</sup>
          </th>
          <td v-for="(p, i) in highestProbs" :key="i">
            {{ p[n - 1].letter }}&nbsp;({{ p[n - 1].prob }})
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#letter-details {
  overflow-x: auto;
}
.active {
  background-color: yellow;
  color: red;
  border: 1px dotted #ccc;
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
