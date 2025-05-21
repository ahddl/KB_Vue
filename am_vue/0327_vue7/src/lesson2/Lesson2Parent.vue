<script>
export default {
  name: 'Lesson2Parent',
  data() {
    return {}
  },
  components: { CheckBox2 },
}
</script>

<template>
  <div class="lesson2parent">
    <h1>컨포넌트 분리 - Lesson2parent</h1>
    <CheckBox2 />
  </div>
</template>

<style scoped>
.lesson2parent {
  border: solid salmon;
}
</style>
