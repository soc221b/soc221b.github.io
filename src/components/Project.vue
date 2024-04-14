<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'

type Project = {
  name: string
  href: string
  description: string
  status: string
  badges?: string[]
}

const projects: Project[] = [
  {
    name: 'Inspect Element',
    href: 'https://chrome.google.com/webstore/detail/flgcpmeleoikcibkiaiindbcjeldcogp',
    description: 'Chrome extension for inspecting element for content, and margin.',
    status: 'stable',
    badges: [
      'https://img.shields.io/chrome-web-store/users/flgcpmeleoikcibkiaiindbcjeldcogp?labelColor=13171F&color=27292F'
    ]
  },
  {
    name: 'gRPC devtools',
    href: 'https://chrome.google.com/webstore/detail/fohdnlaeecihjiendkfhifhlgldpeopm',
    description: 'Browser DevTools extension for debugging gRPC network requests.',
    badges: [
      'https://img.shields.io/chrome-web-store/users/fohdnlaeecihjiendkfhifhlgldpeopm?labelColor=13171F&color=27292F'
    ],
    status: 'stable'
  },
  {
    name: 'Find',
    href: 'https://chromewebstore.google.com/detail/akaeoepndhnhffnginkbdcoigbpnnljh',
    description: 'An extension for Regex Find. Search for regular expressions within webpages.',
    status: 'beta',
    badges: [
      'https://img.shields.io/chrome-web-store/users/akaeoepndhnhffnginkbdcoigbpnnljh?labelColor=13171F&color=27292F'
    ]
  },
  {
    name: '@import-meta-env',
    href: 'https://www.npmjs.com/package/@import-meta-env/cli',
    description: 'Startup/Runtime environment variables solution for JavaScript.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/@import-meta-env/cli?labelColor=13171F&color=27292F']
  },
  {
    name: '@runtime-env',
    href: 'https://www.npmjs.com/package/@runtime-env/cli',
    description: 'General purpose runtime env var solution for JavaScript apps.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/@runtime-env/cli?labelColor=13171F&color=27292F']
  },
  {
    name: 'shorten-commit-sha',
    href: 'https://github.com/marketplace/actions/shorten-commit-sha',
    description: 'A Github Action to Export env and output sha with a shortened commit SHA.',
    status: 'stable'
  },
  {
    name: 'zod-schema-faker',
    href: 'https://www.npmjs.com/package/zod-schema-faker',
    description: 'Fake data generator for zod.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/zod-schema-faker?labelColor=13171F&color=27292F']
  },
  {
    name: 'yup-schema-faker',
    href: 'https://www.npmjs.com/package/yup-schema-faker',
    description: 'Fake data generator for yup.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/yup-schema-faker?labelColor=13171F&color=27292F']
  },
  {
    name: 'object-visualizer',
    href: 'https://www.npmjs.com/package/object-visualizer',
    description: 'Vue JSON inspector with Chrome-like theme.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/object-visualizer?labelColor=13171F&color=27292F']
  },
  {
    name: 'vue-next-select',
    href: 'https://www.npmjs.com/package/vue-next-select',
    description: 'The selecting solution for Vue 3.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/vue-next-select?labelColor=13171F&color=27292F']
  },
  {
    name: 'pinia-plugin-persistedstate-2',
    href: 'https://www.npmjs.com/package/pinia-plugin-persistedstate-2',
    description: 'Persist and rehydrate your Pinia state between page reloads.',
    status: 'stable',
    badges: [
      'https://img.shields.io/npm/dw/pinia-plugin-persistedstate-2?labelColor=13171F&color=27292F'
    ]
  },
  {
    name: 'assistive_touch',
    href: 'https://pub.dev/packages/assistive_touch',
    description: 'A widget just like iPhone Assistive Touch.',
    status: 'stable'
  },
  {
    name: 'element-ui-sticky-table',
    href: 'https://www.npmjs.com/package/element-ui-sticky-table',
    description: 'Sticky for element-ui table.',
    status: 'stable',
    badges: ['https://img.shields.io/npm/dw/element-ui-sticky-table?labelColor=13171F&color=27292F']
  },
  {
    name: 'namanager',
    href: 'https://pypi.org/project/namanager/',
    description:
      "A file or/and directory name manager which could determinenames are/aren't expectable, and you could also automatically rename it.",
    status: 'stable',
    badges: ['https://img.shields.io/pypi/dw/namanager?labelColor=13171F&color=27292F']
  }
].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
</script>

<template>
  <h2>Projects</h2>

  <p>
    <i>Projects that I built and maintaining.</i>
  </p>

  <template v-for="project of projects" :key="project.label">
    <ProjectCard v-bind="project" />
  </template>
</template>
