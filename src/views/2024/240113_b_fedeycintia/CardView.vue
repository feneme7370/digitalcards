<script setup>

//       <!-- ***************************************** IMPORT COMPONENTS ***************************************** -->
import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
import { initFlowbite } from 'flowbite'
import { computed, ref, onMounted, onUnmounted } from 'vue';

//       <!-- ***************************************** COUNTED DATE ***************************************** -->
const targetDate = new Date('2025-08-13 20:00:00').getTime(); // Fecha objetivo
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

//       <!-- ***************************************** MOUNTED ***************************************** -->
onMounted(() => {
  updateTimeRemaining(); // Llamar inmediatamente al montar
  intervalId = setInterval(updateTimeRemaining, 1000); // Actualizar cada segundo
  initFlowbite();
});
onUnmounted(() => {
  clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
});

//       <!-- ***************************************** AUDIO SETTINGS ***************************************** -->
const isPlaying = ref(false);
const toggleAudio = () => {
  if (music) {
    if (isPlaying.value) {
      music.pause();
    } else {
      music.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

//       <!-- ***************************************** WSP NUMBER ***************************************** -->
const wspNumber = "5492396513953";
const wspText = "https://api.whatsapp.com/send/?phone=" + wspNumber + "&text=Te confirmo la asistencia";
const maps = "https://www.google.com/maps/dir/San+Pedro,+Provincia+de+Buenos+Aires/Pilar,+Provincia+de+Buenos+Aires/@-34.0686594,-59.9487219,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x95ba22ed0eb1a55f:0xe5f2bb57c8ee993a!2m2!1d-59.6628664!2d-33.6757835!1m5!1m1!1s0x95bc9cb6643d2003:0xa8da0402f634b636!2m2!1d-58.9153722!2d-34.4663154!3e0?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D";
</script>

<template>
  <div class="bg-gray-100">
    <div class="bg-gray-50 montserrat-font font-extralight text-green-800 overflow-hidden mx-auto max-w-lg relative">


      <!-- ***************************************** MUSIC ***************************************** -->
      <button class="fixed top-16 right-5 z-10 px-3 py-4 bg-green-50 fill-gray-500 rounded-full flex justify-center"
        @click="toggleAudio">

        <span v-if="isPlaying"><svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
          </svg></span>

        <span v-else><svg class="h-2 w-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg></span>

        <span class=""><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z" />
          </svg></span>

      </button>

      <audio id="music" loop autoplay class="hidden">
        <source src="/src/assets/songs/perfect_ed_sheeran.mp3" type="audio/mpeg">
      </audio>

      <!-- ***************************************** IMAGE HERO ***************************************** -->
      <section class="bg-center bg-no-repeat bg-gray-700 relative">

        <div class="mb-3 h-screen flex items-center">
          <img class="object-cover  mx-auto w-full " src="/2024/240113_b_fedeycintia/images/nosotros13.png"
            alt="">
        </div>


      </section>

      <!-- ***************************************** TEXT TO WELCOME ***************************************** -->
      <section>

        <div class="grid grid-cols-1 gap-12 w-full text-green-700 fill-green-700 py-20">

          <div class="border border-green-800 mx-7 mt-7"></div>
          <h2 class="text-center text-base font-light px-2" data-aos="fade-up">
            💍 ¡Nos queremos casar! 💍
            <br><br>
            Estamos muy emocionados de dar este gran paso juntos ❤️ y nos encantaría que nos acompañes en este día tan
            especial 🥂✨. ¡Esperamos poder celebrar el comienzo de esta nueva etapa junto a ti! 🎉💒
          </h2>

        </div>
      </section>

      <!-- ***************************************** IMAGE SECOND ***************************************** -->
      <section class="bg-center bg-no-repeat bg-gray-700 relative mt-16">

        <div class="mb-1">
          <img class="rounded-2xl" src="/2024/240113_b_fedeycintia/images/frase4.png" alt="">
        </div>

      </section>

      <!-- ***************************************** MAPS ***************************************** -->
      <section>
        <div class="px-2">
          <div class="bg-opacity-50 bg-green-50 h-min flex items-center justify-center">
            <div class="container mx-auto">


              <div class="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden mt-2 mb-3 dancing-script-font">
                <img src="/2024/240113_b_fedeycintia/images/nosotros12.jpeg" alt="Evento 1"
                  class="w-full h-60 object-cover">
                <div class="p-4 font-bold">
                  <h2 class="text-xl font-bold mb-2">Celebracion</h2>
                  <p class="text-base mb-2">Fecha: 13 de Enero, 2024</p>
                  <p class="text-base mb-2">Ruta 5, Km 367, Pehuajo</p>

                  <div class="mt-3 flex justify-center items-center">
                    <a href="https://www.google.com.ar/maps/@-35.844199,-61.8973193,445m/data=!3m1!1e3?entry=ttu"
                      target="_blank"
                      class="fondo-primario hover:fondo-primario-dark text-white text-2xl py-1 px-2 rounded focus:outline-none focus:shadow-outline text-center flex items-center justify-center gap-3">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>

                      </span>
                      <span>
                        Ver en Mapa
                      </span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** COUNT DATE ***************************************** -->
      <section class="text-center my-12" data-aos="zoom-in" data-aos-delay="500">
        <h2 class="text-2xl text-green-700 italic">Solo queda para la boda</h2>

        <div v-if="timeRemaining">

          <p class="mt-8 text-xl text-green-700">{{ timeRemaining.days }} dias</p>

          <div class="flex gap-2 justify-center items-center italic mt-3">

            <span class=" text-green-800 rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.hours }}</span>
              <span class="text-xs">horas</span>
            </span>

            <span>:</span>

            <span class=" text-green-800 rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.minutes }}</span>
              <span class="text-xs">minutos</span>
            </span>

            <span>:</span>

            <span class=" text-green-800 rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.seconds }}</span>
              <span class="text-xs">segundos</span>
            </span>

          </div>


        </div>

        <p v-else>¡Es hoooy!</p>

        <div class="border border-green-800 mx-7 mt-7"></div>
      </section>

      <!-- ***************************************** ITINERARIO ***************************************** -->
      <section>
        <div class="bg-white letra-primaria px-2">
          <div class="container mx-auto py-8">
            <h1 class="text-5xl font-bold mb-6 text-center dancing-script-font">Itinerario del Evento</h1>

            <div class="relative">

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">20:00</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Invitados</h2>
                  <p class=" text-base font-light">Llegada de los invitados</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">20:30</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Ceremonia</h2>
                  <p class=" text-base font-light">Llegada de los novios</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">21:00</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Recepcion</h2>
                  <p class=" text-base font-light">A degustar la entrada</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">21:45</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Baile</h2>
                  <p class=" text-base font-light">Primer baile de la noche</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">23:00</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Cena</h2>
                  <p class=" text-base font-light">¡¡ Lechon y Carne !!</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">00:00</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">La segundita</h2>
                  <p class=" text-base font-light">Segunda tanda de baile</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">02:30</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Mesa Dulce y Brindis</h2>
                  <p class=" text-base font-light">Mmmm... que rico</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">03:30</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Seguimos bailando</h2>
                  <p class=" text-base font-light">♫ Pe pe pe pe ♫</p>
                </div>
              </div>

              <div class="flex items-center mb-8 montserrat " data-aos="zoom-in" data-aos-delay="500">
                <div class="fondo-primario text-white rounded-full p-3">
                  <span class="text-lg mx-auto">04:30</span>
                </div>
                <div class="ml-4">
                  <h2 class=" text-xl font-bold">Carioca</h2>
                  <p class=" text-base font-light">♫ A saltar ♫</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="">
          <img class="rounded-2xl" src="/2024/240113_b_fedeycintia/images/frase2.png" alt="">
        </div>
      </section>

      <!-- ***************************************** GALLERY ***************************************** -->
      <section>
        <div class="">
          <!-- <div class="bg-white"> -->
          <div class="container mx-auto py-8">
            <h1 class="text-5xl font-bold mb-6 text-center dancing-script-font">Un poco de nosotros...</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="relative group cursor-pointer">
                <img src="/2024/240113_b_fedeycintia/images/nosotros7.jpeg" alt="Foto 1"
                  class="w-full h-96 object-cover rounded-lg transition duration-300 transform group-hover:scale-105">
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span class="text-white text-xl font-bold">Queremos</span>
                </div>
              </div>
              <div class="relative group cursor-pointer">
                <img src="/2024/240113_b_fedeycintia/images/nosotros2.jpeg" alt="Foto 2"
                  class="w-full h-96 object-cover rounded-lg transition duration-300 transform group-hover:scale-105">
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span class="text-white text-xl font-bold">Que</span>
                </div>
              </div>
              <div class="relative group cursor-pointer">
                <img src="/2024/240113_b_fedeycintia/images/nosotros14.jpeg" alt="Foto 3"
                  class="w-full h-96 object-cover rounded-lg transition duration-300 transform group-hover:scale-105">
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span class="text-white text-xl font-bold">Lo</span>
                </div>
              </div>
              <div class="relative group cursor-pointer">
                <img src="/2024/240113_b_fedeycintia/images/nosotros4.jpeg" alt="Foto 4"
                  class="w-full h-96 object-cover rounded-lg transition duration-300 transform group-hover:scale-105">
                <div
                  class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <span class="text-white text-xl font-bold">Disfrutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** CONFIRM ASSISTANS ***************************************** -->
      <section>
        <div class="my-5">
          <!-- <div class="border-t-2 border-b-2 border-emerald-900"> -->

          <!-- <img src="/images/eucaliptus-4.jpg" alt=""> -->

          <div class="">
            <div class="container mx-auto py-8">
              <h1
                class="text-2xl font-bold mb-10 text-center dancing-script-font flex items-center justify-center gap-3">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 448 512">
                    <path
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </span>
                <span>Confirmanos tu asistencia</span>
              </h1>

              <div class=" flex items-center justify-center gap-2 montserrat">
                <a href="https://api.whatsapp.com/send/?phone=5492396513953&text=Confirmo asistencia a la Boda de Fede y Cinti"
                  class="fondo-primario hover:fondo-primario-dark text-white font-light text-xl py-3 px-5 rounded focus:outline-none focus:shadow-outline text-center">
                  Fede
                </a>
                <span>

                </span>
                <a href="https://api.whatsapp.com/send/?phone=5492396627259&text=Confirmo asistencia a la Boda de Fede y Cinti"
                  class="fondo-primario hover:fondo-primario-dark text-white font-light text-xl py-3 px-5 rounded focus:outline-none focus:shadow-outline text-center">
                  Cinti
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** MUSIC SUGGESTED ***************************************** -->
      <section>
        <div class="fondo-primario">
          <div class="container mx-auto py-8">
            <h1 class="text-white text-5xl mb-6 text-center dancing-script-font">Pedile un tema al DJ</h1>


            <div class=" flex items-center justify-center gap-4">
              <a href="https://api.whatsapp.com/send/?phone=5492396627259&text=Quiero bailar "
                class="fondo-primario hover:fondo-primario-dark text-white font-bold text-2xl py-3 px-3 rounded-3xl focus:outline-none focus:shadow-outline text-center border border-white flex items-center justify-center gap-4">
                <span class="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                </span>
                <span class="dancing-script-font text-3xl">Quiero bailar...</span>
                <span class="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** COMMENTS ***************************************** -->
      <section>
        <div class="bg-cover bg-center border-t-2 borde-primario"
          style="background-image: url('/2024/240113_b_fedeycintia/images/eucaliptus-2.jpg')">
          <div class="bg-opacity-20  h-60 flex items-center justify-center">
            <div class="container mx-auto text-center montserrat letra-primaria">
              <p class="text-lg my-1 px-5">Estamos organizando una fiesta al aire libre y esperamos que traigas tu
                propia bebida, para que podamos mantenernos hidratados y felices.</p>
              <span class=" flex items-center justify-center gap-1 letra-primaria">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                  <path fill="#305f64"
                    d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                  <path fill="#305f64"
                    d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" viewBox="0 0 512 512">
                  <path fill="#305f64"
                    d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="h-10 bg-white">

        </div>
      </section>

      <!-- ***************************************** COMMENTS ***************************************** -->
      <section>
        <div class="py-5 fondo-secundario">
          <div class="mx-auto">
            <h1 class="text-3xl font-bold mb-6 text-center dancing-script-font flex items-center justify-center gap-3">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </span>
              <span>
                Nuestro Regalo
              </span>
            </h1>
            <p class="container text-base px-2 text-center montserrat"><span class="font-bold">Es tu presencia</span>,
              pero si ademas quieres colaborar con nuestro proyecto de vida</p>

            <div class="p-1 mt-4 px-5 montserrat">
              <div class="accordion border-2 borde-primario rounded-3xl ">
                <input type="checkbox" class="accordion-checkbox" id="panel1">
                <label class="accordion-label cursor-pointer px-2" for="panel1">
                  <h2 class="text-lg pl-5">VER CBU</h2>
                  <div class="accordion-icon">&#x25BC;</div>
                </label>
                <div class="accordion-content">
                  <p class="text-base font-bold text-center my-3">0140308203673852562164</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** END COMMENT ***************************************** -->
      <section>
        <div class="bg-green-50 border border-green-800 grid text-center items-center px-5 py-10 my-10">

          <p class="text-green-800 text-sm"><span class="font-bold">✨ ¡Gracias por ser parte de nuestra historia!
              ✨</span><br><br>Tu presencia hará que este
            día sea aún más especial. Nos vemos pronto para celebrar juntos este nuevo comienzo. 💖</p>
          <p class="text-green-900 text-xs text-end mt-3 roboto-font">- Fede y Cinti.</p>

        </div>
      </section>

    </div>
  </div>

</template>



<style scoped>
body {
  font-family: 'Edu TAS Beginner', cursive;
}

.fondo-primario {
  background-color: #305f64
}

.borde-primario {
  border-color: #305e63;
}

.fondo-secundario {
  background-color: #87bfaa;
}

.letra-primaria {
  color: #305e63;
}

.fondo-primario-dark {
  background-color: #204d52;
}


.montserrat {
  font-family: "Montserrat", Sans-serif;
}

.form {
  @apply bg-gray-300 rounded-md p-5 m-2;
}

.campo {
  @apply bg-gray-200 rounded-md grid gap-2 p-2;
}

.campo label {
  @apply p-2 rounded-md;
}

.campo input {
  @apply p-2 rounded-md w-full;
}

.accordion-checkbox {
  display: none;
}

.accordion-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  /* padding: 1rem; */
  /* border-bottom: 1px solid #ccc; */
}

.accordion-icon {
  font-size: 1.5rem;
}

.accordion-content {
  display: none;
  /* padding: 1rem; */
}

.accordion-checkbox:checked+.accordion-label .accordion-icon {
  transform: rotate(180deg);
}

.accordion-checkbox:checked+.accordion-label+.accordion-content {
  display: block;
}
</style>