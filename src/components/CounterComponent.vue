<template>
  <div>
    <h2>Contador</h2>
    <p id="contador">{{ contador }}</p>
    <div class="botones">
      <button @click="disminuir" id="disminuir">-1</button>
      <button @click="aumentar" id="aumentar">+1</button>
      <button @click="aumentarDos" id="aumentarDos">+2</button>
      <button @click="disminuirDos" id="disminuirDos">-1</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const contador = ref(0)

function aumentar() {
  contador.value++
}

function disminuir() {
  contador.value--
}
function disminuirDos() {
  contador.value -= 2
}
function aumentarDos() {
  contador.value += 2
}
</script>
