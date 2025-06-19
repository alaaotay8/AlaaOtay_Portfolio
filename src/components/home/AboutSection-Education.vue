<template>
  <CollapsiblePanel :header="$t('about.education.title')" :open="open" :toggleable="false">
    <template #icon>
      <EducationIcon class="h-10 w-10 text-primary-900" />
    </template>
    <ul class="space-y-7">
      <li
        v-for="edu in education"
        :key="edu.title"
        class="flex flex-col rounded-xl bg-white/90 shadow-md px-4 py-5 transition hover:shadow-xl"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
          <p class="source-sans text-xl font-bold tracking-wide text-primary-900">
            {{ edu.title }}
          </p>
          <time class="source-sans text-sm uppercase text-gray-700">
            {{ getDate(edu.startDate) }} - {{ getDate(edu.endDate) }}
          </time>
        </div>
        <p class="open-sans font-semibold text-primary-700 text-base mb-2">
          {{ edu.institution }}
        </p>
        <div class="flex flex-wrap gap-2 mb-2">
          <span
            class="source-sans inline-block rounded-md bg-base-200 px-3 py-1 text-xs uppercase"
            v-for="course in edu.courses"
            :key="course"
          >{{ course }}</span>
        </div>
        <p class="open-sans text-gray-800 text-sm sm:text-base">
          {{ edu.description }}
        </p>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import EducationIcon from '@/components/icons/EducationIcon.vue'
import type { EducationEntry } from '@/types'
import { useLocalizedDate } from '@/composables/LocalizedDate'
import { useLocalizedData } from '@/composables/LocalizedData'
const { getDate } = useLocalizedDate()
const { data: education } = useLocalizedData<EducationEntry[]>('about.education.list')

// Accept open prop
defineProps<{ open?: boolean; toggleable?: boolean }>()
</script>