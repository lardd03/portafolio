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
        id: 3,
        title: 'Juego de Domino con Heurísticas',
        description: 'Juego de dominó interactivo desarrollado en Python con interfaz gráfica en Tkinter. El jugador compite contra un sistema automatizado que utiliza heurísticas estratégicas para seleccionar jugadas óptimas, evaluando factores como fichas dobles, valores bajos y opciones futuras. El proyecto combina lógica de juego clásica con inteligencia artificial básica para ofrecer una experiencia desafiante y visualmente funcional',
        longDescription: 'Este proyecto consiste en el desarrollo de un juego de dominó clásico implementado en Python, utilizando la biblioteca Tkinter para construir una interfaz gráfica intuitiva y funcional. El usuario puede seleccionar fichas desde su mano y colocarlas en el tablero mediante interacción directa con la ventana, mientras compite contra un oponente automatizado controlado por el sistema. La lógica del sistema se basa en una heurística personalizada que asigna puntuaciones a cada jugada posible, considerando criterios como: jugar fichas dobles, priorizar fichas de menor valor, maximizar las opciones futuras del sistema, evitar jugadas que favorezcan al jugador, y analizar la frecuencia de aparición de cada número en las fichas restantes. Esta heurística permite que el sistema tome decisiones estratégicas, haciendo que el juego sea difícil de ganar pero no imposible, fomentando una experiencia competitiva y estimulante.',
        technologies: ['Python', 'Django', 'Tkinter', 'Pandas'],
        category: 'desktop',
        status: 'completed',
        featured: false,
        stats: {
          duration: '1 mes',
          teamSize: '2',
          complexity: 'Muy Alta'
        },
        images: [
          '/portafolio/images/52.png',
          '/portafolio/images/53.png',
          '/portafolio/images/54.png',
          '/portafolio/images/55.png',
          '/portafolio/images/51.png',
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2023-05-20',
        updatedAt: '2023-06-30'
      },
      {
        id: 4,
        title: 'Sistema de Análisis Predictivo con Machine Learning',
        description: 'Desarrollo de una solución integral que combina extracción de datos en tiempo real vía API REST, procesamiento automatizado con Python, e implementación de perceptrón multicapa (MLP) para predicción de ventas de combustibles.',
        longDescription: 'El sistema incluye clasificación inteligente de clientes (registrados vs casuales), análisis de patrones temporales de consumo, y generación automática de visualizaciones interactivas, cuenta con arquitectura modular y ejecución completamente automatizada.El sistema implementa un pipeline ETL robusto que consume datos vía HTTPS desde un API, procesa respuestas JSON complejas y estructura 12 meses de históricos para entrenamiento, con caché inteligente que permite análisis offline. Se desarrolló un perceptrón multicapa (MLP) personalizado para regresión de volúmenes de venta, optimizando métricas MAE. Además, el modelo realiza clasificación multi-nivel de clientes, segmentando automáticamente entre habituales y casuales, y sub-clasificando hábitos de consumo',
        technologies: ['Python', 'TensorFlow', 'scikit-learn', 'pandas', 'requests', ],
        category: 'data',
        status: 'in-progress',
        featured: true,
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
        title: 'Automatización de la creación de entornos de Despliegue y Pruebas con VMs',
        description: 'Sistema automatizado para la creación, migración y clonación de máquinas virtuales Windows 10 y 11, gestionadas remotamente vía SSH o WinRM, con credenciales asignadas por Active Directory y scripts de PowerShell que permiten configuraciones desatendidas en menos de 10 minutos.',
        longDescription: 'Este sistema integral permite la automatización completa del ciclo de vida de máquinas virtuales Windows 10 y 11, optimizado para entornos de pruebas, despliegue y administración remota. Mediante scripts de PowerShell interactivos, el usuario puede definir parámetros clave como memoria RAM, espacio en disco y sistema operativo, facilitando la creación de nuevas VMs, la migración de instancias existentes con datos persistentes, o la clonación de entornos completos con identificadores únicos para evitar conflictos de red. La infraestructura se apoya en tecnologías como Hyper-V y VMware, permitiendo flexibilidad según el entorno de ejecución. La gestión remota se realiza vía SSH o WinRM, mientras que Active Directory se encarga de la asignación de credenciales, políticas de acceso y software preinstalado, asegurando que cada VM esté lista para operar en menos de 10 minutos gracias a una instalación desatendida. Este sistema no solo acelera el despliegue, sino que estandariza la configuración, mejora la trazabilidad y facilita la administración centralizada de entornos virtuales en escenarios empresariales o de desarrollo avanzado.',
        technologies: ['Terraform', 'Docker', 'VMware', 'SSH', 'Hyper-V', 'WinRM', 'PowerShell', 'Active Directory'],
        category: 'devops',
        status: 'completed',
        featured: false,
        images: [
          '/portafolio/images/41.png',
          '/portafolio/images/42.png',
          '/portafolio/images/43.png',
          '/portafolio/images/44.png',
          '/portafolio/images/46.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2024-06-01',
        updatedAt: '2024-07-25'
      },
      {
        id: 6,
        title: 'Modulo de Precios de Competencias',
        description: 'Este módulo permite visualizar precios de productos en estaciones competidoras cercanas, extraídos de fuentes oficiales. Facilita la comparación estratégica con tus propios precios, ayudando a ajustar la competitividad sin comprometer la utilidad. Incluye actualizaciones automáticas y simulaciones gráficas para análisis dinámico.',
        longDescription: 'Nos facilita comparar precios de combustibles entre estaciones cercanas usando datos oficiales, actualizados automáticamente varias veces al día. Al detectar cambios, se actualiza la información y se habilita un análisis estadístico basado en historial de ventas, lo que facilita ajustar precios estratégicamente sin comprometer la utilidad. Incluye un simulador gráfico con códigos de color para visualizar el impacto de cada ajuste en la rentabilidad. Está desarrollado con tecnologías como Vue.js, Bootstrap 5, Chart.js, y ETL pipelines automatizados, integrando fuentes externas mediante APIs para mantener la información vigente.',
        technologies: ['Node.js', 'Express', 'MySQL', 'RabbitMQ', 'JavaScript', 'Vue.js', 'Tailwind CSS',],
        category: 'web',
        status: 'completed',
        featured: true,
        images: [
          '/portafolio/images/31.png',
          '/portafolio/images/32.png',
          '/portafolio/images/37.png',
          '/portafolio/images/38.png',
          '/portafolio/images/33.png',
          '/portafolio/images/34.png',
          '/portafolio/images/35.png',
          '/portafolio/images/36.png',
          '/portafolio/images/39.png'
        ],
        demoUrl: null,
        githubUrl: null,
        createdAt: '2025-02-01',
        updatedAt: '2025-05-25'
      },

    ],
    
    // Filtros y configuración
    filters: {
      category: 'all', // all, web, mobile, desktop, api, data, devops
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
      { id: 'data', name: 'Data', icon: 'database' },
      { id: 'devops', name: 'DevOps', icon: 'settings' }
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
