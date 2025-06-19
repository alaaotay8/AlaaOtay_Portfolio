  <template>
    <section class="hero relative flex w-full items-center justify-center">
      <div class="hero__bg absolute inset-0"></div>

      <div class="content relative space-y-8 text-center">
        <h1
          class="source-sans lg:text-6xl text-balance text-4xl font-black uppercase tracking-wide text-primary-950 md:text-6xl flex flex-wrap justify-center gap-2"
          aria-label="{{ $t('hero.title') }}"
        >
          <span
            v-for="(word, i) in heroWords"
            :key="i"
            class="inline-block opacity-0 animate-hero-word"
            :style="{ animationDelay: `${i * 0.18 + 0.1}s` }"
          >
            {{ word }}
          </span>
        </h1>
        <p
          class="open-sans mx-auto max-w-[60ch] text-pretty text-base sm:text-lg md:text-xl lg:max-w-[75ch]"
        >
          {{ $t('hero.subtitle') }}
        </p>
        <div class="flex justify-center gap-x-3">
          <RouterLink to="#contact">
            <GlassButton title="Contact">
              <span class="px-2"> {{ $t('hero.contact_button') }} </span>
            </GlassButton>
          </RouterLink>
        </div>
        <div class="flex justify-center gap-x-3">
          <a
            v-if="$t('hero.profiles.github')"
            :href="$t('hero.profiles.github')"
            target="_blank"
            rel="noopener"
          >
            <GlassButton size="small" bg="bg-neutral-700" title="GitHub profile">
              <template #icon>
                <GithubIcon class="h-6 w-6" />
              </template>
            </GlassButton>
          </a>
          <a
            v-if="$t('hero.profiles.linkedin')"
            :href="$t('hero.profiles.linkedin')"
            target="_blank"
            rel="noopener"
          >
            <GlassButton size="small" bg="bg-sky-700" title="LinkedIn profile">
              <template #icon>
                <LinkedinIcon class="h-6 w-6" />
              </template>
            </GlassButton>
          </a>
          <a
            v-if="$t('hero.profiles.whatsapp')"
            :href="$t('hero.profiles.whatsapp')"
            target="_blank"
            rel="noopener"
          >
            <GlassButton size="small" bg="bg-green-600" title="whatsapp profile">
              <template #icon>
                <WhatsappIcon class="h-6 w-6" />
              </template>
            </GlassButton>
          </a>
        </div>
      </div>
      <!-- Icon Scroll Credits: http://www.hnslack.xyz/ -->
      <div class="icon-scroll hidden border-2 border-base-700 before:bg-base-700 md:block"></div>
      <div class="custom-shape-divider-bottom-1713476723">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 00 1200 130"
          preserveAspectRatio="none"
          class="section-background-color !bg-transparent"
        >
          <path
            d="M598.97 114.72L0 0 0 130 1200 130 1200 0 598.97 114.72z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  </template>

  <script lang="ts" setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import GlassButton from '../GlassButton.vue'
  import GithubIcon from '../icons/GithubIcon.vue'
  import LinkedinIcon from '../icons/LinkedinIcon.vue'
  import WhatsappIcon from '../icons/WhatsappIcon.vue'

  const { t } = useI18n()

  const heroTitle = computed(() => String(t('hero.title')))
  const heroWords = computed(() => heroTitle.value.split(' '))
  </script>

  <style>
  .hero {
    height: 100vh;
    min-height: 80ch;
    max-height: 120ch;
    position: relative;
  }
  .hero__bg {
    opacity: 0.3;
    background-image: url('@/assets/common-bg.svg');
    background-position: center;
  }
  .custom-shape-divider-bottom-1713476723 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    filter: drop-shadow(0 -5px 3px rgba(0, 0, 0, 0.2));
  }

  .custom-shape-divider-bottom-1713476723 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 100px;
  }

  .custom-shape-divider-bottom-1713476723 .shape-fill {
    fill: #ececec;
  }

  .icon-scroll,
  .icon-scroll:before {
    position: absolute;
    left: 50%;
  }
  .icon-scroll {
    width: 26px;
    height: 45px;
    margin-left: -14px;
    bottom: 30px;
    margin-top: -35px;
    opacity: 50%;
    border-radius: 25px;
  }
  .icon-scroll:before {
    content: '';
    width: 8px;
    height: 8px;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(26px);
    }
  }

  /* Animation for hero words */
  @keyframes hero-word {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    60% {
      opacity: 1;
      transform: translateY(-4px) scale(1.04);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .animate-hero-word {
    animation: hero-word 0.7s cubic-bezier(.6,.2,.2,1) forwards;
  }
  </style>