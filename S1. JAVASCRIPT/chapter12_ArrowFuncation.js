/* 1. 함수 표현식 */

function funcA() {
  console.log("funcA");
}

// 함수 자체를 변수에 저장할 수 있음 단, 함수 이름만 가져와야 함.
let varA = funcA;
// console.log(varA);
// varA(); // funcA()

/* 주의사항. 변수에 함수를 직접 할당하면 해당 할당된 함수는 선언된 것이 아니다. (익명 함수) */
let varB = function funcB() {
  // 이름 funcB를 생략해도 된다.
  console.log("funcB");
};
// varB(); // funcB
// funcB(); // 선언 X

/* 2. 화살표 함수
 * ES6(ECMAScript 2015)**에서 도입된 간결한 함수 표현식
 * 기존의 function 키워드를 대체하며, 더 짧은 문법과 this 바인딩 방식의 차이
 * */
let varC = () => {
  return 1;
};

let varC2 = () => 1;
// console.log(varC2()); // 1

let varC3 = (value) => value + 1;
// console.log(varC3(11)); // 12

let varC4 = (value) => {
  console.log(value);
  return value + 1; // return문 추가
};

console.log(varC4(10)); // 11
