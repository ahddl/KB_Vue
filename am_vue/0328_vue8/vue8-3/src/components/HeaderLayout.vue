<script>
export default {
  name: 'HeaderLayout',
  data() {
    return {}
  },
}
</script>

<template>
  <div class="headerlayout">
    <h1>작심</h1>
  </div>
</template>

<style scoped>
/* 앱제목 header */
.hd {
  background-color: var(--gray700);
  padding: var(--space-l) 0 calc(var(--space-l) * 1.8);
  text-align: center;
}
.hd h1 {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 2rem;
  font-weight: 500;
}
#app > *:not(.hd) {
  max-width: 500px;
  width: calc(100% - var(--space-l));
  margin: auto;
}
</style>
