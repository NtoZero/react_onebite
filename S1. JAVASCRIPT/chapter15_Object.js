/* 1. 객체 생성 */
/* 1-1. 객체 생성자 */
let obj1 = new Object();

/* 1-2. 객체 리터럴 (주로 사용) */
let obj2 = {};

/* 2. 객체 프로퍼티 (객체 속성) Key : Vale */
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  extra: {},
  // 키는 문자열, 숫자로 사용 가능
  10: 20,
  // 띄어쓰기가 포함된 키를 사용하고자 하면 큰 따옴표 활용
  "like cat": true,
};

/* 객체 프로퍼티를 다루는 방법 */
/* 3.1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법) */
let name = person.name; // 이정환
// console.log(name)

let age = person["age"]; // 괄호표기법 키는 문자열 사용
// console.log(age)

let property = "hobby";
let hobby = person[property];
// console.log(hobby)

/* 3.2. 새로운 프로퍼티를 추가하는 방법 */
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
// console.log(person);

/* 3.3 프로퍼티를 수정하는 방법 */
person.job = "educator";
person["favoriteFood"] = "초콜릿";
// console.log(person);

/* 3.4. 프로퍼티를 삭제하는 방법 */
delete person.job;
delete person["favoriteFood"];
console.log(person);

/* 3.5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자) */
let result1 = "name" in person;
// console.log(result1);
let result2 = "cat" in person;
// console.log(result2);
