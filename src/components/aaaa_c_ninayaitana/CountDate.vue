<script setup>
    import { computed, ref, onMounted, onUnmounted } from 'vue';
    const targetDate = new Date('2024-11-18 16:00:00').getTime(); // Fecha objetivo
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
    duration: 500, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  // delay: 200,
  });

</script>

<template>
  <div class="text-center my-16" data-aos="zoom-in" data-aos-delay="500">
    <h2 class="text-xl font-bold text-rose-400 bangers-font tracking-wider">Solo faltan</h2>
    
    <div v-if="timeRemaining">

      <p class="mt-8 font-bold text-xl text-rose-400">{{ timeRemaining.days }} dias</p>

      <div class="flex gap-2 justify-center items-center italic mt-3">
        <span class="bg-rose-200 text-rose-500 rounded-lg p-3">{{ timeRemaining.hours }} hs.</span>
        <span>:</span>
        <span class="bg-rose-200 text-rose-500 rounded-lg p-3">{{ timeRemaining.minutes }} min.</span>
        <span>:</span>
        <span class="bg-rose-200 text-rose-500 rounded-lg p-3">{{ timeRemaining.seconds }} seg.</span>
      </div>

    </div>
    
    <p v-else>¡Es hoooy!</p>
  </div>
</template>

<style scoped>

</style>