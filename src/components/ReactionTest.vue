<script setup>
import MainField from "./MainField.vue";
import SessionBoard from "./SessionBoard.vue";
import LeaderBoard from "./Leaderboard/LeaderBoard.vue";
import LoginForm from "./LoginForm.vue";
</script>

<template>
  <div id="reaction-test-app">
    <h2 id="header">ReactionTest</h2>
    <div id="reaction-test">
      <SessionBoard />
      <MainField />
      <LeaderBoard />
    </div>
    <LoginForm />
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: center;
}
</style>
