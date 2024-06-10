<script setup lang="ts">
import Project from '@/components/Project.vue'
import { projects } from '@/constants'
</script>

<template>
  <h2>Projects</h2>

  <template v-for="project of projects" :key="project.label">
    <Project :project="project" />
  </template>
</template>
