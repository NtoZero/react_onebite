/*
 *null 병합 연산자(??)는 JavaScript에서 null 또는 undefined인 경우에만 대체 값을 제공하도록 하는 논리 연산자입니다.
 * 이 연산자는 왼쪽 피연산자가 null 또는 undefined일 때
 * 오른쪽 피연산자의 값을 반환하고, 그렇지 않으면 왼쪽 피연산자의 값을 반환
 * */

describe("null 병합연산자 (??)", () => {
  test("undefined, null 이외이 값을 반환한다.", () => {
    const result = undefined ?? "a";
    console.log(result);
    expect(result).toBe("a");
  });
});
