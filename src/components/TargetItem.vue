<script setup>
import { ref, watch } from "vue";

//defineEmits(["disableTarget"]);

const props = defineProps({
  activeTarget: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const isWaiting = ref(false);
const resTime = ref(0);

let startPoint = 0;
let endPoint = 0;

let timer = 0;
function setTargetTimer() {
  const timerid = setTimeout(() => {
    isWaiting.value = true;
    startPoint = Date.now();
  }, Math.random() * 2000);
  return timerid;
}

watch(
  () => props.activeTarget,
  () => {
    if (props.activeTarget) {
      timer = setTargetTimer();
    } else {
      isWaiting.value = false;
    }
  }
);

function handleClick() {
  if (!isWaiting.value) {
    resTime.value = -1;
    clearInterval(timer);
    return;
  }
  endPoint = Date.now();
  resTime.value = endPoint - startPoint;
  console.log(" Clicked from child comp ");
}
</script>

$emit('disableTarget', 10) - emmits 'disableTarget' and reactionTime event or
timeLimit and time when target clicked to parent component
<template>
  <div
    id="target"
    @click="handleClick(), $emit('disable-target', resTime)"
    :class="{ isWaiting: isWaiting }"
    v-show="props.activeTarget"
  ></div>
</template>

<style scoped>
#target {
  width: 3rem;
  height: 3rem;
  background-color: var(--secondary-red);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  position: relative;
  top: 50%;
  left: 50%;
}
.isWaiting {
  background-color: var(--secondary-lime) !important;
}
</style>
