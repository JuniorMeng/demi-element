import { Ref, onMounted, ref } from "vue-demi";

export default function useInstanceFn(currentRef:Ref) {
    const exposeMethods = ref({})

    const cloneInstanceFn = (currentRef: Ref , exposeMethods:Ref) => {
        const refMethods = Object.entries(currentRef?.value).filter(([_, value]) => value instanceof Function)
        refMethods.forEach(([key, value]) => {
            exposeMethods.value[key] = value
        })
    }

    onMounted(()=>{
        cloneInstanceFn(currentRef, exposeMethods)
    })
    
     return {
        cloneInstanceFn,
        exposeMethodsOpts: exposeMethods?.value
    }
}