// import { name, age, greet } from "./modules/01_named_export.js";

// console.log(name);
// console.log(age);
// console.log(greet());

//별칭
// import { name as userName, age as userAge } from "./modules/01_named_export";

// console.log(userName);
// console.log(userAge);

//전부 가져오기
// import * as utils from "./modules/01_named_export";
// console.log(utils.age);
// console.log(utils.name);
// console.log(utils.greet());

//default export
import addFunction from "./modules/02_default_export";

console.log(addFunction(1, 2)); // 3

//03 export
import { name, age, greet } from "./modules/03_exports.js";
console.log(name);
console.log(age);
console.log(greet());
