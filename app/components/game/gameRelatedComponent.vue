<template>
  <div class="text-center col-span-2 mb-8">
    <h2 class="text-2xl font-bold underline my-8">Vous pourriez aussi aimer :</h2>
    <!-- If more than 3 games : Carousel on min-lg screen otherwise grid displaying
    Else : Flex and centered -->
    <div v-if="relatedGames.length > 3">
      <UCarousel v-slot="{ index }" :items="relatedGames" :ui="{ item: 'basis-1/3', prev: 'cursor-pointer mx-8', next: 'cursor-pointer mx-8' }" class="hidden lg:block mt-4 px-16" arrows>
        <div class="bg-white border-2 border-neutral-400 rounded-lg">
          <NuxtLink :to="`/${relatedGames[index]?.slug}`" class="group">
            <NuxtImg :src="`/images/games/${relatedGames[index]?.id}-1.webp`" class="cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110 p-4 mx-auto max-w-[200px] max-h-[200px]" placeholder loading="lazy" :alt="`${relatedGames[index]?.name}`" draggable="false" />
            <p class="flex justify-center items-center text-center font-bold min-h-12 group-hover:underline">{{ relatedGames[index]?.name }}</p>
            <ul class="mb-2 min-h-16">
              <li v-for="mechanism in relatedGames[index]?.commonMechanisms" :key="mechanism.id" class="my-1">
                <UBadge color="neutral">{{ mechanism.name }}</UBadge>
              </li>
            </ul>
          </NuxtLink>
        </div>
      </UCarousel>
      <div class="lg:hidden">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div v-for="relatedGame in relatedGames" :key="relatedGame.id" class="bg-white border-2 rounded-xl overflow-hidden">
            <NuxtLink :to="`/${relatedGame.slug}`" class="group">
              <NuxtImg :src="`/images/games/${relatedGame.id}-1.webp`" class="pb-2 w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110 p-4 max-h-64 max-w-64 mx-auto" placeholder loading="lazy" />
              <p class="flex justify-center items-center text-center font-bold min-h-12 group-hover:underline">{{ relatedGame.name }}</p>
              <ul class="mb-2 min-h-16">
                <li v-for="mechanism in relatedGame.commonMechanisms" :key="mechanism.id" class="my-1">
                  <UBadge color="neutral">{{ mechanism.name }}</UBadge>
                </li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex gap-2 justify-center">
        <div v-for="relatedGame in relatedGames" :key="relatedGame.id" class="bg-white border-2 rounded-xl overflow-hidden w-1/3">
          <NuxtLink :to="`/${relatedGame.slug}`" class="group">
            <NuxtImg :src="`/images/games/${relatedGame.id}-1.webp`" class="pb-2 w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-110 p-4 max-h-64 max-w-64 mx-auto" placeholder loading="lazy" />
            <p class="flex justify-center items-center text-center font-bold min-h-12 group-hover:underline">{{ relatedGame.name }}</p>
            <ul class="mb-2 min-h-16">
              <li v-for="mechanism in relatedGame.commonMechanisms" :key="mechanism.id" class="my-1">
                <UBadge color="neutral">{{ mechanism.name }}</UBadge>
              </li>
            </ul>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';

defineProps({
  relatedGames: {type: Array as PropType<GameEntity[]>, required: true} 
});
</script>