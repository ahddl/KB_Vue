<script setup>
import { onMounted } from 'vue';
import { useStudent } from '@/api/Students';
//컴포저블 함수 구조분해할당
const { students, error, fetchAllStudents } = useStudent();

onMounted(() => {
  fetchAllStudents();
});
</script>

<template>
  <div>Students</div>
</template>

<style scoped></style>
