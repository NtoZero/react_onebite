describe("배열 순회", () => {
  let arr = [1, 2, 3];
  test("1.1. 배열 인덱스 (length는 배열의 기본 프로퍼티)", () => {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  });
  test("1.2. for of 반복문", () => {
    for (let item of arr) {
      console.log(item);
    }
  });
});

describe("객체 순회", () => {
  let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
  };
  test("2.1. Object.keys 사용", () => {
    // Object.keys는 배열을 반환
    let keys = Object.keys(person);
    for (let key of keys) {
      console.log(`key : ${key}`);
    }
  });
  test("2.2. Object.values 사용", () => {
    // Object.values 또한 배열을 반환
    let values = Object.values(person);
    for (let value of values) {
      console.log(`value : ${value}`);
    }
  });
  test("2.3. for in 사용", () => {
    for (let key in person) {
      console.log(`key: person[key] => ${key}: ${person[key]}`);
    }
  });
});
