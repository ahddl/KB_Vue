<script setup>
import { useCssModule, onMounted } from 'vue';
import styles from '@/assets/child4-style.module.css';

onMounted(() => {
  console.log(styles);
});
</script>

<template>
  <div :class="styles.child">
    <h2>Child4</h2>
  </div>
</template>

<style module src="@/assets/child4-style.module.css"></style>
