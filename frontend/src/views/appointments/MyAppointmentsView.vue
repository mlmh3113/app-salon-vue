<template>
    <h2 class="text-4xl text-white font-extrabold mt-10">Mis Citas</h2>
    <p class="text-lg text-white mt-5">A continuacion podras administrar tus Citas</p>
    

<p class="text-lg text-white mt-5">{{ user.user.name }}</p>

</template>

<script setup>
import {useUserStore} from '../../stores/user.js';

const user = useUserStore();
</script>
