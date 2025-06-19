<template>
  <CollapsiblePanel :header="$t('about.skills.title')" class="mt-5" :open="open" :toggleable="false">
    <template #icon>
      <svg class="h-10 w-10 text-primary-900" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
        <path stroke="currentColor" stroke-width="2" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/>
      </svg>
    </template>
    <ul class="space-y-7">
      <li
        v-for="category in skills"
        :key="category.category"
        class="mx-auto max-w-[80ch] rounded-xl bg-white/90 shadow-md px-4 py-5 transition hover:shadow-xl"
      >
        <p class="source-sans text-lg sm:text-xl font-bold tracking-wide text-primary-900 mb-2">
          {{ category.category }}
        </p>
        <ul class="list-disc list-inside text-gray-800 text-sm sm:text-base space-y-1">
          <li v-for="item in category.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import { useLocalizedData } from '@/composables/LocalizedData'
import type { SkillCategory } from '@/types'
const { data: skills } = useLocalizedData<SkillCategory[]>('about.skills.list')

// Accept open prop
defineProps<{ open?: boolean; toggleable?: boolean }>()
</script>