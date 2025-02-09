import { defineStore } from 'pinia';

export const useFilterStore = defineStore('filterStore', {
  state: () => ({
    filtersChanged: false,
    players: [2, 5] as [number, number],
    duration: [10, 120] as [number, number], 
    price: [0, 54.99] as [number, number], 
    sortItem: 'Ordre alphabétique (A-Z)',
    sortItems: [
      'Ordre alphabétique (A-Z)', 
      'Ordre alphabétique (Z-A)', 
      'Date de sortie croissante', 
      'Date de sortie décroissante', 
      'Age minimum croissant', 
      'Age minimum décroissant'
    ],
    listView: true,
  }),
  actions: {
    setFiltersChanged(newFiltersChanged: boolean) {
      this.filtersChanged = newFiltersChanged;
    },
    setPlayers(newPlayers: [number, number]) {
      this.players = newPlayers;
    },
    setDuration(newDuration: [number, number]) {
      this.duration = newDuration;
    },
    setPrice(newPrice: [number, number]) {
      this.price = newPrice;
    },
    setSortItem(newSortItem: string) {
      this.sortItem = newSortItem;
    },
    setListView(newListView: boolean) {
      this.listView = newListView;
    },
    toggleView() {
      this.listView = !this.listView;
    }
  },
  persist: true,
});