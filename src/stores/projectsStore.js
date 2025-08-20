import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    // Lista de proyectos (se llenará posteriormente con datos reales)
    projects: [
      // Estructura de ejemplo para referencia futura:
      // {
      //   id: 1,
      //   title: 'Nombre del Proyecto',
      //   description: 'Descripción breve del proyecto',
      //   longDescription: 'Descripción detallada del proyecto...',
      //   technologies: ['JavaScript', 'Vue.js', 'Node.js'],
      //   category: 'web', // web, mobile, desktop, api, etc.
      //   status: 'completed', // completed, in-progress, planned
      //   featured: true,
      //   images: [
      //     '/images/project1-1.jpg',
      //     '/images/project1-2.jpg'
      //   ],
      //   demoUrl: 'https://demo.com',
      //   githubUrl: 'https://github.com/usuario/proyecto',
      //   createdAt: '2024-01-01',
      //   updatedAt: '2024-01-15'
      // }
    ],
    
    // Filtros y configuración
    filters: {
      category: 'all', // all, web, mobile, desktop, api
      technology: 'all',
      status: 'all'
    },
    
    // Categorías disponibles
    categories: [
      { id: 'all', name: 'Todos', icon: 'grid' },
      { id: 'web', name: 'Web', icon: 'globe' },
      { id: 'mobile', name: 'Móvil', icon: 'smartphone' },
      { id: 'desktop', name: 'Escritorio', icon: 'monitor' },
      { id: 'api', name: 'API', icon: 'server' },
      { id: 'other', name: 'Otros', icon: 'folder' }
    ],
    
    // Tecnologías disponibles
    availableTechnologies: [
      'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Angular',
      'Node.js', 'Express', 'Python', 'Django', 'FastAPI',
      'Java', 'Spring Boot', 'C#', '.NET', 'PHP', 'Laravel',
      'MySQL', 'PostgreSQL', 'MongoDB', 'Redis',
      'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Tailwind CSS',
      'Git', 'Docker', 'AWS', 'Firebase', 'Vercel'
    ],
    
    // Estado de la interfaz
    ui: {
      selectedProject: null,
      showProjectModal: false,
      isLoading: false,
      searchQuery: '',
      sortBy: 'updatedAt', // title, createdAt, updatedAt, category
      sortOrder: 'desc' // asc, desc
    }
  }),

  getters: {
    // Getter para obtener proyectos filtrados
    filteredProjects: (state) => {
      let filtered = [...state.projects]
      
      // Filtrar por búsqueda
      if (state.ui.searchQuery) {
        const query = state.ui.searchQuery.toLowerCase()
        filtered = filtered.filter(project => 
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.technologies.some(tech => tech.toLowerCase().includes(query))
        )
      }
      
      // Filtrar por categoría
      if (state.filters.category !== 'all') {
        filtered = filtered.filter(project => project.category === state.filters.category)
      }
      
      // Filtrar por tecnología
      if (state.filters.technology !== 'all') {
        filtered = filtered.filter(project => 
          project.technologies.includes(state.filters.technology)
        )
      }
      
      // Filtrar por estado
      if (state.filters.status !== 'all') {
        filtered = filtered.filter(project => project.status === state.filters.status)
      }
      
      // Ordenar
      filtered.sort((a, b) => {
        const aValue = a[state.ui.sortBy]
        const bValue = b[state.ui.sortBy]
        
        if (state.ui.sortOrder === 'asc') {
          return aValue > bValue ? 1 : -1
        } else {
          return aValue < bValue ? 1 : -1
        }
      })
      
      return filtered
    },
    
    // Getter para obtener proyectos destacados
    featuredProjects: (state) => {
      return state.projects.filter(project => project.featured)
    },
    
    // Getter para obtener estadísticas de proyectos
    projectStats: (state) => {
      const total = state.projects.length
      const completed = state.projects.filter(p => p.status === 'completed').length
      const inProgress = state.projects.filter(p => p.status === 'in-progress').length
      const technologies = [...new Set(state.projects.flatMap(p => p.technologies))].length
      
      return {
        total,
        completed,
        inProgress,
        technologies
      }
    },
    
    // Getter para obtener proyecto por ID
    getProjectById: (state) => {
      return (id) => state.projects.find(project => project.id === id)
    }
  },

  actions: {
    // Acción para agregar un nuevo proyecto
    addProject(project) {
      const newProject = {
        id: Date.now(), // Temporal, en producción sería un UUID o ID del backend
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        featured: false,
        status: 'completed',
        ...project
      }
      this.projects.push(newProject)
    },
    
    // Acción para actualizar un proyecto
    updateProject(id, updates) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects[index] = {
          ...this.projects[index],
          ...updates,
          updatedAt: new Date().toISOString()
        }
      }
    },
    
    // Acción para eliminar un proyecto
    deleteProject(id) {
      const index = this.projects.findIndex(p => p.id === id)
      if (index !== -1) {
        this.projects.splice(index, 1)
      }
    },
    
    // Acción para cambiar filtros
    setFilter(filterType, value) {
      this.filters[filterType] = value
    },
    
    // Acción para limpiar todos los filtros
    clearFilters() {
      this.filters = {
        category: 'all',
        technology: 'all',
        status: 'all'
      }
      this.ui.searchQuery = ''
    },
    
    // Acción para establecer búsqueda
    setSearchQuery(query) {
      this.ui.searchQuery = query
    },
    
    // Acción para cambiar ordenamiento
    setSorting(sortBy, sortOrder = 'desc') {
      this.ui.sortBy = sortBy
      this.ui.sortOrder = sortOrder
    },
    
    // Acción para seleccionar proyecto
    selectProject(project) {
      this.ui.selectedProject = project
    },
    
    // Acción para mostrar/ocultar modal de proyecto
    toggleProjectModal(show = null) {
      this.ui.showProjectModal = show !== null ? show : !this.ui.showProjectModal
    },
    
    // Acción para establecer loading
    setLoading(status) {
      this.ui.isLoading = status
    },
    
    // Acción para cargar proyectos (simulada - en el futuro se conectará a una API)
    async loadProjects() {
      this.setLoading(true)
      try {
        // Aquí se haría la llamada a la API
        // const response = await api.getProjects()
        // this.projects = response.data
        
        // Por ahora, simular carga
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        this.setLoading(false)
      } catch (error) {
        console.error('Error loading projects:', error)
        this.setLoading(false)
      }
    }
  }
})
