<template>
  <div>
    <button @click="increment">{{ msg }} button{{ count }}</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Button'
}
</script>
<script setup lang="ts">
import { ref } from 'vue-demi'
defineProps<{ msg: string }>()
const count = ref<number>(0)

const increment = () => {
  count.value ++
}

</script>
<style scoped>

</style>
