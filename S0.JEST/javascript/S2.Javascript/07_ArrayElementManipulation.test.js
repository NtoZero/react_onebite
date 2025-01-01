describe("배열 요소 조작", () => {
  let arr;
  test("1. push : 요소 입력 후 총 개수 반환", () => {
    arr = [1, 2, 3];
    const newLength = arr.push(4, 5, 6, 7);
    console.log(`
        arr = ${arr}
        newLength = ${newLength}
    `);
  });
  test("2. pop : 배열의 맨 뒤에 있는 요소를 제거하고 반환", () => {
    arr = [1, 2, 3];
    let poppedItem = arr.pop();
    console.log(`poppedItem : ${poppedItem}`);
  });
  /* shift와 unshift 메서드는 push/pop 보다 느리게 동작한다.*/
  test("3. shift : 배열의 맨 앞에 있는 요소를 제거하고 반환", () => {
    arr = [1, 2, 3];
    console.log(`arr.shift(): ${arr.shift()}`);
  });
  test("4. unshift", () => {
    arr = [1, 2, 3];
    log(arr);
    console.log(`arr.unshift(0): ${arr.unshift(0)}`);
  });
  test("5. slice : 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환", () => {
    arr = [1, 2, 3, 4, 5];
    log(arr);
    let startIdx = 2;
    let endIdx = 5;
    console.log(`arr.slice(${startIdx}, ${endIdx}): ${arr.slice(startIdx, endIdx)}`);

    let idx = 2;
    // idx부터 끝까지
    console.log(`arr.slice(${idx}): ${arr.slice(idx)}`);
    // idx가 -n이면 뒤에서부터 n개 자르기
    idx = -2;
    console.log(`arr.slice(${idx}) : ${arr.slice(idx)}`);
  });
  test("6. concat", () => {});
});

function log(arr) {
  console.log(`============ 원 배열 : ${arr} ============`);
}
