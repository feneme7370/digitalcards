<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import CountDate from '@/components/aaaa-b-fedeycinti/CountDate.vue'
import ImgLightbox from '@/components/sistem/ImgLightbox.vue'



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
</script>

<template>
  <div class="bg-green-100">
    <div
      class="bg-green-50 playwrite-gbs-font font-extralight text-emerald-800 overflow-hidden mx-auto max-w-lg relative">


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
        <source src="/src/assets/songs/soy_una_serpiente_reino_infantil.mp3" type="audio/mpeg">
      </audio>

      <!-- ***************************************** Portada ***************************************** -->
      <section class="bg-center bg-no-repeat bg-gray-700 relative">

        <!-- imagen de portada -->
        <img loading="lazy" class="w-full opacity-80 object-cover h-screen min-h-48"
          src="/aaaa-b-fedeycinti/images/hero.jpg" alt="imagen portada">

        <!-- descripcion sobre la portada -->
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full mx-auto max-w-screen-xl text-center flex flex-col items-center justify-end text-gray-50">

          <div class="mb-32 py-5 w-full grid gap-3">
            <h1 class="mb-2 text-2xl" data-aos="fade-up">Nos casamos</h1>

            <p class=" text-xl sm:px-16 ease-linear" data-aos="fade-up">Fede y Cinti</p>
          </div>

        </div>

      </section>
      <!-- ***************************************** Comentario inicial ***************************************** -->
      <section>
        <div class="grid grid-cols-1 gap-12 w-full text-emerald-700 fill-emerald-700 py-20">

          <h2 class="text-center text-lg px-2" data-aos="fade-up">
            💍 ¡Nos queremos casar! 💍
            <br><br>
            Estamos muy emocionados de dar este gran paso juntos ❤️ y nos encantaría que nos acompañes en este día tan
            especial 🥂✨. ¡Esperamos poder celebrar el comienzo de esta nueva etapa junto a ti! 🎉💒
          </h2>

        </div>
      </section>

      <!-- ***************************************** Imagen protagonistas ***************************************** -->
      <section>
        <ImgLightbox class="h-20" name="/aaaa-b-fedeycinti/images/1.jpg" nameImg="imagen_1" nameAlbum="portada" />
      </section>
      <!-- ***************************************** Contador de dias ***************************************** -->
      <section>
        <CountDate />
      </section>
      <!-- ***************************************** Regalos ***************************************** -->
      <section>
        <div class="grid grid-cols-1 gap-3 justify-center fill-emerald-800">
          <svg class="h-16 w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z" />
          </svg>
        

        <p class="mx-auto text-center">¡El mejor regalo es tu presencia!</p>
        <p class="mx-auto text-center">Si deseás realizarnos otro regalo, podés colaborar con nuestra Luna de Miel...</p>

        <!-- Boton de modal -->
        <button data-modal-target="default-bank" data-modal-toggle="default-bank"
          class="mx-auto my-5 text-sm rounded text-center text-emerald-400 fill-emerald-400 bg-emerald-100 p-3 flex gap-2 items-center"
          type="button">
          Datos Bancarios
        </button>

        <!-- Main modal -->
        <div id="default-bank" tabindex="-1" aria-hidden="true"
          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative p-4 w-full max-w-2xl max-h-full">

            <!-- Modal content -->
            <div class="relative bg-emerald-50 rounded-lg shadow">

              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 border-b border-emerald-800 rounded-t bg-emerald-200">
                <h3 class="text-sm font-semibold text-emerald-900">
                  Cinti y Fede
                </h3>
                <button type="button"
                  class="text-emerald-900 bg-transparent hover:bg-emerald-200 hover:text-emerald-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
              <div class="p-4 space-y-4 whitespace-pre-wrap">
                <p>Datos Bancarios</p>
                <p>Nombre del Titular: Nombre Apellido</p>
                <p>CBU: 12345623561</p>
                <p>Alias: agenda.la.fecha</p>
                <p>DNI: 32200552</p>
                <p>Banco Galicia</p>
              </div>


            </div>
          </div>
        </div>
      </div>  
      </section>
      <!-- ***************************************** Boton de comentario con Imagen de lado ***************************************** -->
      <section>
        <div
          class="grid grid-cols-12 gap-1 h-60 w-full text-emerald-900 fill-emerald-950 mt-8 tracking-widest relative">

          <div class="col-span-8 mx-auto flex flex-col justify-center items-center">

            <!-- Boton de modal -->
            <button data-modal-target="default-modal" data-modal-toggle="default-modal"
              class="-ml-10 mx-auto my-5 text-sm rounded text-center text-emerald-400 fill-emerald-400 bg-emerald-100 p-3 flex gap-2 items-center"
              type="button">
              Presionar
            </button>

            <!-- Main modal -->
            <div id="default-modal" tabindex="-1" aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div class="relative p-4 w-full max-w-2xl max-h-full">

                <!-- Modal content -->
                <div class="relative bg-emerald-50 rounded-lg shadow">

                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 border-b border-emerald-800 rounded-t bg-emerald-200">
                    <h3 class="text-sm font-semibold text-emerald-900">
                      Cinti y Fede
                    </h3>
                    <button type="button"
                      class="text-emerald-900 bg-transparent hover:bg-emerald-200 hover:text-emerald-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
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
                  <div class="p-4 space-y-4 whitespace-pre-wrap">
                    <p class="text-xs italic py-5 text-emerald-800 whitespace-pre-wrap">
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
                  <div class="flex items-center max-h-20 p-4 border-t border-emerald-800 rounded-b bg-emerald-200">
                    <!-- <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button> -->
                    <button data-modal-hide="default-modal" type="button"
                      class="mx-auto my-5 text-sm rounded text-center text-emerald-800 fill-emerald-800 bg-emerald-100 p-3 flex gap-2 items-center">Volver</button>
                  </div>

                </div>
              </div>
            </div>

          </div>

          <div class="col-span-4"></div>
          <img class="absolute right-0 -mr-10 h-full max-h-56 rounded-xl" src="/aaaa-b-fedeycinti/images/2.jpg" alt=""
            data-aos="fade-left">

        </div>
      </section>
      <!-- ***************************************** Confirmar asistencia ***************************************** -->
      <section>
        <div class="bg-green-100 grid text-center items-center px-5 py-10">

          <p class="text-green-400 text-lg mb-3">Nos gustaria que nos confirmes tu asistencia</p>

          <a class="mx-auto my-5 text-sm rounded text-center text-green-400 fill-green-400 bg-pink-100 p-3 flex gap-2 items-center"
            href="https://api.whatsapp.com/send/?phone=5492396513953&text=Te confirmo la asistencia">

            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span class=" font-light  w-auto  hover:shadow-sm">
              Confirmar
            </span>
          </a>
        </div>
      </section>
      <!-- ***************************************** Galeria de imagenes ***************************************** -->
      <section>
        <div class="grid grid-cols-2 gap-4 px-1 py-5">
          <div data-aos="zoom-in">
            <ImgLightbox class="img-gallery" name="/aaaa-b-fedeycinti/images/3.jpg" nameImg="imagen_1"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/aaaa-b-fedeycinti/images/4.jpg" nameImg="imagen_4"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/aaaa-b-fedeycinti/images/5.jpg" nameImg="imagen_3"
              nameAlbum="galeria" />
          </div>
          <div data-aos="zoom-in" class="min-h-60">
            <ImgLightbox class="img-gallery" name="/aaaa-b-fedeycinti/images/6.jpg" nameImg="imagen_2"
              nameAlbum="galeria" />
          </div>
        </div>
      </section>
      <!-- ***************************************** Ubicacion y mapa ***************************************** -->
      <section>
        <div class="grid grid-cols-12 gap-1 h-60 w-full text-emerald-400 fill-emerald-600 mt-8 mb-6 relative">

          <img class="absolute -ml-16 h-full max-h-56 rounded-xl" src="/aaaa-b-fedeycinti/images/7.jpg" alt=""
            data-aos="fade-right">

          <div class="col-span-6"></div>

          <div class="col-span-6 mx-auto grid grid-cols-1 gap-1">

            <span class="text-center mb-7">
              <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </span>

            <p class="text-center text-xl font-bold">Ubicacion</p>

            <p class="text-center text-xs">Independencia del Peru 453</p>
            <p class="text-center text-xs">17 de Nov</p>
            <p class="text-center text-xs">16 Hs.</p>

            <a class="mx-auto my-5 text-xs rounded text-center text-emerald-600 fill-emerald-600 bg-pink-100 p-3 flex gap-2 items-center"
              href="https://www.google.com/maps/dir/San+Pedro,+Provincia+de+Buenos+Aires/Pilar,+Provincia+de+Buenos+Aires/@-34.0686594,-59.9487219,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x95ba22ed0eb1a55f:0xe5f2bb57c8ee993a!2m2!1d-59.6628664!2d-33.6757835!1m5!1m1!1s0x95bc9cb6643d2003:0xa8da0402f634b636!2m2!1d-58.9153722!2d-34.4663154!3e0?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D">

              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
              </svg>
              <span class=" font-light  w-auto  hover:shadow-sm">
                Como llegar
              </span>
            </a>
          </div>
        </div>
      </section>
      <!-- ***************************************** Comentario final ***************************************** -->
      <section>
        <div class="bg-emerald-100 border border-emerald-600 grid text-center items-center px-5 py-10 my-10">

          <p class="text-emerald-500 text-sm">✨ ¡Gracias por ser parte de nuestra historia! ✨ Tu presencia hará que este
            día sea aún más especial. Nos vemos pronto para celebrar juntos este nuevo comienzo. 💖</p>
          <p class="text-emerald-400 text-xs text-end mt-3 roboto-font">- Fede y Cinti.</p>

        </div>
      </section>

    </div>
  </div>

</template>
