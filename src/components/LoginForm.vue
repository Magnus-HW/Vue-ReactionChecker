<script setup>
import { ref, watch } from "vue";
import { useSessionStore } from "../stores/session.js";

const sessionStore = useSessionStore();
const name = ref("");
const country = ref("");
const validationMsg = ref("");
const notificationMsg = ref(
  "Please, enter your name so you can be placed at score board"
);
watch(name, () => {
  validateName();
});

function validateName() {
  if (name.value.length < 3) {
    validationMsg.value = "Name is too short!";
  } else {
    validationMsg.value = "";
  }
}
function handleSubmit() {
  if (name.value == "") {
    notificationMsg.value =
      "You should enter your name, so that you can get into the Leaderboard";
    return;
  }
  sessionStore.submitUser(name.value, country.value);
}
</script>

<template>
  <div id="login-form-container">
    <div id="welcome" v-if="sessionStore.playerName == ''">
      {{ notificationMsg }}
    </div>
    <div id="login-form">
      <form v-if="sessionStore.playerName == ''">
        <div class="form-group">
          <label id="name-label" for="name">Name</label>
          <input id="name" type="text" v-model="name" />
          <div
            id="validationMsg"
            :class="{ hide: validationMsg }"
            v-show="validationMsg !== ''"
          >
            {{ validationMsg }}
          </div>
        </div>
        <div class="form-group">
          <label id="country-lable" for="country">Country</label>
          <input id="country" type="text" v-model="country" />
        </div>
        <button type="submit" @click.prevent="handleSubmit">Submit</button>
      </form>
      <div v-else>Welcome, {{ sessionStore.playerName }}</div>
    </div>
  </div>
</template>

<style>
#login-form-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 0.5rem;
  padding: 0.5rem 0.5rem 0;
  background-color: rgb(61, 121, 250);
}
#welcome {
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 1rem 0;
}
#login-form form > * {
  margin-bottom: 1rem;
}

button {
  display: block;
  margin: 0 auto;
  padding: 0.5rem 1rem;
}
.form-group {
  position: relative;
  display: grid;
  grid-template-columns: 70px 1fr;
}
#validationMsg {
  width: 200px;
  padding: 0.2rem;
  text-align: left;
  font-size: 0.8rem;
  line-height: 0.5rem;
  color: rgb(255, 255, 255);
  display: inline-block;
  position: absolute;
  left: 26%;
  top: 102%;
}
label {
  color: beige;
}
</style>
