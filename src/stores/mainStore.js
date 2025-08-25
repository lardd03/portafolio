import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // Configuración general de la aplicación
    appTitle: 'Mi Portafolio',
    darkMode: true,
    isLoading: false,
    
    // Información personal (se llenará posteriormente)
    personalInfo: {
      name: 'Juan Carlos Mejia Arguello',
      title: 'Desarrollador Web y Data Engineer',
      description: 'Desarrollador apasionado por crear soluciones tecnológicas innovadoras',
      email: 'mejiaarguellojuancarlos@gmail.com',
      phone: '+52 2212557982',
      location: 'México',
      avatar: '/placeholder-avatar.jpg',
      socialLinks: {
        github: 'https://github.com/juancarlos2100',
        linkedin: 'https://www.linkedin.com/in/juan-carlos-mejia-arguello-25b457267/',
        twitter: 'https://twitter.com/juancarlosme',
        portfolio: ''
      }
    },
    
    // Configuración de navegación
    navigationItems: [
      { name: 'Inicio', path: '/', icon: 'home' },
      { name: 'Proyectos', path: '/projects', icon: 'code' },
      { name: 'Acerca de mí', path: '/about', icon: 'user' },
      { name: 'Contacto', path: '/contact', icon: 'mail' }
    ],
    
    // Estado de la interfaz
    ui: {
      showMobileMenu: false,
      currentSection: 'home',
      scrollPosition: 0
    }
  }),

  getters: {
    // Getter para verificar si hay información personal completa
    hasPersonalInfo: (state) => {
      return state.personalInfo.name && state.personalInfo.title
    },
    
    // Getter para obtener el item de navegación activo
    activeNavItem: (state) => {
      return state.navigationItems.find(item => 
        item.path === `/${state.ui.currentSection}` || 
        (state.ui.currentSection === 'home' && item.path === '/')
      )
    }
  },

  actions: {
    // Acción para actualizar información personal
    updatePersonalInfo(info) {
      this.personalInfo = { ...this.personalInfo, ...info }
    },
    
    // Acción para alternar el menú móvil
    toggleMobileMenu() {
      this.ui.showMobileMenu = !this.ui.showMobileMenu
    },
    
    // Acción para cerrar el menú móvil
    closeMobileMenu() {
      this.ui.showMobileMenu = false
    },
    
    // Acción para actualizar la sección actual
    setCurrentSection(section) {
      this.ui.currentSection = section
    },
    
    // Acción para actualizar la posición del scroll
    updateScrollPosition(position) {
      this.ui.scrollPosition = position
    },
    
    // Acción para mostrar/ocultar loading
    setLoading(status) {
      this.isLoading = status
    },
    
    // Acción para alternar modo oscuro (aunque por defecto está en oscuro)
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
})
