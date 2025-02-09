import { defineStore } from 'pinia';
import type { GameEntity } from '~/types/gameEntity';
import type { MechanismEntity } from '~/types/mechanismEntity';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [] as GameEntity[],
    selectedMechanisms: [] as MechanismEntity[],
  }),
  actions: {
    setGames(newGames: GameEntity[]) {
      this.games = newGames;
    },
    setSelectedMechanisms(newMechanisms: MechanismEntity[]) {
      this.selectedMechanisms = newMechanisms;
    },
  },
  persist: true,
});