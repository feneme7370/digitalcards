<script setup>
import ImageHero from '@/components/1-ninayaitana/ImageHero.vue'
import Gallery from '@/components/1-ninayaitana/Gallery.vue'
import Ubication from '@/components/1-ninayaitana/Ubication.vue'
import CountDate from '@/components/1-ninayaitana/CountDate.vue'
import DescriptionInvite from '@/components/1-ninayaitana/DescriptionInvite.vue'
import DescriptionImage from '@/components/1-ninayaitana/DescriptionImage.vue'
import Confirm from '@/components/1-ninayaitana/Confirm.vue'

import ImgLightbox from '@/components/sistem/ImgLightbox.vue'

// const image
</script>

<template>
  <div class="bg-pink-100">
    <div class="bg-pink-50 montserrat-font text-pink-800 overflow-hidden mx-auto max-w-lg">

      <ImageHero/>
  
      <DescriptionInvite class="border-b border-pink-950"/>
       
      <ImgLightbox
           class="h-20" 
           name="/1-ninayaitana/images/image_portate.jpeg"
           nameImg="imagen_1"
           nameAlbum="portada"
       />
  
       <CountDate/>
  
        <section class="w-full relative bg-pink-200 overflow-hidden bg-center bg-no-repeat border-t-2 border-b-2 border-primary-300">
    
          <!-- imagen -->
          <div class="w-full">
              <img src="/1-ninayaitana/images/images/images_1.jpeg" alt="imagen portada" class="w-full object-cover opacity-80">
          </div>
    
          <!-- texto sobre la imagen -->
          <div class="absolute top-0 right-0 bottom-0 left-0 mx-auto h-auto max-w-screen-xl text-center flex items-center justify-end flex-col text-pink-950 ">
    
              <p class="px-1 py-3 text-lg font-normal lg:text-lg sm:px-16  ease-linear whitespace-pre-wrap bangers-font tracking-wider"></p>
    
          </div>
        </section>
  
  
     
        <DescriptionImage/>
       
        <Confirm/>
    
        
        <Gallery />
      
        <Ubication/>
       
     
        <div class="bg-pink-200 border border-pink-950 grid text-center items-center px-5 py-10 my-10">
      
          <p class="text-pink-900 text-xl henny-penny-font">Esperamos poder compartir un momento con vos.</p>
          <p class="text-pink-900 text-sm text-end mt-3 roboto-font">- Nina y Aitana.</p>
      
        </div>

    </div>
  </div>

</template>
