<template>
  <div class="featured-project-card card-custom">
    <!-- Image -->
    <div class="featured-image-wrapper">
      <img
        :src="project.images?.[0] || '/placeholder-project.jpg'"
        :alt="project.title"
        class="featured-image"
        @error="handleImageError"
      >
      <div class="featured-overlay">
        <div class="featured-badge">
          <i class="bi bi-star-fill me-1"></i>
          Destacado
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="featured-content">
      <div class="featured-header">
        <h4 class="featured-title">{{ project.title }}</h4>
        <span class="featured-category">
          <i :class="`bi bi-${getCategoryIcon(project.category)}`"></i>
          {{ getCategoryName(project.category) }}
        </span>
      </div>
      
      <p class="featured-description">
        {{ truncateDescription(project.description, 100) }}
      </p>
      
      <div class="featured-technologies">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="tech-badge"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 3"
          class="tech-more"
        >
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const handleImageError = (event) => {
  event.target.src = '/placeholder-project.jpg'
}

const truncateDescription = (description, maxLength = 100) => {
  if (!description) return ''
  return description.length > maxLength 
    ? description.substring(0, maxLength) + '...' 
    : description
}

const getCategoryIcon = (category) => {
  const icons = {
    web: 'globe',
    mobile: 'smartphone',
    desktop: 'monitor',
    api: 'server',
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
    other: 'Otros'
  }
  return names[category] || 'Otros'
}
</script>

<style scoped>
.featured-project-card {
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid var(--border-color);
}

.featured-project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-cyan);
}

.featured-image-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-project-card:hover .featured-image {
  transform: scale(1.05);
}

.featured-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 50%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
}

.featured-badge {
  background: var(--accent-cyan);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

.featured-content {
  padding: 1.5rem;
}

.featured-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.featured-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
  flex: 1;
}

.featured-category {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: var(--secondary-bg);
  color: var(--accent-cyan);
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  border: 1px solid var(--border-color);
}

.featured-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.featured-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tech-badge {
  background: var(--secondary-bg);
  color: var(--text-secondary);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.tech-badge:hover {
  border-color: var(--accent-cyan);
  color: var(--accent-cyan);
}

.tech-more {
  background: var(--accent-cyan);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .featured-image-wrapper {
    height: 160px;
  }
  
  .featured-content {
    padding: 1rem;
  }
  
  .featured-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .featured-title {
    font-size: 1.1rem;
  }
  
  .featured-category {
    align-self: flex-start;
  }
}

/* Animation */
.featured-project-card {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
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
