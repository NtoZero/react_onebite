let Falsy = [undefined, null, 0, -0, NaN, "", 0n];
let Truthy = ["hello", 123, [], {}, () => {}, "six"];

describe("단락회로 평가", () => {
  test("Falsy && Truthy 면 우측 Truthy 값이 반환된다.", () => {
    for (let i = 0; i < 5; i++) {
      console.log(
        `Falsy && Truthy : Falsy${i} : ${Falsy[i]}, Truthy${i} : ${Truthy[i]} => ${Falsy[i] && Truthy[i] ? Falsy[i] : Truthy[i]}`
      );
    }
  });

  test("Truthy || Truthy 면 첫째 Truthy 값이 반환된다.", () => {
    for (let i = 0; i < 5; i++) {
      console.log(
        `Truthy && Truthy : Truthy${i + 1} : ${Truthy[i + 1]}, Truthy${i} : ${Truthy[i]} => ${Truthy[i + 1] || Truthy[i] ? Truthy[i + 1] : Truthy[i]}`
      );
    }
  });
});
