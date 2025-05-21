<script>
export default {
  name: 'CheckBox',
  data() {
    return {}
  },
  //1. 배열형태
  props: ['id', 'labelName'],
}
</script>

<template>
  <div class="CheckBox">
    <label :for="id">{{ labelName }}</label> : <input type="text" :value="id" :id="id" />
  </div>
</template>

<style scoped>
.CheckBox {
  border: 1px solid tomato;
  padding: 1rem;
}
</style>
