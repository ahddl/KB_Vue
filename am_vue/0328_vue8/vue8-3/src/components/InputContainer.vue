<script>
export default {
  name: 'InputContainer',
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {

  },
}
</script>

<template>
  <!-- 입력폼 -->
  <div class="input-container">
    <input
      type="text"
      v-model.trim="newTodo"
      @keyup.enter="addTodo"
      placeholder="할일을 입력하세요"
    />
    <button @click="addTodo">추가</button>
  </div>
</template>

<style scoped>
/* 입력폼 input-container*/
.input-container {
  position: relative;
  top: -30px;
  display: flex;
  gap: var(--space-s);
}
.input-container input {
  border: none;
  padding: var(--space-m);
  background-color: var(--gray400);
  color: var(--gray100);
  outline: none;
  border-radius: var(--space-s);
  flex: 1;
}
.input-container input:focus {
  background-color: var(--gray300);
}
.input-container button {
  background-color: var(--blue-dark);
  padding: var(--space-m) calc(var(--space-m) * 2);
}
.input-container button::after {
  content: '+';
  border: 1px solid var(--gray100);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: inline-block;
  position: relative;
  left: 3px;
}
</style>
