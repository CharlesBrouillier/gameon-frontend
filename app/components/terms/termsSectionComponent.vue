<template>
  <div>
    <h1 class="underline">{{ title }}</h1>
    <ul v-if="list">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <p v-if="content">{{ content }}</p>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  title: string;
  list?: string[];
  content?: string;
}>();

</script>