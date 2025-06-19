<template>
  <CollapsiblePanel :header="$t('about.languages.title')" class="mt-5" :open="open" :toggleable="false">
    <template #icon>
      <WebIcon class="h-10 w-10 text-primary-900" />
    </template>
    <ul class="space-y-7">
      <li
        v-for="lang in languages"
        :key="lang.name"
        class="mx-auto max-w-[80ch] rounded-xl bg-white/90 shadow-md px-4 py-5 transition hover:shadow-xl"
      >
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <span class="source-sans text-lg sm:text-xl font-bold tracking-wide text-primary-800">
            {{ lang.name }}
          </span>
          <span class="text-gray-700 text-base sm:text-lg font-semibold">
            {{ lang.level }}
          </span>
        </div>
      </li>
    </ul>
  </CollapsiblePanel>
</template>

<script setup lang="ts">
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import { useLocalizedData } from '@/composables/LocalizedData'
import type { LanguageEntry } from '@/types'
import WebIcon from '@/components/icons/WebIcon.vue'
const { data: languages } = useLocalizedData<LanguageEntry[]>('about.languages.list')

// Accept open prop
defineProps<{ open?: boolean; toggleable?: boolean }>()
</script>