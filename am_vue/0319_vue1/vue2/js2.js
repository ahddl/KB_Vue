let obj = { name: "홍길동", age: 20 };
let obj2 = obj;

console.log(obj2 === obj);

let obj3 = { ...obj };

let arr1 = [10, 20, 30, 40];
let arr2 = arr1;
console.log(arr1 === arr2);

let arr3 = { ...arr1 };

console.log(arr1);
console.log(arr3);
