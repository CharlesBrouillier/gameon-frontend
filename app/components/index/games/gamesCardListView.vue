<template>
  <div v-for="game in games" :key="game.id" class="bg-white border-2 rounded-xl overflow-hidden my-2 flex-1 shadow-neutral-500 shadow-lg">
    <NuxtLink :to="`/${game.slug}`" class="group">
      <div class="grid grid-cols-6 h-full">
        <div class="flex items-center justify-center lg:col-span-2 col-span-6">
          <NuxtImg :src="`/images/games/${game.id}-1.webp`" class="w-full h-auto transition-transform duration-300 ease-in-out lg:group-hover:scale-110 max-h-40 max-w-40 md:max-h-80 md:max-w-80 max-lg:my-4 lg:p-4" placeholder loading="lazy" draggable="false" :alt="`${game.name}`" />
        </div>
        <div class="lg:col-span-4 col-span-6 flex flex-col pl-4 h-full bg-neutral-200">
          <p class="flex mt-4 mb-2 font-bold group-hover:underline">{{ game.name }}</p>
          <p class="text-justify mr-4 lg:mr-8 xl:mr-16">{{ game.description }}</p>
          <GameBadges class="mt-4" :min-players="game.minPlayers" :max-players="game.maxPlayers" :min-age="game.minAge" :min-duration="game.minDuration" :max-duration="game.maxDuration" />
          <p>Pour les amateurs de :</p>
          <ul class="list-disc pl-8 mb-2">
            <li v-for="mechanism in sortedMechanisms(game)" :key="mechanism.id">{{ mechanism.name }}</li>
          </ul>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';
import GameBadges from '~/components/game/gameBadgesComponent.vue';

defineProps({
  games: {type: Array as PropType<GameEntity[]>, required: true}
});

const sortedMechanisms = (game: GameEntity) => {
  return [...game.mechanisms].sort((a, b) => a.name.localeCompare(b.name));
};
</script>
