<script setup>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import InputContainer from './components/InputContainer.vue'
import TodoItem from './components/TodoItem.vue'
import SummaryContainer from './components/SummaryContainer.vue'

import { onMounted } from 'vue'
import { useTodos } from './api/useTodos'
const { todos, loading, error, fetchTodos, addTodo, updatedTodo, deleteTodo } =
  useTodos()

// import axios from 'axios'
// const todos = ref([])

onMounted(() => {
  fetchTodos()
})
// 외부에 있는건 try catch문을 사용,
// 에러 발생하는 곳을 알 수 있기 때문에 에러를 해결하기 나음
console.log('App---', loading.value, error.value)

function handleAddtodo(newTodo) {
  addTodo(newTodo)
}

function handleUpdateTodo(updatedTodo) {
  updatedTodo(updatedTodo)
}
function handleDeleteTodo(todoId) {
  deleteTodo(todoId)
}

//필터변경함수
function handleFilterChange(filter) {
  currentFilter.value = filter
}

const filteredTodos = computed(() => {
  if (currentFilter.value === 'all') {
    return todos.value
  } else if (currentFilter.value === 'active') {
    return todos.value.filter(todo => !todo.completed)
  } else if (currentFilter.value === 'completed') {
    return todos.value.filter(todo => todo.completed)
  }
  return todos.value
})
</script>

<template>
  <HeaderLayout title="작심" />
  <InputContainer @add-todo="handleAddtodo" />
  <FilterContainer />
  <div v-if="loading">로딩 중..</div>
  <div v-else-if="error">
    <p>에러..{{ error }}</p>
    <button @click="fetchTodos">새로고침</button>
  </div>
  <ul v-else class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update:todo="handleUpdateTodo"
      @delete:todo="handleDeleteTodo"
    />
  </ul>
  <SummaryContainer />
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
