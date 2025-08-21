<template>
  <div class="image-carousel" ref="carouselContainer">
    <div class="carousel-wrapper">
      <div 
        class="carousel-track"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div 
          v-for="(image, index) in images" 
          :key="index"
          class="carousel-slide"
        >
          <div class="image-container">
            <img
              :src="image"
              :alt="`${altPrefix} - Imagen ${index + 1}`"
              class="carousel-image"
              @error="handleImageError"
              loading="lazy"
              :style="{ willChange: 'transform' }"
            >
            <!-- Fallback content when image fails to load -->
            <div class="image-fallback" v-if="!image || image === '/placeholder-project.jpg'">
              <i class="bi bi-image"></i>
              <span>{{ altPrefix }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <button 
        v-if="images.length > 1"
        class="carousel-btn carousel-btn-prev"
        @click="prevSlide"
        :disabled="currentIndex === 0"
      >
        <i class="bi bi-chevron-left"></i>
      </button>
      
      <button 
        v-if="images.length > 1"
        class="carousel-btn carousel-btn-next"
        @click="nextSlide"
        :disabled="currentIndex === images.length - 1"
      >
        <i class="bi bi-chevron-right"></i>
      </button>

      <!-- Indicators -->
      <div v-if="images.length > 1" class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  altPrefix: {
    type: String,
    default: 'Proyecto'
  },
  autoPlay: {
    type: Boolean,
    default: false
  },
  autoPlayInterval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
const carouselContainer = ref(null)
let autoPlayTimer = null

// Methods
const nextSlide = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else if (props.autoPlay) {
    currentIndex.value = 0
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else if (props.autoPlay) {
    currentIndex.value = props.images.length - 1
  }
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const handleImageError = (event) => {
  event.target.src = '/placeholder-project.jpg'
}

const startAutoPlay = () => {
  if (props.autoPlay && props.images.length > 1) {
    autoPlayTimer = setInterval(() => {
      nextSlide()
    }, props.autoPlayInterval)
  }
}

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

// Touch/swipe support for mobile
let startX = 0
let endX = 0

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  endX = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const diffX = startX - endX
  const threshold = 50

  if (Math.abs(diffX) > threshold) {
    if (diffX > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide()
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  }
}

// Lifecycle
onMounted(() => {
  if (carouselContainer.value) {
    carouselContainer.value.addEventListener('touchstart', handleTouchStart, { passive: true })
    carouselContainer.value.addEventListener('touchmove', handleTouchMove, { passive: true })
    carouselContainer.value.addEventListener('touchend', handleTouchEnd)
    carouselContainer.value.addEventListener('keydown', handleKeyDown)
    carouselContainer.value.setAttribute('tabindex', '0')
  }
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
  if (carouselContainer.value) {
    carouselContainer.value.removeEventListener('touchstart', handleTouchStart)
    carouselContainer.value.removeEventListener('touchmove', handleTouchMove)
    carouselContainer.value.removeEventListener('touchend', handleTouchEnd)
    carouselContainer.value.removeEventListener('keydown', handleKeyDown)
  }
})

// Watch for autoPlay changes
watch(() => props.autoPlay, (newValue) => {
  if (newValue) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
})
</script>

<style scoped>
.image-carousel {
  width: 100%;
  height: 100%; /* Ocupa toda la altura del contenedor padre */
  position: relative;
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%; /* Ocupa toda la altura del contenedor padre */
  min-height: 200px; /* Altura mínima para asegurar visibilidad */
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: var(--secondary-bg);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: 1; /* Cambio: siempre visible */
  transition: opacity 0.3s ease;
}

.carousel-image[src]:not([src=""]) {
  opacity: 1;
}

.image-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 0.5rem;
}

.image-fallback i {
  font-size: 3rem;
  opacity: 0.8;
}

/* Navigation buttons */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0;
  backdrop-filter: blur(4px);
}

.carousel-wrapper:hover .carousel-btn {
  opacity: 1;
}

.carousel-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-btn-prev {
  left: 15px;
}

.carousel-btn-next {
  right: 15px;
}

.carousel-btn i {
  font-size: 1.2rem;
}

/* Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: var(--accent-cyan);
  transform: scale(1.2);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .carousel-wrapper {
    height: 100%; /* Mantiene altura relativa */
  }
}

@media (max-width: 768px) {
  .carousel-wrapper {
    height: 100%; /* Mantiene altura relativa */
  }
  
  .carousel-btn {
    width: 35px;
    height: 35px;
    opacity: 1; /* Always visible on mobile */
  }
  
  .carousel-btn-prev {
    left: 10px;
  }
  
  .carousel-btn-next {
    right: 10px;
  }
  
  .carousel-btn i {
    font-size: 1rem;
  }
  
  .indicator {
    width: 10px;
    height: 10px;
  }
}

@media (max-width: 480px) {
  .carousel-wrapper {
    height: 100%; /* Mantiene altura relativa */
  }
  
  .carousel-indicators {
    bottom: 10px;
  }
}

/* Focus styles for accessibility */
.image-carousel:focus {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}

.carousel-btn:focus,
.indicator:focus {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 2px;
}
</style>
