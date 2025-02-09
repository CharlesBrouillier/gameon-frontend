<template>
  <div class="flex max-md:w-full gap-1 md:ml-auto">
    <USelect v-model="filterStore.sortItem" :items="filterStore.sortItems" trailing-icon="material-symbols:expand-all" variant="outline" class="max-md:w-full max-md:flex md:w-60 cursor-pointer border-2 border-black hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-black ml-auto" :ui="{item:'cursor-pointer'}"/>
    
    <UButton :trailing-icon="filterStore.listView ? 'fluent:gallery-24-filled' : 'material-symbols:view-list-sharp'" variant="outline" class="border-2 border-black hover:bg-neutral-200 focus-visible:ring-black ring-0" :ui="{base: 'text-orange-500'}" :aria-label="filterStore.listView ? 'Basculer en vue grille' : 'Basculer en vue liste'" @click="filterStore.toggleView" />
  </div>
</template>

<script setup lang="ts">
const filterStore = useFilterStore();
</script>