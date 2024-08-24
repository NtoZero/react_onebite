/* 1. 변수 (선언 - 초기화) */
let age;

age = 30;


/* 2. 상수 (가장 먼저 초기화 필수) */
const birth = "1997.01.07";


/* 3. 변수 명명규칙  */
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $name;
let _name;
// let #name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let const = "3";


/* 4. 변수 명명 가이드 - 최대한 정보 명시  */
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
