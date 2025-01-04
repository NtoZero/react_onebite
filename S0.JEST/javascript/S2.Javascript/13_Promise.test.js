describe("Promise", () => {
  /* Promise란? 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체

    Promise는 비동기 작업의 완료 또는 실패를 나타내는 객체입니다.
    Promise는 비동기 작업이 완료되면 then 메서드로 결과를 처리하고,
              오류가 발생하면 catch 메서드로 오류를 처리할 수 있다.
*/
  test("테스트1", () => {});
  test("테스트2", () => {});
  test("테스트3", () => {});
});

describe("Promise 3가지 상태 및 2가지 상태 변경", () => {
  /*Promise의 3가지 상태
    1) 대기(Pending) : 아직 작업이 완료되지 않은 상태
    2) 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
    3) 실패(Rejected) : 비동기 작업이 실패한 상태*/
  /*Promise의 2가지 상태 변경
    A) 해결(resolve) : Pending -> Fulfilled
    B) 거부(reject) : Pending -> Rejected*/
});
