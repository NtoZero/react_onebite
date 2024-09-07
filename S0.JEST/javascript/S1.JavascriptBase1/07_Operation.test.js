describe("동등 연산자", () => {
  test("엄격한 동등 연산자는 숫자와 문자를 구분한다.", () => {
    const result = 1 === "1";
    console.log(result);
    expect(result).toBe(false);
  });

  test("느슨한 동등 연산자는 숫자와 문자를 구분하지 않는다.", () => {
    const result = 1 == "1";
    console.log(result);
    expect(result).toBe(true);
  });
});
