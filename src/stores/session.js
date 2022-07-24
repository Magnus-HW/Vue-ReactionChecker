import { defineStore } from "pinia";

export const useSessionStore = defineStore({
  id: "session",
  state: () => ({
    playerName: "Karakurt",
    country: "Iran",
    playerScores: [],
  }),
  // getters: {
  //   getAverage(state) {
  //     return (
  //       state.session.reduce((time, sum) => sum + time, 0) /
  //       state.session.length
  //     );
  //   },
  // },
  actions: {
    addHitTime(time) {
      this.playerScores = this.playerScores.concat((time / 1000));
    },
    clearPlayerScore() {
      this.playerScores = [];
    },
  },
});
