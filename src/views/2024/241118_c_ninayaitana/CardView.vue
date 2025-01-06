<script setup>

//       <!-- ***************************************** IMPORT COMPONENTS ***************************************** -->
import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
import { initFlowbite } from 'flowbite'
import { computed, ref, onMounted, onUnmounted } from 'vue';

//       <!-- ***************************************** COUNTED DATE ***************************************** -->
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
const wspNumber = "5492396616672";
const wspText = "https://api.whatsapp.com/send/?phone="+wspNumber+"&text=Te confirmo la asistencia";
const maps = "https://www.google.com.ar/maps/place/Independencia+del+Per%C3%BA+453,+B6450AQI+Pehuaj%C3%B3,+Provincia+de+Buenos+Aires/@-35.7982523,-61.8979608,17z/data=!3m1!4b1!4m5!3m4!1s0x95c0f9da7725f0bf:0x6d845d35ce433cc2!8m2!3d-35.7982567!4d-61.8953859?entry=ttu&g_ep=EgoyMDI0MTExMS4wIKXMDSoASAFQAw%3D%3D";
</script>

<template>
  <div class="bg-pink-100">
    <div class="bg-pink-50 montserrat-font text-pink-800 overflow-hidden mx-auto max-w-lg relative">


      <!-- ***************************************** MUSIC ***************************************** -->
      <button class="fixed top-16 right-5 z-10 px-3 py-4 bg-rose-400 fill-rose-100 rounded-full flex justify-center"
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
        <source src="/src/assets/songs/soy_una_serpiente_reino_infantil.mp3" type="audio/mpeg">
      </audio>

      <!-- ***************************************** IMAGE HERO ***************************************** -->
      <section class="bg-center bg-no-repeat bg-gray-700 relative">

        <img loading="lazy" class="w-full opacity-80 object-cover h-screen min-h-48"
          src="/2024/241118_c_ninayaitana/images/image_hero.jpeg" alt="imagen portada">

        <!-- descripcion sobre la portada -->
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full  mx-auto max-w-screen-xl text-center flex flex-col items-center justify-start text-rose-400">

          <div class="bg-rose-100 my-10 py-5 w-full grid gap-3">
            <h1 class="mb-2 text-2xl bangers-font tracking-wider" data-aos="fade-up">Nuestro primer añito.</h1>

            <p class=" text-xl sm:px-16 ease-linear playwrite-gbs-font font-extralight" data-aos="fade-up">Nina y
              Aitana.
            </p>
          </div>

        </div>

      </section>

      <!-- ***************************************** IMAGE WITH TEXT TO WELCOME ***************************************** -->
      <section class="grid grid-cols-1 gap-12 w-full text-rose-300 fill-pink-800 py-20">

        <!-- <span class="h-16 w-16 text-center mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2L56 72c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c-35.3 0-64 28.7-64 64l0 71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4c0 0 0 0 0 0s0 0 0 0l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0l.1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9l0-71c0-35.3-28.7-64-64-64l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4L0 480c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-85.4z"/></svg>
      </span> -->
        <img class="rounded-full mx-auto border-2 border-pink-200" src="/2024/241118_c_ninayaitana/images/images_4.jpeg"
          alt="" data-aos="zoom-in">

        <h2 class="text-center text-lg px-2 bangers-font tracking-wider" data-aos="fade-up">¡¡ 🎂 Queremos invitarte a
          festejar nuestro primer añito 🎉 !!</h2>

      </section>

      <!-- ***************************************** IMAGE PROTAGONIST ***************************************** -->
      <ImgLightbox class="h-20" name="/2024/241118_c_ninayaitana/images/image_portate.jpeg" nameImg="imagen_1"
        nameAlbum="portada" />

      <!-- ***************************************** COUNT DATE ***************************************** -->
      <section class="text-center my-16" data-aos="zoom-in" data-aos-delay="500">
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
      </section>

      <!-- ***************************************** IMAGE FULL ADITIONAL ***************************************** -->
      <section
        class="w-full relative bg-pink-200 overflow-hidden bg-center bg-no-repeat border-t-2 border-b-2 border-primary-300">

        <!-- imagen -->
        <div class="w-full">
          <img src="/2024/241118_c_ninayaitana/images/images_1.jpeg" alt="imagen portada"
            class="w-full object-cover opacity-80">
        </div>

        <!-- texto sobre la imagen -->
        <div
          class="absolute top-0 right-0 bottom-0 left-0 mx-auto h-auto max-w-screen-xl text-center flex items-center justify-end flex-col text-pink-950 ">

          <p
            class="px-1 py-3 text-lg font-normal lg:text-lg sm:px-16  ease-linear whitespace-pre-wrap bangers-font tracking-wider">
          </p>

        </div>
      </section>

      <!-- ***************************************** BUTTON WITH IMAGE RIGTH ***************************************** -->
      <section
        class="grid grid-cols-12 gap-1 h-60 w-full text-pink-900 fill-pink-950 mt-8 tracking-widest montserrat-font relative">

        <div class="col-span-8 mx-auto flex flex-col justify-center items-center">


          <!-- Modal toggle -->
          <button data-modal-target="default-modal" data-modal-toggle="default-modal"
            class="mx-auto my-5 text-sm rounded text-center text-rose-400 fill-rose-400 bg-rose-100 p-3 flex gap-2 items-center"
            type="button">
            Apreta este boton
          </button>

          <!-- Main modal -->
          <div id="default-modal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <div class="relative bg-pink-50 rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 border-b border-pink-800 rounded-t bg-pink-200">
                  <h3 class="text-sm font-semibold text-pink-900">
                    Cumple de Mellis
                  </h3>
                  <button type="button"
                    class="text-pink-900 bg-transparent hover:bg-pink-200 hover:text-pink-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 space-y-4 whitespace-pre-wrap">
                  <p class="text-sm py-5 text-pink-800 whitespace-pre-wrap">
                    🎉 Nosotras 🎉
                    <br><br>
                    Te queríamos contar que estamos muy contentas porque se viene nuestro primer cumple 🎂,
                    y queremos que estén presentes las personas más importantes 💖.

                    <br><br>
                    ✨ ¡Esperamos verte ese día y que pasemos un momento increíble juntos! ✨
                  </p>
                </div>


                <!-- Modal footer -->
                <div class="flex items-center max-h-20 p-4 border-t border-pink-800 rounded-b bg-pink-200">
                  <!-- <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> -->
                  <button data-modal-hide="default-modal" type="button"
                    class="mx-auto my-5 text-sm rounded text-center text-pink-800 fill-pink-800 bg-pink-100 p-3 flex gap-2 items-center">Volver</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="col-span-4"></div>
        <img class="absolute right-0 -mr-4 h-full max-h-56 rounded-xl"
          src="/2024/241118_c_ninayaitana/images/gallery_6.jpeg" alt="" data-aos="fade-left">

      </section>

      <!-- ***************************************** CONFIRM ASSISTANS ***************************************** -->
      <section class="bg-rose-100 grid text-center items-center px-5 py-10">

        <p class="text-rose-400 text-lg mb-3 bangers-font tracking-wider">Nos gustaria que nos confirmes tu asistencia
          🎈</p>

        <a class="mx-auto my-5 text-sm rounded text-center text-rose-400 fill-rose-400 bg-pink-100 p-3 flex gap-2 items-center"
          :href="wspText">

          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
          </svg>
          <span class=" font-light  w-auto  hover:shadow-sm">
            Confirmar
          </span>
        </a>
      </section>

      <!-- ***************************************** GALLERY ***************************************** -->
      <section class="grid grid-cols-2 gap-4 px-1 py-5">
        <div data-aos="zoom-in">
          <ImgLightbox class="img-gallery img-gallery-mh96" name="/2024/241118_c_ninayaitana/images/gallery_1.jpeg"
            nameImg="imagen_1" nameAlbum="galeria" />
        </div>
        <div data-aos="zoom-in">
          <ImgLightbox class="img-gallery img-gallery-mh96" name="/2024/241118_c_ninayaitana/images/gallery_4.jpeg"
            nameImg="imagen_4" nameAlbum="galeria" />
        </div>
        <div data-aos="zoom-in">
          <ImgLightbox class="img-gallery img-gallery-mh96" name="/2024/241118_c_ninayaitana/images/gallery_3.jpeg"
            nameImg="imagen_3" nameAlbum="galeria" />
        </div>
        <div data-aos="zoom-in">
          <ImgLightbox class="img-gallery img-gallery-mh96" name="/2024/241118_c_ninayaitana/images/gallery_2.jpeg"
            nameImg="imagen_2" nameAlbum="galeria" />
        </div>
      </section>

      <!-- ***************************************** MAPS ***************************************** -->
      <section
        class="grid grid-cols-12 gap-1 h-60 w-full text-rose-400 fill-rose-600 mt-8 tracking-widest bangers-font relative">

        <img class="absolute -ml-8 h-full max-h-56 rounded-xl" src="/2024/241118_c_ninayaitana/images/gallery_5.jpeg"
          alt="" data-aos="fade-right">
        <div class="col-span-4"></div>

        <div class="col-span-8 mx-auto flex flex-col justify-center items-center">
          <span class="text-center mb-7">
            <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
          </span>

          <p class="text-center text-2xl font-bold">Ubicacion</p>

          <p class="text-center text-sm">Independencia del Peru 453</p>
          <p class="text-center text-sm">18 de Nov</p>
          <p class="text-center text-sm">16 Hs. a 19 Hs.</p>

          <a class="mx-auto my-5 text-sm rounded text-center text-rose-600 fill-rose-600 bg-pink-100 p-3 flex gap-2 items-center"
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

        <!-- <div class="w-full bg-slate-300 p-1 mt-5">
          <iframe class="w-full h-72 focus:outline-none" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.3222399009874!2d-61.361869424265215!3d-35.61978171186711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c0823ae11e9dd1%3A0x1c3caf321fdbb6b2!2sArenales%20356%2C%20B6530%20Carlos%20Casares%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1729803515508!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> -->



      </section>

      <!-- ***************************************** END COMMENT ***************************************** -->
      <section class="bg-rose-100 border border-rose-600 grid text-center items-center px-5 py-10 my-10">

        <p class="text-rose-500 text-xl playwrite-gbs-font font-extralight">Esperamos poder compartir este momento con
          vos.</p>
        <p class="text-rose-400 text-sm text-end mt-3 roboto-font">- Nina y Aitana.</p>

      </section>

    </div>
  </div>

</template>
