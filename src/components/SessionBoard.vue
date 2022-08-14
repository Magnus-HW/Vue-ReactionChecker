<script setup>
import { computed } from "vue";
import { useSessionStore } from "../stores/session";

const sessionStore = useSessionStore();
// watch(playerScores, () => {
//   if (playerScores.length !== 0) {
//     averageScore.value =
//       playerScores.reduce((time, sum) => sum + time, 0) / playerScores.length;
//   }
// });
// const averageScore = ref(0);
const averageScore = computed(() => {
  if (sessionStore.playerScores.length == 0) return 0;
  return (
    sessionStore.playerScores.reduce((time, sum) => sum + time, 0) /
    sessionStore.playerScores.length
  );
});
</script>

<template>
  <div id="session">
    <h3 class="board-header">Session</h3>
    <p id="average-score">
      <span>Average score</span> <span>{{ averageScore.toFixed(3) }}</span>
    </p>
    <ol>
      <li v-for="item in sessionStore.playerScores" :key="item.name">
        {{ item.toFixed(3) }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
#session {
  background-color: var(--main-dim);
  padding: 1rem;
}
#average-score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
}
#average-score > :last-child {
  font-weight: 900;
}
#session ol {
  display: block;
  margin-left: 2rem;
  list-style-position: outside;
  margin-left: 20%;
}
li {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  text-align: left;
  padding-left: 0.5rem;
}
</style>
