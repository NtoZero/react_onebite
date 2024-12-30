describe("Falsy 한 값", () => {
  let Falsy = [undefined, null, 0, -0, NaN, "", 0n];
  test("Falsy 배열", () => {
    Falsy.forEach((item) => console.log(`item : ${item} - TorF : ${item ? true : false}`));
  });
});

describe("Truthy 한 값", () => {
  // 빈배열, 빈 객체, 빈 함수 -- 객체형이라면 내부 데이터가 비어있는 것과 무관하게 Truthy한 값이다.
  let Truthy = ["hello", 123, [], {}, () => {}];
  test("Truthy 배열", () => {
    Truthy.forEach((item) => {
      console.log(`item : ${item} - TorF : ${item ? true : false}`);
    });
  });
});

describe("활용", () => {
  test("테스트", () => {
    function printName(item) {
      if (!item) {
        console.log("item의 값이 없음");
        return;
      }
      console.log(item.name);
    }
    let truthy = { name: "이정환" };
    printName(truthy);
    let falsy;
    printName(falsy);
  });
});
