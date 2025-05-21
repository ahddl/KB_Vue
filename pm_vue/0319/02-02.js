let msg = "GLOBAL"; //전역변수
function outer() {
  let msg = "OUTER";
  console.log(msg);
  if (true) {
    let msg = "BLOCK";
    console.log(msg);
  }
}
outer();
