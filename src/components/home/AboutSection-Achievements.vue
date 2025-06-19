<template>
  <CollapsiblePanel :header="$t('about.achievements.title')" class="mt-5" :open="open" :toggleable="false">
    <template #icon>
      <TrophyIcon class="h-10 w-10 text-primary-900" />
    </template>
    <ul class="space-y-7">
      <li
        v-for="achievement in achievements"
        :key="achievement.title"
        class="mx-auto max-w-[90ch] rounded-xl bg-white/90 shadow-md px-4 py-5 transition hover:shadow-xl"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
          <p class="source-sans text-lg sm:text-xl font-bold tracking-wide text-primary-900">
            {{ achievement.title }}
          </p>
          <time class="source-sans text-xs sm:text-sm uppercase text-gray-700">
            {{ getDate(achievement.date) }}
          </time>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
          <a
            v-if="achievement.url"
            class="inline-flex items-center text-sky-900 hover:text-sky-700 break-all"
            :href="achievement.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ achievement.url }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block ml-1"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z" />
                <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
              </g>
            </svg>
          </a>
          <span v-if="achievement.awarder" class="font-semibold text-primary-700">
            {{ achievement.awarder }}
          </span>
        </div>
        <p class="open-sans text-gray-800 text-sm sm:text-base mt-1">
          {{ achievement.summary }}
        </p>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import TrophyIcon from '@/components/icons/TrophyIcon.vue'
import type { AchievementEntry } from '@/types'
import { useLocalizedDate } from '@/composables/LocalizedDate'
import { useLocalizedData } from '@/composables/LocalizedData'
const { data: achievements } = useLocalizedData<AchievementEntry[]>('about.achievements.list')
const { getDate } = useLocalizedDate()

// Accept open prop
defineProps<{ open?: boolean; toggleable?: boolean }>()
</script>