const p1 = { name: "john", age: 20 };

//const 속성변경은 가능
p1.age = 22;
console.log(p1);

//객체를 재할당하는 것은 불가
p1 = { name: "lee", age: 25 }; //이 부분 주석하면 결과 나옴

//새로운 객체 값, 즉 주소값이 바뀌기
//때문에 const로 선언했을 때 에러가 발생한다.
