<template>
  <div class="about-view">
    <!-- Page Header -->
    <section class="page-header section-padding bg-secondary-custom">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="page-title">
              Acerca de <span class="gradient-text">mí</span>
            </h1>
            <p class="page-subtitle text-secondary-custom lead">
              Conoce más sobre mi trayectoria, habilidades y pasión por el desarrollo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Personal Info Section -->
    <section class="personal-info section-padding">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-5">
            <div class="profile-image-container text-center">
              <div class="profile-image-wrapper">
                <img :src="akazaImage" :alt="personalInfo.name || 'Perfil'" class="profile-image"
                  @error="handleImageError">
                <div class="image-overlay">
                  <div class="overlay-content">
                    <i class="bi bi-person-circle"></i>
                  </div>
                </div>
              </div>
              <!-- Información personal básica -->
              <div class="contact-info mt-4">
                <h3 class="gradient-text mb-3">
                  {{ personalInfo.name || 'Tu Nombre' }}
                </h3>
                <p class="text-secondary-custom mb-3">
                  {{ personalInfo.title || 'Desarrollador Full Stack' }}
                </p>
                <div class="contact-details">
                  <p class="mb-2" v-if="personalInfo.location">
                    <i class="bi bi-geo-alt me-2 text-accent"></i>
                    {{ personalInfo.location }}
                  </p>
                  <p class="mb-2" v-if="personalInfo.email">
                    <i class="bi bi-envelope me-2 text-accent"></i>
                    <a :href="`mailto:${personalInfo.email}`" class="text-decoration-none">
                      {{ personalInfo.email }}
                    </a>
                  </p>
                  <p class="mb-2" v-if="personalInfo.phone">
                    <i class="bi bi-telephone me-2 text-accent"></i>
                    <a :href="`tel:${personalInfo.phone}`" class="text-decoration-none">
                      {{ personalInfo.phone }}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="about-content">
              <h2 class="section-title mb-4">Mi Historia</h2>
              <div class="content-text">
                <p class="lead text-secondary-custom mb-4">
                  {{ personalInfo.description || defaultDescription }}
                </p>

                <!-- Aquí se agregará más contenido personalizado posteriormente -->
                <div class="story-sections">
                  <div class="story-section mb-4">
                    <h4 class="text-primary-custom mb-3">
                      <i class="bi bi-lightbulb me-2"></i>
                      Mi Pasión
                    </h4>
                    <p class="text-secondary-custom">
                      Pienso que la programación no es solo escribir código; es diseñar soluciones que no exploten
                      (mucho), que
                      funcionen en producción y que,
                      con suerte, mejoren la vida de alguien más allá de la pantalla. Adoro que la tecnología nunca
                      se queda quieta, y cada proyecto es como un nuevo acertijo que no viene con instrucciones,
                      pero sí con muchos bugs.
                    </p>
                  </div>

                  <div class="story-section mb-4">
                    <h4 class="text-primary-custom mb-3">
                      <i class="bi bi-target me-2"></i>
                      Mi Enfoque
                    </h4>
                    <p class="text-secondary-custom">
                      Creo en escribir código que no solo funcione, sino que sea legible incluso después de tres cafés y
                      seis meses.
                      El desarrollo centrado en el usuario no es una opción: es el punto de partida.
                      Me esfuerzo por crear experiencias que sean intuitivas, accesibles y, sobre todo, útiles.
                    </p>
                  </div>

                  <div class="story-section">
                    <h4 class="text-primary-custom mb-3">
                      <i class="bi bi-graph-up-arrow me-2"></i>
                      Mi Objetivo
                    </h4>
                    <p class="text-secondary-custom">
                      Busco constantemente expandir mis habilidades y contribuir a proyectos que generen
                      un impacto real. Mi objetivo es combinar creatividad y tecnología para desarrollar
                      aplicaciones innovadoras y eficientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section section-padding bg-card-custom">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              Mis <span class="gradient-text">Habilidades</span>
            </h2>
            <p class="section-subtitle text-secondary-custom">
              Tecnologías y herramientas que domino
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(skillCategory, index) in skillsData" :key="skillCategory.category" class="col-lg-4 col-md-6">
            <div class="skill-category-card card-custom h-100" :style="`animation-delay: ${index * 0.2}s`">
              <div class="skill-category-header">
                <div class="skill-icon">
                  <i :class="`bi bi-${skillCategory.icon}`"></i>
                </div>
                <h4 class="skill-category-title">{{ skillCategory.category }}</h4>
              </div>
              <div class="skills-list">
                <div v-for="skill in skillCategory.skills" :key="skill.name" class="skill-item">
                  <div class="skill-info">
                    <span class="skill-name">{{ skill.name }}</span>
                    <span class="skill-level">{{ skill.level }}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" :style="`width: ${skill.level}%`"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="experience-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              Mi <span class="gradient-text">Experiencia</span>
            </h2>
            <p class="section-subtitle text-secondary-custom">
                Recorrido por mi trayectoria y lo que he logrado aprender
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="timeline">
              <div v-for="(experience, index) in experienceData" :key="index" class="timeline-item"
                :class="{ 'timeline-item-right': index % 2 === 1 }">
                <div class="timeline-marker">
                  <i :class="`bi bi-${experience.icon}`"></i>
                </div>
                <div class="timeline-content card-custom">
                  <div class="timeline-header">
                    <h4 class="timeline-title">{{ experience.title }}</h4>
                    <span class="timeline-date">{{ experience.date }}</span>
                  </div>
                  <h5 class="timeline-company text-accent">{{ experience.company }}</h5>
                  <p class="timeline-description text-secondary-custom">
                    {{ experience.description }}
                  </p>
                  <div class="timeline-skills" v-if="experience.technologies">
                    <span v-for="tech in experience.technologies" :key="tech"
                      class="badge bg-secondary-custom me-1 mb-1">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interests Section -->
    <section class="interests-section section-padding bg-secondary-custom">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              Mis <span class="gradient-text">Intereses</span>
            </h2>
            <p class="section-subtitle text-secondary-custom">
              Más allá del código
            </p>
          </div>
        </div>
        <div class="row g-4">
          <div v-for="(interest, index) in interests" :key="interest.title" class="col-lg-3 col-md-6">
            <div class="interest-card text-center" :style="`animation-delay: ${index * 0.1}s`">
              <div class="interest-icon">
                <i :class="`bi bi-${interest.icon}`"></i>
              </div>
              <h5 class="interest-title">{{ interest.title }}</h5>
              <p class="interest-description text-secondary-custom">
                {{ interest.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section section-padding">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h2 class="cta-title mb-4">
              ¿Quieres trabajar conmigo?
            </h2>
            <p class="cta-description text-secondary-custom mb-5 lead">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones emocionantes.
              ¡Hablemos sobre tu próximo proyecto!
            </p>
            <div class="cta-actions d-flex justify-content-center gap-3 flex-wrap">
              <router-link to="/contact" class="btn btn-gradient-primary btn-lg">
                <i class="bi bi-chat-dots me-2"></i>
                Contactar
              </router-link>
<!--               <a href="/cv.pdf" target="_blank" class="btn btn-outline-custom btn-lg" download>
                <i class="bi bi-download me-2"></i>
                Descargar CV
              </a> -->
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
import akazaImage from '../assets/images/akaza.jpg'

const mainStore = useMainStore()

// Computed properties
const personalInfo = computed(() => mainStore.personalInfo)

// Datos por defecto (se personalizarán posteriormente)
const defaultDescription = `Soy un desarrollador apasionado con experiencia en crear aplicaciones web modernas y eficientes. 
Me especializo en tecnologías como JavaScript, Vue.js, Node.js y bases de datos, siempre buscando las mejores 
prácticas y soluciones innovadoras para cada proyecto.`

const skillsData = [
  {
    category: 'Frontend',
    icon: 'palette',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 }
    ]
  },
  {
    category: 'Data',
    icon: 'server',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'Pandas', level: 75 },
      { name: 'NumPy', level: 70 },
      { name: 'MySQL', level: 85 },
      { name: 'TensorFlow', level: 65 }
    ]
  },
  {
    category: 'Herramientas',
    icon: 'tools',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'TeamCity', level: 60 },
      { name: 'ESXi', level: 80 },
      { name: 'Hyper-V', level: 85 },
      { name: 'Active Directory', level: 70 },


    ]
  }
]

