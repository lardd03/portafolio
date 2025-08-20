<template>
  <div class="projects-view">
    <!-- Page Header -->
    <section class="page-header section-padding bg-secondary-custom">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title">
              Mis <span class="gradient-text">Proyectos</span>
            </h1>
            <p class="page-subtitle text-secondary-custom lead">
              Una colección de mi trabajo y experiencias en desarrollo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="filters-section py-4 bg-card-custom sticky-top">
      <div class="container">
        <div class="row align-items-center g-3">
          <!-- Search Bar -->
          <div class="col-lg-4 col-md-6">
            <div class="search-box">
              <i class="bi bi-search search-icon"></i>
              <input
                type="text"
                class="form-control search-input"
                placeholder="Buscar proyectos..."
                v-model="searchQuery"
                @input="updateSearch"
              >
              <button
                v-if="searchQuery"
                class="btn-clear"
                @click="clearSearch"
              >
                <i class="bi bi-x"></i>
              </button>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="col-lg-2 col-md-3 col-6">
            <select
              class="form-select filter-select"
              v-model="selectedCategory"
              @change="updateCategoryFilter"
            >
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <!-- Technology Filter -->
          <div class="col-lg-2 col-md-3 col-6">
            <select
              class="form-select filter-select"
              v-model="selectedTechnology"
              @change="updateTechnologyFilter"
            >
              <option value="all">Todas las tecnologías</option>
              <option
                v-for="tech in availableTechnologies"
                :key="tech"
                :value="tech"
              >
                {{ tech }}
              </option>
            </select>
          </div>

          <!-- Sort Options -->
          <div class="col-lg-2 col-md-6 col-6">
            <select
              class="form-select filter-select"
              v-model="sortOption"
              @change="updateSort"
            >
              <option value="updatedAt-desc">Más recientes</option>
              <option value="updatedAt-asc">Más antiguos</option>
              <option value="title-asc">A-Z</option>
              <option value="title-desc">Z-A</option>
            </select>
          </div>

          <!-- Results Count -->
          <div class="col-lg-2 col-md-6">
            <div class="results-count text-secondary-custom">
              {{ filteredProjects.length }} proyecto{{ filteredProjects.length !== 1 ? 's' : '' }}
            </div>
          </div>
        </div>

        <!-- Active Filters -->
        <div class="active-filters mt-3" v-if="hasActiveFilters">
          <span class="filter-label text-secondary-custom me-2">Filtros activos:</span>
          <span
            v-if="selectedCategory !== 'all'"
            class="badge bg-primary me-2 filter-badge"
            @click="clearCategoryFilter"
          >
            {{ getCategoryName(selectedCategory) }}
            <i class="bi bi-x ms-1"></i>
          </span>
          <span
            v-if="selectedTechnology !== 'all'"
            class="badge bg-primary me-2 filter-badge"
            @click="clearTechnologyFilter"
          >
            {{ selectedTechnology }}
            <i class="bi bi-x ms-1"></i>
          </span>
          <span
            v-if="searchQuery"
            class="badge bg-primary me-2 filter-badge"
            @click="clearSearch"
          >
            "{{ searchQuery }}"
            <i class="bi bi-x ms-1"></i>
          </span>
          <button
            class="btn btn-sm btn-outline-secondary clear-all-btn"
            @click="clearAllFilters"
          >
            Limpiar todo
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-grid section-padding">
      <div class="container">
        <!-- Loading State -->
        <div v-if="isLoading" class="text-center py-5">
          <div class="spinner-custom mx-auto mb-3"></div>
          <p class="text-secondary-custom">Cargando proyectos...</p>
        </div>

        <!-- Empty State -->
        <div v-else-if="filteredProjects.length === 0" class="empty-state text-center py-5">
          <i class="bi bi-folder2-open display-1 text-muted-custom mb-3"></i>
          <h3 class="text-secondary-custom mb-3">
            {{ searchQuery || hasActiveFilters ? 'No se encontraron proyectos' : 'Aún no hay proyectos' }}
          </h3>
          <p class="text-muted-custom mb-4">
            {{
              searchQuery || hasActiveFilters
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'Pronto agregaré mis proyectos aquí'
            }}
          </p>
          <button
            v-if="hasActiveFilters"
            class="btn btn-outline-custom"
            @click="clearAllFilters"
          >
            Limpiar filtros
          </button>
        </div>

        <!-- Projects Grid -->
        <div v-else class="row g-4">
          <div
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            class="col-lg-4 col-md-6"
          >
            <ProjectCard
              :project="project"
              @open-project="openProjectModal"
              @open-demo="handleOpenDemo"
              @open-github="handleOpenGithub"
              :style="`animation-delay: ${index * 0.1}s`"
            />
          </div>
        </div>

        <!-- Load More Button (para paginación futura) -->
        <div v-if="filteredProjects.length > 0 && showLoadMore" class="text-center mt-5">
          <button
            class="btn btn-outline-custom btn-lg"
            @click="loadMore"
            :disabled="isLoadingMore"
          >
            <span v-if="isLoadingMore">
              <div class="spinner-border spinner-border-sm me-2"></div>
              Cargando...
            </span>
            <span v-else>
              Cargar más proyectos
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <section class="stats-section section-padding bg-secondary-custom">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.total }}</div>
              <div class="stat-label text-secondary-custom">Total Proyectos</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.completed }}</div>
              <div class="stat-label text-secondary-custom">Completados</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.inProgress }}</div>
              <div class="stat-label text-secondary-custom">En Progreso</div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="stat-item">
              <div class="stat-number gradient-text">{{ projectStats.technologies }}</div>
              <div class="stat-label text-secondary-custom">Tecnologías</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useMainStore } from '../stores/mainStore'
