<template>
    <h2 class="text-4xl font-extrabold text-white mt-10">Detalles Cita y Resumen</h2>

    <p class="text-lg text-white mt-5">Acontinuacion verifica la informacion y confirma tu cita</p>

    <h3 class="text-3xl font-extrabold text-white mt-10">Servicios</h3>


    <div v-if="appointmentsStore.noServicesSelected">
        <p class="text-3xl text-white text-center mt-5"> No hay Servicios Seleccionados </p>
    </div>


    <div v-else class="grid gap-5">
        <SelectedService class="mt-5" v-for="service in appointmentsStore.services" :key="service._id" :service="service" />
        <div class="mt-5 bg-slate-500 flex justify-end p-5 rounded opacity-90">
            <p class="text-white text-2xl font-bold "><span>Total a Pagar: {{ formatCurrency(appointmentsStore.totalAmount)
            }}</span></p>
        </div>
    </div>

    <div class="spacet-8">
        <h3 class="text-3xl font-extrabold text-white mt-5">Fecha y hora</h3>
        <div class="lg:flex gap-5 items-start mt-10">
            <div class="w-full lg:w-96 flex justify-center rounded">
                <VueTailwindDatepicker i18n="es-mx" as-single no-input :formatter="formatter" :disable-date="disableDate"
                    v-model="appointmentsStore.date" />
            </div>
            <div class="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 lg:mt-0">



                <button v-for="hour in appointmentsStore.hours" :key="hour" @click="setTime(hour)"
                    class="block text-blue-500 uppercase text-xl font-black rounded-lg  p-2"
                    :class="appointmentsStore.time === hour ? 'bg-blue-500 text-white' : 'bg-white '" type="button">{{ hour
                    }}</button>
            </div>
        </div>




    </div>

    <div v-if="appointmentsStore.isValidReservation" class="flex justify-end mt-5">

        <button @click="appointmentsStore.createAppointment"
            class="w-full lg:w-auto bg-blue-500 hover:bg-blue-700 uppercase text-white p-3 font-extrabold text-xs rounded">
            Confirmar Cita
        </button>
    </div>
</template>

<script setup>
import VueTailwindDatepicker from 'vue-tailwind-datepicker';
import { ref } from 'vue';
import SelectedService from '@/components/SelectedService.vue';
import { useAppointmentsStore } from '@/stores/appointments';
import { formatCurrency } from '@/helpers';


const appointmentsStore = useAppointmentsStore();



const formatter = ref({
    date: 'DD/MM/YYYY',
}
)

const disableDate = (date) => {
    const today = new Date()
    return date < today || date.getMonth() > today.getMonth() + 1 || date.getDay() === 1
}

const setTime = (hour) => {
    appointmentsStore.time = hour;
}


</script>

<style lang="scss" scoped></style>