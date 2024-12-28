describe("case문 확인", () => {
  test("영어 동물 이름을 입력하면 한글 동물 이름을 console에 출력한다.", () => {
    const engNmOfAnimal = "bear";
    const korName = selectAnimal(engNmOfAnimal);
    expect(korName).toBe("곰");
    console.log(korName);
  });
});

function selectAnimal(animal) {
  switch (animal) {
    case "cat": {
      return "고양이";
      break;
    }
    case "dog": {
      return "강아지";
      break;
    }
    case "bear": {
      return "곰";
      break;
    }
    case "snake": {
      return "뱀";
      break;
    }
    case "tiger": {
      return "호랑이";
      break;
    }
    default: {
      return "그런 동물은 전 모릅니다";
    }
  }
}