import { useProjectsStore } from '../stores/projectsStore'
import ProjectCard from '../components/ProjectCard.vue'

const mainStore = useMainStore()
const projectsStore = useProjectsStore()

// Reactive data
const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedTechnology = ref('all')
const sortOption = ref('updatedAt-desc')
const isLoadingMore = ref(false)
const showLoadMore = ref(false) // Para paginación futura

// Computed properties
const filteredProjects = computed(() => projectsStore.filteredProjects)
const categories = computed(() => projectsStore.categories)
const availableTechnologies = computed(() => projectsStore.availableTechnologies)
const projectStats = computed(() => projectsStore.projectStats)
const isLoading = computed(() => projectsStore.ui.isLoading)

const hasActiveFilters = computed(() => {
  return searchQuery.value || 
         selectedCategory.value !== 'all' || 
         selectedTechnology.value !== 'all'
})

// Methods
const updateSearch = () => {
  projectsStore.setSearchQuery(searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
  projectsStore.setSearchQuery('')
}

const updateCategoryFilter = () => {
  projectsStore.setFilter('category', selectedCategory.value)
}

const clearCategoryFilter = () => {
  selectedCategory.value = 'all'
  projectsStore.setFilter('category', 'all')
}

const updateTechnologyFilter = () => {
  projectsStore.setFilter('technology', selectedTechnology.value)
}

const clearTechnologyFilter = () => {
  selectedTechnology.value = 'all'
  projectsStore.setFilter('technology', 'all')
}

const updateSort = () => {
  const [sortBy, sortOrder] = sortOption.value.split('-')
  projectsStore.setSorting(sortBy, sortOrder)
}

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  selectedTechnology.value = 'all'
  projectsStore.clearFilters()
}

const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category ? category.name : categoryId
}

const openProjectModal = (project) => {
  projectsStore.selectProject(project)
  projectsStore.toggleProjectModal(true)
}

const handleOpenDemo = (project) => {
  // Analytics o tracking aquí si es necesario
  console.log('Demo opened for project:', project.title)
}

const handleOpenGithub = (project) => {
  // Analytics o tracking aquí si es necesario
  console.log('GitHub opened for project:', project.title)
}

const loadMore = async () => {
  // Para implementación futura de paginación
  isLoadingMore.value = true
  try {
    // await projectsStore.loadMoreProjects()
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
  } finally {
    isLoadingMore.value = false
  }
}

// Watchers para sincronizar con el store
watch(() => projectsStore.ui.searchQuery, (newValue) => {
  if (searchQuery.value !== newValue) {
    searchQuery.value = newValue
  }
})

watch(() => projectsStore.filters.category, (newValue) => {
  if (selectedCategory.value !== newValue) {
    selectedCategory.value = newValue
  }
})

watch(() => projectsStore.filters.technology, (newValue) => {
  if (selectedTechnology.value !== newValue) {
    selectedTechnology.value = newValue
  }
})

// Lifecycle
onMounted(() => {
  mainStore.setCurrentSection('projects')
  
  // Cargar proyectos si no están cargados
  if (projectsStore.projects.length === 0) {
    projectsStore.loadProjects()
  }
  
  // Sincronizar estado inicial
  searchQuery.value = projectsStore.ui.searchQuery
  selectedCategory.value = projectsStore.filters.category
  selectedTechnology.value = projectsStore.filters.technology
})
</script>

<style scoped>
/* Page Header */
.page-header {
  padding-top: 6rem; /* Espacio para navbar fijo */
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

/* Filters Section */
.filters-section {
  border-bottom: 1px solid var(--border-color);
  z-index: 1020;
}

.search-box {
  position: relative;
}

.search-input {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.search-input:focus {
  background: var(--primary-bg);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  box-shadow: 0 0 0 0.2rem rgba(124, 58, 237, 0.25);
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  z-index: 10;
}

.btn-clear {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-secondary);
  padding: 0.25rem;
  z-index: 10;
  transition: color 0.3s ease;
}

.btn-clear:hover {
  color: var(--accent-cyan);
}

.filter-select {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
}

.filter-select:focus {
  background: var(--primary-bg);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  box-shadow: 0 0 0 0.2rem rgba(124, 58, 237, 0.25);
}

.filter-select option {
  background: var(--primary-bg);
  color: var(--text-primary);
}

.results-count {
  font-weight: 500;
  text-align: right;
}

/* Active Filters */
.active-filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-badge {
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-badge:hover {
  background-color: var(--accent-cyan) !important;
  transform: scale(1.05);
}

.clear-all-btn {
  font-size: 0.875rem;
  padding: 0.25rem 0.75rem;
}

/* Projects Grid */
.projects-grid {
  min-height: 60vh;
}

/* Empty State */
.empty-state {
  padding: 4rem 2rem;
}

.empty-state i {
  opacity: 0.5;
}

/* Statistics */
.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
}

.stat-label {
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .results-count {
    text-align: left;
    margin-top: 0.5rem;
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
  
  .filters-section {
    position: relative !important;
  }
  
  .active-filters {
    margin-top: 1rem !important;
  }
  
  .filter-label {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .search-input {
    font-size: 16px; /* Evita zoom en iOS */
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

/* Animaciones */
.projects-grid .col-lg-4 {
  animation: slideUp 0.6s ease-out both;
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
