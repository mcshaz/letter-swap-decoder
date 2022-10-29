<script setup lang="ts">
import { onUnmounted, reactive, onMounted, computed, ref } from 'vue';
import Keyboard from './Keyboard.vue';
import EncodedText from './EncodedText.vue';
import { alphabetDetails } from './stats';
import LetterDetails from './LetterDetails.vue'

let usrMessage = $ref('');
let encoded = $ref('');
let activeLetter = ref('')
let isActive=$ref(false)
const decryptionKeys = reactive<Record<string, string>>({})

const allLetterDetails = computed(() => alphabetDetails(encoded))

const activeLetterDetails = computed(() => activeLetter.value
  ? allLetterDetails.value.letterDetails[activeLetter.value]
  : { pValues: {} })

onMounted(() => {
  window.addEventListener('keyup', onKeyup)
  showMessage('Paste the encoded text, then click the go button to begin')
})

onUnmounted(() => {
  window.removeEventListener('keyup', onKeyup);
});

function onKeyup(e: KeyboardEvent) {
  onKey(e.key);
}

async function activate() {
  showMessage('click on letter within the message to select the encoded letter, then use the keyboard to determine what the real letter is')
  isActive = true;
}

function onKey(key: string) {
  if (key.length !== 1 || !/[a-z]/i.test(key) || !activeLetter.value) return
  key = key.toUpperCase()
  const used = Object.keys(decryptionKeys).find(k => decryptionKeys[k] === key)
  if (used) delete decryptionKeys[used] 
  decryptionKeys[activeLetter.value] = key
}

function showMessage(msg: string, time = 1000) {
  usrMessage = msg;
  if (time > 0) {
    setTimeout(() => {
      usrMessage = '';
    }, time);
  }
}

</script>

<template>
  <Transition>
    <div class="message" v-if="usrMessage">{{ usrMessage }}</div>
  </Transition>
  <header>
    <h1>Decryptor</h1>
  </header>
  <div v-if="isActive">
    <EncodedText v-model="encoded" 
        v-model:active-letter="activeLetter" 
        :decryption-keys="decryptionKeys"/>
    Total letters: <output>{{allLetterDetails.totalLetters}}</output>
    <Keyboard @key="onKey" :decryption-keys="decryptionKeys" 
        :p-values="activeLetterDetails.pValues"/>
    <LetterDetails :decryption-keys="decryptionKeys" 
        :stats="allLetterDetails.letterDetails"
        v-model:active-letter="activeLetter"/>
  </div>
  <div v-else>
    <div>
      <textarea id="encoded-text" v-model="encoded"></textarea>
    </div>
    <button @click="activate" :disabled="!encoded">Go</button>
  </div>
</template>

<style scoped>
#encoded-text {
  width: 100%;
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
.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  text-transform: uppercase;
  user-select: none;
  position: relative;
}
.tile .front,
.tile .back {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.tile .front {
  border: 2px solid #ccc;
}
.tile .back {
  transform: rotateX(180deg);
}
.tile.filled .front {
  border-color: #999;
}
.tile.filled {
  animation: zoom 0.2s;
}
.tile:not(.empty) {
  border: none;
}
.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px);
  }
  10% {
    transform: translate(-2px);
  }
  20% {
    transform: translate(2px);
  }
  30% {
    transform: translate(-2px);
  }
  40% {
    transform: translate(2px);
  }
  50% {
    transform: translate(-2px);
  }
  60% {
    transform: translate(2px);
  }
  70% {
    transform: translate(-2px);
  }
  80% {
    transform: translate(2px);
  }
  90% {
    transform: translate(-2px);
  }
  100% {
    transform: translate(1px);
  }
}
</style>
