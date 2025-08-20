<template>
  <div class="not-found-view">
    <section class="not-found-section hero-height d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-6">
            <div class="not-found-content fade-in">
              <!-- Error Code -->
              <div class="error-code gradient-text mb-4">
                404
              </div>
              
              <!-- Error Message -->
              <h1 class="error-title mb-4">
                Página no encontrada
              </h1>
              
              <p class="error-description text-secondary-custom mb-5 lead">
                Lo sentimos, la página que buscas no existe o ha sido movida. 
                Pero no te preocupes, puedes encontrar lo que necesitas navegando por mi portafolio.
              </p>
              
              <!-- Actions -->
              <div class="error-actions d-flex justify-content-center gap-3 flex-wrap">
                <router-link to="/" class="btn btn-gradient-primary btn-lg">
                  <i class="bi bi-house me-2"></i>
                  Volver al inicio
                </router-link>
                <router-link to="/projects" class="btn btn-outline-custom btn-lg">
                  <i class="bi bi-folder me-2"></i>
                  Ver proyectos
                </router-link>
              </div>
              
              <!-- Helpful Links -->
              <div class="helpful-links mt-5">
                <h5 class="text-primary-custom mb-3">¿Qué estabas buscando?</h5>
                <div class="links-grid">
                  <router-link to="/" class="helpful-link">
                    <i class="bi bi-house"></i>
                    <span>Inicio</span>
                  </router-link>
                  <router-link to="/projects" class="helpful-link">
                    <i class="bi bi-code-slash"></i>
                    <span>Proyectos</span>
                  </router-link>
                  <router-link to="/about" class="helpful-link">
                    <i class="bi bi-person"></i>
                    <span>Acerca de mí</span>
                  </router-link>
                  <router-link to="/contact" class="helpful-link">
                    <i class="bi bi-envelope"></i>
                    <span>Contacto</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Decoration -->
      <div class="background-decoration">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMainStore } from '../stores/mainStore'

const mainStore = useMainStore()

// Lifecycle
onMounted(() => {
  mainStore.setCurrentSection('not-found')
})
</script>

<style scoped>
.not-found-view {
  position: relative;
  overflow: hidden;
}

.not-found-section {
  position: relative;
  z-index: 2;
}

/* Error Content */
.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  text-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
}

.error-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.error-description {
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

/* Helpful Links */
.helpful-links {
  max-width: 400px;
  margin: 0 auto;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.helpful-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.helpful-link:hover {
  color: var(--accent-cyan);
  border-color: var(--accent-cyan);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.helpful-link i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.helpful-link span {
  font-weight: 500;
  font-size: 0.9rem;
}

/* Background Decoration */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
}

.floating-shapes {
  position: relative;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  opacity: 0.1;
  border-radius: 50%;
  background: var(--gradient-primary);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  top: 60%;
  right: 15%;
  animation-delay: 1s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  bottom: 30%;
  left: 20%;
  animation-delay: 2s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 10%;
  right: 30%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

/* Additional floating animation for error code */
.error-code {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

/* Responsive Design */
@media (max-width: 992px) {
  .error-code {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 4rem;
  }
  
  .error-title {
    font-size: 1.75rem;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .error-actions .btn {
    width: 100%;
    max-width: 250px;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .helpful-link {
    padding: 1rem;
  }
  
  .helpful-link i {
    font-size: 1.5rem;
  }
  
  .shape {
    display: none; /* Ocultar shapes en móvil para mejor performance */
  }
}

/* Animations */
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Error state styling */
.not-found-view {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .shape,
  .error-code {
    animation: none;
  }
  
  .helpful-link:hover {
    transform: none;
  }
}
</style>
