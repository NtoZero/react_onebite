describe("배열 테스트", () => {
  let arrA = new Array(); // 배열 생성자
  let arrB = []; // 배열 리터럴 (대부분 사용)

  let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
  test("배열을 생성할 수 있다.", () => {
    arrC.forEach((a) => console.log(`type of a : ${typeof a}`));
  });

  test("배열 요소에 접근할 수 있다.", () => {
    let item1 = arrC[0];
    let item2 = arrC[1];

    console.log(`item1: ${item1}, item2: ${item2}`);
  });
});
