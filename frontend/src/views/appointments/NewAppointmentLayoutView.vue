<template>
<nav class="flex gap-2 mt-10">
    <RouterLink :to="{name: 'new-appointment'}"
     class="flex-1 py-2 text-white text-3xl font-black text-center rounded-lg"
     :class="route.name === 'new-appointment' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-500 hover:bg-slate-700'"
     >Servicios</RouterLink>
    <RouterLink :to="{name: 'appointment-details'}" 
    class="flex-1 py-2 text-white text-3xl font-black text-center rounded-lg"
    :class="route.name === 'appointment-details' ? 'bg-blue-500 hover:bg-blue-700' : 'bg-slate-500 hover:bg-slate-700'"

    >Cita y Resumen</RouterLink>

</nav>

<RouterView />
</template>

<script setup>
import { RouterLink , RouterView } from 'vue-router'
import { useRoute } from 'vue-router'; 

const route = useRoute();

</script>

