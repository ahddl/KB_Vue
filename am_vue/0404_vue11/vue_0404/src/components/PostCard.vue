<script setup></script>

<template>
  <div class="PostCard">
    <p>포스트 글 제목</p>
    <span>2025. 04. 05</span>
  </div>
</template>

<style scoped>
.PostCard {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s;
}
.PostCard:hover {
  background-color: #e9e9e9;
}
.PostCard p {
  font-weight: bold;
}
.PostCard span {
  color: #666;
  font-size: 0.75em;
}
</style>
