<script setup>
    // recibir datos desde home
    const props = defineProps({
        name: {type: String, required: true},
        nameAlbum: {type: String},
        nameImg: {type: String},
    })

    // config de lightbox
    lightbox.option({
        'alwaysShowNavOnTouchDevices': true,
        'showImageNumberLabel': true,
        'imageFadeDuration': 10,
        'resizeDuration': 10,
        'fadeDuration': 10,
        'disableScrolling': true,
        'wrapAround': true,
        'albumLabel': "Imagen %1 de %2",
    })

</script>

<template>

    <!-- enlace para ampliar imagen -->
    <a 
        :href="name" 
        :data-lightbox="nameAlbum ? nameAlbum : name"
        :data-title="nameImg ? nameImg : name"
    >
        <img 
            loading="lazy"
            class="w-full h-full object-cover object-center"
            :src="name" 
            alt="imagen"
        >
    </a>
</template>

<style scoped>

</style>