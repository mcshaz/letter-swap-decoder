<script setup lang="ts">
import { ref } from "vue";
import { useEncodedMessageStore } from "@/stores/useEncodedMessageStore";
import { useRawMessageStore } from "@/stores/useRawMessageStore";
import { useRouter } from "vue-router";

const encodedMsgStore = useEncodedMessageStore();
const rawMsgStore = useRawMessageStore();

const message = ref(encodedMsgStore.message || rawMsgStore.message);
const router = useRouter();

const goEncode = () => {
  rawMsgStore.message = message.value;
  encodedMsgStore.message = "";
  router.push({ name: "encode" });
};

const goDecode = () => {
  if (encodedMsgStore.message !== message.value) {
    rawMsgStore.message = "";
    encodedMsgStore.decryptionKeys.clear();
    encodedMsgStore.message = message.value;
  }
  router.push({ name: "decode" });
};
</script>

<template>
  <p>
    Enter text below - either plain text and click encode, or a message encoded
    with a simple alphabetical letter for letter substitution, and click decode.
    This app provides some tools to help you, but it does not decode the message
    for you.
  </p>
  <fieldset>
    <div>
      <textarea id="message" v-model="message"></textarea>
    </div>
    <button class="btn" @click="goDecode" role="link">Decode</button>
    <button class="btn" @click="goEncode" role="link">Encode</button>
  </fieldset>
</template>

<style scoped>
p {
  font-size: 1em;
  color: navy;
  text-align: justify;
}
</style>
