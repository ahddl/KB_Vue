<script>
export default {
  name: 'SummaryContainer',
  data() {
    return {}
  },
  props: {
    activeTodoCount: {
      type: Number,
      required: true,
    },
    completedTodoCount: {
      type: Number,
      required: true,
    },
  },
  emits: ['clear-completed'],
}
</script>

<template>
  <!-- 요약정보 -->
  <div class="todo-summary">
    <p><span>미완료항목</span><span>0</span></p>
    <p><span>완료항목</span><span>0</span></p>
    <button>완료된 항목 삭제</button>
  </div>
</template>

<style scoped>
/* 요약정보 todo-summary*/
.todo-summary {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-m);
}
.todo-summary p {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: var(--space-s);
}
.todo-summary span:nth-of-type(1) {
  color: var(--blue-dark);
}
.todo-summary span:nth-of-type(2) {
  background-color: var(--gray300);
  padding: var(--space-s);
  border-radius: var(--space-s);
  font-weight: 900;
}
.todo-summary button {
  background-color: var(--blue-dark);
}
</style>
