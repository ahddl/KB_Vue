<script setup>
import CheckboxItem4 from "./components/CheckboxItem4.vue";
import { ref } from "vue";

const idols = ref([
  { id: 1, name: "BTS", checked: true },
  { id: 2, name: "Black Pink", checked: false },
  { id: 3, name: "EXO", checked: false },
  { id: 4, name: "ITZY", checked: false },
]);
</script>

<template>
  <h1>App 컴포넌트4</h1>
  <hr />
  <CheckboxItem4
    v-for="idol in idols"
    :key="idol.id"
    :name="idol.name"
    :checked="idol.checked"
  />
</template>

<style scoped></style>
