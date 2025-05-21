<template>
  <section class="container postdetail">
    <h2>글상세</h2>

    <div class="loading">게시물을 불러오는 중...</div>

    <div class="error">
      에러메시지
      <div class="back-action">
        <button>글목록으로 돌아가기</button>
      </div>
    </div>

    <div class="content">
      <div>
        <p class="title">글제목</p>
        <p class="content">상세내용</p>
        <p class="author">작성자</p>
        <p class="date">2025. 04. 05</p>
      </div>
      <div class="btns-group">
        <button>글목록</button>
        <button>글수정</button>
        <button>글삭제</button>
      </div>
    </div>

    <div class="not-found">
      <p>존재하지 않는 게시물입니다.</p>
      <button>글목록으로 돌아가기</button>
    </div>
  </section>
</template>

<style scoped>
.postdetail > div > p {
  padding: 1em 0;
  border-bottom: 1px dotted #ccc;
}
.title {
  font-size: 1.5em;
  font-weight: bold;
}
.content {
  line-height: 1.6;
}
</style>
