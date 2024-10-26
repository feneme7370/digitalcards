import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Duración de la animación en milisegundos
  once: true,     // La animación ocurre solo una vez al hacer scroll
  delay: 200,
});
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})