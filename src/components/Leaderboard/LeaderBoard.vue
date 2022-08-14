<script setup>
import { useLeaderboardStore } from "../../stores/leaderboard";
import LeaderboardItem from "./LeaderboardItem.vue";
import { defineProps } from "vue";

defineProps(["kek"]);

const leaderboardStore = useLeaderboardStore();
leaderboardStore.fetchLeaderboard();
</script>

<template>
  <div id="scoreboard">
    <h3 class="board-header">Leaderboard</h3>
    <div>{{ kek }}</div>
    <ol>
      <LeaderboardItem
        v-for="stats in leaderboardStore.leaderboard"
        :key="stats.score"
        :stats="stats"
      />
    </ol>
  </div>
</template>

<style scoped>
#scoreboard {
  background-color: var(--main-dim);
  padding: 1rem;
}

#scoreboard ol {
  display: block;
  margin-left: 2rem;
  list-style-position: outside;
}
li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>
