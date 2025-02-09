<template>
  <div class="flex justify-center items-start w-full pt-4">
    <div class="w-5/6 xl:w-2/3">
      <div v-if="game">
        <div class="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-8 mb-12">
          <GameCarousel :game="game" />
          <GameDetails :game="game"/>
        </div>
        <GameMedias :game="game" class="col-span-2"/>  
        <GameRelated :related-games="relatedGames" />
      </div>
      
      <GameSkeleton v-else/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchGame, fetchRelatedGames } from '~/utils/gameUtils';
import type { GameEntity } from '~/types/gameEntity';

import GameCarousel from '~/components/game/gameCarouselComponent.vue';
import GameDetails from '~/components/game/gameDetailsComponent.vue';
import GameMedias from '~/components/game/gameMediasComponent.vue';
import GameRelated from '~/components/game/gameRelatedComponent.vue';
import GameSkeleton from '~/components/game/gameSkeletonComponent.vue';

const route = useRoute();
const game = ref<GameEntity | null>(null);
const relatedGames = ref<GameEntity[]>([]);

onMounted(async () => {
  game.value = await fetchGame(route.params.slug as string);

  if (game.value) {
    relatedGames.value = await fetchRelatedGames(game.value.id, game.value.mechanisms);
  } else {
    navigateTo('/');
  }

  useSeoMeta({
      title: `GameOn! - ${game.value?.name}`
  });
});
</script>