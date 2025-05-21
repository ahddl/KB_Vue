<script setup>
defineProps(['slotName']);
</script>

<template>
  <div>
    <slot :name="slotName"> </slot>
  </div>
</template>

<style scoped></style>
