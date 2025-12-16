<template>
  <li
    class="relative pb-10 before:absolute before:left-[-28px] before:top-[10px] before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-primary-900"
  >
    <article class="bg-white/90 rounded-xl shadow-md px-3 py-4 sm:px-5 sm:py-5 transition hover:shadow-xl max-w-full">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
        <h1 class="open-sans text-lg sm:text-xl font-bold text-primary-900">
          {{ props.position }}
        </h1>
        <div class="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
          <span class="font-mono text-xs sm:text-sm font-semibold text-gray-700">
            {{ getDate(props.startDate) }} - {{ getDate(props.endDate) }}
          </span>
          <!-- Only show duration if not 0 months -->
          <span
            v-if="getTimeBetween(props.startDate, props.endDate) !== '0 mois' && getTimeBetween(props.startDate, props.endDate) !== '0 months'"
            class="font-mono text-xs sm:text-sm text-gray-500"
          >
            ({{ getTimeBetween(props.startDate, props.endDate) }})
          </span>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
        <span
          v-if="props.url && props.url !== '#'"
          class="inline-flex items-center gap-x-1 text-base font-semibold sm:text-lg text-primary-700 hover:underline"
        >
          <a
            :href="props.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1"
          >
            {{ props.company }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block"
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
        </span>
        <span
          v-else
          class="inline-flex items-center gap-x-1 text-base font-semibold sm:text-lg text-primary-800"
        >
          {{ props.company }}
        </span>
      </div>
      <div class="open-sans pt-1 text-sm sm:text-base text-gray-800">
        <p class="leading-relaxed" v-html="formattedDescription"></p>
        <ul
          v-if="props.highlights[0] != ''"
          class="list-disc list-inside mt-2 text-sm sm:text-base space-y-1"
        >
          <li
            v-for="highlight in props.highlights"
            :key="highlight.toString()"
            class="pl-1 before:left-[-35px] leading-relaxed"
            style="text-indent: -1em; padding-left: 1.5em;"
            v-html="formatHighlight(highlight)"
          >
          </li>
        </ul>
      </div>
    </article>
  </li>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocalizedDate } from '@/composables/LocalizedDate'
const { getDate, getTimeBetween } = useLocalizedDate()

const props = defineProps({
  position: {
    type: String,
    default: 'Job position'
  },
  url: {
    type: String,
    default: '#'
  },
  startDate: {
    type: String,
    default: 'Start Date'
  },
  endDate: {
    type: String,
    default: ''
  },
  company: {
    type: String,
    default: 'Company Name'
  },
  description: {
    type: String,
    default: 'Description of the job'
  },
  highlights: {
    type: Array as () => string[],
    default: () => []
  }
})

const formatText = (text: string) => {
  // Important keywords to highlight - simplified approach
  const keywords = [
    'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'WebSockets', 'Microservices',
    'Vue 3', 'Supabase', 'Laravel', 'MySQL', 'Bootstrap', 'PHP',
    'JWT', 'OAuth2', 'RBAC', 'OWASP', 'SonarQube', 'PEP8',
    'Tesseract OCR', 'OpenAI', 'Hugging Face', 'scikit-learn', 'XGBoost',
    'TypeScript', 'Tailwind CSS', 'Vue.js', 'REST APIs', 'CI/CD',
    'JSON Schema', 'SQLAlchemy', 'GitLab CI', 'Grafana', 'Jira', 'Confluence',
    'SaaS', 'production-ready', 'real-time', 'asynchronous',
    'event-driven', 'scalable', 'LISTEN/NOTIFY', 'CRUD',
    'rate limiting', 'CORS', 'SMOTE', 'lazy loading', 'async APIs',
    'DB pooling', 'i18n', 'Excel', 'ComptaHub', 'Auth', 'Storage',
    'Google', 'LinkedIn', 'Agile', 'Scrum', 'DevOps'
  ]
  
  // Sort by length (longest first) to avoid partial matches
  keywords.sort((a: string, b: string) => b.length - a.length)
  
  // Replace keywords with bold dark text (no colors, just emphasis)
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
    text = text.replace(regex, `<strong class="font-bold text-gray-900">$&</strong>`)
  })
  
  return text
}

const formattedDescription = computed(() => formatText(props.description))
const formatHighlight = (highlight: string) => formatText(highlight as string)
</script>