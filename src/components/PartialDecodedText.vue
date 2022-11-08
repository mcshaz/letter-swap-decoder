<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";

interface letterDisplay {
  id: number;
  display: string;
  isNonAlpha: boolean;
  isDecrypted?: boolean;
  uc?: string;
  prior?: string;
}

const props = defineProps<{
  activeLetter: string;
}>();

const emit = defineEmits<{
  (e: "update:active-letter", letter: string): void;
  (e: "update:active-word", word: string): void;
}>();

const encodedMsgStore = useEncodedMessageStore();
const currentIndex = ref(-1);
const startWordSelect = ref(-1);
const endWordSelect = ref(-1);

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});

const paras = computed(() => {
  let pos = -1;
  return encodedMsgStore.message.split("\n").map((p) => {
    ++pos; // we want the id to map back to string position & \n takes a posiiton
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
          id: pos++,
          uc,
          display: decrypted || c,
          prior: isDecrypted ? `decrypted from '${c}''` : undefined,
          isDecrypted,
          isNonAlpha: false,
        };
      } else {
        rv[i] = {
          id: pos++,
          display: c,
          isNonAlpha: true,
        };
      }
    }
    return rv;
  });
});

function letterClick(index: number) {
  currentIndex.value = index;
  if (index < startWordSelect.value || index >= endWordSelect.value) {
    startWordSelect.value = endWordSelect.value = -1;
  }
  emit(
    "update:active-letter",
    index === -1 ? "" : encodedMsgStore.message[index].toUpperCase()
  );
}

function letterDblClick(index: number) {
  startWordSelect.value =
    findNextNonAlpha(encodedMsgStore.message, index, false) + 1;
  endWordSelect.value = findNextNonAlpha(encodedMsgStore.message, index, true);
  const word = encodedMsgStore.message.slice(
    startWordSelect.value,
    endWordSelect.value
  );
  emit("update:active-word", word);

  function findNextNonAlpha(str: string, startIndex: number, fwd = true) {
    let index = startIndex;
    let next = fwd ? () => ++index < str.length : () => --index >= 0;
    let cc: number;
    while (
      next() &&
      ((65 <= (cc = str.charCodeAt(index)) && cc <= 90) ||
        (97 <= cc && cc <= 122))
      // eslint-disable-next-line no-empty
    ) {}
    return index;
  }
}

watch(
  () => props.activeLetter,
  (newValue) => {
    // activelettter has been set outside this component
    if (
      currentIndex.value !== -1 &&
      newValue !== encodedMsgStore.message[currentIndex.value].toUpperCase()
    )
      currentIndex.value = -1;
  }
);

function onKeydown(ev: KeyboardEvent) {
  if (
    currentIndex.value === -1 ||
    (ev.key !== "ArrowRight" && ev.key !== "ArrowLeft")
  )
    return;
  const index = findNextAlpha(
    encodedMsgStore.message,
    currentIndex.value,
    ev.key === "ArrowRight"
  );
  if (index >= 0) {
    letterClick(index);
  }
  function findNextAlpha(str: string, startIndex: number, fwd = true) {
    let index = startIndex;
    let next = fwd ? () => ++index < str.length : () => --index >= 0;
    let cc: number;
    while (
      next() &&
      ((cc = str.charCodeAt(index)) < 65 || (90 < cc && cc < 97) || 122 < cc)
      // eslint-disable-next-line no-empty
    ) {}
    return index < str.length ? index : -1;
  }
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
          :class="{
            current: l.id === currentIndex,
            'active-letter': l.uc === activeLetter,
            'active-word': startWordSelect <= l.id && l.id <= endWordSelect,
            decrypted: l.isDecrypted,
          }"
          :title="l.prior"
          @click="letterClick(l.id)"
          @dblclick="letterDblClick(l.id)"
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
  overflow-y: auto;
  max-height: 50vh;
  font-family: "Courier New", Courier, monospace;
  font-size: 1.25em;
}
.char {
  display: inline-block;
  width: 1.15em;
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
.active-letter {
  color: red;
  font-weight: bold;
}
.active-word {
  font-weight: bold;
  border-top: 2px solid orange;
  border-bottom: 2px solid orange;
}
.decrypted {
  background-color: rgb(220, 255, 255);
}
.current {
  text-decoration: underline;
  background-color: yellow;
}
.source {
  background-color: yellow;
}
</style>
