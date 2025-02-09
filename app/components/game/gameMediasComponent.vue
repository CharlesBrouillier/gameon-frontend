<template>
  <div class="text-center">
    <h2 class="text-2xl font-bold underline my-8">En découvrir plus sur le jeu :</h2>
    <div class="grid grid-cols-2 my-4">
      <!-- Youtube section -->
      <div class="col-span-2 lg:col-span-1 mx-4 item flex">
        <iframe class="w-5/6 mx-auto aspect-video rounded-lg border-2 border-stone-400 shadow-2xl" :src="game.youtubeUrl" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
      </div>
      <!-- BGA / PDF section -->
      <div class="col-span-2 lg:col-span-1 grid grid-cols-2 gap-4 my-4">
        <div v-if="game.bgaUrl" class="max-md:col-span-2 flex flex-col justify-center">
          <p class="underline font-bold">Découvrir sur BGA :</p>
          <NuxtLink :to="game.bgaUrl" target="_blank">
            <NuxtImg :src="`/images/game/bga.webp`" class="mt-4 max-h-[90px] max-w-[80px] mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl" placeholder loading="lazy" draggable="false" />
          </NuxtLink>
        </div>
        <div class="max-md:col-span-2 flex flex-col justify-center">
          <p class="underline font-bold">Voir règles du jeu :</p>
          <NuxtLink :to="`/pdf/${game.id}.pdf`" target="_blank">
            <NuxtImg :src="`/images/game/pdf.webp`" class="mt-4 max-h-[90px] max-w-[80px] mx-auto cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 shadow-2xl" placeholder loading="lazy" draggable="false" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';
import type { PropType } from 'vue';

defineProps({
  game: {type: Object as PropType<GameEntity>, required: true}
});
</script>
