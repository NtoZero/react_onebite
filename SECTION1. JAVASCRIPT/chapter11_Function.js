/* 함수 */

function getArea (width, height) { // width, height는 매개변수
    let area = width * height;
    
    function another() { // 중첩 함수
        console.log("another");
    }
    another();

    return area;
}

let area1 = getArea(10, 20); // (인수)
console.log(area1);
let area2 = getArea(30, 20); // (인수)
console.log(area2);
let arae3 = getArea(120, 300); // (인수)
console.log(area3);