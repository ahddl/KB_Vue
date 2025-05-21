<script setup></script>

<template>
  <div>
    <header>
      <slot name="header"> </slot>
    </header>
    <body>
      <slot></slot>
      <!-- 기본 값이 default -->
    </body>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped></style>
