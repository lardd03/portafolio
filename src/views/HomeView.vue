<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section hero-height d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
      const handleImageError = (event) => {
  event.target.src = akazaImage
}   <div class="hero-content fade-in">
              <h1 class="hero-title mb-4">
                Hola, soy
                <span class="gradient-text d-block">{{ personalInfo.name || 'Tu Nombre' }}</span>
              </h1>
              <h2 class="hero-subtitle text-secondary-custom mb-4">
                {{ personalInfo.title || 'Desarrollador Full Stack' }}
              </h2>
              <p class="hero-description text-secondary-custom mb-5 lead">
                {{ personalInfo.description || 'Apasionado por crear soluciones innovadoras y experiencias digitales excepcionales. Especializado en desarrollo web moderno con tecnologías de vanguardia.' }}
              </p>
              <div class="hero-actions d-flex flex-wrap gap-3">
                <router-link to="/projects" class="btn btn-gradient-primary btn-lg">
                  <i class="bi bi-code-slash me-2"></i>
                  Ver Proyectos
                </router-link>
                <router-link to="/contact" class="btn btn-outline-custom btn-lg">
                  <i class="bi bi-envelope me-2"></i>
                  Contactar
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image text-center slide-up">
              <div class="avatar-container">
                <img
                  :src="akazaImage"
                  :alt="personalInfo.name || 'Avatar'"
                  class="hero-avatar"
                  @error="handleAvatarError"
                >
                <div class="avatar-glow"></div>
              </div>
              <!-- Elementos decorativos flotantes -->
              <div class="floating-elements">
                <div class="floating-element" style="--delay: 0s; --duration: 6s;">
                  <i class="bi bi-code-square"></i>
                </div>
                <div class="floating-element" style="--delay: 1s; --duration: 8s;">
                  <i class="bi bi-laptop"></i>
                </div>
                <div class="floating-element" style="--delay: 2s; --duration: 7s;">
                  <i class="bi bi-gear"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              <span class="gradient-text">Stack</span> tecnológico
            </h2>
            <p class="section-subtitle text-secondary-custom">
             A lo largo de mi trayectoria he explorado el potencial de la tecnología para resolver problemas reales. Desde el análisis profundo de datos hasta la creación de interfaces web interactivas y entornos virtuales, cada proyecto ha sido una oportunidad para innovar y aprender
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div
            v-for="(category, index) in skillCategories"
            :key="category.name"
            class="col-lg-4 col-md-6"
          >
            <div class="skill-card card-custom h-100 scale-in" :style="`animation-delay: ${index * 0.2}s`">
              <div class="skill-icon">
                <i :class="`bi bi-${category.icon}`"></i>
              </div>
              <h4 class="skill-title">{{ category.name }}</h4>
              <p class="skill-description text-secondary-custom">
                {{ category.description }}
              </p>
              <div class="skill-technologies">
                <span
                  v-for="tech in category.technologies"
                  :key="tech"
                  class="badge bg-secondary-custom me-1 mb-1"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-projects-section section-padding bg-secondary-custom">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              Proyectos <span class="gradient-text">Destacados</span>
            </h2>
            <p class="section-subtitle text-secondary-custom">
              Una muestra de mi trabajo más reciente y significativo
            </p>
          </div>
        </div>
        <div class="row g-4">
          <!-- Aquí se mostrarán los proyectos destacados -->
          <div class="col-12 text-center" v-if="featuredProjects.length === 0">
            <div class="empty-state">
              <i class="bi bi-folder2-open display-1 text-muted-custom mb-3"></i>
              <h4 class="text-secondary-custom">Proyectos en camino</h4>
              <p class="text-muted-custom">
                Pronto agregaré mis proyectos más destacados aquí.
              </p>
              <router-link to="/projects" class="btn btn-outline-custom">
                Ver todos los proyectos
              </router-link>
            </div>
          </div>
          <div
            v-for="(project, index) in featuredProjects.slice(0, 3)"
            :key="project.id"
            class="col-lg-4 col-md-6"
            :style="`animation-delay: ${index * 0.2}s`"
          >
            <FeaturedProjectCard :project="project" />
          </div>
        </div>
        <div class="row mt-5" v-if="featuredProjects.length > 0">
          <div class="col-12 text-center">
            <router-link to="/projects" class="btn btn-outline-custom btn-lg">
              Ver todos los proyectos
              <i class="bi bi-arrow-right ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section section-padding">
      <div class="container">
        <div class="row g-4 text-center">
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.total }}+</div>
              <div class="stat-label text-secondary-custom">Proyectos</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.technologies }}+</div>
              <div class="stat-label text-secondary-custom">Tecnologías</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ yearsOfExperience }}+</div>
              <div class="stat-label text-secondary-custom">Años experiencia</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.completed }}+</div>
              <div class="stat-label text-secondary-custom">Completados</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section-padding bg-card-custom">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="cta-title mb-4">
              ¿Tienes un proyecto en mente?
            </h2>
            <p class="cta-description text-secondary-custom mb-5 lead">
              Estoy disponible para colaborar en proyectos emocionantes y desafiantes. 
              ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu idea!
            </p>
            <div class="cta-actions d-flex justify-content-center gap-3 flex-wrap">
              <router-link to="/contact" class="btn btn-gradient-primary btn-lg">
                <i class="bi bi-chat-dots me-2"></i>
                Iniciar conversación
              </router-link>
              <a
                :href="`mailto:${personalInfo.email}`"
                class="btn btn-outline-custom btn-lg"
                v-if="personalInfo.email"
              >
                <i class="bi bi-envelope me-2"></i>
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useMainStore } from '../stores/mainStore'
import { useProjectsStore } from '../stores/projectsStore'
import FeaturedProjectCard from '../components/FeaturedProjectCard.vue'
import akazaImage from '../assets/images/akaza.jpg'

