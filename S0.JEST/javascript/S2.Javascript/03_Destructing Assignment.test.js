describe("구조분해할당", () => {
  test("1. 배열의 구조분해 할당", () => {
    let arr = [1, 2, 3];
    let [one, two, three, four = 4] = arr;
    console.log(`arr : ${arr}`);
    console.log(`one: ${one}, two: ${two}, three: ${three}`);
  });
  test("2. 객체의 구조분해 할당", () => {
    let person = {
      name: "이정환",
      age: 27,
      hobby: "테니스",
    };
    let { age, hobby, name, extra = "hello" } = person;
    console.log(`age: ${age}, hobby: ${hobby}, name:${name}, extra: ${extra}`);
  });
  test("3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법", () => {
    let person = {
      age: 27,
      hobby: "테니스",
      name: "이정환",
      favoriteFood: "계란찜",
    };
    const func = ({ name, age, hobby, extra }) => {
      // 이정환 27 테니스 undefined
      console.log(name, age, hobby, extra);
    };
    func(person);
  });
});
