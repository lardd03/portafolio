<template>
  <div class="card card-custom h-100 project-card" @click="openProject">
    <!-- Imagen del proyecto -->
    <div class="card-img-wrapper">
      <img
        :src="project.images?.[0] || '/placeholder-project.jpg'"
        :alt="project.title"
        class="card-img-top project-image"
        @error="handleImageError"
      >
      <div class="card-overlay">
        <div class="overlay-content">
          <button class="btn btn-outline-light btn-sm me-2" @click.stop="openDemo" v-if="project.demoUrl">
            <i class="bi bi-eye me-1"></i>
            Demo
          </button>
          <button class="btn btn-outline-light btn-sm" @click.stop="openGithub" v-if="project.githubUrl">
            <i class="bi bi-github me-1"></i>
            Código
          </button>
        </div>
      </div>
    </div>

    <!-- Contenido de la tarjeta -->
    <div class="card-body d-flex flex-column">
      <!-- Header con título y estado -->
      <div class="d-flex justify-content-between align-items-start mb-2">
        <h5 class="card-title text-primary-custom mb-0">{{ project.title }}</h5>
        <span
          class="badge status-badge"
          :class="getStatusClass(project.status)"
        >
          {{ getStatusText(project.status) }}
        </span>
      </div>

      <!-- Descripción -->
      <p class="card-text text-secondary-custom flex-grow-1 mb-3">
        {{ truncateDescription(project.description) }}
      </p>

      <!-- Tecnologías -->
      <div class="technologies mb-3">
        <span
          v-for="tech in project.technologies?.slice(0, 4)"
          :key="tech"
          class="badge bg-secondary-custom me-1 mb-1 tech-tag"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies?.length > 4"
          class="badge bg-secondary-custom me-1 mb-1 tech-tag-more"
        >
          +{{ project.technologies.length - 4 }}
        </span>
      </div>

      <!-- Footer con fecha y featured badge -->
      <div class="card-footer-custom d-flex justify-content-between align-items-center mt-auto">
        <small class="text-muted-custom">
          <i class="bi bi-calendar3 me-1"></i>
          {{ formatDate(project.updatedAt || project.createdAt) }}
        </small>
        <div class="d-flex align-items-center gap-2">
          <span v-if="project.featured" class="badge bg-warning text-dark">
            <i class="bi bi-star-fill me-1"></i>
            Destacado
          </span>
          <i class="bi bi-arrow-right project-arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open-project', 'open-demo', 'open-github'])

// Métodos para manejar eventos
const openProject = () => {
  emit('open-project', props.project)
}

const openDemo = () => {
  if (props.project.demoUrl) {
    window.open(props.project.demoUrl, '_blank')
  }
  emit('open-demo', props.project)
}

const openGithub = () => {
  if (props.project.githubUrl) {
    window.open(props.project.githubUrl, '_blank')
  }
  emit('open-github', props.project)
}

// Método para manejar errores de imagen
const handleImageError = (event) => {
  event.target.src = '/placeholder-project.jpg'
}

// Método para truncar descripción
const truncateDescription = (description, maxLength = 120) => {
  if (!description) return ''
  return description.length > maxLength 
    ? description.substring(0, maxLength) + '...' 
    : description
}

// Método para formatear fecha
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short'
  })
}

// Método para obtener clase CSS del estado
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

// Método para obtener texto del estado
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
</script>

<style scoped>
.project-card {
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.card-img-wrapper {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.overlay-content {
  display: flex;
  gap: 0.5rem;
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.3;
}

.status-badge {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.5;
}

.tech-tag {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--border-color);
  background: transparent !important;
  color: var(--text-secondary) !important;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan) !important;
}

.tech-tag-more {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  background: var(--accent-cyan) !important;
  color: white !important;
  border-radius: 12px;
}

.card-footer-custom {
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  margin-top: 1rem;
}

.project-arrow {
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.project-card:hover .project-arrow {
  color: var(--accent-cyan);
  transform: translateX(4px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-img-wrapper {
    height: 160px;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .overlay-content {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .overlay-content .btn {
    font-size: 0.8rem;
    padding: 0.25rem 0.5rem;
  }
}

/* Animación de entrada */
.project-card {
  animation: slideUp 0.6s ease-out;
}

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
</style>
