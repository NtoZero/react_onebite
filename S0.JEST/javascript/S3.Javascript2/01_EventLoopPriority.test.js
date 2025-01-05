describe("Promise.then vs setTimeout 실행 순서", () => {
  /*
  * Task Queue :setTimeout,setInterval,fetch,addEventListener와 같이 비동기로 처리되는 함수들의 콜백 함수가 들어가는 큐(macrotask queue 는 보통 task queue 라고 부른다)
    Microtask Queue :promise.then,process.nextTick,MutationObserver 와 같이 우선적으로 비동기로 처리되는 함수들의 콜백 함수가 들어가는 큐 (처리 우선순위가 높음)
    출처: https://inpa.tistory.com/entry/🔄-자바스크립트-이벤트-루프-구조-동작-원리 [Inpa Dev 👨‍💻:티스토리]
  * */

  /*
  * 1. 동기 코드 종료 → 마이크로태스크(Promise) 실행 → "Promise" 배열에 푸시
    2. 마이크로태스크가 끝난 뒤 → 태스크 큐(setTimeout) 실행 → "setTimeout" 배열에 푸시
    3. 그리고 나서 expect로 최종 순서 검사 → 테스트 종료(done())
  * */
  test("Promise.then이 setTimeout보다 먼저 실행된다.", (done) => {
    const executionOrder = [];

    Promise.resolve().then(() => {
      executionOrder.push("Promise");
      // 여기서는 그냥 "Promise"만 먼저 들어갔다는 사실만 확인하고,
      // 굳이 expect를 부르지 않고 넘어감.
    });

    setTimeout(() => {
      executionOrder.push("setTimeout");
      // 이제서야 두 콜백이 모두 실행된 뒤이므로,
      // 순서가 ["Promise", "setTimeout"]인지 최종 확인.
      console.log(executionOrder);
      expect(executionOrder).toEqual(["Promise", "setTimeout"]);
      done();
    }, 0);
  });
});
