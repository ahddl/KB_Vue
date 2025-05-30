//배열과 함께 사용되는 고차함수
//덧셈과 뺄셈에 의해 정의된다.
let number = [50, 10, 30, 55, 60];
number.sort((a, b) => {});
console.log(number);

//sort

// 배열과 함꼐 쓰이는 고차함수
//  forEach, find, findIndex
// some, every, filter, map,
// flatmap, sort ,recduce

const fruits = ["사과", "바나나", "키위", "딸기"];
fruits.forEach((item, i, arr) => {
  console.log(item);
});
//안쓸꺼면 언더바, 순서가 중요, name은 작명하는 거임

const item1 = { name: "김밥", price: 1000 };
const item2 = { name: "라면", price: 2000 };
const item3 = { name: "순대", price: 3000 };
const products = [item1, item2, item3];

//find : 조건에 맞는 아이템을 찾을 때
console.clear();
let find1 = products.find((item) => item.name === "김밥");
console.log("find--", find1);

//findIndex - 제일 먼저 조건에 맞는 아이템의 인덱스 반환
find1 = products.findIndex((item) => item.name === "김밥");
console.log("find--", find1);

//some = 배열의 아이템들이 부분적으로 조건에 맞는지 확인.
//반환값은 (bool)
find1 = products.some((item) => item.name === "김밥");
console.log("find--", find1);

//every - 전체 조건이 맞는지 확인
//반환값은 (bool)
find1 = products.every((item) => item.name === "김밥");
console.log("find--", find1);

//fillter - 조건에 맞는 아이템을 새로운 배열로 반환
find1 = products.filter((item) => item.name === "김밥");
console.log("find--", find1);

//map
let numbers2 = [50, 12, 30, 55, 60];
let result = numbers2.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log("map--", result);

//flatmap - 중첩된 배열을 펼쳐서 새로운 배열로 생성
result = result.flatMap(() => [1, 2]);
console.log(result);

result = ["test"].flatMap((text) => text.split(""));
console.log(result);

const num = [0, 5, 20, 5, 80];
//오름차순
let test = num.sort((a, b) => a - b);
console.log(test);

//내림차순
let test2 = num.sort((a, b) => b - a);
console.log(test2);

//reduce
let test3 = num.reduce((sum, v) => (sum += v), 0);
console.log(test3);
