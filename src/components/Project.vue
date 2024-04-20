<script setup lang="ts">
import type { Project } from '@/constants'

defineProps<{
  project: Project
  open: boolean
}>()
</script>

<template>
  <article>
    <header>
      <a :href="project.href" target="_blank" class="contrast">{{ project.name }}</a>
      &nbsp;
      <img
        :src="`https://img.shields.io/badge/${project.status}-status?label=status&labelColor=13171F&color=27292F`"
        loading="lazy"
      />

      &nbsp;
      <template v-for="badge of project.badges" :key="badge">
        <img :src="badge" loading="lazy" />
        &nbsp;
      </template>
    </header>
    <component :is="project.preview ? 'details' : 'div'" :open="open" style="display: flex">
      <component :is="project.preview ? 'summary' : 'div'" style="padding: 8px 0">
        {{ project.description }}
      </component>
      <template v-if="project.preview">
        <img
          :src="`/${project.preview}`"
          loading="lazy"
          style="
            max-height: 66vh;
            max-width: 80%;
            user-select: none;
            margin: 0 auto;
            object-fit: contain;
          "
        />
      </template>
    </component>
  </article>
</template>
