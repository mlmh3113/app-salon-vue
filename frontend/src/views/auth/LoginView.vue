<template>
  <h1 class="text-6xl font-extrabold text-white text-center mt-10">
        Iniciar Sesion
    </h1>

    <p class="text-2xl text-white text-center my-5">
        si tienes una cuenta, inicia sesion
    </p>

    <FormKit 
    id="loginForm"
    @submit="handleSubmit"
     type="form" 
     :actions="false" 
     incomplete-message="Todos los campos son obligatorios">

 

        <FormKit type="email" name="email" label="Email de Usuario" validation="required|email" placeholder="Escribe tu email"
            :validation-messages="{
                required: 'El email es obligatorio',
                email: 'El email no es valido',
            }" />

        <FormKit type="password" name="password" label="Password" validation="required"
            placeholder="Escribe tu password" :validation-messages="{
                required: 'El password es obligatorio',
            }" />



        <FormKit type="submit">
            Iniciar Sesion
        </FormKit>

    </FormKit>
</template>

<script setup>
import AuthApi from '../../api/AuthApi.js'
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const toast = inject('toast')
const router = useRouter()

const handleSubmit=async(FormData)=>{
    try {
        const {data: {token}} = await AuthApi.login(FormData)
        localStorage.setItem('AUTH_TOKEN', token)
        router.push({name: 'my-appointments'})
      
    }catch (error) {
        toast.open({
            message: error.response.data.msg || 'Ocurrio un error',
            type: 'error',
            duration: 3000
        })
    }
}

</script>

