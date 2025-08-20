# 📝 Configuración Inicial del Portafolio

## ✅ Pasos para personalizar tu portafolio

### 1. Información Personal Básica

Edita el archivo `src/App.vue`, busca la función `onMounted` y actualiza tu información:

```javascript
mainStore.updatePersonalInfo({
  name: 'Tu Nombre Completo',
  title: 'Tu Título Profesional (ej: Desarrollador Full Stack)',
  description: 'Una descripción breve pero impactante sobre ti',
  email: 'tu.email@ejemplo.com',
  phone: '+1234567890', // Opcional
  location: 'Tu Ciudad, País',
  avatar: '/path/to/your/avatar.jpg', // Opcional, por defecto usa placeholder
  socialLinks: {
    github: 'https://github.com/tu-usuario',
    linkedin: 'https://linkedin.com/in/tu-perfil',
    twitter: 'https://twitter.com/tu-usuario', // Opcional
    portfolio: 'https://tu-sitio-web.com', // Opcional
    // Agrega más redes según necesites
  }
})
```

### 2. Personalizar Colores y Tema

En `src/styles/main.css`, modifica las variables CSS:

```css
:root {
  /* Cambia estos colores según tu preferencia */
  --primary-bg: #0d1117;     /* Fondo principal */
  --secondary-bg: #161b22;   /* Fondo secundario */
  --card-bg: #21262d;        /* Fondo de tarjetas */
  
  /* Colores de acento - elige tu paleta */
  --accent-cyan: #7c3aed;    /* Color principal de acento */
  --accent-green: #00d8ff;   /* Color secundario */
  --accent-blue: #58a6ff;    /* Color terciario */
  --accent-purple: #a855f7;  /* Color cuaternario */
}
```

### 3. Agregar tus Proyectos

#### Opción A: Directamente en el store
Edita `src/stores/projectsStore.js` y reemplaza el array vacío de `projects`:

```javascript
projects: [
  {
    id: 1,
    title: 'Mi Proyecto Web',
    description: 'Una aplicación web moderna desarrollada con Vue.js',
    longDescription: 'Descripción más detallada del proyecto, qué problema resuelve, cómo lo desarrollaste, etc.',
    technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Node.js'],
    category: 'web', // web, mobile, desktop, api, other
    status: 'completed', // completed, in-progress, planned
    featured: true, // Si quieres que aparezca en la página principal
    images: [
      '/images/proyecto1-screenshot1.jpg',
      '/images/proyecto1-screenshot2.jpg'
    ],
    demoUrl: 'https://mi-proyecto-demo.com',
    githubUrl: 'https://github.com/mi-usuario/mi-proyecto',
    createdAt: '2024-01-01',
    updatedAt: '2024-02-01'
  },
  // Agrega más proyectos...
]
```

#### Opción B: Usando métodos del store
En cualquier componente:

```javascript
import { useProjectsStore } from '@/stores/projectsStore'

const projectsStore = useProjectsStore()

projectsStore.addProject({
  title: 'Nuevo Proyecto',
  description: 'Descripción del proyecto',
  technologies: ['Vue.js', 'Bootstrap'],
  // ... resto de propiedades
})
```

### 4. Personalizar Secciones

#### Sección "Acerca de mí"
Edita `src/views/AboutView.vue`:

- **Habilidades**: Modifica el array `skillsData` con tus tecnologías y niveles
- **Experiencia**: Actualiza `experienceData` con tu historial profesional
- **Intereses**: Cambia el array `interests` por tus propios intereses

#### Sección de Contacto
En `src/views/ContactView.vue`:

- **FAQ**: Modifica `faqData` con preguntas relevantes para tu negocio
- **Horarios**: Actualiza la disponibilidad en el componente de contacto

### 5. Imágenes y Assets

#### Estructura recomendada para imágenes:
```
public/
├── images/
│   ├── avatar.jpg          # Tu foto de perfil
│   ├── projects/           # Screenshots de proyectos
│   │   ├── proyecto1-1.jpg
│   │   ├── proyecto1-2.jpg
│   │   └── proyecto2-1.jpg
│   └── icons/              # Íconos personalizados
├── favicon.ico             # Tu favicon
└── cv.pdf                  # Tu CV para descarga
```

#### Cómo agregar imágenes:
1. Coloca las imágenes en `public/images/`
2. Referencia con rutas absolutas: `/images/mi-imagen.jpg`
3. Actualiza las rutas en tu store o componentes

### 6. SEO y Meta Tags

Edita `index.html` para mejorar el SEO:

```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/tu-favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <meta name="description" content="Portafolio de [Tu Nombre] - Desarrollador [Tu Especialidad]" />
  <meta name="keywords" content="desarrollador, programador, [tu-tecnologia], portafolio, [tu-ciudad]" />
  <meta name="author" content="Tu Nombre" />
  
  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Tu Nombre | Desarrollador" />
  <meta property="og:description" content="Portafolio profesional de desarrollo web" />
  <meta property="og:image" content="/images/og-image.jpg" />
  <meta property="og:url" content="https://tu-dominio.com" />
  
  <title>Tu Nombre | Desarrollador</title>
</head>
```

### 7. Configuración del Router

Si quieres cambiar las rutas, edita `src/router/index.js`:

```javascript
// Ejemplo: cambiar /about por /sobre-mi
{
  path: '/sobre-mi',
  name: 'about',
  component: () => import('../views/AboutView.vue'),
  meta: {
    title: 'Sobre mí | Mi Portafolio'
  }
}
```

### 8. Deploy y Producción

#### Para GitHub Pages:
1. Construye el proyecto: `npm run build`
2. Los archivos estarán en la carpeta `dist/`
3. Sube el contenido de `dist/` a tu repositorio de GitHub Pages

#### Para Netlify/Vercel:
1. Conecta tu repositorio
2. Configura el build command: `npm run build`
3. Configura el publish directory: `dist`

### 9. Tareas Pendientes por Hacer

- [ ] Reemplazar información personal de ejemplo
- [ ] Agregar tus proyectos reales
- [ ] Subir y configurar imágenes (avatar, proyectos)
- [ ] Personalizar colores y tema
- [ ] Actualizar sección "Acerca de mí"
- [ ] Configurar formulario de contacto (si necesitas backend)
- [ ] Optimizar imágenes para web
- [ ] Probar en diferentes dispositivos
- [ ] Configurar dominio personalizado
- [ ] Configurar analytics (Google Analytics, etc.)

### 10. Tips Adicionales

#### Optimización de Imágenes:
- Usa formatos modernos: WebP, AVIF
- Comprime las imágenes antes de subirlas
- Considera usar un CDN para imágenes

#### Performance:
- El proyecto ya está optimizado con Vite
- Usa lazy loading para imágenes grandes
- Considera implementar PWA si es necesario

#### Mantenimiento:
- Actualiza regularmente tus proyectos
- Mantén las dependencias actualizadas
- Revisa y actualiza tu información profesional

---

## 🚨 Errores Comunes y Soluciones

### Error: "Module not found"
- Verifica que todas las rutas de importación sean correctas
- Asegúrate de que los archivos existan en las rutas especificadas

### Error: Imágenes no se cargan
- Verifica que las imágenes estén en la carpeta `public/`
- Usa rutas absolutas que empiecen con `/`

### Error: Estilos no se aplican
- Verifica que `main.css` esté siendo importado en `main.js`
- Revisa la sintaxis CSS en caso de errores

### Error en producción
- Ejecuta `npm run build` para verificar que no hay errores de compilación
- Prueba con `npm run preview` antes del deploy

---

¡Tu portafolio está listo para personalizar! 🎉
