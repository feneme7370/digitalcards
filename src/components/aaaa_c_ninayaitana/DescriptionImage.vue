<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 500, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  // delay: 200,
});
</script>

<template>
    <div
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
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
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
            src="/aaaa_c_ninayaitana/images/gallery/gallery_6.jpeg" alt="" data-aos="fade-left">




    </div>
</template>

<style scoped></style>