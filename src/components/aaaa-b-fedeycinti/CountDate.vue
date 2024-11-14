<script setup>
    import { computed, ref, onMounted, onUnmounted } from 'vue';
    const targetDate = new Date('2024-11-17 16:00:00').getTime(); // Fecha objetivo
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

  import AOS from 'aos';
  import 'aos/dist/aos.css';

  AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true,     // La animación ocurre solo una vez al hacer scroll
    delay: 200,
  });

</script>

<template>
  <div class="text-center my-16" data-aos="zoom-in" data-aos-delay="500">
    <h2 class="text-xl font-bold text-emerald-700 ">Solo queda para la boda</h2>
    
    <div v-if="timeRemaining">

      <p class="mt-8 font-bold text-2xl text-emerald-700">{{ timeRemaining.days }} dias</p>

      <div class="flex gap-2 justify-center items-center italic mt-3">
        
        <span class="bg-green-200 text-emerald-800 rounded-lg p-3 flex flex-col justify-center gap-2">
          <span class="text-lg font-bold">{{ timeRemaining.hours }}</span>
          <span class="text-xs">horas</span>
        </span>
        
        <span>:</span>
        
        <span class="bg-green-200 text-emerald-800 rounded-lg p-3 flex flex-col justify-center gap-2">
          <span class="text-lg font-bold">{{ timeRemaining.minutes }}</span>
          <span class="text-xs">minutos</span>
        </span>
        
        <span>:</span>
        
        <span class="bg-green-200 text-emerald-800 rounded-lg p-3 flex flex-col justify-center gap-2">
          <span class="text-lg font-bold">{{ timeRemaining.seconds }}</span>
          <span class="text-xs">segundos</span>
        </span>
      
      </div>


    </div>
    
    <p v-else>¡Es hoooy!</p>
  </div>
</template>

<style scoped>

</style>