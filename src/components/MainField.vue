<script setup>
import { reactive } from "vue";
import TargetItem from "./TargetItem.vue";
import { useSessionStore } from "../stores/session";

const sessionStore = useSessionStore();

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
  console.log("handleTargetHit");
  fieldState.visibleTarget = false;

  if (time == -1) {
    sessionStore.addHitTime(1000);
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

function endSession() {
  fieldState.visibleTarget = false;
  fieldState.activeSession = false;
  clearInterval(timer);
  console.log("Session ended", sessionStore.playerScores);
}
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
    <div>Click on field to start</div>
  </div>
  <!-- <button @click="endSession">Stop Session</button> -->
</template>

<style scoped>
#field {
  background-color: var(--main-blue);
}
</style>
