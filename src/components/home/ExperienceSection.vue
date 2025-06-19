
<template>
  <section id="experience" name="experience" class="section-background-color pt-12 pb-20">
    <div class="text-black">
      <h1 class="section__title mb-12 text-center text-4xl font-extrabold tracking-tight text-primary-900">
        {{ $t('experience.title') }}
      </h1>
      <div class="content relative grid gap-10 sm:grid-cols-12">
        <!-- CV Panel -->
        <div class="col-span-12 sm:col-span-3 flex flex-col items-center sm:items-start">
          <div
            class="mx-auto sm:mx-0 sticky top-24 flex flex-col items-center w-70 rounded-2xl bg-gradient-to-br from-blue-100 via-white to-purple-100 p-7 shadow-xl ring-1 ring-primary-100"
          >
            <img
              :src="cvPreview"
              alt="CV preview"
              class="mb-5 rounded-xl shadow-lg w-56 h-auto object-cover border-2 border-primary-200"
            />
            <span class="mb-3 text-center text-base font-medium text-primary-900"
                  style="font-size: 1.125rem; line-height: 1.5rem;"
            >
      
            </span>
            <a :href="cvFile" title="Download resume" target="_blank" class="w-full w-50 ">
              <GlassButton title="Download resume" class="w-full">
                <span class="px-2 font-semibold tracking-wide"> {{ $t('experience.download_button') || 'Download CV' }} </span>
              </GlassButton>
            </a>
          </div>
        </div>
        <!-- Experience Timeline -->
        <div class="relative col-span-12 space-y-10 ps-0 sm:col-span-9 sm:ps-4">
          <ul
            class="relative ps-2 sm:ps-4 before:absolute before:-left-2 sm:before:-left-3 before:bottom-0 before:top-[5px] before:w-1 before:bg-gradient-to-b before:from-primary-200 before:to-primary-400"
          >
            <ExperienceSectionEntry
              v-for="job in jobList"
              :key="job.position + job.startDate"
              v-bind="job"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import ExperienceSectionEntry from './ExperienceSection-Entry.vue'
import type { JobEntry } from '@/types'
import { useLocalizedData } from '@/composables/LocalizedData'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { data: jobList } = useLocalizedData<JobEntry[]>('experience.list')
const { locale } = useI18n()

const cvFile = computed(() =>
  locale.value === 'fr'
    ? '/cv_fr.pdf'
    : '/cv_en.pdf'
)
const cvPreview = computed(() =>
  locale.value === 'fr'
    ? '/cv_fr_preview.jpg'
    : '/cv_en_preview.jpg'
)
</script>

<style scoped>
/* Timeline dot and line enhancements for mobile and desktop */
@media (max-width: 640px) {
  .content {
    gap: 2rem !important;
  }
  
  .section__title {
    font-size: 1.75rem; /* Reduce from text-4xl */
  }
}
</style>