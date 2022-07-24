import { defineStore } from "pinia";

import scoreboard from "../data/scoreboard.json";

export const useScoreboardStore = defineStore({
  id: "scoreboard",
  state: () => ({
    scoreboard,
  }),
  // getters: {
  //   getSortedScoreboard: (state) =>
  //     [...state.scoreboard].sort((a, b) => a.score - b.score),
  // },
  actions: {
    // addScore(time) {

    // },
  },
});
