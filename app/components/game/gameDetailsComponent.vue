<template>
  <div class="flex flex-col space-y-4">
    <h1 class="text-2xl font-bold pt-4 max-md:border-t-2 border-neutral-400">{{ game.name }}</h1>
    <p><span class="underline">Prix moyen constaté :</span> {{ game.price }}€</p>
    <p class="text-justify">{{ game.description }}</p>
    <GameBadges :min-players="game.minPlayers" :max-players="game.maxPlayers" :min-age="game.minAge" :min-duration="game.minDuration" :max-duration="game.maxDuration" />

    <p class="underline">Mécanismes en jeu :</p>
    <ul class="pl-4 max-md:flex max-md:mx-auto gap-2 flex-wrap">
      <li v-for="mechanism in game.mechanisms" :key="mechanism.id" class="mb-2">
        <UBadge color="neutral" variant="outline" class="bg-stone-100 text-neutral-900 text-sm border-2">{{ mechanism.name }}</UBadge>
      </li>
    </ul>  

    <p class="underline">Edité par :</p>
    <NuxtLink v-if="game.publisher.url != '[null]'" :to="game.publisher.url" target="_blank" class="pl-4 max-md:flex max-md:mx-auto hover:underline cursor-pointer">
      <NuxtImg :src="`/images/publishers/${game.publisher.id}.webp`" class="rounded-lg border-2 border-stone-400 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-110 max-h-[80px] max-w-[80px]" placeholder loading="lazy" />
    </NuxtLink>
    <NuxtImg v-else :src="`/images/publishers/${game.publisher.id}.webp`" class="rounded-lg border-2 border-stone-400 shadow-2xl max-h-[80px] max-w-[80px]" placeholder loading="lazy"/>
  </div>
</template>

<script setup lang="ts">
import type { GameEntity } from '~/types/gameEntity';
import type { PropType } from 'vue';
import GameBadges from '~/components/game/gameBadgesComponent.vue';

defineProps({
  game: {type: Object as PropType<GameEntity>, required: true}
});
</script>