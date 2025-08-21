<template>
  <footer class="footer-custom py-5 mt-5">
    <div class="container">
      <div class="row g-4">
        <!-- Información personal -->
        <div class="col-lg-4">
          <h5 class="gradient-text mb-3">{{ mainStore.appTitle }}</h5>
          <p class="text-secondary-custom mb-3">
            Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.
          </p>
          <!-- Redes sociales -->
          <div class="d-flex gap-3">
            <a
              v-for="(url, platform) in mainStore.personalInfo.socialLinks"
              :key="platform"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-secondary-custom social-link"
              v-if="url"
            >
              <i :class="`bi bi-${getSocialIcon(platform)} fs-5`"></i>
            </a>
          </div>
        </div>

        <!-- Enlaces rápidos -->
        <div class="col-lg-2 col-md-6">
          <h6 class="text-primary-custom mb-3">Enlaces</h6>
          <ul class="list-unstyled">
            <li v-for="item in mainStore.navigationItems" :key="item.path" class="mb-2">
              <router-link
                :to="item.path"
                class="text-secondary-custom text-decoration-none footer-link"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Tecnologías -->
        <div class="col-lg-3 col-md-6">
          <h6 class="text-primary-custom mb-3">Tecnologías</h6>
          <div class="d-flex flex-wrap gap-2">
            <span
              v-for="tech in featuredTechnologies"
              :key="tech"
              class="badge bg-secondary-custom text-secondary-custom tech-badge"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Contacto -->
        <div class="col-lg-3">
          <h6 class="text-primary-custom mb-3">Contacto</h6>
          <div class="contact-info">
            <p class="text-secondary-custom mb-2" v-if="mainStore.personalInfo.email">
              <i class="bi bi-envelope me-2"></i>
              <a
                :href="`mailto:${mainStore.personalInfo.email}`"
                class="text-secondary-custom text-decoration-none footer-link"
              >
                {{ mainStore.personalInfo.email }}
              </a>
            </p>
            <p class="text-secondary-custom mb-2" v-if="mainStore.personalInfo.location">
              <i class="bi bi-geo-alt me-2"></i>
              {{ mainStore.personalInfo.location }}
            </p>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <hr class="my-4" style="border-color: var(--border-color);">

      <!-- Copyright -->
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-muted-custom mb-0">
            © {{ currentYear }} Portafolio profesional. Uso exclusivo para fines informativos y de presentación.
          </p>
        </div>

      </div>
    </div>
  </footer>|
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '../stores/mainStore'

const mainStore = useMainStore()

// Año actual para el copyright
const currentYear = new Date().getFullYear()

// Tecnologías destacadas para mostrar en el footer
const featuredTechnologies = [
  'Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js'
]

// Función para obtener el ícono de Bootstrap correspondiente a cada red social
const getSocialIcon = (platform) => {
  const icons = {
    github: 'github',
    linkedin: 'linkedin', 
    twitter: 'twitter',
    portfolio: 'globe',
    instagram: 'instagram',
    facebook: 'facebook',
    youtube: 'youtube'
  }
  return icons[platform] || 'link-45deg'
}
</script>

<style scoped>
.footer-custom {
  margin-top: auto;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.social-link:hover {
  color: var(--accent-cyan) !important;
  border-color: var(--accent-cyan);
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
}

.footer-link {
  transition: all 0.3s ease;
  position: relative;
}

.footer-link:hover {
  color: var(--accent-cyan) !important;
  padding-left: 0.5rem;
}

.footer-link::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 2px;
  background: var(--accent-cyan);
  transition: width 0.3s ease;
}

.footer-link:hover::before {
  width: 6px;
}

.tech-badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan) !important;
  transform: scale(1.05);
}

.contact-info p {
  transition: all 0.3s ease;
}

.contact-info p:hover {
  padding-left: 0.5rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-custom {
    text-align: center;
  }
  
  .footer-custom .col-md-6.text-md-end {
    text-align: center !important;
    margin-top: 1rem;
  }
  
  .d-flex.gap-3 {
    justify-content: center;
  }
  
  .tech-badge {
    font-size: 0.7rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
