import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Importar estilos globales
import './styles/main.css'

// Importar Bootstrap JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Crear la aplicación
const app = createApp(App)

// Configurar Pinia para el estado global
app.use(createPinia())

// Configurar Vue Router
app.use(router)

// Montar la aplicación
app.mount('#app')
