describe("async/await", () => {
  test("async 키워드는 함수를 promise로 변환하여 반환한다.", () => {
    /*
     * async:
     * 어떤 함수를 비동기 함수로 만들어주는 키워드
     * = 함수가 프로미스를 반환하도록 변환해주는 키워드
     * */

    /* await
        async 함수 내부에서만 사용이 가능한 키워드
        비동기 함수가 다 처리되기를 기다리는 역할
    */

    const data = {
      name: "이정환",
      id: "winterlood",
    };

    // async 키워드가 붙어 promise를 반환한다.
    async function getData(flag) {
      if (flag === 1) {
        return data; // <=> resolve는 단순히 return으로 반환
      } else {
        // reject는 throw를 통해 반환
        throw "정상 값이 아닙니다.";
      }
    }

    getData()
      .then((success) => {
        console.log(success);
        expect(success).toBe(data);
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe("정상 값이 아닙니다.");
      });
  });

  test("애초에 Promise 객체를 반환하는 함수에 async 키워드는 아무런 영향이 없다.", async () => {
    // 1. async 키워드 사용
    async function getDataWithAsync() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: "이정환",
            id: "winterlood",
          });
        }, 1500);
      });
    }

    // 2. 일반 함수 (Promise 반환)
    function getDataWithoutAsync() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: "이정환",
            id: "winterlood",
          });
        }, 1500);
      });
    }

    // 결과 비교
    const dataWithAsync = getDataWithAsync();
    const dataWithoutAsync = getDataWithoutAsync();

    expect(dataWithAsync).toBeInstanceOf(Promise); // async 함수는 Promise 반환
    expect(dataWithoutAsync).toBeInstanceOf(Promise); // 일반 Promise 반환

    // 결과 값 비교
    const resultWithAsync = await dataWithAsync;
    const resultWithoutAsync = await dataWithoutAsync;

    expect(resultWithAsync).toEqual(resultWithoutAsync); // 반환 값이 동일
  });
});
