describe("Spread 연산자는 배열(혹은 객체, 이터러블 등)의 값을 펼쳐서 사용할 때 쓴다.", () => {
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
  test("Rest 매개변수는 함수 정의에서 여러 개의 인자를 하나의 배열로 모아 받을 때 사용한다.", () => {
    let arr1 = [1, 2, 3];
    let arr2 = [4, ...arr1, 5, 6];
    function funcB(one, two, ...ds) {
      // 여러 개의 인자가 하나의 배열이 된다.
      console.log(ds);
    }

    `funcB(...arr1): ${funcB(...arr1)}`;
    `funcB(...arr2): ${funcB(...arr2)}`;
  });
});
