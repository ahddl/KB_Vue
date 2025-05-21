<script setup></script>

<template>
  <div class="IntroPage">
    <h2>인트로페이지</h2>
    <nav>
      <RouterLink to="/intro/about">서브 메뉴1: 어바웃</RouterLink>
      <RouterLink to="/intro/trans">서브 메뉴2: 트랜스</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.IntroPage {
  background-color: aqua;
}
</style>
