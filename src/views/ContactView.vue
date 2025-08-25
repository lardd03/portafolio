<template>
  <div class="contact-view">
    <!-- Page Header -->
    <section class="page-header section-padding bg-secondary-custom">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="page-title">
              <span class="gradient-text">Contacto</span>
            </h1>
            <p class="page-subtitle text-secondary-custom lead">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content section-padding">
      <div class="container">
        <div class="row g-5">
          <!-- Contact Information -->
          <div class="col-lg-5">
            <div class="contact-info">
              <h2 class="section-title mb-4">
                ¡Conectemos!
              </h2>
              <p class="contact-description text-secondary-custom mb-5">
                Estoy siempre abierto a discutir nuevas oportunidades, proyectos interesantes 
                o simplemente charlar sobre tecnología. No dudes en contactarme.
              </p>

              <!-- Contact Methods -->
              <div class="contact-methods">
                <div class="contact-method" v-if="personalInfo.email">
                  <div class="method-icon">
                    <i class="bi bi-envelope"></i>
                  </div>
                  <div class="method-content">
                    <h5>Email</h5>
                    <a :href="`mailto:${personalInfo.email}`" class="method-link">
                      {{ personalInfo.email }}
                    </a>
                  </div>
                </div>

                <div class="contact-method" v-if="personalInfo.phone">
                  <div class="method-icon">
                    <i class="bi bi-telephone"></i>
                  </div>
                  <div class="method-content">
                    <h5>Teléfono</h5>
                    <a :href="`tel:${personalInfo.phone}`" class="method-link">
                      {{ personalInfo.phone }}
                    </a>
                  </div>
                </div>

                <div class="contact-method" v-if="personalInfo.location">
                  <div class="method-icon">
                    <i class="bi bi-geo-alt"></i>
                  </div>
                  <div class="method-content">
                    <h5>Ubicación</h5>
                    <span class="method-text">{{ personalInfo.location }}</span>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">
                    <i class="bi bi-clock"></i>
                  </div>
                  <div class="method-content">
                    <h5>Disponibilidad</h5>
                    <span class="method-text">Lun - Vie, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <!-- Social Links -->
              <div class="social-links mt-5">
                <h5 class="social-title mb-3">Sígueme en</h5>
                <div class="social-buttons">
                  <template v-for="(url, platform) in personalInfo.socialLinks" :key="platform">
                    <a
                      v-if="url"
                      :href="url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="social-button"
                      :title="`Sígueme en ${platform}`"
                    >
                      <i :class="`bi bi-${getSocialIcon(platform)}`"></i>
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="contact-form-container">
              <div class="form-header mb-4">
                <h3 class="form-title">Envíame un mensaje</h3>
                <p class="form-description text-secondary-custom">
                  Completa el formulario y te responderé lo antes posible.
                </p>
              </div>

              <form @submit.prevent="submitForm" class="contact-form">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name" class="form-label">Nombre *</label>
                      <input
                        type="text"
                        id="name"
                        v-model="form.name"
                        class="form-control"
                        :class="{ 'is-invalid': errors.name }"
                        placeholder="Tu nombre completo"
                        required
                      >
                      <div v-if="errors.name" class="invalid-feedback">
                        {{ errors.name }}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="email" class="form-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="form-control"
                        :class="{ 'is-invalid': errors.email }"
                        placeholder="tu@email.com"
                        required
                      >
                      <div v-if="errors.email" class="invalid-feedback">
                        {{ errors.email }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="subject" class="form-label">Asunto *</label>
                      <input
                        type="text"
                        id="subject"
                        v-model="form.subject"
                        class="form-control"
                        :class="{ 'is-invalid': errors.subject }"
                        placeholder="¿De qué quieres hablar?"
                        required
                      >
                      <div v-if="errors.subject" class="invalid-feedback">
                        {{ errors.subject }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="message" class="form-label">Mensaje *</label>
                      <textarea
                        id="message"
                        v-model="form.message"
                        class="form-control"
                        :class="{ 'is-invalid': errors.message }"
                        rows="6"
                        placeholder="Cuéntame sobre tu proyecto o consulta..."
                        required
                      ></textarea>
                      <div v-if="errors.message" class="invalid-feedback">
                        {{ errors.message }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        id="privacy"
                        v-model="form.privacy"
                        class="form-check-input"
                        :class="{ 'is-invalid': errors.privacy }"
                        required
                      >
                      <label for="privacy" class="form-check-label">
                        He leído y acepto la política de privacidad *
                      </label>
                      <div v-if="errors.privacy" class="invalid-feedback">
                        {{ errors.privacy }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-actions mt-4">
                  <button
                    type="submit"
                    class="btn btn-gradient-primary btn-lg"
                    :disabled="isSubmitting"
                  >
                    <span v-if="isSubmitting">
                      <div class="spinner-border spinner-border-sm me-2"></div>
                      Enviando...
                    </span>
                    <span v-else>
                      <i class="bi bi-send me-2"></i>
                      Enviar mensaje
                    </span>
                  </button>
                </div>
              </form>

              <!-- Success/Error Messages -->
              <div v-if="submitMessage" class="alert mt-4" :class="submitMessageClass">
                <i :class="submitMessage.type === 'success' ? 'bi bi-check-circle' : 'bi bi-exclamation-triangle'"></i>
                {{ submitMessage.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section section-padding bg-card-custom">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title">
              Preguntas <span class="gradient-text">Frecuentes</span>
            </h2>
            <p class="section-subtitle text-secondary-custom">
              Respuestas a las consultas más comunes
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="faq-list">
              <div
                v-for="(faq, index) in faqData"
                :key="index"
                class="faq-item card-custom mb-3"
              >
                <div
                  class="faq-header"
                  @click="toggleFaq(index)"
                  :class="{ active: activeFaq === index }"
                >
                  <h5 class="faq-question mb-0">{{ faq.question }}</h5>
                  <i class="bi bi-chevron-down faq-icon"></i>
                </div>
                <div class="faq-answer" v-show="activeFaq === index">
                  <p class="text-secondary-custom mb-0">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useMainStore } from '../stores/mainStore'
import emailjs from '@emailjs/browser'

const mainStore = useMainStore()

// Configuración de EmailJS (obtener de emailjs.com)
const EMAILJS_CONFIG = {
  publicKey: 'NH69SK35f1RWotijS', // Reemplazar con tu Public Key
  serviceId: 'service_l7tpa98', // Reemplazar con tu Service ID
  templateId: 'template_fot0f7a' // Reemplazar con tu Template ID
}

// Reactive data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

const errors = reactive({})
const isSubmitting = ref(false)
const submitMessage = ref(null)
const activeFaq = ref(null)

// Computed properties
const personalInfo = computed(() => mainStore.personalInfo)

const submitMessageClass = computed(() => {
  if (!submitMessage.value) return ''
  return submitMessage.value.type === 'success' ? 'alert-success' : 'alert-danger'
})

// FAQ Data
const faqData = [
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'El tiempo de desarrollo depende de la complejidad del proyecto. Un sitio web simple puede tomar 1-2 semanas, mientras que aplicaciones más complejas pueden requerir varios meses.'
  },
  {
    question: '¿Trabajas con equipos remotos?',
    answer: 'Sí, tengo experiencia trabajando de forma remota con equipos distribuidos. Utilizo herramientas de colaboración modernas para mantener una comunicación efectiva.'
  },
  {
    question: '¿Qué tecnologías utilizas principalmente?',
    answer: 'Me especializo en JavaScript, Vue.js, Node.js, y bases de datos como PostgreSQL y MongoDB. También trabajo con HTML5, CSS3, Bootstrap y diversas herramientas de desarrollo.'
  },
  {
    question: '¿Ofreces mantenimiento post-desarrollo?',
    answer: 'Sí, ofrezco servicios de mantenimiento y soporte continuo para asegurar que tu aplicación se mantenga actualizada y funcionando correctamente.'
  },
  {
    question: '¿Cómo manejas los pagos y presupuestos?',
    answer: 'Trabajo con presupuestos fijos basados en los requerimientos del proyecto. Acepto pagos por etapas y utilizo métodos de pago seguros y confiables.'
  }
]

// Methods
const validateForm = () => {
  const newErrors = {}

  if (!form.name.trim()) {
    newErrors.name = 'El nombre es obligatorio'
  }

  if (!form.email.trim()) {
    newErrors.email = 'El email es obligatorio'
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    newErrors.email = 'El email no es válido'
  }

  if (!form.subject.trim()) {
    newErrors.subject = 'El asunto es obligatorio'
  }

  if (!form.message.trim()) {
    newErrors.message = 'El mensaje es obligatorio'
  } else if (form.message.trim().length < 10) {
    newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
  }

  if (!form.privacy) {
    newErrors.privacy = 'Debes aceptar la política de privacidad'
  }

  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const submitForm = async () => {
  // Limpiar errores previos
  Object.keys(errors).forEach(key => delete errors[key])

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = null

  try {
    // Preparar los parámetros para EmailJS
    const templateParams = {
      name: form.name,
      email: form.email, // Email del remitente para mostrar
      subject: form.subject,
      message: form.message,
      time: new Date().toLocaleString('es-ES', { 
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      reply_to: form.email, // Email para responder (MUY IMPORTANTE)
      to_email: 'mejiaarguellojuancarlos@gmail.com' // Tu email (opcional)
    }

    // Enviar email usando EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('Email enviado exitosamente:', response)

    submitMessage.value = {
      type: 'success',
      text: '¡Mensaje enviado correctamente! Te responderé lo antes posible.'
    }

    // Limpiar formulario
    Object.keys(form).forEach(key => {
      form[key] = key === 'privacy' ? false : ''
    })

  } catch (error) {
    console.error('Error al enviar email:', error)
    
    let errorMessage = 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
    
    // Manejo de errores específicos de EmailJS
    if (error.status === 400) {
      errorMessage = 'Error en los datos del formulario. Verifica la información.'
    } else if (error.status === 402) {
      errorMessage = 'Límite de emails excedido. Intenta más tarde.'
    } else if (error.status === 403) {
      errorMessage = 'Servicio no disponible temporalmente.'
    }

    submitMessage.value = {
      type: 'error',
      text: errorMessage
    }
  } finally {
    isSubmitting.value = false
  }
}

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const getSocialIcon = (platform) => {
  const icons = {
    github: 'github',
    linkedin: 'linkedin',
    twitter: 'twitter',
    portfolio: 'globe',
    instagram: 'instagram',
    facebook: 'facebook',
    youtube: 'youtube'
  }
  return icons[platform] || 'link-45deg'
}

// Lifecycle
onMounted(() => {
  mainStore.setCurrentSection('contact')
})
</script>

<style scoped>
/* Page Header */
.page-header {
  padding-top: 6rem;
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

/* Contact Info */
.contact-info {
  padding: 2rem 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.contact-description {
  font-size: 1.1rem;
  line-height: 1.6;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--card-bg);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
}

.contact-method:hover {
  border-color: var(--accent-cyan);
  transform: translateY(-2px);
}

.method-icon {
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.method-icon i {
  font-size: 1.25rem;
  color: white;
}

.method-content h5 {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.method-link {
  color: var(--accent-cyan);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.method-link:hover {
  color: var(--accent-blue);
}

.method-text {
  color: var(--text-secondary);
}

/* Social Links */
.social-title {
  font-weight: 600;
  color: var(--text-primary);
}

.social-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-button {
  width: 50px;
  height: 50px;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-button:hover {
  background: var(--accent-cyan);
  border-color: var(--accent-cyan);
  color: white;
  transform: translateY(-2px);
}

/* Contact Form */
.contact-form-container {
  background: var(--card-bg);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-description {
  font-size: 1.1rem;
}

.form-label {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.form-control {
  background: var(--primary-bg);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.form-control:focus {
  background: var(--primary-bg);
  border-color: var(--accent-cyan);
  color: var(--text-primary);
  box-shadow: 0 0 0 0.2rem rgba(124, 58, 237, 0.25);
}

.form-control::placeholder {
  color: var(--text-muted);
}

.form-check-input {
  background-color: var(--primary-bg);
  border-color: var(--border-color);
}

.form-check-input:checked {
  background-color: var(--accent-cyan);
  border-color: var(--accent-cyan);
}

.form-check-input:focus {
  box-shadow: 0 0 0 0.2rem rgba(124, 58, 237, 0.25);
}

.form-check-label {
  color: var(--text-secondary);
}

.invalid-feedback {
  display: block;
  font-size: 0.875rem;
  color: #dc3545;
}

.is-invalid {
  border-color: #dc3545;
}

/* FAQ Section */
.faq-item {
  overflow: hidden;
}

.faq-header {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-header:hover {
  background: var(--secondary-bg);
}

.faq-header.active {
  background: var(--secondary-bg);
}

.faq-question {
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.faq-icon {
  color: var(--accent-cyan);
  transition: transform 0.3s ease;
}

.faq-header.active .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid var(--border-color);
}

/* Alert Styles */
.alert {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.alert-success {
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border: 1px solid rgba(40, 167, 69, 0.3);
}

.alert-danger {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid rgba(220, 53, 69, 0.3);
}

/* Responsive Design */
@media (max-width: 992px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-form-container {
    padding: 2rem;
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
  
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .form-title {
    font-size: 1.5rem;
  }
  
  .contact-method {
    padding: 1rem;
  }
  
  .method-icon {
    width: 40px;
    height: 40px;
  }
  
  .social-button {
    width: 45px;
    height: 45px;
  }
}

/* Animations */
.contact-method,
.faq-item {
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
