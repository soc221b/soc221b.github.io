<script setup lang="ts">
import { projects } from '@/constants'
</script>

<template>
  <h2>Projects</h2>

  <div style="overflow-x: auto">
    <table style="min-width: 720px">
      <thead>
        <tr>
          <th>Project</th>
          <th>Downloads</th>
          <th>Version</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project of projects" :key="project.name">
          <td>
            <a :href="project.href" target="_blank">
              {{ project.name }}
            </a>
          </td>
          <td>
            <img :src="project.downloadBadge" height="20" style="min-height: 20px" />
          </td>
          <td>
            <img :src="project.homeBadge" height="20" style="min-height: 20px" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <br />
</template>
