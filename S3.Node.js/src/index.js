/* CJS */
/* const moduleData = require("./math");

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

// 구조 분해 할당 이용
const {add, sub} = require("./maht");

console.log(add(2,3));
console.log(sub(2,3)); */

/* ESM */
// import { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(4, 2));

// default function은 이름을 마음대로 정의 가능
// import mul from "./math.js";

// import mul, { add, sub } from "./math.js";
// console.log(mul(2, 5));

/* 라이브러리 이용하기 */

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
