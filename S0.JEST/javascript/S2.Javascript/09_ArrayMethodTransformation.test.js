describe("배열 변형 메서드", () => {
  test("1. filter :" + "기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환", () => {
    let arr = [
      { name: "이정환", hobby: "테니스" },
      { name: "김효빈", hobby: "테니스" },
      { name: "홍길동", hobby: "독서" },
    ];
    let filter = arr.filter((item) => item.hobby === "테니스");
    console.log(`arr.filter((item) => item.hobby === "테니스") : ` + JSON.stringify(filter));
  });
  test(
    "2. map : " + "배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 " + "그 결과를 모아서 새로운 배열로 반환",
    () => {
      let arr = [1, 2, 3];
      const mapResult = arr.map((item, idx, arr) => {
        return item * 2;
      });
      console.log("mapResult: " + mapResult);
    }
  );
  test("3. sort :" + "배열을 사전순으로 정렬하는 메서드", () => {
    let arr = [10, 3, 5];
    console.log(`--- arr sorting 전: ${arr}`);
    const desc = arr.sort((a, b) => {
      return descending(a, b); // 반드시 return을 해야함.
    });
    console.log(`--- arr sorting 후 (descending): ${desc}`);
    const asc = arr.sort((a, b) => {
      return ascending(a, b); // 반드시 return을 해야함.
    });
    console.log(`--- arr sorting 후 (ascending): ${asc}`);
  });

  test("4. toSorted : " + "정렬된 새로운 배열을 반환하는 메서드" + "(가장 최근에 추가된 최신 함수)", () => {
    let arr = ["c", "a", "b"];
    const sorted = arr.toSorted();
    console.log(arr, sorted);
  });

  test("5. join : " + "배열을 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드", () => {
    let arr = ["hi", "im", "winterlood"];
    const joined = arr.join(" ");
    console.log(`joined : ${joined}`);
  });
});

function descending(a, b) {
  /* 내림차순 */
  if (a > b) {
    // a가 b 앞에 와라 (자리를 바꿔라)
    return -1; // -> a, b 배치
  } else if (a < b) {
    // b가 a 앞에 와라 (자리를 바꾸지 마라)
    return 1; // -> b, a 배치
  } else {
    // 두 값의 자리를 바꾸지 마라.
    return 0;
  }
}

function ascending(a, b) {
  /* 오름차순 */
  if (a > b) {
    // b가 a 앞에 와라 (자리를 바꿔라)
    return 1; // -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라 (자리를 바꾸지 마라)
    return -1; // -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라.
    return 0;
  }
}
