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
  console.log(sessionStore.playerScores.length);
  return (
    sessionStore.playerScores.reduce((time, sum) => sum + time, 0) / sessionStore.playerScores.length
  );
});
</script>

<template>
  <div id="session">
    <h3>Session</h3>
    <p>Average score</p>
    <p>{{ averageScore.toFixed(3) }}</p>
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
h3 {
  font-size: 2rem;
  text-align: center;
}
#session ol {
  margin-bottom: 0.6rem;
  list-style-position: inside;
}
li {
  font-size: 1.1rem;
}
</style>
