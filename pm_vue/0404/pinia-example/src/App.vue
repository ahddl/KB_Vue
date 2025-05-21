<script setup>
import Counter from './components/Counster';
import { useCounterStore } from './stores/counter';

import Like from './components/Like';

const counter = useCounterStore();
</script>

<template>
  <div>
    <h1>Pinia 상태관리 예제</h1>
    <hr />
    <h2>좋아요 갯수 : {{}}</h2>
    <Like />
    <h2>App에서 보는 Counter : {{ counter.count }}</h2>
    <Counter />
  </div>
</template>

<style scoped></style>
