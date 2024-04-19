<script setup lang="ts">
import Project from '@/components/Project.vue'
import { projects } from '@/constants'
</script>

<template>
  <h2>Projects</h2>

  <p>
    <i>Projects that I built and maintaining.</i>
  </p>

  <template v-for="project of projects" :key="project.label">
    <Project :project="project" />
  </template>
</template>
