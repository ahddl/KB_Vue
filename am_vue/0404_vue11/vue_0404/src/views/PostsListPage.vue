<script setup>
import PostCard from '@/components/PostCard.vue'
</script>
<template>
  <section class="container postslist">
    <h2>글목록</h2>

    <div class="loading">게시물을 불러오는 중...</div>

    <div class="error">에러메시지</div>

    <div>
      <div class="no-posts">게시물이 없습니다.</div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </section>
</template>

<style scoped>
.loading,
.error,
.no-posts {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.error {
  color: #dc3545;
}
</style>
