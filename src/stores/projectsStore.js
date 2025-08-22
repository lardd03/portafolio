import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    // Lista de proyectos con datos dummy para demostración
    projects: [
      {
        id: 1,
        title: 'Sistema de Monitoreo',
        description: 'Plataforma web diseñada para supervisar en tiempo real el desempeño operativo de estaciones de servicio, integrando visualización de métricas clave como niveles de inventario, volumen de ventas por tipo de producto, estado de tanques, precios de competencia y rendimiento por sucursal. Su interfaz intuitiva permite a los operadores tomar decisiones rápidas y fundamentadas desde cualquier dispositivo.',
        longDescription: 'Este sistema consolida datos operativos críticos en una interfaz visual adaptable, permitiendo a empresas con múltiples estaciones de servicio gestionar inventarios, ventas, precios y estado de tanques con precisión. La plataforma incorpora control de accesos por roles, gestión avanzada de usuarios, alertas automatizadas y notificaciones en tiempo real. Gracias a su arquitectura híbrida con bases relacionales y no relacionales, permite escalar operaciones sin comprometer velocidad ni integridad de datos. Además, facilita auditorías internas, análisis de patrones de consumo y anticipación de necesidades logísticas, convirtiendo datos dispersos en insights accionables que promueven eficiencia, transparencia y control estratégico.',
        technologies: ['Vue.js', 'JavaScript', 'Node.js', 'MySql', 'MongoDB', 'PHP', 'Python', 'Bootstrap'],
        category: 'web',
        status: 'completed',
        featured: true,
        stats: {
          duration: '12 meses',
          teamSize: '6',
          complexity: 'Alta'
        },
        images: [
          '/portafolio/images/1.png',
          '/portafolio/images/2.png',
          '/portafolio/images/3.png',
          '/portafolio/images/4.png',
          '/portafolio/images/5.png',
          '/portafolio/images/6.png',
          '/portafolio/images/7.png',
          '/portafolio/images/8.png',
          '/portafolio/images/9.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-01-15',
        updatedAt: '2025-08-20'
      },

      {
        id: 2,
        title: 'API REST con Python',
        description: 'API RESTful para gestión de usuarios y autenticación JWT',
        longDescription: 'API REST desarrollada con FastAPI y Python que proporciona endpoints para gestión de usuarios, autenticación JWT, validación de datos y documentación automática con Swagger.',
        technologies: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'Swagger'],
        category: 'api',
        status: 'completed',
        featured: false,
        images: [
          '/portafolio/images/4.png',
          '/portafolio/images/1.png',
          '/portafolio/images/2.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-03-05',
        updatedAt: '2024-04-12'
      },
      {
        id: 3,
        title: 'Dashboard de Analytics Empresarial',
        description: 'Plataforma de visualización de datos empresariales con métricas en tiempo real, reportes automatizados y análisis predictivo.',
        longDescription: 'Desarrollo de una plataforma completa de business intelligence para una empresa de retail. El dashboard integra datos de múltiples fuentes (ventas, inventario, marketing, finanzas) y presenta visualizaciones interactivas en tiempo real. Incluye alertas automáticas, reportes programables, análisis de tendencias, predicciones basadas en ML, y exportación de datos en múltiples formatos. La plataforma procesa más de 1 millón de registros diarios.',
        technologies: ['React', 'TypeScript', 'D3.js', 'Chart.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Apache Kafka'],
        category: 'web',
        status: 'completed',
        featured: true,
        stats: {
          duration: '10 meses',
          teamSize: '8',
          complexity: 'Muy Alta'
        },
        images: [
          '/portafolio/images/3.png',
          '/portafolio/images/4.png',
          '/portafolio/images/1.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-04-20',
        updatedAt: '2024-06-30'
      },
      {
        id: 4,
        title: 'Sistema de Análisis Predictivo con Machine Learning',
        description: 'Desarrollo de una solución integral que combina extracción de datos en tiempo real vía API REST, procesamiento automatizado con Python, e implementación de perceptrón multicapa (MLP) para predicción de ventas de combustibles.',
        longDescription: 'El sistema incluye clasificación inteligente de clientes (registrados vs casuales), análisis de patrones temporales de consumo, y generación automática de visualizaciones interactivas, cuenta con arquitectura modular y ejecución completamente automatizada.El sistema implementa un pipeline ETL robusto que consume datos vía HTTPS desde un API, procesa respuestas JSON complejas y estructura 12 meses de históricos para entrenamiento, con caché inteligente que permite análisis offline. Se desarrolló un perceptrón multicapa (MLP) personalizado para regresión de volúmenes de venta, optimizando métricas MAE. Además, el modelo realiza clasificación multi-nivel de clientes, segmentando automáticamente entre habituales y casuales, y sub-clasificando hábitos de consumo',
        technologies: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'requests', ],
        category: 'data',
        status: 'in-progress',
        featured: false,
        images: [
          '/portafolio/images/21.png',
          '/portafolio/images/22.png',
          '/portafolio/images/23.png',
          '/portafolio/images/24.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-05-15',
        updatedAt: '2024-08-10'
      },
      {
        id: 5,
        title: 'Blog Personal',
        description: 'Blog personal con CMS personalizado y optimización SEO',
        longDescription: 'Blog personal desarrollado con Next.js que incluye sistema de gestión de contenido personalizado, optimización SEO, comentarios y newsletter.',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Vercel'],
        category: 'web',
        status: 'completed',
        featured: false,
        images: [
          '/portafolio/images/2.png',
          '/portafolio/images/4.png',
          '/portafolio/images/1.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-06-01',
        updatedAt: '2024-07-25'
      },
      {
        id: 6,
        title: 'Microservicio de Notificaciones',
        description: 'Servicio de notificaciones en tiempo real con múltiples canales',
        longDescription: 'Microservicio desarrollado con Node.js para envío de notificaciones multi-canal (email, SMS, push). Incluye cola de mensajes, plantillas y analytics.',
        technologies: ['Node.js', 'Express', 'Redis', 'RabbitMQ', 'SendGrid', 'Firebase'],
        category: 'api',
        status: 'completed',
        featured: true,
        images: [
          '/portafolio/images/3.png',
          '/portafolio/images/1.png',
          '/portafolio/images/2.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-07-10',
        updatedAt: '2024-08-05'
      },
      {
        id: 7,
        title: 'Juego Web Interactivo',
        description: 'Juego de puzzle desarrollado con Canvas y JavaScript vanilla',
        longDescription: 'Juego de rompecabezas interactivo desarrollado con JavaScript vanilla y Canvas API. Incluye múltiples niveles, sistema de puntuación y almacenamiento local.',
        technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Local Storage'],
        category: 'web',
        status: 'completed',
        featured: false,
        images: [
          '/portafolio/images/4.png',
          '/portafolio/images/2.png',
          '/portafolio/images/3.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-01-30',
        updatedAt: '2024-02-20'
      }
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
      { id: 'data', name: 'Data', icon: 'database' }
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
