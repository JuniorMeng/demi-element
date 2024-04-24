<template>
  <div>
    <button @click="increment">{{ msg }} button{{ count }}</button>
    bbbbbb
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue-demi'
defineOptions({
  name:'Button'
})
defineProps<{ msg: string }>()
const count = ref<number>(0)

const increment = () => {
  count.value ++
}
</script>


<style scoped>
  .test{
    background-color: red;
  }
</style>
