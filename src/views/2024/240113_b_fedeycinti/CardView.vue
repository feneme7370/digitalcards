<script setup>

//       <!-- ***************************************** IMPORT COMPONENTS ***************************************** -->
import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
import { initFlowbite } from 'flowbite'
import { computed, ref, onMounted, onUnmounted } from 'vue';

//       <!-- ***************************************** COUNTED DATE ***************************************** -->
const targetDate = new Date('2025-01-13 20:00:00').getTime(); // Fecha objetivo
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
    <div
      class="bg-gray-50 montserrat-font font-extralight text-normal overflow-hidden mx-auto max-w-lg relative">


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

        <!-- imagen de portada -->
        <img loading="lazy" class="w-full opacity-80 object-cover h-screen min-h-48"
          src="/2024/240113_b_fedeycinti/images/hero.jpg" alt="imagen portada">

        <!-- descripcion sobre la portada -->
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full mx-auto max-w-screen-xl text-center flex flex-col items-center justify-end text-gray-50">

          <div class="mb-28 py-5 w-full grid gap-3">
            <h1 class="mb-2 text-2xl dancing-script-font" data-aos="fade-up">Nos casamos</h1>

            <p class=" text-xl sm:px-16 ease-linear dancing-script-font" data-aos="fade-up">Fede y Cinti</p>
          </div>

        </div>

      </section>

      <!-- ***************************************** TEXT TO WELCOME ***************************************** -->
      <section>
        
        <div class="grid grid-cols-1 gap-12 w-full text-normal fill-dark py-20">
          
          <div class="border-dark mx-7 mt-7"></div>
          <h2 class="text-center text-base font-light px-2 dancing-script-font" data-aos="fade-up">
            💍 ¡Nos queremos casar! 💍
            <br><br>
            Estamos muy emocionados de dar este gran paso juntos ❤️ y nos encantaría que nos acompañes en este día tan
            especial 🥂✨. ¡Esperamos poder celebrar el comienzo de esta nueva etapa junto a ti! 🎉💒
          </h2>

        </div>
      </section>

      <!-- ***************************************** IMAGE PROTAGONIST ***************************************** -->
      <section>
        <ImgLightbox class="h-20" name="/2024/240113_b_fedeycinti/images/1.jpg" nameImg="imagen_1" nameAlbum="portada" />
      </section>

      <!-- ***************************************** DRESS CODE ***************************************** -->
      <section>
        <div class="grid grid-cols-1 gap-3 w-full text-normal fill-dark pb-5 pt-7">

          <span>
            <svg class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0l12.6 0c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7 480 448c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-250.3-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0l12.6 0z"/></svg>
          </span>

          <h2 class="text-center text-lg font-light px-2 dancing-script-font" data-aos="fade-up">
            Drescode
            <br><br>
            🥂 Vestimenta Elegante ✨
          </h2>

        </div>

        <div class="border-dark mx-28 mt-3"></div>
        
      </section>

      <!-- ***************************************** INSTA ***************************************** -->
      <section>
        <div class="grid grid-cols-1 gap-3 w-full text-normal fill-dark py-5">


          <a target="_blank" href="https://www.instagram.com/fedeemarasco" class="text-center text-lg font-light px-2 text-dark" data-aos="fade-up">
            @FedeyCinti
          </a>

          <h2 class="text-center text-sm font-light px-2" data-aos="fade-up">
            ¡Preparate para nuestro casamiento!
            Podes seguirnos en nuestra cuenta para ver todo sobre el casamiento y etiquetarnos en tus fotos y videos. 
          </h2>

          <a class="mx-auto my-5 text-xs rounded text-center text-normal fill-dark bg-pink-100 p-3 flex gap-2 items-center"
              target="_blank" href="https://www.instagram.com/fedeemarasco">

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              <span class=" font-light  w-auto  hover:shadow-sm">
                Ver Insta
              </span>
            </a>

        </div>
      </section>

      <!-- ***************************************** COUNT DATE ***************************************** -->
      <section class="text-center my-12 dancing-script-font" data-aos="zoom-in" data-aos-delay="500">
        <h2 class="text-2xl text-normal italic">Solo queda para la boda</h2>

        <div v-if="timeRemaining">

          <p class="mt-8 text-xl text-normal">{{ timeRemaining.days }} dias</p>

          <div class="flex gap-2 justify-center items-center italic mt-3">

            <span class=" text-normal rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.hours }}</span>
              <span class="text-xs">horas</span>
            </span>

            <span>:</span>

            <span class=" text-normal rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.minutes }}</span>
              <span class="text-xs">minutos</span>
            </span>

            <span>:</span>

            <span class=" text-normal rounded-lg p-3 flex flex-col justify-center gap-2">
              <span class="text-lg font-bold">{{ timeRemaining.seconds }}</span>
              <span class="text-xs">segundos</span>
            </span>

          </div>


        </div>

        <p v-else>¡Es hoooy!</p>

        <div class="border-dark mx-7 mt-7"></div>
      </section>

      <!-- ***************************************** GIFTS ***************************************** -->
      <section>
        <div class="grid grid-cols-1 gap-3 justify-center fill-dark bg-normal pb-3 pt-5">
          <svg class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z" />
          </svg>


          <p class="mx-auto text-center">¡El mejor regalo es tu presencia!</p>
          <p class="mx-auto text-center">Si deseás realizarnos otro regalo, podés colaborar con nuestra Luna de Miel...
          </p>

          <!-- Boton de modal -->
          <button data-modal-target="default-bank" data-modal-toggle="default-bank"
            class="mx-auto my-5 text-sm rounded texttext-normal fill-dark bg-normal p-3 flex gap-2 items-center border-dark"
            type="button">
            Datos Bancarios
          </button>

          <!-- Main modal -->
          <div id="default-bank" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">

              <!-- Modal content -->
              <div class="relative bg-normal rounded-lg shadow">

                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 border-dark rounded-t ">
                  <h3 class="text-sm font-semibold text-dark">
                    Cinti y Fede
                  </h3>
                  <button type="button"
                    class="text-dark bg-transparent hover:text-dark rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-bank">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Cerrar Modal</span>
                  </button>
                </div>

                <!-- Modal body -->
                <div class="p-4 space-y-4 whitespace-pre-wrap italic text-center bg-white">
                  <p>Datos Bancarios</p>
                  <p>Nombre del Titular: <br>MARASCO FEDERICO</p>
                  <p>CBU: <br>12345623561</p>
                  <p>Alias: <br>fede.marasco</p>
                  <p>DNI: 32200552</p>
                  <p>Banco Provincia</p>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***************************************** BUTTON TEXT WHIT IMAGE ***************************************** -->
      <section>
        <div
          class="grid grid-cols-12 gap-1 h-60 w-full text-dark fill-dark mt-8 tracking-widest relative">

          <div class="col-span-8 mx-auto flex flex-col justify-center items-center">

            <!-- Boton de modal -->
            <button data-modal-target="default-modal" data-modal-toggle="default-modal"
              class="-ml-10 mx-auto my-5 text-sm rounded text-center text-normal fill-normal bg-normal p-3 flex gap-2 items-center border-b border-dark"
              type="button">
              Presionar
            </button>

            <!-- Main modal -->
            <div id="default-modal" tabindex="-1" aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative p-4 w-full max-w-2xl max-h-full">

                <!-- Modal content -->
                <div class="relative bg-normal rounded-lg shadow">

                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 border-b border-dark rounded-t bg-normal">
                    <h3 class="text-sm font-semibold text-dark">
                      Cinti y Fede
                    </h3>
                    <button type="button"
                      class="text-dark bg-transparent hover:text-dark rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="default-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span class="sr-only">Cerrar Modal</span>
                    </button>
                  </div>

                  <!-- Modal body -->
                  <div class="p-4 space-y-4 whitespace-pre-wrap bg-gray-50">
                    <p class="text-xs italic py-5 text-normal whitespace-pre-wrap">
                      💍 ¡Nos Casamos y Tú Eres Parte de Este Gran Momento! 💍
                      <br><br>
                      Estamos muy felices de dar este paso juntos ❤️, y no podríamos imaginar este día sin ti.
                      <br><br>
                      Nos encantaría que seas parte de esta celebración 🥂✨.
                      <br><br>
                      ¡Te esperamos para compartir nuestra alegría y crear recuerdos inolvidables! 🎉💒
                    </p>
                  </div>

                  <!-- Modal footer -->
                  <div class="flex items-center max-h-20 p-4 border-t border-dark rounded-b bg-gray-50">
                    <!-- <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> -->
                    <button data-modal-hide="default-modal" type="button"
                      class="mx-auto my-5 text-sm rounded text-center text-normal fill-dark bg-normal p-3 flex gap-2 items-center">Volver</button>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div class="col-span-4"></div>
          <img class="absolute right-0 -mr-10 h-full max-h-56 rounded-xl" src="/2024/240113_b_fedeycinti/images/2.jpg" alt=""
            data-aos="fade-left">

        </div>
      </section>
      <!-- ***************************************** CONFIRM ASSISTANS ***************************************** -->
      <section>
        <div class="bg-normal grid text-center items-center px-5 py-10">

          <div class="border border-dark mx-7 mb-7"></div>

          <p class="text-normal text-base mb-3">Nos gustaria que nos confirmes tu asistencia</p>

          <a class="mx-auto my-5 text-sm rounded text-center text-normal fill-dark bg-pink-100 p-3 flex gap-2 items-center"
          :href="wspText">

            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span class=" font-light  w-auto  hover:shadow-sm">
              Confirmar
            </span>
          </a>

          <div class="border border-dark mx-7 mt-7"></div>

        </div>
      </section>

      <!-- ***************************************** GALLERY ***************************************** -->
      <section>
        <div class="grid grid-cols-2 gap-4 px-1 py-5">
          <div data-aos="zoom-in">
            <ImgLightbox class="img-gallery" name="/2024/240113_b_fedeycinti/images/3.jpg" nameImg="imagen_1"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/2024/240113_b_fedeycinti/images/4.jpg" nameImg="imagen_4"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/2024/240113_b_fedeycinti/images/5.jpg" nameImg="imagen_3"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/2024/240113_b_fedeycinti/images/6.jpg" nameImg="imagen_2"
              nameAlbum="galeria" />
          </div>
        </div>
      </section>

      <!-- ***************************************** MUSIC SUGGESTED ***************************************** -->
      <section>
        <div class="grid text-center items-center px-5 py-5">

          <div class="border border-dark mx-28 mb-7"></div>

          <p class="text-dark text-sm mb-3">Recomendanos una cancion que quieras escuchar</p>

          <a class="mx-auto mt-5 text-sm rounded text-center text-dark fill-dark bg-pink-100 p-3 flex gap-2 items-center"
          :href="wspTextMusic">

            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span class=" font-light  w-auto  hover:shadow-sm">
              Sugerir
            </span>
          </a>

          <div class="border border-dark mx-28 mt-7"></div>
        </div>
      </section>

      <!-- ***************************************** MAPS ***************************************** -->
      <section>
        <div class="grid grid-cols-12 gap-1 h-60 w-full text-normal fill-dark mt-8 mb-16 relative">

          <!-- <img class="absolute -ml-16 h-full max-h-56 rounded-xl" src="/2024/240113_b_fedeycinti/images/7.jpg" alt=""
            data-aos="fade-right"> -->


          <div class="col-span-6 mx-auto grid grid-cols-1 gap-1">

            <span class="text-center mb-7">
              <svg class="h-16 w-16 mx-auto fill-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2L160 512l96 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96 96 0 0-260.8c0-16.9-8.8-32.5-23.3-41.2L344 142.4 344 96l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4L0 464c0 26.5 21.5 48 48 48l80 0 0-238.4L24.9 330.3zM592 512c26.5 0 48-21.5 48-48l0-91.6c0-17.5-9.5-33.6-24.9-42.1L512 273.6 512 512l80 0z"/></svg>
            </span>

            <p class="text-center text-xl font-bold text-normal  mb-5">Iglesia</p>

            <p class="text-center text-xs">Alfonsion</p>
            <p class="text-center text-xs">13 de Enero</p>
            <p class="text-center text-xs">18 Hs.</p>

            <a class="mx-auto my-5 text-xs rounded text-center text-normal fill-dark bg-pink-100 p-3 flex gap-2 items-center"
              :href="maps">

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
              </svg>
              <span class=" font-light  w-auto  hover:shadow-sm">
                Como llegar
              </span>
            </a>
          </div>

          <div class="col-span-6 mx-auto grid grid-cols-1 gap-1">

            <span class="text-center mb-7">
              <svg class="h-16 w-16 mx-auto fill-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M32.1 29.3C33.5 12.8 47.4 0 64 0L256 0c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6l0 99.6 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0-80 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l48 0 0-99.6C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7l143.8 0-5.3-64L93.4 64l-5.3 64z"/></svg>
            </span>

            <p class="text-center text-xl font-bold text-normal mb-5">Fiesta</p>

            <p class="text-center text-xs">Independencia del Peru 453</p>
            <p class="text-center text-xs">13 de Ene</p>
            <p class="text-center text-xs">20 Hs.</p>

            <a class="mx-auto my-5 text-xs rounded text-center text-normal fill-dark bg-pink-100 p-3 flex gap-2 items-center"
              :href="maps">

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
              </svg>
              <span class=" font-light  w-auto  hover:shadow-sm">
                Donde queda?
              </span>
            </a>
          </div>

        </div>
      </section>

      <!-- ***************************************** END COMMENT ***************************************** -->
      <section>
        <div class="bg-normal border border-dark grid text-center items-center px-5 py-10 my-10">

          <p class="text-normal text-sm font-bold">✨ ¡Gracias por ser parte de nuestra historia! ✨</p>
          <p class="text-normal text-base mt-3 dancing-script-font">Tu presencia hará que este día sea aún más especial. Nos vemos pronto para celebrar juntos este nuevo comienzo. 💖</p>
          <p class="text-dark text-xs text-end mt-3 roboto-font">- Fede y Cinti.</p>

        </div>
      </section>

    </div>
  </div>

</template>


<style scoped>
  .text-dark{
    color: #78350f;
  }
  .text-normal{
    color: #92400e;
  }

  .fill-dark{
    fill: #78350f;
  }
  .fill-normal{
    fill: #92400e;
  }

  .border-dark{
    border-top: 2px solid #78350f;
  }
  .border-normal{
    border-top: 2px solid #92400e;
  }

  .bg-normal{
    background-color: #fde4d4;
  }
</style>
