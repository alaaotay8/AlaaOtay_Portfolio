<template>
  <div data-aos="fade-up">
    <HeroSection />
  </div>
  <div data-aos="fade-up" data-aos-delay="80">
    <ExperienceSection />
  </div>
  <div data-aos="fade-up" data-aos-delay="90">
    <ProjectsSection />
  </div>
  <div data-aos="fade-up" data-aos-delay="100">
    <AboutSection />
  </div>
  <div data-aos="fade-up" data-aos-delay="110">
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/home/HeroSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
</script>

<style></style>
