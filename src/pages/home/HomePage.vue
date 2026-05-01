<template>
  <div class="relative min-h-screen flex items-center justify-center px-6 bg-[#f8f8f6] overflow-hidden ">

    <!-- Background grid -->
    <div class="absolute inset-0 opacity-60 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:36px_36px]"></div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-[620px] bg-white border border-black/10 rounded-2xl p-10">

      <!-- Badge -->
      <div class="inline-flex items-center gap-1.5 text-[11px] font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mb-6 font-mono tracking-wide">
        <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
        vue 3 · composition api · 2026
      </div>

      <!-- Title -->
      <h1 class="text-[28px] font-semibold text-black leading-tight tracking-tight mb-3">
        Vue 3 Starter Template
      </h1>

      <!-- Description -->
      <p class="text-[14px] text-gray-600 leading-relaxed mb-8 font-light">
        A clean, scalable frontend structure built for learning and rapid project development.
      </p>

      <!-- Divider -->
      <div class="h-px bg-black/10 mb-6"></div>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-2.5 mb-8 text-[12.5px] text-gray-600">

        <div class="flex gap-2.5 bg-[#f8f8f6] border border-black/10 rounded-lg px-3 py-2">
          <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">v3</span>
          <span>Vue 3 Composition API</span>
        </div>

        <div class="flex gap-2.5 bg-[#f8f8f6] border border-black/10 rounded-lg px-3 py-2">
          <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">rt</span>
          <span>Vue Router navigation</span>
        </div>

        <div class="flex gap-2.5 bg-[#f8f8f6] border border-black/10 rounded-lg px-3 py-2">
          <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">tw</span>
          <span>Tailwind CSS styling</span>
        </div>

        <div class="flex gap-2.5 bg-[#f8f8f6] border border-black/10 rounded-lg px-3 py-2">
          <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">cx</span>
          <span>Reusable components</span>
        </div>

        <div class="col-span-2 flex gap-2.5 bg-[#f8f8f6] border border-black/10 rounded-lg px-3 py-2">
          <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">auth</span>
          <span>Auth pages — Login & Register</span>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between">

        <button class="text-[12px] font-mono border border-black/20 rounded-lg px-4 py-2 hover:bg-gray-100 transition">
          $ git clone
        </button>

        <span class="text-[11px] text-gray-400 font-mono">
          @Kung Norasmey
        </span>

      </div>

    </div>
  </div>
</template>

<script setup>
// no logic needed
</script>