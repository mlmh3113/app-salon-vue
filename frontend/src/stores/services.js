import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import servicesAPI from "../api/servicesAPI";


export const useServicesStore = defineStore("services", () => {
  const services = ref([]);


  onMounted(async () => {
    try {
      const { data } = await servicesAPI.all();
      services.value = data;
    } catch (error) {
      console.log(error);
    }
  });

  return {
    services
  };
});
