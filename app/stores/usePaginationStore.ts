import { defineStore } from 'pinia';

export const usePaginationStore = defineStore('paginationStore', {
  state: () => ({
    currentPage: 1,
    itemsPerPage: 10,
  }),
  actions: {
    setCurrentPage(newCurrentPage: number) {
      this.currentPage = newCurrentPage;
    },
    setItemsPerPage(newItemsPerPage: number) {
      this.itemsPerPage = newItemsPerPage;
    },
  },
  persist: true,
});