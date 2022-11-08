<script setup lang="ts">
import { onUnmounted, onMounted, ref } from "vue";
import DecodingKeyboard from "@/components/DecodingKeyboard.vue";
import PartialDecodedText from "@/components/PartialDecodedText.vue";
import DecodingKeyStats from "@/components/DecodingKeyStats.vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";
import { useRouter } from "vue-router";
import CommonWordLengths from "@/components/CommonWordLengths.vue";

const activeLetter = ref("");
const usrMsg = ref("");
const activeWordLength = ref(0);
const encodedMsgStore = useEncodedMessageStore();
const router = useRouter();

if (!encodedMsgStore.message) router.push({ name: "home" });

onMounted(() => {
  window.addEventListener("keyup", onKeyup);
  showMessage(
    "click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is"
  );
});

onUnmounted(() => {
  window.removeEventListener("keyup", onKeyup);
});

function onKeyup(e: KeyboardEvent) {
  onKey(e.key);
}

function onKey(key: string) {
  encodedMsgStore.addKey(activeLetter.value, key);
}

function showMessage(msg: string, time = 3000) {
  usrMsg.value = msg;
  if (time > 0) {
    setTimeout(() => {
      usrMsg.value = "";
    }, time);
  }
}
</script>

<template>
  <Transition>
    <div class="message" v-if="usrMsg">{{ usrMsg }}</div>
  </Transition>
  <PartialDecodedText
    v-model:active-letter="activeLetter"
    @update:active-word="(newValue) => (activeWordLength = newValue.length)"
  />
  <hr />
  <div>
    <h4>
      Total letters:
      <output>
        {{ encodedMsgStore.allLetterStats.totalLetters }}
      </output>
    </h4>
  </div>
  <DecodingKeyboard
    @key="onKey"
    @enter="router.push({ name: 'decoded-key-details' })"
    :active-encoded-letter="activeLetter"
  />
  <DecodingKeyStats v-model:active-letter="activeLetter" />
  <CommonWordLengths :word-length="activeWordLength" />
</template>

<style scoped>
#encoded-text {
  width: 100%;
  min-height: 50vh;
}

.message {
  position: absolute;
  left: 50%;
  top: 80px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 16px 20px;
  z-index: 2;
  border-radius: 8px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-out;
}
.message.v-leave-to {
  opacity: 0;
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