const experienceData = [
  {
    title: 'Coordinador de DevOps y gestión de Datos',
    company: 'HighFlyJet',
    date: '2025 - Presente',
    description: 'Automatización de pipelines para distintas áreas del negocio, con validación de rendimiento mediante Apache JMeter e integración continua en GitHub Actions. Integración de datasets en staging y producción, asegurando calidad y consistencia. Participación en el desarrollo de una red neuronal (MLP) para predicción de ventas con datos históricos, integrada en flujos analíticos para soporte estratégico.',
    technologies: ['Python', 'Apache JMeter', 'pandas', 'NumPy', 'tensorflow'],
    icon: 'code-square'
  },
  {
    title: 'Desarrollador Web',
    company: 'Startup HighFlyJet',
    date: '2023 - 2024',
    description: 'Participación en el desarrollo de una aplicación web modular en Vue.js para el sector energético, enfocada en la visualización estadística de ventas y métricas. Integré dashboards interactivos con filtros dinámicos, alertas estratégicas y datos en tiempo real para facilitar la toma de decisiones. También trabajé en el control operativo y módulos administrativos. Además, optimicé consultas y estructuré los datos para mejorar el rendimiento y la carga de gráficos.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Vue.js', 'Bootstrap', 'Vite'],
    icon: 'laptop'
  },
  {
    title: 'Trainee en Optimización y Automatización de Entornos de Datos',
    company: 'PolyWorks México',
    date: '2024-2024',
    description: 'Desarrollo de entornos virtuales para pruebas mediante la replicación de pipelines de datos y la clonación/migración de VMs. Diseño de arquitecturas escalables y resilientes para simulaciones de producción. Automatización de validaciones de integridad e implementación de flujos de ingestión y replicación que optimizan análisis y gestión de datos.',
    technologies: ['Python', 'Docker', 'Active Directory', 'Git', 'PowerShell', 'VMware', 'ESXi', 'Ansible', 'Terraform', 'Hyper-V'],
    icon: 'book'
  }
]

