/* 콜백함수(Callback Function) : 
    **콜백 함수(Callback Function)**란 JavaScript에서 다른 함수에 **인수(매개변수)**로 전달되어, 
    특정 작업이 완료된 후 호출되는 함수입니다. 
    즉, 콜백 함수는 함수 내에서 동작이 완료되거나 특정 조건이 충족되었을 때 호출되는 함수
*/


/* 1. 콜백함수 */
function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub() {
    console.log("i am sub");
}

// main(sub);

/* 1-1. 콜백함수와 익명함수의 결합 */
// main(function() {
//     console.log("i am sub");
// });

/* 1-2. 콜백함수와 화살표함수의 결합 */
// main(() => {
//     console.log("i am sub");
// });

/* 2. 콜백함수의 활용 */
function repeat(count) {
    for(let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count) {
    for(let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

function repeatTriple(count) {
    for(let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

// repeatDouble(5);
// console.log(repeat(5));

/* 2-1. 콜백함수를 이용한 리팩토링 */
function repeat2(count, callback) {
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat2(5, function(idx) {
    console.log(idx);
});

repeat2(5, function(idx) {
    console.log(idx * 2);
});

repeat2(5, (idx) => {
    console.log(idx * 3);
});