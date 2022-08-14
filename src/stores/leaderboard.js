import { defineStore } from "pinia";
import { fetchLeaderboard, postToLeaderboard } from "../api/leaderboard";
import { useSessionStore } from "./session";
import { storeToRefs } from "pinia";

export const useLeaderboardStore = defineStore({
  id: "leaderboard",
  state: () => ({
    leaderboard: [],
  }),
  getters: {
    getSortedleaderboard: (state) =>
      [...state.leaderboard].sort((a, b) => a.score - b.score),
    getLeaderboard: (state) => state.leaderboard,
  },
  actions: {
    sortLeaderboard() {
      this.leaderboard = this.leaderboard.sort((a, b) => a.score - b.score);
    },
    async fetchLeaderboard() {
      console.log("trying to fetch");
      try {
        this.leaderboard = await fetchLeaderboard();
        this.sortLeaderboard();
        //console.log(this.leaderboard);
      } catch (err) {
        console.log(err);
      }
    },
    async addScore(newScore) {
      console.log("inside addScore");
      const sessionStore = useSessionStore();
      if (sessionStore.playerName == "") return;
      const lastPlace = this.leaderboard[this.leaderboard.length - 1];
      if (newScore > lastPlace.score) {
        return;
      }
      const { playerName, country } = storeToRefs(useSessionStore());
      console.log("st", playerName, country);
      const newScoreObject = {
        playerName: playerName.value,
        country: country.value,
        score: newScore,
      };
      try {
        const addedScore = await postToLeaderboard(
          newScoreObject,
          lastPlace.id
        );
        this.leaderboard = [
          ...this.leaderboard.filter((item) => item.id !== lastPlace.id),
        ];
        this.leaderboard.push(addedScore);
        this.sortLeaderboard();
        console.log(addedScore);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
