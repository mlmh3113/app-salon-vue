<template>
    <div class="mx-auto lg:w-3/5 mt-20 ">

     <RouterView />

        <nav class=" py-10 flex flex-col items-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0 ">
            <RouterLink v-for="route in autharoutes" :key="route.name"
                class="text-black uppercase text-xs font-bold bg-blue-500 p-3 rounded-lg hover:bg-white hover:text-blue-500"
                :to="{ name: route.name }">
                {{ route.text }}
            </RouterLink>
        </nav>

   

    </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'

const autharoutes = [
    { name: 'register', text: 'Crea una Cuenta' },
    { name: 'login', text: 'Iniciar Sesion' },
]

</script>

