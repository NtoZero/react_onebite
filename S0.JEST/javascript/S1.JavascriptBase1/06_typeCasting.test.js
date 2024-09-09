describe("명시적 형변환", () => {
  test("parseInt()로 문자열을 int로 변경할 수 있다.", () => {
    const result = parseInt("1000");
    expect(typeof result).toBe("number");
  });

  test("parseInt 함수로 정률 문자열을 변환하면 소수점은 절삭된다.", () => {
    const result = parseInt("1.1");
    console.log(result);
    expect(result).toBe(1);
  });

  test("parseInt()로 문자열을 int로 변경할 수 있다. 이 때, 뒷 값은 절삭된다.", () => {
    const result = parseInt("1000원이야.");
    expect(result).toBe(1000);
  });

  test("문자열이 앞에 있는 값은 parseInt()로 문자열을 int로 변경하면 NaN을 출력한다.", () => {
    const result = parseInt("이건1000원이야.");
    // console.log(result);
    expect(result).toBeNaN;
  });

  test("Number()로 문자열에서 숫자 타입으로 변환이 가능하다.", () => {
    const result = Number("1");
    expect(typeof result).toBe("number");
  });

  test("Number()로 문자열에서 정률 문자열도 숫자 타입으로 변환이 가능하다.", () => {
    const result = Number("1.1");
    expect(result).toBe(1.1);
  });

  test("String() 함수로 숫자에서 문자열로의 변환이 가능하다.", () => {
    const result = String(1.1);
    expect(result).toBe("1.1");
  });
});
