<template>
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-2 mr-2 mb-4">
    <UBadge icon="material-symbols:person">{{ playersText }}</UBadge>
    <UBadge icon="material-symbols:groups">À partir de {{ minAge }} ans</UBadge>
    <UBadge icon="material-symbols:alarm">De {{ minDuration }} à {{ maxDuration }} minutes</UBadge>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  minPlayers: { type: Number, default: undefined },
  maxPlayers: { type: Number, default: undefined },
  minAge: { type: Number, default: undefined },
  minDuration: { type: Number, default: undefined },
  maxDuration: { type: Number, default: undefined }
});

const playersText = computed(() => {
  if (props.minPlayers !== props.maxPlayers) {
    return `${props.minPlayers} - ${props.maxPlayers} joueurs`;
  } 
  return props.maxPlayers === 1 ? '1 joueur' : `${props.maxPlayers} joueurs`;
});
</script>
