<script setup lang="ts">
import { computed } from "vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";

interface letterDisplay {
  id: number;
  display: string;
  isNonAlpha: boolean;
  isDecrypted?: boolean;
  uc?: string;
  prior?: string;
}

defineProps<{
  activeLetter: string;
}>();

const emit = defineEmits<{
  (e: "update:active-letter", letter: string): void;
}>();

const encodedMsgStore = useEncodedMessageStore();

// let currentIndex = ref(-1)
const paras = computed(() =>
  encodedMsgStore.message.split("\n").map((p) => {
    const rv = Array(p.length) as letterDisplay[];
    for (let i = 0; i < p.length; ++i) {
      const c = p[i];
      const cc = c.charCodeAt(0);
      const isUc = 65 <= cc && cc <= 90;
      if (isUc || (97 <= cc && cc <= 122)) {
        let decrypted;
        let uc;
        if (isUc) {
          uc = c;
          decrypted = encodedMsgStore.decryptionKeys.get(c);
        } else {
          uc = String.fromCharCode(cc - 32); // c.toUpperCase()
          decrypted = encodedMsgStore.decryptionKeys.get(uc)?.toLowerCase();
        }
        const isDecrypted = Boolean(decrypted);
        rv[i] = {
          id: i,
          uc,
          display: decrypted || c,
          prior: isDecrypted ? `decrypted from '${c}''` : undefined,
          isDecrypted,
          isNonAlpha: false,
        };
      } else {
        rv[i] = {
          id: i,
          display: c,
          isNonAlpha: true,
        };
      }
    }
    return rv;
  })
);

function letterClick(letter: string) {
  emit("update:active-letter", letter);
}
</script>

<template>
  <div id="coded-text">
    <div v-for="(p, i) in paras" :key="i">
      <template v-for="l in p" :key="l.id">
        <span class="non-alpha char" v-if="l.isNonAlpha">
          {{ l.display }}
        </span>
        <span
          v-else
          class="alpha char"
          :class="{ current: l.uc === activeLetter, decrypted: l.isDecrypted }"
          :title="l.prior"
          @click="letterClick(l.uc!)"
        >
          {{ l.display }}
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
  font-family: "Courier New", Courier, monospace;
}
.char {
  display: inline-block;
  width: 11px;
  text-align: center;
}
.non-alpha {
  color: #444;
}
.alpha {
  border: 1px dotted #bbb;
  cursor: pointer;
}
.alpha:hover {
  border: 1px solid green;
}
.current {
  color: red;
  font-weight: bold;
}
.decrypted {
  background-color: rgb(220, 255, 255);
}
.source {
  background-color: yellow;
}
</style>
