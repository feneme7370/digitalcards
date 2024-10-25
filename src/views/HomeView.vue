<script setup>
import ImageHero from '@/components/ImageHero.vue'
import Gallery from '@/components/Gallery.vue'
import Ubication from '@/components/Ubication.vue'
import CountDate from '@/components/CountDate.vue'
import DescriptionInvite from '@/components/DescriptionInvite.vue'
import Confirm from '@/components/Confirm.vue'


import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
</script>

<template >
  <div class="bg-pink-50 montserrat-font text-pink-800">
    <ImageHero/>

    <DescriptionInvite/>
     
    
     <ImgLightbox
         class="h-20" 
         name="/images/image_portate.jpeg"
         nameImg="imagen_1"
         nameAlbum="portada"
     />
   
     <CountDate/>
     
     <Confirm/>

     
     <Gallery />
   
     <Ubication/>
   
     <div class="bg-pink-200 border border-pink-950 grid text-center items-center px-5 py-10 my-10">
   
       <p class="text-pink-900 text-xl">Esperamos poder compartir un momento con vos</p>
   
     </div>
  </div>

</template>
