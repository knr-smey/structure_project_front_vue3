<template>
  <input
    v-model="model"
    v-bind="$attrs"
    class="w-full rounded-none border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
  />
</template>

<script setup>
// Allow parent components to pass native input attrs.
defineOptions({
  inheritAttrs: false
})

// v-model support for form bindings.
const model = defineModel()
</script>
