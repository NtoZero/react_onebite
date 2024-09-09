/*
*
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
*
* */

/* NaN을 발생시키는 경우 */
describe("문자와 숫자를 산술연산하면 NaN이 발생한다.", () => {
  test("문자 - 숫자 = NaN", () => {
    const result = "rest" - 1;
    expect(result).toBeNaN();
  });

  test("문자 * 숫자 = NaN", () => {
    const result = "rest" * 3;
    expect(result).toBeNaN();
  });

  test("문자 / 숫자 = NaN", () => {
    const result = "rest" / 3;
    expect(result).toBeNaN();
  });
});

test("문자와 숫자의 결합은 NaN이 아니다.", () => {
  const result = "str" + 100000;
  console.log(`결과값 : ${result}`);
  expect(result).not.toBeNaN();
});

test("0을 3으로 나눈 결과는 0이다.", () => {
  const result = 0 / 3; // 0을 0으로 나누면 NaN
  expect(result).toBe(0);
});

test("3을 0으로 나눈 결과는 Infinity이다.", () => {
  const result = 3 / 0;
  expect(result).toBe(Infinity);
});
