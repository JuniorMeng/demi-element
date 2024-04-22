<template>
  <div>
    <el-input v-bind="$attrs" v-model="test"/>
  </div>
</template>
<script  lang="ts">
import { defineComponent, ref } from 'vue-demi'
export default defineComponent({
  name: 'GigaInput',
  setup() {
const test = ref('')
    return {
      test
    }
  }
})
</script>
