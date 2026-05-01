<template>
  <button
    v-bind="$attrs"
    class="inline-flex w-full items-center justify-center rounded-none bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
  >
    <slot>Base Button</slot>
  </button>
</template>

<script setup>
// Styled base button used across pages.
</script>
