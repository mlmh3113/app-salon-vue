<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="md:flex h-screen bg-slate-900">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3 bg-black bg-app">
      
    </div>
    <div class="md:w-2/3 px-10 py-5 min-h-full overflow-y-scroll">
        <RouterView />
    </div>
    
  </div>
 
</template>

<style scoped>

</style>
