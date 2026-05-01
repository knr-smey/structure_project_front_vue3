<template>
  <!-- Base Button -->
  <button
    :disabled="loading || disabled"
    :class="[baseClass, colorClass]"
  >
    <!-- Loading indicator -->
    <span v-if="loading" class="mr-2 animate-spin">⏳</span>

    <!-- Button text -->
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

/**
 * ================================
 * 📌 HOW TO USE THIS BUTTON
 * ================================
 *
 * 1. Basic usage:
 * <BaseButton text="Login" />
 *
 * 2. Use preset color:
 * <BaseButton text="Delete" color="danger" />
 *
 * Available preset colors:
 * - primary (default)
 * - danger
 * - success
 * - warning
 *
 * 3. Use custom Tailwind color:
 * <BaseButton
 *   text="Custom"
 *   color="bg-purple-600 hover:bg-purple-700 text-white"
 * />
 *
 * 4. Loading state:
 * <BaseButton text="Submitting..." :loading="true" />
 *
 * 5. Disabled state:
 * <BaseButton text="Disabled" :disabled="true" />
 *
 */

/**
 * Props definition
 */
const props = defineProps({
  // Text inside button
  text: {
    type: String,
    default: 'Button',
  },

  // Color: can be preset key OR custom Tailwind class
  color: {
    type: String,
    default: 'primary',
  },

  // Loading state (disable + show spinner)
  loading: {
    type: Boolean,
    default: false,
  },

  // Disabled state
  disabled: {
    type: Boolean,
    default: false,
  }
})

/**
 * Base styles (shared across all buttons)
 * - small radius (rounded-sm)
 * - full width
 * - smooth transition
 */
const baseClass =
  'cursor-pointer w-full px-4 py-2 text-sm font-semibold rounded-sm transition focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed'

/**
 * Color logic
 * - If matches preset → use predefined style
 * - Else → treat as custom Tailwind class
 */
const colorClass = computed(() => {
  const preset = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
    warning: 'bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-300',
  }

  // Use preset if exists
  if (preset[props.color]) {
    return preset[props.color]
  }

  // Otherwise use custom class from user
  return props.color
})
</script>