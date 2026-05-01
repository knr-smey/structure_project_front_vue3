
<script setup>
import LeftPannel from '@/components/preview/LeftPannel.vue'
import RightPannel from '../../components/preview/RightPannel.vue';
</script>
<template>
  <div class="relative min-h-screen flex items-center justify-center px-10 bg-[#f7f7f7] overflow-hidden">

    <!-- Background grid -->
    <div class="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:36px_36px]"></div>

    <!-- Main container -->
    <div class="relative z-10 w-full max-w-[1200px] bg-white border border-black/10 rounded-2xl shadow-sm flex overflow-hidden">

      <!-- LeftPannel -->
      <LeftPannel />

      <!-- Folder Structure Pannel -->
      <RightPannel />

    </div>
  </div>
</template>