const interests = [
  {
    title: 'Tecnología',
    icon: 'cpu',
    description: 'Siempre investigando las tendencias mas recientes de hardware y sus aplicaciones'
  },

  {
    title: 'Aprendizaje',
    icon: 'book',
    description: 'Constante búsqueda de conocimientos y nuevas habilidades'
  },
  {
    title: 'Colaboración',
    icon: 'people',
    description: 'Disfruto colaborar en equipo y conectar con personas tanto en el entorno laboral como fuera de la oficina.'
  },
  {
    title: 'Deporte',
    icon: 'person-arms-up',
    description: 'Apasionado por el deporte, especialmente el voleibol y el entrenamiento físico.'
  }
]

// Methods
const handleImageError = (event) => {
  event.target.src = akazaImage
}

// Lifecycle
onMounted(() => {
  mainStore.setCurrentSection('about')
})
</script>

<style scoped>
/* Page Header */
.page-header {
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  max-width: 600px;
  margin: 0 auto;
}

/* Profile Image */
.profile-image-container {
  position: relative;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--border-color);
  transition: all 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(124, 58, 237, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image-wrapper:hover .image-overlay {
  opacity: 1;
}

.overlay-content i {
  font-size: 3rem;
  color: white;
}

.contact-details a {
  color: var(--text-secondary);
  transition: color 0.3s ease;
}

.contact-details a:hover {
  color: var(--accent-cyan);
}

.text-accent {
  color: var(--accent-cyan) !important;
}

/* About Content */
.about-content .section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.story-section {
  padding: 1.5rem;
  border-left: 3px solid var(--accent-cyan);
  margin-left: 1rem;
  position: relative;
}

.story-section::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 0;
  width: 12px;
  height: 12px;
  background: var(--accent-cyan);
  border-radius: 50%;
}

/* Skills Section */
.skill-category-card {
  padding: 2rem;
  text-align: center;
  animation: slideUp 0.6s ease-out both;
}

.skill-category-header {
  margin-bottom: 2rem;
}

.skill-icon {
  font-size: 3rem;
  color: var(--accent-cyan);
  margin-bottom: 1rem;
}

.skill-category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-item {
  margin-bottom: 1.5rem;
  text-align: left;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill-level {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.skill-bar {
  height: 8px;
  background: var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 4px;
  transition: width 2s ease-in-out;
  animation: progressFill 2s ease-in-out;
}

@keyframes progressFill {
  from {
    width: 0%;
  }
}

/* Timeline */
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--gradient-primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
  padding-right: 2rem;
}

.timeline-item-right {
  left: 50%;
  padding-left: 2rem;
  padding-right: 0;
}

.timeline-marker {
  position: absolute;
  top: 0;
  right: -1.5rem;
  width: 3rem;
  height: 3rem;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  z-index: 10;
}

.timeline-item-right .timeline-marker {
  left: -1.5rem;
  right: auto;
}

.timeline-content {
  padding: 2rem;
  animation: slideUp 0.6s ease-out;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.timeline-date {
  font-size: 0.9rem;
  color: var(--text-muted);
  background: var(--secondary-bg);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.timeline-company {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.timeline-description {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-skills .badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--border-color);
}

/* Interests */
.interest-card {
  padding: 2rem 1rem;
  animation: scaleIn 0.6s ease-out both;
}

.interest-icon {
  font-size: 3rem;
  color: var(--accent-cyan);
  margin-bottom: 1.5rem;
}

.interest-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.interest-description {
  font-size: 0.95rem;
  line-height: 1.6;
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

/* Responsive Design */
@media (max-width: 992px) {
  .page-title {
    font-size: 2.5rem;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  .timeline::before {
    left: 1.5rem;
  }

  .timeline-item,
  .timeline-item-right {
    width: 100%;
    left: 0;
    padding-left: 4rem;
    padding-right: 0;
  }

  .timeline-marker,
  .timeline-item-right .timeline-marker {
    left: 0;
    right: auto;
  }

  .timeline-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }

  .page-title {
    font-size: 2rem;
  }

  .profile-image {
    width: 200px;
    height: 200px;
  }

  .about-content .section-title {
    font-size: 2rem;
  }

  .skill-category-card {
    padding: 1.5rem;
  }

  .timeline-item {
    padding-left: 3rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .story-section {
    margin-left: 0.5rem;
    padding: 1rem;
  }
}

/* Animations */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
