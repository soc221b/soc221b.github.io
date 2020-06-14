<script setup lang="ts">
defineProps<{
  href: string;
  label: string;
  description: string;
}>();
</script>
<template>
  <article>
    <header>
      <a :href="href" target="_blank" class="secondary">{{ label }}</a>
    </header>
    <p>{{ description }}</p>
  </article>
</template>
