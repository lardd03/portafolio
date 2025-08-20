# 🚀 Mi Portafolio - Vue.js

Un portafolio profesional moderno y responsivo desarrollado con Vue.js 3, Bootstrap 5 y un diseño enfocado en modo oscuro.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con tema oscuro por defecto
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **SPA con Vue Router**: Navegación fluida entre secciones
- **Estado Global con Pinia**: Gestión eficiente del estado
- **Bootstrap 5**: Framework CSS moderno con componentes personalizados
- **Animaciones CSS**: Transiciones y efectos visuales atractivos
- **SEO Optimizado**: Meta tags y estructura semántica
- **Accesibilidad**: Cumple con estándares de accesibilidad web

## 🏗️ Estructura del Proyecto

```
portafolio/
├── public/
│   ├── vite.svg
│   └── [imágenes y assets estáticos]
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── NavBar.vue      # Barra de navegación
│   │   ├── FooterComponent.vue # Pie de página
│   │   └── ProjectCard.vue # Tarjeta de proyecto
│   ├── views/              # Vistas principales
│   │   ├── HomeView.vue    # Página de inicio
│   │   ├── ProjectsView.vue # Galería de proyectos
│   │   ├── AboutView.vue   # Acerca de mí
│   │   ├── ContactView.vue # Formulario de contacto
│   │   └── NotFoundView.vue # Página 404
│   ├── stores/             # Estado global (Pinia)
│   │   ├── mainStore.js    # Store principal
│   │   └── projectsStore.js # Store de proyectos
│   ├── styles/             # Estilos globales
│   │   └── main.css        # CSS personalizado + Bootstrap
│   ├── router/             # Configuración de rutas
│   │   └── index.js        # Router de Vue
│   ├── App.vue             # Componente raíz
│   └── main.js             # Punto de entrada
├── index.html              # Template HTML
├── package.json            # Dependencias y scripts
├── vite.config.js          # Configuración de Vite
└── README.md               # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 20.19+ o 22.12+)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone [tu-repo-url]
   cd portafolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   ```
   http://localhost:5173
   ```

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎨 Personalización

### 1. Información Personal

Edita el archivo `src/App.vue` en la función `onMounted` para actualizar tu información:

```javascript
mainStore.updatePersonalInfo({
  name: 'Tu Nombre',
  title: 'Tu Título Profesional',
  description: 'Tu descripción personal',
  email: 'tu@email.com',
  location: 'Tu Ciudad, País',
  socialLinks: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    // Agrega más redes sociales
  }
})
```

### 2. Proyectos

Agrega tus proyectos usando `projectsStore.addProject()` o modifica directamente el array en `src/stores/projectsStore.js`.

### 3. Estilos y Colores

Personaliza los colores en `src/styles/main.css`:

```css
:root {
  --primary-bg: #0d1117;        /* Fondo principal */
  --accent-cyan: #7c3aed;       /* Color de acento */
  --accent-blue: #58a6ff;       /* Color secundario */
  /* Modifica estos valores según tu preferencia */
}
```

## 🎯 Secciones del Portafolio

### 🏠 Inicio
- Hero section con información personal
- Sección de habilidades técnicas
- Proyectos destacados
- Estadísticas y call-to-action

### 💼 Proyectos
- Galería filtrable de proyectos
- Sistema de búsqueda
- Filtros por categoría y tecnología
- Ordenamiento personalizable

### 👨‍💻 Acerca de mí
- Historia personal y profesional
- Habilidades con barras de progreso
- Timeline de experiencia
- Intereses y hobbies

### 📧 Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales
- FAQ section

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: Vue.js 3
- **Build Tool**: Vite
- **CSS Framework**: Bootstrap 5
- **Icons**: Bootstrap Icons
- **State Management**: Pinia
- **Routing**: Vue Router
- **Animations**: CSS Animations
- **Package Manager**: npm

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (992px+)
- 🖥️ Large screens (1200px+)

## 🔧 Próximas Mejoras

- [ ] Formulario de contacto con backend
- [ ] Sistema de CMS para gestionar proyectos
- [ ] Modo claro/oscuro toggle
- [ ] Internacionalización (i18n)
- [ ] Blog section
- [ ] Optimización SEO avanzada
- [ ] PWA capabilities
- [ ] Tests unitarios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu propio portafolio.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
