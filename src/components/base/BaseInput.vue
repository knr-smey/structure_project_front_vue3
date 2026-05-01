<template>
  <div class="relative w-full">
    <input
      v-model="model"
      v-bind="$attrs"
      :type="inputType"
      :class="[baseClass, stateClass, paddingClass]"
    />

    <!-- Password visibility toggle (only when native type is password) -->
    <button
      v-if="isPasswordField"
      type="button"
      @click="togglePassword"
      class="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-slate-400 transition hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
      aria-label="Toggle password visibility"
      :aria-pressed="String(showPassword)"
    >
      <i v-if="!showPassword" class="fa fa-eye text-base" aria-hidden="true"></i>
      <i v-else class="fa fa-eye-slash text-base" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, useAttrs } from 'vue'

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

// access raw attrs to detect native `type` attribute
const attrs = useAttrs()

// password toggle state
const showPassword = ref(false)

const isPasswordField = computed(() => attrs.type === 'password')

const inputType = computed(() => (isPasswordField.value ? (showPassword.value ? 'text' : 'password') : (attrs.type || 'text')))

function togglePassword() {
  showPassword.value = !showPassword.value
}

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

// adjust padding to account for password toggle icon
const paddingClass = computed(() => (isPasswordField.value ? 'pr-10' : ''))

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