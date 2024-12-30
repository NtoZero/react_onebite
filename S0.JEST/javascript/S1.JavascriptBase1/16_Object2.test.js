describe("Object2 테스트", () => {
  const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
    cry: (sound) => {
      console.log(`cat cries ${sound}`);
    },
  };
  test("1. 상수 객체에 새 객체를 할당하면 오류를 발생시킨다.", () => {
    expect(() => {
      animal = { a: 1 };
    }).toThrow(TypeError);
  });
  test("2. 상수 객체에서 프로퍼티 변경은 가능하다.", () => {
    console.log(animal);
    animal.type = "강아지";
    expect(animal.type).toBe("강아지");
    delete animal.name;
    expect(animal.name).toBeUndefined();
    console.log(animal);
  });
  test("3.메서드란 값이 함수인 프로퍼티를 말한다.", () => {
    console.log(animal.cry("야옹!!!!"));
  });
});
