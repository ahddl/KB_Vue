<script setup>
import CheckboxItem2 from './components/CheckboxItem2.vue';
import { ref } from 'vue';

const idols = ref([
  { id: 1, name: 'BTS', checked: true },
  { id: 2, name: 'Black Pink', checked: false },
  { id: 3, name: 'EXO', checked: false },
  { id: 4, name: 'ITZY', checked: false },
]);
</script>

<template>
  <h1>App 컴포넌트2</h1>
  <hr />
  <CheckboxItem2
    v-for="idol in idols"
    :key="idol.id"
    :name="idol.name"
    :checked="idol.checked"
  />
</template>

<style scoped></style>
