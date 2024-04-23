<template>
  <div>
    <giga-input style="width:500px" class="fffff" v-model="inputValue" clearable  @enter="handleChange" ref="gigaInput">
      <template #suffix>
        2333
      </template>
    </giga-input>
  </div>
</template>

<script  lang="ts">
import { defineComponent, ref, onMounted } from 'vue-demi'
export default defineComponent({
  name: 'test',
  setup() {

    const gigaInput = ref<HTMLDivElement | null>()
    const inputValue = ref('')

    const handleChange = (e) => {
      console.log('enter', e)
    }
    
    onMounted(()=> {
      console.log(222222, gigaInput?.value?.focus())
    })

    return {
      inputValue,
      gigaInput,
      handleChange
    }
  }
})
</script>
