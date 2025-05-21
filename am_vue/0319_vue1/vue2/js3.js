// fetch("https://jsonplaceholder.typicode.com/posts")  //fetch는 비동기 함수이다.
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    let posts = response.json(); //json도 비동기 함수이다?
    console.log(posts[0]);
  } catch (err) {
    console.error(err);
  } finally {
    console.log("끝");
  }
}
getPosts();

//이 방법 많이 사용하므로 눈으로 문법 익히기
