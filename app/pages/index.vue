<template>
  <div class="flex">
    <div class="lg:w-2/3 w-4/5 mx-auto">
      <FiltersPanel />
      <GamesSlot />
      <Pagination />
    </div>
  </div>
</template>

<script setup lang="ts">

import FiltersPanel from '~/components/index/filters/filtersPanelComponent.vue';
import GamesSlot from '~/components/index/games/gamesSlotComponent.vue';
import Pagination from '~/components/index/paginationComponent.vue';

useSeoMeta({ title: `GameOn! - Liste des jeux` });

</script>