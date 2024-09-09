/*
*
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
*
* */

describe("상수는 재할당 되지 않는다.", () => {
  const a = 3;
  test("상수의 값은 항상 일치함.", () => {
    expect(a).toBe(3);
    console.log(a);
  });

  test("상수의 값은 재할당 될 수 없음.", () => {
    expect(() => {
      a = 5;
    }).toThrow(TypeError);
  });
});
