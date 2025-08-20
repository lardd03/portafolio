<template>
  <nav class="navbar navbar-expand-lg navbar-custom fixed-top">
    <div class="container">
      <!-- Brand/Logo -->
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <span class="gradient-text">{{ mainStore.appTitle }}</span>
      </router-link>

      <!-- Mobile menu button -->
      <button
        class="navbar-toggler border-0"
        type="button"
        @click="mainStore.toggleMobileMenu()"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-list fs-4 text-primary-custom"></i>
      </button>

      <!-- Navigation menu -->
      <div class="collapse navbar-collapse" :class="{ show: mainStore.ui.showMobileMenu }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="item in mainStore.navigationItems" :key="item.path">
            <router-link
              class="nav-link"
              :to="item.path"
              :class="{ active: $route.path === item.path }"
              @click="mainStore.closeMobileMenu()"
            >
              <i :class="`bi bi-${item.icon} me-1`"></i>
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useMainStore } from '../stores/mainStore'
import { useRoute } from 'vue-router'

const mainStore = useMainStore()
const route = useRoute()
</script>

<style scoped>
.navbar-custom {
  z-index: 1030;
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* Animación para el menú móvil */
.collapse {
  transition: all 0.3s ease;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    background: var(--card-bg);
    border-radius: 8px;
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid var(--border-color);
  }
  
  .navbar-nav {
    gap: 0.5rem;
  }
  
  .nav-link {
    text-align: center;
    padding: 0.75rem 1rem !important;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  
  .nav-link:hover {
    background: var(--secondary-bg);
  }
}

/* Efecto de aparición del navbar al hacer scroll */
.navbar-custom.scrolled {
  box-shadow: var(--shadow-md);
}
</style>
