<template>
  <div>
    <h1>Lista de usuarios</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const users = ref([])

onMounted(() => {})
</script>
