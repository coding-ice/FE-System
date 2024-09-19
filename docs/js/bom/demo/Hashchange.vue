<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('hashchange', function (e) {
    console.log(`newURL: ${e.newURL} oldURL: ${e.oldURL}`)
  })
})
</script>
