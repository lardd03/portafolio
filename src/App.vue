<template>
  <div id="app" class="app-container">
    <!-- Indicador de carga global -->
    <div v-if="mainStore.isLoading" class="global-loading">
      <div class="loading-content">
        <div class="spinner-custom"></div>
        <p class="loading-text">Cargando...</p>
      </div>
    </div>

    <!-- Navbar -->
    <NavBar />

    <!-- Main Content -->
    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <FooterComponent />

    <!-- Scroll to Top Button -->
    <button
      v-if="showScrollTop"
      @click="scrollToTop"
      class="scroll-top-btn"
      aria-label="Volver arriba"
    >
      <i class="bi bi-arrow-up"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMainStore } from './stores/mainStore'
import NavBar from './components/NavBar.vue'
import FooterComponent from './components/FooterComponent.vue'

const mainStore = useMainStore()
const showScrollTop = ref(false)

// Función para manejar el scroll
const handleScroll = () => {
  const scrollY = window.scrollY
  showScrollTop.value = scrollY > 400
  mainStore.updateScrollPosition(scrollY)
}

// Función para volver arriba
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Configurar información personal por defecto (se puede personalizar después)
  mainStore.updatePersonalInfo({
    name: 'Juan Carlos Mejia Arguello',
    title: 'Analista de Datos, Desarrollador y Software Tester',
    description: 'Apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.',
    email: 'tu@email.com',
    location: 'Tu Ciudad, País',
    socialLinks: {
      github: 'https://github.com/tu-usuario',
      linkedin: 'https://linkedin.com/in/tu-perfil',
      // Agrega más redes sociales según necesites
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Espacio para navbar fijo */
}

/* Loading Global */
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(13, 17, 23, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.loading-content {
  text-align: center;
}

.loading-text {
  color: var(--text-secondary);
  margin-top: 1rem;
  font-weight: 500;
}

/* Scroll to Top Button */
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: var(--shadow-md);
}

.scroll-top-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.scroll-top-btn:active {
  transform: translateY(0);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding-top: 60px;
  }
  
  .scroll-top-btn {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
  
  .scroll-top-btn {
    transition: none;
  }
  
  .scroll-top-btn:hover {
    transform: none;
  }
}

/* Print Styles */
@media print {
  .scroll-top-btn,
  .global-loading {
    display: none !important;
  }
  
  .main-content {
    padding-top: 0;
  }
}
</style>
