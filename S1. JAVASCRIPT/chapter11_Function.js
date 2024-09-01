/* 함수 */

let area1 = getArea(10, 20); // (인수)
console.log(area1);
let area2 = getArea(30, 20); // (인수)
console.log(area2);
let arae3 = getArea(120, 300); // (인수)
console.log(area3);

/* 호이스팅(Hoisting) :
JavaScript에서 **호이스팅(Hoisting)**이란 변수, 함수 선언문이 해당 코드가 실행되기 전에 
코드의 최상위로 "끌어올려지는" 것처럼 동작하는 JavaScript의 고유한 행동 방식을 말합니다. 
그러나 실제로는 코드의 물리적인 이동이 일어나는 것이 아니라, 
JavaScript 엔진이 코드 실행 전에 변수와 함수 선언을 미리 메모리에 등록하는 과정을 의미합니다. */

function getArea (width, height) { // width, height는 매개변수
    let area = width * height;
    
    function another() { /* 중첩 함수 */
        console.log("another");
    }
    another();

    return area;
}