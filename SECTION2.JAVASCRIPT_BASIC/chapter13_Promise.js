/* Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
    
    Promise는 비동기 작업의 완료 또는 실패를 나타내는 객체입니다. 
    Promise는 비동기 작업이 완료되면 then 메서드로 결과를 처리하고, 
    오류가 발생하면 catch 메서드로 오류를 처리할 수 있습니다.
*/

/* Promise의 3가지 상태
    1) 대기(Pending) : 아직 작업이 완료되지 않은 상태
    2) 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
    3) 실패(Rejected) : 비동기 작업이 실패한 상태
   
   Promise의 2가지 상태 변경
    A) 해결(resolve) : Pending -> Fulfilled
    B) 거부(reject) : Pending -> Rejected
*/

/* 1. 비동기 작업 실행 */
/* Promise 객체의 상태는 2초 후에 fulfilled 상태가 되며, 
resolve 함수에 의해 Promise가 성공적으로 완료되었음을 나타냅니다.
 따라서 3초 후에 console.log(promise)는 다음과 같은 결과를 출력합니다: */
const promise = new Promise((reslove, reject) => {
  // 비동기 작업 실행하는 함수
  // executor (즉시 실행)

  setTimeout(() => {
    const num = null;

    if (typeof num === "number") {
      reslove(`${num}은 숫자 입니다.`);
    } else {
      reject(`${num}은 숫자가 아닙니다.`);
    }
  }, 2000);
});

/* setTimeout(() => {
    console.log(promise);
}, 3000);

/* 2. 비동기 작업 상태 관리 */
// then 메서드 (-> 그 후에)
promise
  .then((value) => {
    console.log(value);
  }) // then은 promise를 다시 반환하므로, promise chaning 가능
  .catch((value) => {
    console.log(value);
  });

/* 3. 비동기 작업 결과 저장 */
function add10(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject(`${num}은 숫자가 아닙니다.`);
      }
    }, 2000);
  });
}

const prom = add10(10);
prom
  .then((result) => {
    console.log(result);

    const newProm = add10(result);
    /* 콜백지옥 방지 : 결과 promise를 리턴. */
    // 추후 add10을 바로 return하도록 리팩토링 가능
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
  });
