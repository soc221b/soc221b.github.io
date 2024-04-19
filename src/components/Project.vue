<script setup lang="ts">
import type { Project } from '@/constants'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article>
    <header>
      <a :href="project.href" target="_blank" class="contrast">{{ project.name }}</a>
    </header>
    <p>{{ project.description }}</p>
    <footer>
      <img
        :src="`https://img.shields.io/badge/${project.status}-status?label=status&labelColor=13171F&color=27292F`"
      />

      &nbsp;
      <template v-for="badge of project.badges" :key="badge">
        <img :src="badge" />
        &nbsp;
      </template>
    </footer>
  </article>
</template>