const mainStore = useMainStore()
const projectsStore = useProjectsStore()

// Computed properties
const personalInfo = computed(() => mainStore.personalInfo)
const featuredProjects = computed(() => projectsStore.featuredProjects)
const projectStats = computed(() => projectsStore.projectStats)

// Años de experiencia (calculado dinámicamente o valor fijo)
const yearsOfExperience = computed(() => {
  // Se puede calcular dinámicamente basado en fecha de inicio de carrera
  return 3 // Valor de ejemplo
})

// Categorías de habilidades
const skillCategories = [
  {
    name: 'Frontend',
    icon: 'brush',
    description: 'Interfaces modernas y responsivas con las últimas tecnologías',
    technologies: ['Vue.js', 'Vite', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'SCSS', 'React', 'Angular']
  },
  {
    name: 'Data',
    icon: 'bar-chart-line',
    description: 'Análisis de datos y visualización para insights empresariales',
    technologies: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'Matplotlib', 'Seaborn', 'PostgreSQL', 'MySQL', 'Tableau', 'CONDA']
  },
  {
    name: 'Herramientas',
    icon: 'tools',
    description: 'Optimización de flujos de trabajo, integración continua, despliegue automatizado, virtualización de entornos y pruebas automatizadas.',
    technologies: ['Git', 'Docker', 'Postman', 'TeamCity', 'Jest', 'Cypress','Hyper-V','Bash y PowerShell','Vmware']
  }
]

// Métodos
const handleAvatarError = (event) => {
  event.target.src = '/placeholder-avatar.jpg'
}

// Lifecycle
onMounted(() => {
  mainStore.setCurrentSection('home')
  // Cargar proyectos si no están cargados
  if (projectsStore.projects.length === 0) {
    projectsStore.loadProjects()
  }
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 500px;
}

.hero-avatar {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--border-color);
  position: relative;
  z-index: 2;
}

.avatar-container {
  position: relative;
  display: inline-block;
}

.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: var(--gradient-primary);
  opacity: 0.3;
  z-index: 1;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  font-size: 2rem;
  color: var(--accent-cyan);
  opacity: 0.6;
  animation: float var(--duration, 6s) ease-in-out infinite;
  animation-delay: var(--delay, 0s);
}

.floating-element:nth-child(1) {
  top: 20%;
  left: 10%;
}

.floating-element:nth-child(2) {
  top: 60%;
  right: 15%;
}

.floating-element:nth-child(3) {
  bottom: 30%;
  left: 20%;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Skills Section */
.skill-card {
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
}

.skill-icon {
  font-size: 3rem;
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
}

.skill-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.skill-technologies .badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--border-color);
}

/* Stats Section */
.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* CTA Section */
.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.cta-description {
  max-width: 600px;
  margin: 0 auto;
}

/* Empty State */
.empty-state {
  padding: 4rem 2rem;
}

.empty-state i {
  opacity: 0.5;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.3rem;
  }
  
  .hero-avatar {
    width: 250px;
    height: 250px;
  }
  
  .hero-actions .btn {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
    text-align: center;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    text-align: center;
  }
  
  .hero-description {
    text-align: center;
    margin: 0 auto;
    font-size: 1rem;
    max-width: 400px;
  }
  
  .hero-actions {
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .hero-actions .btn {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .hero-avatar {
    width: 180px;
    height: 180px;
    margin-top: 1rem;
  }
  
  .skill-card {
    padding: 1.5rem;
  }
  
  .skill-icon {
    font-size: 2.5rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
    max-width: 350px;
    margin-bottom: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem !important;
    margin-bottom: 2.5rem;
  }
  
  .hero-actions .btn {
    width: 100%;
    max-width: 250px;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
  
  .hero-avatar {
    width: 150px;
    height: 150px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }
  
  .skill-card {
    padding: 1.25rem;
  }
  
  .cta-title {
    font-size: 1.75rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-actions .btn {
    width: 100%;
    max-width: 280px;
    margin-bottom: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  }
  
  .hero-subtitle {
    font-size: 0.95rem;
  }
  
  .hero-description {
    font-size: 0.9rem;
    max-width: 300px;
  }
  
  .hero-actions .btn {
    max-width: 220px;
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
  }
  
  .hero-avatar {
    width: 130px;
    height: 130px;
  }
  
  .floating-elements {
    display: none; /* Ocultar elementos flotantes en pantallas muy pequeñas */
  }
  
  .section-title {
    font-size: 1.4rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-label {
    font-size: 0.9rem;
  }
}
</style>
