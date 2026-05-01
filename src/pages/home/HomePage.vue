<template>
  <div class="relative min-h-screen flex items-center justify-center px-6 bg-[#f8f8f6] overflow-hidden ">

    <!-- Background grid -->
    <div class="absolute inset-0 opacity-60 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:36px_36px]"></div>

    <!-- Card -->
    <div class="relative z-10 w-full max-w-[700px] bg-white border border-black/10 rounded-2xl p-12">

      <!-- Badge -->
      <div class="inline-flex items-center gap-2 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-8 font-mono tracking-wide">
        <span class="w-2 h-2 rounded-full bg-current"></span>
        vue 3 · composition api · 2026
      </div>

      <!-- Title (BIG upgrade) -->
      <h1 class="text-4xl sm:text-5xl font-semibold text-black leading-tight tracking-tight mb-4">
        Vue 3 Starter Template
      </h1>

      <!-- Description -->
      <p class="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 font-light">
        A clean, scalable frontend structure built for learning and rapid project development.
      </p>

      <!-- Divider -->
      <div class="h-px bg-black/10 mb-8"></div>

      <!-- Features -->
      <div class="grid grid-cols-2 gap-3 mb-10 text-sm sm:text-base text-gray-700">

        <div class="flex gap-3 bg-[#f8f8f6] border border-black/10 rounded-lg px-4 py-3">
          <span class="text-sm font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">v3</span>
          <span>Vue 3 Composition API</span>
        </div>

        <div class="flex gap-3 bg-[#f8f8f6] border border-black/10 rounded-lg px-4 py-3">
          <span class="text-sm font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">rt</span>
          <span>Vue Router navigation</span>
        </div>

        <div class="flex gap-3 bg-[#f8f8f6] border border-black/10 rounded-lg px-4 py-3">
          <span class="text-sm font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">tw</span>
          <span>Tailwind CSS styling</span>
        </div>

        <div class="flex gap-3 bg-[#f8f8f6] border border-black/10 rounded-lg px-4 py-3">
          <span class="text-sm font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">cx</span>
          <span>Reusable components</span>
        </div>

        <div class="col-span-2 flex gap-3 bg-[#f8f8f6] border border-black/10 rounded-lg px-4 py-3">
          <span class="text-sm font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">auth</span>
          <span>Auth pages — Login & Register</span>
        </div>

      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between">

        <button class="text-sm font-mono border border-black/20 rounded-lg px-5 py-2.5 hover:bg-gray-100 transition">
          $ git clone
        </button>

        <span class="text-xs text-gray-600 font-mono">
          @Kung Norasmey
        </span>

      </div>

    </div>
  </div>
</template>