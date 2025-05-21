import axios from 'axios'
import { ref } from 'vue'
const API_URL = 'http://localhost:5000/todos'

export const useTodos = () => {
  const todos = ref([])
  const loading = ref(false)
  const error = ref(null)

  //데이터 가져오기
  const fetchTodos = async () => {
    loading.value = true
    error.value = null

    try {
      //지연상태확인

      const response = await axios.get(API_URL)
      console.log('response---', response)
      todos.value = response.data
    } catch (err) {
      error.value = err.message || '데이터 요청 중 에러'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  //데이터 등록하기
  const addTodo = async newTodo => {
    try {
      const response = await axios.get(API_URL)
      console.log('response---', response)
      todos.value = response.data
    } catch (err) {
      console.error(err)
    }
  }

  //todo 항목 업데이트
  const updatedTodo = async updatedTodo => {
    try {
      const response = await axios.put(
        `${API_URL}/${updatedTodo.id}`,
        updatedTodo,
      )
      console.log('response---', response)
      const index = todos.value.findIndex(todo => todo.id === updatedTodo.id)
      if (index === -1) todos.value[index] = updatedTodo
      todos.value[index] = response.data
    } catch (err) {
      console.error(err)
    }
  }

  //todo 리스트 삭제하기
  const deleteTodo = async todoId => {
    try {
      await axios.delete(`${API_URL}/${todoId}`)
      todos.value = todos.value.filter(todoId)
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }

  return { todos, loading, error, fetchTodos, addTodo, updatedTodo, deleteTodo }
}
