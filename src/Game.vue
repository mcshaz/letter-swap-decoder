<script setup lang="ts">
import { onUnmounted, reactive, onMounted, computed, ref } from 'vue';
import Keyboard from './Keyboard.vue';
import EncodedText from './EncodedText.vue';
import { alphabetDetails } from './stats';
import LetterDetails from './LetterDetails.vue'
import DecryptionDetails from './DecryptionDetails.vue'

enum stages { paste, decode, summary}

let usrMessage = ref('');
let encoded = ref('');
let activeLetter = ref('')
let stage=ref(stages.paste)
const decryptionKeys = reactive<Record<string, string>>({})

const allLetterDetails = computed(() => alphabetDetails(encoded.value.toUpperCase()))

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
  stage.value = stages.decode;
}

function onKey(key: string) {
  if (key.length !== 1 || !/[a-z]/i.test(key) || !activeLetter.value) return
  key = key.toUpperCase()
  const used = Object.keys(decryptionKeys).find(k => decryptionKeys[k] === key)
  if (used) delete decryptionKeys[used] 
  decryptionKeys[activeLetter.value] = key
}

function showMessage(msg: string, time = 1000) {
  usrMessage.value = msg;
  if (time > 0) {
    setTimeout(() => {
      usrMessage.value = '';
    }, time);
  }
}

function moveSummary() {
  stage.value=stages.summary
}

</script>

<template>
  <Transition>
    <div class="message" v-if="usrMessage">{{ usrMessage }}</div>
  </Transition>
  <header>
    <h1>Decryptor</h1>
  </header>
  <div v-if="stage===stages.decode">
    <EncodedText v-model="encoded" 
        v-model:active-letter="activeLetter" 
        :decryption-keys="decryptionKeys"/>
    <div>
      <h4>
        Total letters:
        <output>
          {{allLetterDetails.totalLetters}}
        </output>
      </h4>
    </div>
    <Keyboard @key="onKey" :decryption-keys="decryptionKeys" 
        :p-values="activeLetterDetails.pValues" @enter="moveSummary"/>
    <LetterDetails :decryption-keys="decryptionKeys" 
        :stats="allLetterDetails.letterDetails"
        v-model:active-letter="activeLetter"/>
  </div>
  <div v-else-if="stage===stages.paste">
    <div>
      <textarea id="encoded-text" v-model="encoded"></textarea>
    </div>
    <button id="activate-button" @click="activate" :disabled="!encoded">Go</button>
  </div>
  <div v-else>
    <DecryptionDetails :decryption-keys="decryptionKeys" :stats="allLetterDetails.letterDetails"/>
    <button id="leave-summary" @click="stage=stages.decode">Back</button>
  </div>
  <hr />
  <footer>
  <small>
    This project is under an MIT licence and is hosted at
    <a href="https://github.com/mcshaz/letter-swap-decoder">
      github.com/mcshaz/letter-swap-decoder
    </a>.
    It borrows heavily from Evan You's Vue version of Wordle on StackBlitz 
    <a href="https://stackblitz.com/edit/vitejs-vite-jjggsx">
      stackblitz.com/edit/vitejs-vite-jjggsx
    </a>
  </small>
  </footer>
</template>

<style scoped>
#encoded-text {
  width: 100%;
  min-height:50vh;
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

#activate-button, #leave-summary {
	display: inline-block;
	padding: 0.375rem 0.75rem;
  margin: 0.3rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
  color: #fff;
	text-decoration: none;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	border: 1px solid #198754;
	border-radius: 0.375rem;
	background-color: #198754;
	transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
#activate-button:hover, #leave-summary:hover {
  background-color: #157347;
  border-color: #146c43;
}
#activate-button:disabled, fieldset:disabled .btn {
	pointer-events: none;
	background-color: #198754;
	border-color: #198754;
	opacity: 0.65;
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
