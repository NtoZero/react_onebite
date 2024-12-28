/** 1. var의 호이스팅 */
console.log(a); // undefined
var a = 10;
console.log(a); // 10
/*
    실제 호이스팅 동작

    var a;          // 선언이 호이스팅됨
    console.log(a); // undefined (초기화 이전)
    a = 10;         // 초기화
    console.log(a); // 10
     * */

/** 2. let과 const의 호이스팅 */
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
/*
    let과 const도 호이스팅되지만,
    **초기화되기 전까지는 접근할 수 없는 TDZ(Temporal Dead Zone)**에 들어감
* */

/** 3. 함수 선언의 호이스팅 */
console.log(sum(2, 3)); // 5

function sum(a, b) {
  return a + b;
}

/** 4. 함수 표현식의 호이스팅 */
console.log(multiply(2, 3)); // TypeError: multiply is not a function

var multiply = function (a, b) {
  return a * b;
};

// ReferenceError: Cannot access 'multiply' before initialization
// const multiply = function (a, b) {
//     return a * b;
// };

/*
    var multiply; // 선언이 호이스팅됨
    console.log(multiply); // undefined (초기화 이전)
    multiply = function (a, b) {
      return a * b;
    };
* */

/** 5. 클래스의 호이스팅 */
/*
 * 클래스 선언도 호이스팅되지만 초기화는 되지 않으므로, 선언 전에 접근하면 ReferenceError가 발생
 * */
// const person = new Person(); // ReferenceError: Cannot access 'Person' before initialization

class Person {
  constructor(name) {
    this.name = name;
  }
}
