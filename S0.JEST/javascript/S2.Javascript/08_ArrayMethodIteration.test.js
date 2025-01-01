describe("배열 순회 및 탐색 메서드", () => {
  test("1. forEach", () => {
    let arr = ["김밥", "떡볶이", "치킨"];
    arr.forEach((item, idx, arr) => {
      console.log(`idx. item : ${idx}. ${item}`);
    });
  });
  test("2. includes : 배열에 특정 요소가 있는지 확인하는 메서드", () => {
    let arr = [1, 2, 3];
  });
  test(
    "3. indexOf : 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드" +
      "단, 모두 같은 값이면 첫 번째 만나는 값의 인덱스를 반환." +
      "없다면 -1 반환",
    () => {
      let arr = [1, 2, 3];
      let target = 3;
      console.log(`arr.indexOf(${target}) : ${arr.indexOf(target)}`);
    }
  );
  test(
    "4. findIndex :" +
      "모든 요소를 순회하면서, 콜백함수가 참을 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드",
    () => {
      let arr = [1, 2, 3];
      let target = 3;
      console.log(`arr.findIndex(function) : ${arr.findIndex((item) => item === target)}`);
    }
  );
  test(
    "5. find :" + "모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환 (객체면 객체)",
    () => {
      let arr = [{ name: "이정환" }, { name: "홍길동" }];
      let found = arr.find((item) => item.name === "이정환");
      console.log(`arr.find((item) => item.name === '이정환') : ` + JSON.stringify(found));
    }
  );
});
