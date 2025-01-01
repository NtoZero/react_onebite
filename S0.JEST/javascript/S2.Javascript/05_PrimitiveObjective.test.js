describe("원시 타입", () => {
  test("실제 메모리의 값은 수정되지 않는다. (불변 값)", () => {
    // 메모리 어느곳에 1 새롭게 저장
    let p1 = 1;
    // 메모리 어느곳에 1 새롭게 저장
    let p2 = p1;
    // 메모리 어느곳에 2 새롭게 저장
    p2 = 2;
    console.log(`p1 : ${p1}, p2 : ${p2}`);
  });
});

describe("객체 타입", () => {
  let o1 = { name: "이정환" };
  // o1에는 참조값, 별도의 메모리 공간을 가리키는 주소 0x0000C가 저장. 그 주소로
  // 객체는 동적인 메모리를 갖기 때문.
  // o2에는 0x0000C가 저장. 원시 타입과 다르다.
  let o2 = o1;
  test("객체 타입은 가변 값이다. 실제 메모리의 값을 수정한다.", () => {
    console.log(`o1 : ${JSON.stringify(o1)}`);
  });

  test("얕은 복사에서는 o2의 내부 값이 바뀔 때 o1의 값도 수정될 수 있다.", () => {
    console.log(`o1: ${JSON.stringify(o1)}, o2: ${JSON.stringify(o2)}`);
    o2.name = "홍길동";
    console.log("o2.name 변경 완료 (얕은 복사)");
    console.log(`o1: ${JSON.stringify(o1)}, o2: ${JSON.stringify(o2)}`);
  });

  test("Spread 연산자를 이용해 깊은 복사를 수행할 수 있다. (전혀 다른 메모리)", () => {
    console.log(`===========o3에 o1을 Spread 연산자로 깊은 복사하기`);
    let o3 = { ...o1 };
    console.log(`
     --------------------------------------------------
     o1: ${JSON.stringify(o1)}, o2: ${JSON.stringify(o2)} , o3: ${JSON.stringify(o3)}`);
    let newName = "홍길동";
    o2.name = newName;
    console.log(`o2.name 변경 완료 (얕은 복사), ${newName}`);
    console.log(`o1: ${JSON.stringify(o1)}, o2: ${JSON.stringify(o2)}, o3: ${JSON.stringify(o3)}`);
  });
});

describe("얕은 비교, 깊은 비교", () => {
  let obj = { name: "이정환" };
  let shallowCopy = obj;
  let deepCopy = { ...obj };

  console.log(
    `obj: ${JSON.stringify(obj)}, shallowCopy: ${JSON.stringify(shallowCopy)}, deepCopy: ${JSON.stringify(deepCopy)}`
  );

  test("참조값 여부를 비교하는 얕은 비교는 '==='", () => {
    console.log(`obj === shallowCopy : ${obj === shallowCopy}`);
    console.log(`obj === deepCopy : ${obj === deepCopy}`);
  });

  test("실제값을 비교하는 깊은 비교는 'JSON.stringify()를 이용한다.'", () => {
    console.log(
      `JSON.stringify(obj) === JSON.stringify(deepCopy) : ${JSON.stringify(obj) === JSON.stringify(deepCopy)}`
    );
    console.log(`
    JSON.stringify(obj) === JSON.stringify(shallowCopy): ${JSON.stringify(obj) === JSON.stringify(shallowCopy)}`);
  });
});

describe("배열과 함수도 사실 객체이다.", () => {
  test("함수(Function) 추가된 기능 호출, 선언, ...", () => {});
  test("배열(Array) 추가된 기능 순차 저장, 순회, ...", () => {});
});
