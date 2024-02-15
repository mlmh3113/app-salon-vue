<template>
    <div>
        <h2 class="text-4xl text-white font-extrabold mt-10  capitalize">servicios</h2>

        <p class="text-lg text-white mt-5">A continuación elige al menos un servicio para tu cita</p>
         
        <div class="grid grid-cols-2 gap-5 mt-5">
        <ServiceItem v-for="service in store.services" :key="service._id" :service="service"
    
        />
        </div>

       
    </div>
</template>

<script setup>
import { useServicesStore } from '../../stores/services';

import ServiceItem from '@/components/icons/ServiceItem.vue';

const store = useServicesStore();




</script>

