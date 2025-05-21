<template>
  <section class="container postedit">
    <h2>글 수정 페이지</h2>
    <div class="loading">게시글 로딩 중...</div>

    <div class="error-message">
      스토어 에러 메시지
      <button class="back-btn">글목록으로 돌아가기</button>
    </div>

    <form class="edit-form">
      <div class="form-error">에러메시지</div>

      <label for="title">제목</label>
      <input type="text" id="title" placeholder="제목을 입력하세요" />

      <label for="content">내용</label>
      <textarea id="content"></textarea>

      <div class="btns-group">
        <button type="button">글목록</button>
        <button type="submit">수정완료</button>
        <button type="button">초기화</button>
      </div>
    </form>

    <div class="not-found">
      <p>존재하지 않는 게시물입니다.</p>
      <button>글목록으로 돌아가기</button>
    </div>
  </section>
</template>

<style scoped>
.postedit form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
