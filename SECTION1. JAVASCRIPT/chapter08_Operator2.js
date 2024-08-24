/* 1. null 병합 연산자 (??)
    -> 존재하는 값을 추려내는 기능
    -> null, undefined가 아닌 값을 찾아내는 연산자
*/

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
let var5 = var1 ?? var3; // 20
let var6 = var3 ?? var2; // 20 (null, undefined가 아닌 우선하는 값 선택)
// console.log(var6);

let userName; //= "이정환";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;
// console.log(displayName);


/* 2. typeof 연산자
-> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
*/
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
// console.log(t1);


/* 3. 삼항 연산자
    -> 항을 3개 사용
    -> 조건식 ? 값 : 값 
*/
let var8 = 10;

// 요구사항 : 변수 res에 var8의값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
