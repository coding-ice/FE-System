<template>
  <button @click="handleClick">change hash</button>
</template>
<script setup>
import { onMounted } from 'vue'

const handleClick = () => {
  location.hash = 'ice'
}

onMounted(() => {
  window.addEventListener('hashchange', function (e) {
    console.log('hash ->', decodeURIComponent(location.hash))
  })
})
</script>

<style scoped>
button {
  background: var(--vp-custom-block-details-bg);
  padding: 5px;
  border-radius: 5px;
}
</style>