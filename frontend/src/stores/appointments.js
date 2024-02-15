import { defineStore } from "pinia";
import { ref, computed, onMounted, inject } from "vue";
import AppointmentApi from "@/api/AppointmentApi";
import { convertToIso } from "@/helpers/date";
import { useRouter } from "vue-router";


export const useAppointmentsStore = defineStore("appointments", () => {
  const services = ref([]);
  const date = ref("");
  const hours = ref([]);
  const time = ref("");

  const toast = inject("toast");
  const router = useRouter();

  onMounted(() => {
    const startHour = 10;
    const endHour = 19;
    for (let hour = startHour; hour <= endHour; hour++) {
      hours.value.push(hour + ":00");
    }
  });

  function onServiceSelected(service) {
    if (
      services.value.some(
        (selectedService) => selectedService._id === service._id
      )
    ) {
      services.value = services.value.filter(
        (selectedService) => selectedService._id !== service._id
      );
    } else {
      if (services.value.length === 2) {
        alert("No puedes seleccionar mas de dos servicios");
        return;
      } else {
        services.value.push(service);
      }
    }
  }

  const isServiceSelected = computed(() => {
    return (id) => {
      return services.value.some((service) => service._id === id);
    };
  });

  const totalAmount = computed(() => {
    return services.value.reduce((total, service) => {
      return total + service.price;
    }, 0);
  });

  const noServicesSelected = computed(() => {
    return services.value.length === 0;
  });

  const isValidReservation = computed(() => {
    return time.value.length && date.value.length && services.value.length;
  });

  const clearAppointmentData = () => {
    date.value = "";
    time.value = "";
    services.value = [];
  }


  const createAppointment = async () => {
    
    const appointment = {
      date: convertToIso(date.value),
      time: time.value,
      services: services.value.map((service) => service._id),
      totalAmount: totalAmount.value,
    };
    const { data } = await AppointmentApi.create(appointment);
    toast.open({ message: data.msg, type: "success" });
    clearAppointmentData();
    router.push({ name: "my-appointments" });

  };

  return {
    services,
    onServiceSelected,
    isServiceSelected,
    totalAmount,
    noServicesSelected,
    date,
    hours,
    time,
    isValidReservation,
    createAppointment,
  };
});
