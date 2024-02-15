<template>
   <h1 class="text-6xl font-extrabold text-white text-center">Verificar Cuenta</h1>

</template>

<script setup>
import { onMounted , inject } from 'vue'
import authApi from '../../api/AuthApi.js'
import { useRoute , useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const {token} = route.params;


const toast = inject('toast')


onMounted(async () => {
    try {
        const {data} = await authApi.verifyAccount(token);
        toast.open({
            message: data.msg,
            type: 'success',
        })
        setTimeout(() => {
            router.push({name: 'login'})
        },2000)
       
    } catch (error) {
        toast.open({
            message: error.response.data.msg || 'Ocurrio un error',
            type: 'error',
        })
    }
})



</script>

