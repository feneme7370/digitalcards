<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import ImageHero from '@/components/aaaa-c-NinaAitana/ImageHero.vue'
import DescriptionInvite from '@/components/aaaa-c-NinaAitana/DescriptionInvite.vue'
import Gallery from '@/components/aaaa-c-NinaAitana/Gallery.vue'
import Ubication from '@/components/aaaa-c-NinaAitana/Ubication.vue'
import CountDate from '@/components/aaaa-c-NinaAitana/CountDate.vue'
import DescriptionImage from '@/components/aaaa-c-NinaAitana/DescriptionImage.vue'
import Confirm from '@/components/aaaa-c-NinaAitana/Confirm.vue'


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
  <div class="bg-pink-100">
    <div class="bg-pink-50 montserrat-font text-pink-800 overflow-hidden mx-auto max-w-lg relative">


      <!-- ***************************************** MUSIC ***************************************** -->
      <button class="fixed top-10 right-2 z-10 p-4 bg-pink-950 fill-pink-100 rounded-full mx-auto" @click="toggleAudio">

        <span  v-if="isPlaying"><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg></span>

        <span  v-else><svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></span>

      </button>

      <audio id="music" loop autoplay class="hidden">
        <source src="/src/assets/songs/soy_una_serpiente_reino_infantil.mp3" type="audio/mpeg">
      </audio>

      <!-- ***************************************** Portada ***************************************** -->
      <ImageHero/>
  
      <!-- ***************************************** Portada ***************************************** -->
      <DescriptionInvite class="border-b border-pink-950"/>
       
      <!-- Imagen completa de protagonista -->
      <ImgLightbox
           class="h-20" 
           name="/aaaa-c-NinaAitana/images/image_portate.jpeg"
           nameImg="imagen_1"
           nameAlbum="portada"
       />
  
       <!-- Contador de dias -->
       <CountDate/>
  
       <!-- Imagen conejo intermedia con texto-->
        <section class="w-full relative bg-pink-200 overflow-hidden bg-center bg-no-repeat border-t-2 border-b-2 border-primary-300">
    
          <!-- imagen -->
          <div class="w-full">
              <img src="/aaaa-c-NinaAitana/images/images/images_1.jpeg" alt="imagen portada" class="w-full object-cover opacity-80">
          </div>
    
          <!-- texto sobre la imagen -->
          <div class="absolute top-0 right-0 bottom-0 left-0 mx-auto h-auto max-w-screen-xl text-center flex items-center justify-end flex-col text-pink-950 ">
    
              <p class="px-1 py-3 text-lg font-normal lg:text-lg sm:px-16  ease-linear whitespace-pre-wrap bangers-font tracking-wider"></p>
    
          </div>
        </section>
  
        <!-- Boton con comentario e imagen a la derecha -->
        <DescriptionImage/>
       
        <!-- Confirmar asistencia -->
        <Confirm/>
    
        <!-- Galleria de imagenes -->
        <Gallery />
      
        <!-- Ubicacion de mapa -->
        <Ubication/>
       
        <!-- Comentario final -->
        <div class="bg-pink-200 border border-pink-950 grid text-center items-center px-5 py-10 my-10">
      
          <p class="text-pink-900 text-xl playwrite-gbs-font font-extralight">Esperamos poder compartir un momento con vos.</p>
          <p class="text-pink-900 text-sm text-end mt-3 roboto-font">- Nina y Aitana.</p>
      
        </div>

    </div>
  </div>

</template>
