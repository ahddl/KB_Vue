<template>
  <section class="container postwrite">
    <h2>글쓰기 페이지</h2>
    <div class="form-error">에러 메시지</div>
    <form>
      <label for="title">제목</label>
      <input type="text" id="title" placeholder="제목을 입력하세요" />
      <label for="content">내용</label>
      <textarea id="content"></textarea>
      <div class="btns-group">
        <button type="button">글목록</button>
        <button type="submit">글작성</button>
        <button type="button">초기화</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.postwrite form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
