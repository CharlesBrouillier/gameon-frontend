<template>
  <div class="flex flex-col justify-center items-center relative pb-4">     
    <NuxtImg :src="`/images/games/${game.id}-${gameId}.webp`" class="rounded-lg border-2 border-stone-400 flex w-full max-h-[500px] max-w-[500px] shadow-2xl" placeholder loading="lazy" draggable="false"/>
    <UCarousel v-slot="{ index }" :items="game.imageUrls" :ui="{ item: 'basis-1/3', prev: 'cursor-pointer border-0 mx-2', next: 'cursor-pointer border-0 mx-2' }" class="max-w-[400px] mt-4 w-5/6" :arrows="game.imageUrls.length > 3" dots>
      <NuxtImg :src="`/images/games/${game.id}-${index + 1}.webp`" class="rounded-lg border-2 border-stone-400 hover:cursor-pointer md:min-h-[75px] md:min-w-[75px] lg:min-h-[80px] lg:min-w-[80px] xl:min-h-[100px] xl:min-w-[100px]" placeholder loading="lazy" :alt="`${game.name} - ${index + 1}`" draggable="false" @click.prevent="gameId = index + 1" />
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';
import type { PropType } from 'vue';

defineProps({
  game: {type: Object as PropType<GameEntity>, required: true}
});

const gameId = ref<number>(1);
</script>
