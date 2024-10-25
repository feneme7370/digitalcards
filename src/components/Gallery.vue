<script setup>
    import {gallery} from '@/helpers/config.js'
    import ImgLightbox from '@/components/sistem/ImgLightbox.vue'
</script>

<template>


<div class="grid grid-cols-2 md:grid-cols-3 gap-4 p-1">
    <div>
        <ImgLightbox
            class="img-gallery"
            name="/images/gallery/gallery_1.jpeg"
            nameImg="imagen_1"
            nameAlbum="galeria"
        />
    </div>
    <div>
        <ImgLightbox
            class="img-gallery"
            name="/images/gallery/gallery_2.jpeg"
            nameImg="imagen_2"
            nameAlbum="galeria"
        />
    </div>
    <div>
        <ImgLightbox
            class="img-gallery"
            name="/images/gallery/gallery_3.jpeg"
            nameImg="imagen_3"
            nameAlbum="galeria"
        />
    </div>
    <div>
        <ImgLightbox
            class="img-gallery"
            name="/images/gallery/gallery_4.jpeg"
            nameImg="imagen_4"
            nameAlbum="galeria"
        />
    </div>
</div>


</template>

<style scoped>
</style>