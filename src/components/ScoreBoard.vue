<script setup>
import { useScoreboardStore } from "../stores/scoreboard";
const scoreboardStore = useScoreboardStore();
</script>

<template>
  <div id="scoreboard">
    <h3>Scoreboard</h3>
    <ol>
      <li v-for="item in scoreboardStore.scoreboard" :key="item.name">
        {{ item.score.toFixed(3) }} {{ item.name }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
#scoreboard {
  background-color: var(--main-dim);
  padding: 1rem;
}
h3 {
  font-size: 2rem;
  text-align: center;
}
#scoreboard ol {
  margin-bottom: 0.6rem;
  list-style-position: inside;
}
li {
  font-size: 1.1rem;
}
</style>
