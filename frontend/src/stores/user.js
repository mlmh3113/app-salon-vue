import { ref , onMounted, computed } from 'vue'
import AuthApi from '../api/AuthApi'
import { useRouter } from 'vue-router'

import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', ()=> {

    const router = useRouter()

    const user = ref({})

    onMounted(async () => {
        try {
            const {data} = await AuthApi.auth()
            user.value = data
        } catch (error) {    
        }
    })

    const getUserName = computed(() =>user.value?.name ? user.value?.name : '')

    const logout = async () =>{
        localStorage.removeItem('AUTH_TOKEN')
        user.value = {}
        router.push({ name: 'login' })
    }

    return{
        user,
        getUserName,
        logout
    }
})