<script setup lang="ts">
import Card from "./_card.vue";
</script>

<template>
  <h2>Projects</h2>

  <Card
    label="Inspect Element"
    href="https://chrome.google.com/webstore/detail/inspect-element/flgcpmeleoikcibkiaiindbcjeldcogp"
    description="Chrome extension for inspecting element for content, and margin."
  ></Card>
  <Card
    label="gRPC devtools"
    href="https://chrome.google.com/webstore/detail/grpc-devtools-for-grpc-we/fohdnlaeecihjiendkfhifhlgldpeopm"
    description="Browser DevTools extension for debugging gRPC network requests."
  ></Card>
  <Card
    label="Import meta env"
    href="https://iendeavor.github.io/import-meta-env/"
    description="Startup/Runtime environment variables solution for JavaScript"
  ></Card>
  <Card
    label="Shorten commit sha"
    href="https://github.com/iendeavor/shorten-commit-sha"
    description="A Github Action to Export env and output sha with a shortened commit SHA"
  ></Card>
  <Card
    label="Zod schema faker"
    href="https://github.com/iendeavor/zod-schema-faker"
    description="Fake data generator for zod"
  ></Card>
  <Card
    label="Object visualizer"
    href="https://github.com/iendeavor/object-visualizer"
    description="Vue JSON inspector with Chrome-like theme."
  ></Card>
</template>
