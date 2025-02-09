<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 my-4">
    <div v-for="game in games" :key="game.id" class="bg-white border-2 rounded-xl overflow-hidden shadow-neutral-500 shadow-lg flex flex-col">
      <NuxtLink :to="`/${game.slug}`" class="group flex flex-col h-full">
        <NuxtImg :src="`/images/games/${game.id}-1.webp`" class="pb-2 w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-110 m-2 max-h-64 mx-auto" placeholder loading="lazy" draggable="false" :alt="`${game.name}`" />
        <p class="justify-center items-center text-center flex font-bold min-h-12 group-hover:underline bg-neutral-200 mt-auto">{{ game.name }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';

defineProps({
  games: {type: Array as PropType<GameEntity[]>, required: true}
});
</script>
