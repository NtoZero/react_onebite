describe("Promise", () => {
  /* Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체

    Promise는 비동기 작업의 완료 또는 실패를 나타내는 객체입니다.
    Promise는 비동기 작업이 완료되면 then 메서드로 결과를 처리하고,
              오류가 발생하면 catch 메서드로 오류를 처리할 수 있다.

    resolve : 함수 안의 처리가 끝났을 때 호출해야하는 콜백함수. 어떠한 값도 인수로 넘길 수 있다.
              다음 처리를 실행하는 함수에 전달된다.
    reject : 함수 안의 처리가 실패했을 때 호출해야하는 콜백함수. 어떠한 값도 인수로 넘길 수 있다.
              주로 오류 메시지 문자열을 인수로 사용한다.
*/

  /*Promise의 3가지 상태
    1) 대기(Pending) : 아직 작업이 완료되지 않은 상태
    2) 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
    3) 실패(Rejected) : 비동기 작업이 실패한 상태*/

  /*Promise의 2가지 상태 변경
    A) 해결(resolve) : Pending -> Fulfilled
    B) 거부(reject) : Pending -> Rejected*/

  test("비동기 작업 실행", async () => {
    const promise = new Promise((resolve, reject) => {
      // 비동기 작업 실행하는 함수
      // executor (즉시 실행)

      /*1. 비동기 작업 실행 */
      /*Promise 객체의 상태는 2초 후에 fulfilled 상태가 되며,
          resolve 함수에 의해 Promise가 성공적으로 완료되었음을 나타냅니다.*/
      setTimeout(() => {
        const num = null;
        if (typeof num === "number") {
          resolve(`${num}은 숫자 입니다.`);
        } else {
          reject(`${num}은 숫자가 아닙니다.`);
        }
      }, 2000);
    });

    /*2. 비동기 작업 상태 관리 : then, catch */
    await expect(promise).rejects.toBe("null은 숫자가 아닙니다.");
  });

  test("3. 비동기 작업 결과 저장", async () => {
    /* 3. 비동기 작업 결과 저장 */
    function add10(num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (typeof num === "number") {
            resolve(num + 10);
          } else {
            reject(`${num}은 숫자가 아닙니다.`);
          }
        }, 500);
      });
    }

    try {
      const firstResult = await add10(10);
      console.log(firstResult); // 20

      const secondResult = await add10(firstResult);
      console.log(secondResult); // 30

      const thirdResult = await add10(undefined); // 오류 발생
      console.log(thirdResult);
    } catch (error) {
      console.log(error); // "undefined은 숫자가 아닙니다."
    }

    /*
    const prom = await add10(10); // 값을 할당해버리기 때문에 prom이 프로미스 객체가 아니라 오류 발생 
    prom
      .then((result) => {
        console.log(result);
        const newProm = add10(result);
        /!* 콜백지옥 방지 : 결과 promise를 리턴. *!/
        // 추후 add10을 바로 return 하도록 리팩토링 가능
        return newProm;
      })
      .then((result) => {
        console.log(result);
        return add10(undefined);
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });*/
  });
});
