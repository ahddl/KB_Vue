<script setup>
const emit = defineEmits(['send-message']);

function sendMessage() {
  emit('send-message', '안녕 Sibling2!');
}
</script>

<template>
  <div style="border: 1px solid blue; padding: 10px">
    <h3>Sibling1</h3>
    <button @click="sendMessage">Sibling2에게 메시지 보내기</button>
  </div>
</template>

<style scoped></style>
