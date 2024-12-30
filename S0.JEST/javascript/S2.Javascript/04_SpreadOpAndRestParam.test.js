describe("Spread 연산자", () => {
  test("배열 Spread 연산자", () => {
    let arr1 = [1, 2, 3];
    let arr2 = [4, ...arr1, 5, 6];
    console.log(`arr1 : ${arr1}`);
    console.log(`arr2 : ${arr2}`);
  });
  test("객체 Spread 연산자", () => {
    let obj1 = {
      a: 1,
      b: 2,
    };
    let obj2 = {
      ...obj1,
      c: 3,
      d: 4,
    };
    console.log(obj2);
  });
  test("함수 Spread 연산자", () => {
    let arr1 = [1, 2, 3];
    function funcA(p1, p2, p3) {
      console.log(p1, p2, p3);
    }
    funcA(...arr1);
  });
});

describe("Rest 매개변수", () => {
  test("테스트1", () => {
    let arr1 = [1, 2, 3];
    let arr2 = [4, ...arr1, 5, 6];
    function funcB(one, two, ...ds) {
      console.log(ds);
    }

    `funcB(...arr1): ${funcB(...arr1)}`;
    `funcB(...arr2): ${funcB(...arr2)}`;
  });
});
