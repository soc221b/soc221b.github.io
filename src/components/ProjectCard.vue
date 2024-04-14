<script setup lang="ts">
defineProps<{
  href: string
  name: string
  description: string
  status: string
  badges?: string[]
}>()
</script>

<template>
  <article>
    <header>
      <a :href="href" target="_blank" class="contrast">{{ name }}</a>
    </header>
    <p>{{ description }}</p>
    <footer>
      <img
        :src="`https://img.shields.io/badge/${status}-status?label=status&labelColor=13171F&color=27292F`"
      />

      &nbsp;
      <template v-for="badge of badges" :key="badge">
        <img :src="badge" />
        &nbsp;
      </template>
    </footer>
  </article>
</template>
