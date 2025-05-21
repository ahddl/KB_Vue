<script>
import HeaderLayout from './components/HeaderLayout.vue'
import InputContainer from './components/InputContainer.vue'
import FilterContainer from './components/FilterContainer.vue'
import TodoItem from './components/TodoItem.vue'
import SummaryContainer from './components/SummaryContainer.vue'
import './assets/main.css'
export default {
  name: 'App',
  data() {
    return {
      todos: [
        {
          id: 1,
          text: '할 일 1',
          completed: false,
          createAt: '2025-03-24',
        },
        {
          id: 2,
          text: '할 일 2',
          completed: true,
          createAt: '2025-03-25',
        },
        {
          id: 3,
          text: '할 일 3',
          completed: false,
          createAt: '2025-03-26',
        },
        {
          id: 4,
          text: '할 일 4',
          completed: false,
          createAt: '2025-03-26',
        },
      ],
      filter: 'all',
    }
  },
  components: {
    HeaderLayout,
    InputContainer,
    FilterContainer,
    TodoItem,
    SummaryContainer,
  },
  methods: {
    addTodo() {
      const text = this.newTodo
      //if(!text) return
      this.todos.push({
        id: Date.now(), //uuid
        text: text,
        completed: false,
        createAt: new Date().toLocaleDateString(),
      })
      console.log(this.todos)
      //   this.saveTodos()
      // this.newTodo = ''
    },
    toggleCampleted(id) {
      const todo = this.todos.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    },
    //localstage에 저장
    saveTodos() {
      localStorage.setrItem('todos', JSON.stringify(this.todos))
    },
    //localstrage에서 호출하는 함수
    loadTodos() {
      const todos = localStorage.getItem('todos')
      todos ? (this.todos = JSON.parse(todos)) : []
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
      this.saveTodos()
    },
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed)
      this.saveTodos()
    },
    filterChanged(filter) {
      filter
    },
  },
  computed: {
    filterChanged(){

    }
    activeTodoCount() {
      return this.todos.filter((todo) => !todo.completed).length
    },
    completedTodoCount() {
      return this.todos.filter((todo) => todo.completed).length
    },
  },
}
</script>

<template>
  <div class="app">
    <HeaderLayout />
    <InputContainer @add-todo="addTodo" />
    <FilterContainer @filter-changed="filterChanged" />
    <ul class="todo=list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="toggleCampleted"
      />
    </ul>
    <SummaryContainer 
    :activeTodoCount="activeTodoCount" 
    :completedTodoCount="completedTodoCount" />
  </div>
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
