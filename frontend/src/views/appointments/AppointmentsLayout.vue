<template>
    <div class="flex justify-between">
        <h1 class="text-3xl lg:text-6xl font-black text-white ">App Salon</h1>
        <div class="flex flex-col space-y-5">
            <div class="flex gap-2 items-center">
                <p class="text-white text-right">Usuario: {{ user.getUserName }}</p>
                <button @click="user.logout" class="bg-red-500 hover:bg-red-700 uppercase text-white p-2 font-extrabold text-xs rounded">Cerrar
                    Sesion</button>

            </div>
            <nav class="flex gap-2 items-center justify-end">
                <RouterLink :to="{ name: 'my-appointments' }"
                    class="p-3 text-gray-200 uppercase text-xs font-black rounded-lg">Mis Citas
                </RouterLink>

                <RouterLink :to="{ name: 'new-appointment' }"
                    class="p-2 text-gray-200 uppercase text-xs font-extrabold rounded bg-blue-500 hover:bg-blue-700">nueva
                    cita</RouterLink>
            </nav>
        </div>
    </div>
    <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { useUserStore } from '../../stores/user.js';

const user = useUserStore();

</script>

