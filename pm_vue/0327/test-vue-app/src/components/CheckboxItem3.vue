<script setup>
//defineProps
//부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수
defineProps({
  id: [Number, String], //문자열과 숫자형만 가능
  name: [String], //문자열만 가능
  checked: {
    type: Boolean, //불리언 타입만 가능
    default: false,
    // required: false, //기본 값 true로 되어 있음
  },
});
</script>

<template>
  <div class="checkboxitem">
    <input type="text" />
    <li><input type="checkbox" :checked="checked" />{{ name }}</li>
  </div>
</template>

<style scoped></style>
