import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProgrammListStore = defineStore("programmList", {
  state: () => ({
    programmList: null
  }),
  getters: {
    getProgrammList(state) {
      return state.programmList
    }
  },
  actions: {
    setProgrammList(list) {
      this.programmList = list
    }
  }
});
