<script setup>
import MainField from "./MainField.vue";
import SessionBoard from "./SessionBoard.vue";
import ScoreBoard from "./ScoreBoard.vue";
</script>

<template>
  <div id="reaction-test">
    <h2 id="header">ReactionTest</h2>
    <SessionBoard />
    <MainField />
    <ScoreBoard />
  </div>
</template>

<style scoped>
h2 {
  font-size: 2rem;
  text-align: center;
}
</style>
