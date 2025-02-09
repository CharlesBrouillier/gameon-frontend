<template>
  <div v-if="gameStore.games.length > 10" class="flex justify-center my-8">
    <UPagination :page="paginationStore.currentPage" :items-per-page="paginationStore.itemsPerPage" :total="gameStore.games.length" @update:page="updateCurrentPage" />
    <USelect :model-value="paginationStore.itemsPerPage" :items="gamesCount" color="neutral" variant="outline" class="ml-4 w-28 hover:bg-neutral-200 cursor-pointer" @update:model-value="updateItemsPerPage" />
  </div>
</template>

<script setup lang="ts">
const gameStore = useGameStore();
const paginationStore = usePaginationStore();
const gamesCount = ref([{ label: '10 jeux', value: 10 }, { label: '20 jeux', value: 20 }]);

const updateCurrentPage = (page: number) => {
  paginationStore.setCurrentPage(page);
};

const updateItemsPerPage = (value: number) => {
  if(gameStore.games.length == 20) {
    paginationStore.setCurrentPage(1);
  }
  paginationStore.setItemsPerPage(value);
};
</script>