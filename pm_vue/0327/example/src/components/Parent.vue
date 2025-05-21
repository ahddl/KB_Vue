<script setup>
import Child from './Child.vue'
import GrandeChild from './GrandeChild.vue'
</script>

<template>
  <div style="border: 2px solid red">
    <h1>나는 부모</h1>
    <Child />
    <GrandeChild />
  </div>
</template>

<style scoped></style>
