<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  delay: 200,
});
</script>

<template>
	<section class="bg-center bg-no-repeat bg-gray-700 relative">

		<!-- imagen de portada -->
		<img loading="lazy" class="w-full opacity-80 object-cover h-screen min-h-48"
			src="/aaaa_c_ninayaitana/images/image_hero.jpeg" alt="imagen portada">

		<!-- descripcion sobre la portada -->
		<div
			class="absolute top-0 right-0 bottom-0 left-0 h-full  mx-auto max-w-screen-xl text-center flex flex-col items-center justify-start text-rose-400">

			<div class="bg-rose-100 my-10 py-5 w-full grid gap-3">
				<h1 class="mb-2 text-2xl bangers-font tracking-wider" data-aos="fade-up">Nuestro primer añito</h1>

				<p class=" text-xl sm:px-16 ease-linear playwrite-gbs-font font-extralight" data-aos="fade-up">Nina y Aitana</p>
			</div>

		</div>

	</section>
</template>

<style scoped></style>