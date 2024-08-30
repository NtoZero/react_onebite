// 5가지 요소 순회 및 탐색 메서드
// 1. forEach(콜백함수) 콜백함수의 매개변수는 최대 3개 value, 인덱스, 원본배열
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});
                    //매개변수가 4개라면?
arr1.forEach(function(a, b, c, d) {
    // 이 때, 마지막 d는 undefined가 됨.
    // console.log(`a : ${a}, b: ${b}, c: ${c}, d: ${d}`) 
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드.
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false
// console.log(`isInclude : ${isInclude}`); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 단, 모두 같은 값이면 첫번째 만나는 값의 인덱스 반환. 없다면 -1 반환.
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20); //-1
let index2 = arr3.indexOf(2); // 0
// console.log(`index2: ${index2}`)


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수가 참을 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
  (item) => item === 999
);

console.log(`findedIndex: ${findedIndex}`);

/* indexOf는 원시타입에 대한 인덱스만 찾을 수 있음. 얕은 비교를 통해 비교함. 
즉, 참조값을 통해 비교하므로, 프로퍼티 기준으로는 비교가 이뤄지지 않음.*/
let objectArr = [
    { name: "이정환" },
    { name: "홍길동" },
];

console.log(
`indexOf는 참조값만 비교하는 얕은 복사다. : ${objectArr.indexOf({ name: "이정환" })}`
);

console.log(
`findIndex Predicate :  ${objectArr.findIndex(
    (item) => item.name === "이정환"
)}`
);


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환 (객체면 객체)

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
];

const finded = arr5.find(
  (item) => item.name === "이정환"
);

console.log(finded);