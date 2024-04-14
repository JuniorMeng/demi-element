<script lang="ts" setup>
// import { isVue2, isVue3, ref } from 'vue-demi'
// import { Message, Button } from 'element-ui'

// const versionStr = isVue2 ? 'Vue2' : 'Vue3'
// const Vue2Version = ref(versionStr)

// console.warn(`Vue env: Vue3:${isVue3} -- Vue2: ${isVue2}`)
// Message({
//           message: '恭喜你，这是一条成功消息',
//           type: 'success'
//         })
</script>

<template>
  <div class="div">
      <a href="https://vitejs.dev" target="_blank">
        <!-- <img src="/vite.svg" class="logo" alt="Vite logo" /> -->
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <!-- <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" /> -->
      </a>
    <template-component />
  </div>
</template>

<style>
</style>
