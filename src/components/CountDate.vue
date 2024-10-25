<script setup>
    import { computed, ref, onMounted, onUnmounted } from 'vue';
    import {dateEvent} from '@/helpers/config.js'
    const targetDate = new Date(dateEvent).getTime(); // Fecha objetivo
    const timeRemaining = ref(null);
    let intervalId = null;

    const updateTimeRemaining = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timeRemaining.value = { days, hours, minutes, seconds };
      } else {
        timeRemaining.value = null; // El evento ha llegado
        clearInterval(intervalId);  // Detener el intervalo cuando el evento llega
      }
    };

    onMounted(() => {
      updateTimeRemaining(); // Llamar inmediatamente al montar
      intervalId = setInterval(updateTimeRemaining, 1000); // Actualizar cada segundo
    });

    onUnmounted(() => {
      clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
    });

</script>

<template>
  <div class="text-center my-16">
    <h2 class="text-xl italic font-bold text-pink-950">Solo faltan</h2>
    
    <div v-if="timeRemaining">

      <p class="mt-8 font-bold text-xl">{{ timeRemaining.days }} dias</p>

      <div class="flex gap-2 justify-center items-center italic mt-3">
        <span class="bg-pink-300 rounded-lg p-3">{{ timeRemaining.hours }} hs.</span>
        <span>:</span>
        <span class="bg-pink-300 rounded-lg p-3">{{ timeRemaining.minutes }} min.</span>
        <span>:</span>
        <span class="bg-pink-300 rounded-lg p-3">{{ timeRemaining.seconds }} seg.</span>
      </div>

    </div>
    
    <p v-else>¡Es hoooy!</p>
  </div>
</template>

<style scoped>

</style>