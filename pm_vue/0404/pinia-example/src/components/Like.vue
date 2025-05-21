<script setup>
import { uselikeStore } from '@/stores/like';

const liker = uselikeStore();
const { fivelike, reset } = counter;
</script>

<template>
  <div>
    <button @click="fivelike">5++증가</button>
    <button @click="reset">0 초기화</button>
  </div>
</template>

<style scoped></style>
