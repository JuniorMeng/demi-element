<template>
  <el-input v-bind="$attrs" ref="currentRef"  @keyup.enter="enter($event)">
    <template #[name]="slotProps" v-for="(_, name) in $slots" >
      <slot :name="name" v-bind="slotProps"></slot>
    </template>
  </el-input>
</template>

<script  lang="ts">
import { defineComponent, Ref, ref } from 'vue-demi'
import useInstanceFn from '@/hooks/useInstanceFn.ts'

export default defineComponent({
  name: 'GigaInput',
  // 防止非props绑定到跟元素上，期望直接绑定到组件上
  inheritAttrs: false,
  setup(_, { expose, emit }) {
    const currentRef = ref<Ref | null>(null)

    // 方法拓展
    const enter = (e: Event) =>{
      emit('enter', (e.target as HTMLInputElement)?.value)
    }

    // 继承实例下的属性方法
    const { exposeMethodsOpts } = useInstanceFn(currentRef)
    expose(exposeMethodsOpts)

    return {
      enter,
      currentRef
    }
  }
})
</script>
