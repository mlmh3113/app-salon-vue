<template>
    <div @click="appointmentsStore.onServiceSelected(service)" 
    class="p-5 space-y-5 rounded-lg cursor-pointer "
    :class="appointmentsStore.isServiceSelected(service._id) ? 'bg-blue-500 hover:bg-blue-700 text-white' : ' bg-white hover:bg-slate-200'"
    >
    
        <p class="text-2xl font-light">{{ service.name }}</p>
        <p class="text-4xl font-black "
        :class="appointmentsStore.isServiceSelected(service._id) ? 'text-white' : 'text-blue-700'"
        >{{ formatCurrency(service.price) }}</p>
    </div>

</template>

<script setup>
import { useAppointmentsStore } from '@/stores/appointments';
import { formatCurrency } from '../../helpers/index.js'

const appointmentsStore = useAppointmentsStore();

defineProps({
    service: Object
})
</script>

