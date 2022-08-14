<script setup>
import { reactive } from "vue";
import TargetItem from "./TargetItem.vue";
import { useSessionStore } from "../stores/session";
import { useLeaderboardStore } from "../stores/leaderboard";
import { computed } from "vue";

const sessionStore = useSessionStore();
const leaderboardStore = useLeaderboardStore();

const fieldState = reactive({
  activeSession: false,
  visibleTarget: false,
});

function delayAppearance() {
  const timerId = setTimeout(() => {
    fieldState.visibleTarget = true;
  }, 1500);
  return timerId;
}

let timer = 0;

function handleTargetHit(time) {
  time = time / 1000;
  console.log("handleTargetHit");
  fieldState.visibleTarget = false;

  if (time == -0.001) {
    sessionStore.addHitTime(1);
  } else {
    sessionStore.addHitTime(time);
  }
  if (sessionStore.playerScores.length == 2) {
    console.log("!!!!!!!");
    endSession();
    return null;
  }
  timer = delayAppearance();
  console.log(time);
}

function startSession() {
  fieldState.activeSession = true;
  sessionStore.clearPlayerScore();
  timer = delayAppearance();
  console.log("Show target");
}

function endSession(event) {
  fieldState.visibleTarget = false;
  fieldState.activeSession = false;
  clearInterval(timer);

  if (event.key !== "Escape") {
    console.log("right before addScore");
    leaderboardStore.addScore(sessionStore.getAverage);
  }
  console.log("Session ended", sessionStore.playerScores);
}

const fieldTextContent = computed(() => {
  return fieldState.activeSession
    ? "Press Esc to finish session"
    : "Click on the field to start";
});
</script>

//@disable-target="handleTargetHit" - emmited event //this could be done by
passing function to children comp (aka react style)
<template>
  <div
    id="field"
    v-on="{
      click: fieldState.activeSession ? null : startSession,
    }"
    @disable-target="handleTargetHit"
    tabindex="0"
    @keydown.esc="endSession"
  >
    <TargetItem
      :active-target="fieldState.visibleTarget"
      @disable-target="handleTargetHit"
    />
    <div class="field-text" :class="{ isActive: fieldState.activeSession }">
      {{ fieldTextContent }}
    </div>
  </div>
  <!-- <button @click="endSession">Stop Session</button> -->
</template>

<style scoped>
#field {
  position: relative;
  background-color: var(--main-blue);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.field-text {
  z-index: 3;
  font-style: italic;
  color: beige;
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
}
.isActive {
  font-size: 0.8rem;
  top: 93%;
  left: 50%;
}
</style>
