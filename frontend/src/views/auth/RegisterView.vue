<template>
    <h1 class="text-6xl font-extrabold text-white text-center mt-10">
        Crea una Cuenta
    </h1>

    <p class="text-2xl text-white text-center my-5">
        Crea una cuenta en AppSalon
    </p>

    <FormKit 
    id="registerForm"
    @submit="handleSubmit"
     type="form" 
     :actions="false" 
     incomplete-message="Todos los campos son obligatorios">

        <FormKit type="text" name="name" label="Nombre" validation="required|length:3" placeholder="Escribe tu nombre"
            :validation-messages="{
                required: 'El nombre es obligatorio',
                length: 'El nombre debe tener al menos 3 caracteres',
            }" />

        <FormKit type="email" name="email" label="Email" validation="required|email" placeholder="Escribe tu email"
            :validation-messages="{
                required: 'El email es obligatorio',
                email: 'El email no es valido',
            }" />

        <FormKit type="password" name="password" label="Password" validation="required|length:6"
            placeholder="Escribe tu password" :validation-messages="{
                required: 'El password es obligatorio',
                length: 'El password debe tener al menos 6 caracteres',
            }" />


        <FormKit type="password" name="password_confirm" label="Repite tu Password" validation="required|confirm"
            placeholder="Escribe tu password" :validation-messages="{
                required: 'El password es obligatorio',
                confirm: 'Los passwords no coinciden',
            }" />

        <FormKit type="submit">
            Crear Cuenta
        </FormKit>

    </FormKit>
</template>

<script setup>
import authApi from '../../api/AuthApi.js'
import { inject } from 'vue';
import { reset } from '@formkit/vue';

const toast = inject('toast')

const handleSubmit = async ({ password_confirm, ...dataForm }) => {
    try {
        const {data} = await authApi.register(dataForm)
        toast.open({
            message: data.msg,
            type: 'success',
        })
        reset('registerForm')
        
    } catch (error) {
        toast.open({
            message: error.response.data.msg || 'Ocurrio un error',
            type: 'error',
        })
    }
}

</script>

