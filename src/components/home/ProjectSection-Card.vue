<template>
  <article class="relative w-full rounded-xl border bg-white py-4 px-2 shadow-md md:py-6 md:px-6">
    <div class="relative flex flex-col gap-2 font-medium md:flex-row">
      <!-- Text and buttons -->
      <div class="order-2 flex w-full flex-col justify-center gap-y-2 px-0 py-2 md:w-1/2 md:px-2">
        <h2
          class="open-sans text-ltext1 text-center text-lg font-extrabold text-slate-800 sm:text-start sm:text-xl md:text-2xl tracking-tight"
        >
          {{ name }}
        </h2>
        <div
          class="source-sans my-2 flex flex-wrap justify-center gap-2 font-medium sm:justify-start"
        >
          <span
            v-for="tech in techstack"
            :key="tech.toLowerCase()"
            class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-base-200 px-2 py-1 text-xs font-normal sm:text-sm"
          >
            {{ tech }}
          </span>
        </div>
        <div class="text-ltext2 open-sans text-justify text-sm sm:text-base sm:text-start leading-relaxed" v-html="formattedDescription"></div>
        <div class="flex flex-wrap justify-center gap-3 pt-3 sm:justify-start">
          <!-- GitHub Button -->
          <a
            v-if="src"
            :title="`${name} github repository`"
            :href="src"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GlassButton
              :title="`${name} github repository`"
              type="button"
              bg="bg-slate-600"
              padding="16"
            >
              <template #icon>
                <GithubIcon class="h-6 w-6" />
              </template>
              GitHub
            </GlassButton>
          </a>
          <!-- Website Button -->
          <a v-if="url" :href="url" target="_blank" rel="noreferrer noopener">
            <GlassButton :disabled="!url" padding="16" :title="`${name} website`">
              <template #icon>
                <WebIcon class="h-6 w-6" />
              </template>
              {{ $t('projects.website') }}
            </GlassButton>
          </a>
          <!-- LinkedIn Post Button -->
          <a v-if="linkedin" :href="linkedin" target="_blank" rel="noopener noreferrer">
            <GlassButton padding="16" bg="bg-sky-700" title="LinkedIn Post">
              <template #icon>
                <LinkedinIcon class="h-6 w-6" />
              </template>
              Post
            </GlassButton>
          </a>
        </div>
      </div>
      <!-- Image -->
      <div class="group mx-auto w-full md:w-1/2 flex items-center justify-center px-0 md:px-0">
        <div class="container w-full">
          <div class="tilt-box-wrap w-full h-full">
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <div class="tilt-box w-full h-full">
              <img
                :src="getImageUrl()"
                :alt="name + ' main image'"
                class="w-full h-auto object-contain object-center rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import GlassButton from '@/components/GlassButton.vue'
import WebIcon from '@/components/icons/WebIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Project name'
  },
  description: {
    type: String,
    default: 'Project description'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  url: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  read: {
    type: Boolean,
    required: false
  },
  techstack: {
    type: Array<String>,
    required: false
  },
  linkedin: {
    type: String,
    default: ''
  }
})

const getImageUrl = () => {
  return new URL(`../../assets/img/projects/${props.image}`, import.meta.url).href
}

const formattedDescription = computed(() => {
  let text = props.description
  
  // Important keywords to highlight - simplified approach
  const keywords = [
    'FastAPI', 'Python', 'PostgreSQL', 'Docker', 'WebSockets', 'Microservices',
    'Vue 3', 'Supabase', 'Laravel', 'MySQL', 'Bootstrap', 'PHP',
    'JWT', 'OAuth2', 'RBAC', 'OWASP', 'SonarQube', 'PEP8',
    'Tesseract OCR', 'OpenAI', 'Hugging Face', 'scikit-learn', 'XGBoost',
    'TypeScript', 'Tailwind CSS', 'Vue.js', 'REST APIs', 'CI/CD',
    'JSON Schema', 'SQLAlchemy', 'GitLab CI', 'Grafana',
    'SaaS', 'production-ready', 'real-time', 'asynchronous',
    'event-driven', 'scalable', 'LISTEN/NOTIFY', 'CRUD',
    'rate limiting', 'CORS', 'SMOTE', 'lazy loading', 'async APIs',
    'DB pooling', 'i18n', 'Excel', 'Jira', 'Confluence'
  ]
  
  // Sort by length (longest first) to avoid partial matches
  keywords.sort((a: string, b: string) => b.length - a.length)
  
  // Replace keywords with bold dark text (no colors, just emphasis)
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
    text = text.replace(regex, `<strong class="font-bold text-gray-900">$&</strong>`)
  })
  
  return text
})
</script>

<style scoped>
.tilt-box-wrap {
  position: relative;
  transition: all 0.6s ease-out;
  perspective: 1000px;
}
.tilt-box-wrap:hover {
  transition: all 0.3s linear;
  perspective: 1000px;
}
.tilt-box {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
}
.t_over {
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
}
.t_over:nth-child(1) {
  left: 0;
  top: 0;
}
.t_over:nth-child(2) {
  left: 33.333%;
  top: 0;
}
.t_over:nth-child(3) {
  left: 66.666%;
  top: 0;
}
.t_over:nth-child(4) {
  left: 0;
  top: 33.333%;
}
.t_over:nth-child(5) {
  left: 33.333%;
  top: 33.333%;
}
.t_over:nth-child(6) {
  left: 66.666%;
  top: 33.333%;
}
.t_over:nth-child(7) {
  left: 0;
  top: 66.666%;
}
.t_over:nth-child(8) {
  left: 33.333%;
  top: 66.666%;
}
.t_over:nth-child(9) {
  left: 66.666%;
  top: 66.666%;
}

.t_over:nth-child(1):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(10deg);
}
.t_over:nth-child(2):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(0deg);
}
.t_over:nth-child(3):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(-10deg);
}
.t_over:nth-child(4):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(10deg);
}
.t_over:nth-child(5):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(0deg);
}
.t_over:nth-child(6):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(-10deg);
}
.t_over:nth-child(7):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(10deg);
}
.t_over:nth-child(8):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(0deg);
}
.t_over:nth-child(9):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(-10deg);
}
</style>
