<template>
  <div class="flex gap-1 mt-4 mb-2 flex-wrap">
    <USlideover v-model:open="open" title="Filtres avancés" side="left" :prevent-close="true">
      <UButton label="Filtres avancés" color="neutral" variant="outline" class="max-md:w-full flex" />

      <template #description>
        <p>Cherchez le jeu qui convient à vos envies !</p>
      </template>

      <template #body>
        <h2 class="my-4"><span class="underline font-bold">Nombre de joueurs :</span> entre {{ filterStore.players[0] }} et {{ filterStore.players[1] }} joueurs</h2>
        <USlider v-model="filterStore.players" :min="1" :max="18" />

        <h2 class="my-4"><span class="underline font-bold">Durée moyenne :</span> entre {{ filterStore.duration[0] }} et {{ filterStore.duration[1] }} minutes</h2>
        <USlider v-model="filterStore.duration" :min="10" :max="120" :step="5" />

        <h2 class="my-4"><span class="underline font-bold">Prix moyen constaté :</span> entre {{ filterStore.price[0] }} € et {{ filterStore.price[1] }} €</h2>
        <USlider v-model="filterStore.price" :min="0" :max="54.99" />

        <h2 class="my-4"><span class="underline font-bold">Mécaniques de jeu :</span></h2>
        <div class="grid grid-cols-2">
          <UCheckbox v-for="mechanism in mechanisms" :key="mechanism.id" v-model="mechanism.state" :label="mechanism.name" @change="toggleMechanismSelection(mechanism)" />
        </div>
      </template>

      <template #footer>
        <UButton label="Réinitialiser les filtres" color="neutral" variant="outline" @click="handleResetFilters" />
        <UButton label="Appliquer" color="neutral" @click="handleApplyFilters" />
      </template>
    </USlideover>

    <UButton v-if="filterStore.filtersChanged" label="Réinitialiser les filtres" color="neutral" variant="outline" @click="handleResetFilters" />

    <Controls />
  </div>
</template>

<script setup lang="ts">
import Controls from '~/components/index/filters/controlsComponent.vue';
import type { MechanismEntity } from '~/types/mechanismEntity';
import { applyFilters, resetFilters, toggleMechanismSelection } from '~/utils/gameUtils';

const mechanisms = ref<MechanismEntity[]>([]);
const gameStore = useGameStore();
const filterStore = useFilterStore();
const open = ref(false);

// Data fetching
onMounted(async () => {
  mechanisms.value = await fetchMechanisms();  
  mechanisms.value.forEach(mechanism => {
    mechanism.state = gameStore.selectedMechanisms.some(selected => selected.id === mechanism.id);
  });
});

watchEffect(async () => {
  if (open.value) {
    gameStore.setGames(await fetchFilteredGames());
  } else if (!filterStore.filtersChanged) {
    gameStore.setGames(await fetchAllGames());
  }
});

// Slideover and filters
watch(() => filterStore.sortItem, async () => {
  gameStore.setGames(await fetchGames());
});

const handleApplyFilters = async () => {
  await applyFilters();
  open.value = false;
};

const handleResetFilters = async () => {
  await resetFilters();
  open.value = false;
  mechanisms.value.forEach(mechanism => {
    mechanism.state = false;
  });
};
</script>
