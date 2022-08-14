import { defineStore } from "pinia";

export const useSessionStore = defineStore({
  id: "session",
  state: () => ({
    playerName: "",
    country: "",
    playerScores: [],
  }),
  getters: {
    getAverage(state) {
      if (state.playerScores.length == 0) return 0;
      const average =
        state.playerScores.reduce((time, sum) => sum + time, 0) /
        state.playerScores.length;
      return average;
    },
  },
  actions: {
    addHitTime(time) {
      this.playerScores = this.playerScores.concat(time);
    },
    clearPlayerScore() {
      this.playerScores = [];
    },
    submitUser(name, country) {
      this.playerName = name;
      this.country = country;
    },
  },
});
