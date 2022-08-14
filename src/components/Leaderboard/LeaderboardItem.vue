<script setup>
const props = defineProps({
  stats: Object,
});
</script>

<template>
  <li>{{ props.stats.score.toFixed(3) }} {{ props.stats.playerName }}</li>
</template>

<style>
</style>
