/* 
- 원시 타입
    Number
    String
    Boolean
    Null
    Undefined
- 객체 타입
    Object
			Array
			Function
			RegexExp
*/

/* 1. Number Type */
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 사칙연산과 모듈러 연산이 가능
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num3);


let inf = Infinity;
// console.log(inf);
let mInf = -Infinity;
// console.log(mInf);

// NaN: Not a Number -> 연산이 실패했을 때 
let nan = NaN;
// console.log(1 * "hello");


/* 2. String Type */
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

// console.log(introduce);
	/* 템플릿 리터럴 (Template Literal): */
// let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);


/* 3. Boolean Type */
let isSwitchOn = true;
let isEmpty = false;

/* 4. Null Type (아무것도 없다) */
let empty = null;

/* 5. Undefined Type (변수에 값을 할당하지 않은 상태) */
let none;
console.log(none);
// null과의 차이점은 개발자가 '직접 입력'해야하는 '아무것도 포함되지 않은 값', 