<script setup>
import ImageHero from '@/components/ImageHero.vue'
import Gallery from '@/components/Gallery.vue'
import Ubication from '@/components/Ubication.vue'
import CountDate from '@/components/CountDate.vue'


import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
</script>

<template>
  
  <ImageHero/>

  <h2 class="my-32 italic text-center text-2xl text-pink-800 px-2">¡¡ Queremos invitarte a festejar nuestro primer año con vos !!</h2>


  <ImgLightbox
      class="h-20" 
      name="/src/assets/images/image_portate.jpeg"
      nameImg="imagen_1"
      nameAlbum="portada"
  />

  <CountDate/>

  <div class="bg-pink-400 grid text-center items-center px-5 py-10 my-10">

    <p class="text-pink-900 text-lg font-semibold mb-3">Podes confirmarnos tu asistencia</p>
    
    <a 
      class="mx-auto my-5 text-sm rounded text-center text-pink-800 bg-pink-100 p-3"
      href="https://api.whatsapp.com/send/?phone=5492396513953&text=Te confirmo la asistencia" 
    >
    <span class=" font-light  w-auto  hover:shadow-sm">
      Confirmar
    </span>
    </a>
  </div>
  
  <Gallery />

  <Ubication/>

  <div class="bg-pink-200 border border-pink-950 grid text-center items-center px-5 py-10 my-10">

    <p class="text-pink-500 text-xl">Esperamos poder compartir un momento con vos</p>

  </div>
</template>
