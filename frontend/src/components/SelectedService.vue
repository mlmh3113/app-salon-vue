<template>
    <div 
    class="flex justify-between border border-gray-200 rounded p-5 items-center ">
        <div>
            <p class="text-2xl font-extrabold text-white">{{ service.name }}</p>
            <p class="text-4xl font-black text-blue-500">{{ formatCurrency(service.price) }}</p>
        </div>
        <button @click="appointmentsStore.onServiceSelected(service)" type="button" 
        class="inline-flex items-center rounded-md bg-red-600 text-white text-sm px-3 py-2 font-semibold shadow-sm
        ring-1 ring-inset ring-red-300 hover:bg-red-700" 
        >Eliminar</button>


    </div>

  
</template>

<script setup>
import { formatCurrency } from '../helpers/index'
import { useAppointmentsStore } from '../stores/appointments';

const appointmentsStore = useAppointmentsStore();

defineProps({
    service: Object
})

</script>

