<template>
  <footer
    class="divide-y bg-gradient-to-t from-base-800 from-95% to-transparent px-4 text-gray-100"
  >
    <div
      class="content mx-auto flex flex-col justify-between space-y-8 py-5 pt-16 lg:flex-row lg:space-y-0"
    >
      <div class="lg:w-1/3">
        <div class="flex items-center space-x-2">
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                stroke-dasharray="48"
                stroke-dashoffset="48"
                d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <path
                stroke-dasharray="14"
                stroke-dashoffset="14"
                d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="14;28"
                />
              </path>
            </g>
            <mask id="lineMdCoffeeTwotoneLoop0">
              <path
                fill="none"
                stroke="#fff"
                stroke-width="2"
                d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
              >
                <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" />
              </path>
            </mask>
            <rect
              width="24"
              height="0"
              y="7"
              fill="currentColor"
              mask="url(#lineMdCoffeeTwotoneLoop0)"
            >
              <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" />
              <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" />
            </rect>
          </svg>
          <h1 class="self-center text-2xl font-semibold">Alaa Otay</h1>
        </div>
        <span class="text-sm">
          Thank you for visiting my portfolio.<br />
          Connect with me on social media or check out my work below!
        </span>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-3 lg:w-2/3">
        <div class="space-y-3">
          <h2 class="uppercase">Navigation</h2>
          <ul class="space-y-1">
            <li>
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/#experience">Experience</RouterLink>
            </li>
            <li>
              <RouterLink to="/#projects">Projects</RouterLink>
            </li>
            <li>
              <RouterLink to="/#about">About</RouterLink>
            </li>
          </ul>
        </div>
        <div class="space-y-3">
          <h2 class="uppercase">Links</h2>
          <ul class="space-y-1">
            <li>
              <a href="mailto:alaaotay8@gmail.com" target="_blank">Email</a>
            </li>
            <li>
              <a href="https://github.com/alaaotay8" target="_blank">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/alaa-otay8" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="space-y-3">
          <h2 class="uppercase">Social Media</h2>
          <div class="flex justify-start space-x-3">
            <a rel="noopener noreferrer" href="https://linkedin.com/in/alaa-otay8" title="LinkedIn" class="flex items-center p-1">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/>
              </svg>
            </a>
            <a rel="noopener noreferrer" href="https://github.com/alaaotay8" title="GitHub" class="flex items-center p-1">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
              </svg>
            </a>
            <a rel="noopener noreferrer" href="https://wa.me/54056747" title="WhatsApp" class="flex items-center p-1">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.74 6.41l-1.84 6.72 6.9-1.81c1.86 1.02 3.97 1.56 6.01 1.56h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.36c-1.81 0-3.59-.48-5.15-1.38l-.37-.22-4.1 1.08 1.09-4.01-.24-.41c-1.08-1.77-1.65-3.81-1.65-5.9 0-6.02 4.9-10.92 10.92-10.92s10.92 4.9 10.92 10.92-4.9 10.92-10.92 10.92zm6.01-8.17c-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.14-.68.14-.14.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.57.08-.87.38-.3.3-1.14 1.12-1.14 2.73 0 1.61 1.17 3.17 1.33 3.39.16.22 2.3 3.51 5.58 4.79.78.34 1.39.54 1.87.69.79.25 1.51.21 2.08.13.64-.1 1.96-.8 2.24-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-3 text-center text-sm">© 2025 Alaa Otay.</div>
  </footer>
</template>

<script setup lang="ts">
</script>