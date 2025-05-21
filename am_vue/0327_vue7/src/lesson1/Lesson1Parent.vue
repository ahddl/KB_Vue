<script>
export default {
  name: 'Lesson1Parent',
  data() {
    return {}
  },
  components: { CheckBox },
}
</script>

<template>
  <div class="lesson1parent">
    <h1>컨포넌트 분리 - Lesson1parent</h1>
    <CheckBox id="no1" labelName="이름" />
    <CheckBox id="no2" labelName="비밀번호" />
    <CheckBox id="no3" labelName="이메일" />
    <CheckBox id="no4" labelName="별명" />
  </div>
</template>

<style scoped></style>
