<script setup>
import InputName from "./components/InputName.vue";
import { ref } from "vue";

const parentName = ref("");

const nameChangeHandler = (event) => {
  parentName.value = event.childName;
};
</script>

<template>
  <h1>App 컴포넌트5</h1>
  <hr />
  <div>
    <InputName @nameChange="nameChangeHandler" />
    <br />
    <h3>App Data : {{ parentName }}</h3>
  </div>
</template>

<style scoped></style>
