<template>
  <header class="z-50 w-full">
    <div class="z-10 bg-white/80 backdrop-blur-md shadow-lg duration-300 border-b border-primary-100 fixed top-0 left-0 w-full">
      <div class="content source-sans mx-auto flex w-full items-center justify-between py-2 px-2 md:px-0">
        <!-- Logo & Name -->
        <router-link
          class="open-sans group my-auto flex items-center gap-2 font-bold text-primary-900 text-xl tracking-tight"
          to="/"
        >
          <img
            :alt="`${$t('hero.name')}'s picture'`"
            src="@/assets/img/profile.webp"
            class="h-10 w-10 rounded-full border-2 border-primary-300 shadow-md transition-all duration-300 group-hover:scale-105"
          />
          <span class="transition-colors duration-300 group-hover:text-primary-700">Alaa Otay</span>
        </router-link>
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center space-x-4 font-semibold">
          <router-link class="nav-link" to="/">{{ $t('hero.home') }}</router-link>
          <router-link class="nav-link" to="/#experience">{{ $t('experience.title') }}</router-link>
          <router-link class="nav-link" to="/#projects">{{ $t('projects.title') }}</router-link>
          <router-link class="nav-link" to="/#about">{{ $t('about.title') }}</router-link>
          <router-link class="nav-link" to="/#contact">{{ $t('contact.title') }}</router-link>
        </nav>
        <!-- Language & Mobile Menu Button -->
        <div class="flex items-center space-x-2">
          <div class="source-sans text-black">
            <LanguageSelector />
          </div>
          <button
            class="md:hidden p-1 rounded transition"
            @click="showMenu = !showMenu"
            title="open navigation menu"
            aria-label="Open navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Nav: appears under navbar, not overlay -->
      <transition name="fade">
        <div v-if="showMenu" class="relative">
          <!-- Overlay to close menu on outside click -->
          <div
            class="fixed inset-0 z-40"
            @click="showMenu = false"
          ></div>
          <nav
            ref="mobileNav"
            class="md:hidden w-full flex flex-col items-center divide-y bg-white/95 text-zinc-700 shadow-lg rounded-b-xl animate-slide-down z-50 relative"
          >
            <router-link @click="showMenu = false" class="nav-link-mobile" to="/">{{ $t('hero.home') }}</router-link>
            <router-link @click="showMenu = false" class="nav-link-mobile" to="/#experience">{{ $t('experience.title') }}</router-link>
            <router-link @click="showMenu = false" class="nav-link-mobile" to="/#projects">{{ $t('projects.title') }}</router-link>
            <router-link @click="showMenu = false" class="nav-link-mobile" to="/#about">{{ $t('about.title') }}</router-link>
            <router-link @click="showMenu = false" class="nav-link-mobile" to="/#contact">{{ $t('contact.title') }}</router-link>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
const showMenu = ref(false)
const mobileNav = ref<HTMLElement | null>(null)

function handleClickOutside(event: MouseEvent) {
  if (showMenu.value && mobileNav.value && !mobileNav.value.contains(event.target as Node)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})
</script>

<style scoped>
.nav-link {
  @apply px-5 py-3 rounded-lg transition-colors duration-200 hover:bg-primary-100 hover:text-primary-800 text-lg;
}
.nav-link-mobile {
  @apply px-6 py-3 text-base font-semibold hover:bg-primary-50 hover:text-primary-800 transition text-center w-full;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
@keyframes slide-down {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.animate-slide-down {
  animation: slide-down 0.3s;
}
</style>