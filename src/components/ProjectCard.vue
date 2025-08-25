<template>
  <div class="project-card card-custom h-100">
    <!-- Image Carousel - Mitad superior -->
    <div class="card-image-section">
      <ImageCarousel 
        :images="project.images || ['/portafolio/images/1.png']"
        :alt-prefix="project.title"
        :auto-play="false"
      />
      
      <!-- Status Badge -->
      <div class="status-badge-wrapper">
        <span
          class="badge status-badge"
          :class="getStatusClass(project.status)"
        >
          {{ getStatusText(project.status) }}
        </span>
      </div>
      
      <!-- Featured Badge -->
      <div v-if="project.featured" class="featured-badge-wrapper">
        <span class="badge featured-badge">
          <i class="bi bi-star-fill me-1"></i>
          Destacado
        </span>
      </div>
    </div>

    <!-- Content Section - Mitad inferior -->
    <div class="card-content">
      <!-- Title and Category -->
      <div class="project-header mb-3">
        <h3 class="project-title">{{ project.title }}</h3>
        <div class="project-meta">
          <span class="category-badge">
            <i :class="`bi bi-${getCategoryIcon(project.category)}`"></i>
            {{ getCategoryName(project.category) }}
          </span>
          <span class="project-date text-muted-custom">
            {{ formatDate(project.updatedAt || project.createdAt) }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <div class="project-description mb-4">
        <p class="description-text">{{ project.description }}</p>
        <button 
          v-if="project.longDescription && project.longDescription !== project.description"
          class="btn-read-more"
          @click="toggleDescription"
        >
          {{ showFullDescription ? 'Ver menos' : 'Leer más' }}
          <i :class="`bi bi-chevron-${showFullDescription ? 'up' : 'down'}`"></i>
        </button>
        <div v-if="showFullDescription" class="full-description mt-2">
          <p>{{ project.longDescription }}</p>
        </div>
      </div>

      <!-- Technologies -->
      <div class="technologies-section mb-4">
        <h5 class="tech-title">Tecnologías utilizadas</h5>
        <div class="technologies-grid">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Project Stats (if available) -->
      <div v-if="project.stats" class="project-stats mb-3">
        <div class="stats-grid">
          <div v-if="project.stats.duration" class="stat-item">
            <i class="bi bi-clock"></i>
            <span>{{ project.stats.duration }}</span>
          </div>
          <div v-if="project.stats.teamSize" class="stat-item">
            <i class="bi bi-people"></i>
            <span>{{ project.stats.teamSize }} personas</span>
          </div>
          <div v-if="project.stats.complexity" class="stat-item">
            <i class="bi bi-bar-chart"></i>
            <span>{{ project.stats.complexity }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ImageCarousel from './ImageCarousel.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const showFullDescription = ref(false)

// Methods
const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  })
}

const getStatusClass = (status) => {
  const classes = {
    completed: 'bg-success',
    'in-progress': 'bg-warning text-dark',
    planned: 'bg-info',
    paused: 'bg-secondary',
    cancelled: 'bg-danger'
  }
  return classes[status] || 'bg-secondary'
}

const getStatusText = (status) => {
  const texts = {
    completed: 'Completado',
    'in-progress': 'En progreso',
    planned: 'Planeado',
    paused: 'Pausado',
    cancelled: 'Cancelado'
  }
  return texts[status] || 'Desconocido'
}

const getCategoryIcon = (category) => {
  const icons = {
    web: 'globe',
    mobile: 'smartphone',
    desktop: 'monitor',
    api: 'server',
    data: 'database',
    devops: 'cloud',
    other: 'folder'
  }
  return icons[category] || 'folder'
}

const getCategoryName = (category) => {
  const names = {
    web: 'Web',
    mobile: 'Móvil',
    desktop: 'Escritorio',
    api: 'API',
    data: 'Data',
    devops: 'DevOps',
    other: 'Otros'
  }
  return names[category] || 'Otros'
}
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--card-bg);
  width: 100%;
  height: 500px; /* Altura fija para las cards */
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-cyan);
}

/* Image Section - Ocupa la mitad superior de la card */
.card-image-section {
  position: relative;
  width: 100%;
  height: 50%; /* Exactamente la mitad de la altura */
  min-height: 250px; /* Altura mínima para asegurar visibilidad */
  flex-shrink: 0;
  background: var(--secondary-bg); /* Color de fondo temporal para debugging */
}

.status-badge-wrapper {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 15;
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.featured-badge-wrapper {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 15;
}

.featured-badge {
  background: var(--accent-cyan) !important;
  color: white !important;
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

/* Content Section - Ocupa la mitad inferior de la card */
.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 50%; /* Exactamente la mitad de la altura */
  overflow-y: auto;
}

.project-header {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: var(--secondary-bg);
  color: var(--accent-cyan);
  padding: 0.375rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
}

.project-date {
  font-size: 0.875rem;
  font-weight: 500;
}

/* Description */
.project-description {
  flex: 1;
}

.description-text {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 0;
}

.btn-read-more {
  background: none;
  border: none;
  color: var(--accent-cyan);
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.3s ease;
}

.btn-read-more:hover {
  color: var(--accent-cyan);
  text-decoration: underline;
}

.full-description {
  color: var(--text-secondary);
  line-height: 1.6;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Technologies */
.technologies-section {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.tech-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.technologies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--secondary-bg);
  color: var(--text-secondary);
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
  background: rgba(124, 58, 237, 0.1);
}

/* Project Stats */
.project-stats {
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
}

.stats-grid {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

.stat-item i {
  color: var(--accent-cyan);
}

/* Responsive Design */
@media (max-width: 768px) {
  .project-card {
    height: 450px; /* Altura un poco menor en móviles */
  }
  
  .card-content {
    padding: 1.25rem;
  }
  
  .project-title {
    font-size: 1.25rem;
  }
  
  .project-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
  
  .technologies-grid {
    gap: 0.375rem;
  }
  
  .tech-tag {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
  
  .stats-grid {
    flex-direction: column;
    gap: 0.5rem;
  }
}

@media (max-width: 480px) {
  .project-card {
    height: 400px; /* Altura aún menor en móviles pequeños */
  }
  
  .card-content {
    padding: 1rem;
  }
  
  .status-badge-wrapper,
  .featured-badge-wrapper {
    top: 8px;
  }
  
  .status-badge-wrapper {
    right: 8px;
  }
  
  .featured-badge-wrapper {
    left: 8px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Ajustes para tablets */
  .project-card {
    height: 480px;
  }
  
  .card-content {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .card-content {
    padding: 1rem;
  }
  
  .status-badge-wrapper,
  .featured-badge-wrapper {
    top: 8px;
  }
  
  .status-badge-wrapper {
    right: 8px;
  }
  
  .featured-badge-wrapper {
    left: 8px;
  }
}

/* Animation for card entrance */
.project-card {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


