<template>
  <GameCardListView v-if="filterStore.listView" :games="paginatedGames"/>
  <GameCardGridView v-else :games="paginatedGames" />
</template>

<script setup lang="ts">

import GameCardListView from './gamesCardListView.vue';
import GameCardGridView from './gamesCardGridView.vue';

const gameStore = useGameStore();
const filterStore = useFilterStore();
const paginationStore = usePaginationStore();

const paginatedGames = computed(() => {
  const start = (paginationStore.currentPage - 1) * paginationStore.itemsPerPage;
  return gameStore.games.slice(start, start + paginationStore.itemsPerPage);
});

</script>