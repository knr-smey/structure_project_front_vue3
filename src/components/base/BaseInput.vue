<template>
  <!-- Base Input -->
  <input
    v-model="model"
    v-bind="$attrs"
    :class="[baseClass, stateClass]"
  />
</template>

<script setup>
import { computed } from 'vue'

/**
 * ================================
 * 📌 HOW TO USE THIS INPUT
 * ================================
 *
 * 1. Basic:
 * <BaseInput v-model="form.email" placeholder="Email" />
 *
 * 2. Password:
 * <BaseInput v-model="form.password" type="password" />
 *
 * 3. Error:
 * <BaseInput v-model="form.email" state="error" />
 *
 * 4. Success:
 * <BaseInput v-model="form.email" state="success" />
 *
 * 5. Native attributes:
 * <BaseInput v-model="form.email" required autocomplete="email" />
 *
 */


/**
 * Allow native attributes like type, placeholder, etc.
 */
defineOptions({
  inheritAttrs: false
})

/**
 * v-model binding
 */
const model = defineModel()

/**
 * Props
 */
const props = defineProps({
  // visual state
  state: {
    type: String,
    default: 'normal', // normal | error | success
  },
})

/**
 * Base style (match your button system)
 */
const baseClass =
  'w-full px-4 py-2 text-sm rounded-md border bg-white text-slate-900 placeholder-slate-400 transition outline-none disabled:opacity-60'

/**
 * State styling
 */
const stateClass = computed(() => {
  const map = {
    normal: 'border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
    error: 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200',
    success: 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200',
  }

  return map[props.state] || map.normal
})
</script>