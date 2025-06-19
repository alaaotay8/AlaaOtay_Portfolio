<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll-to-top button logic
const showScrollTop = ref(false)
const handleScroll = () => { showScrollTop.value = window.scrollY > 200 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-100">
    <AppNavbar />
    <!-- Page transition for router views -->
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <AppFooter />

    <!-- Scroll-to-top button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-5 right-5 z-50 flex items-center justify-center rounded-full bg-blue-800 text-white p-2 shadow-lg transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
      aria-label="Scroll to top"
      style="width: 50px; height: 50px;"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>