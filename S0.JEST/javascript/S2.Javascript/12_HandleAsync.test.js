describe("비동기 함수를 핸들링하는 방법", () => {
  // 비동기 함수 add() : 3초 뒤 더한 값을 반환
  function add(a, b, callback) {
    setTimeout(() => {
      const sum = a + b;
      callback(sum); // 출력
    }, 3000);
  }
  // done 함수를 테스트 함수의 매개변수로 설정
  test("1. add 함수는 두 숫자의 합을 콜백으로 전달해야 한다.", (done) => {
    const a = 1;
    const b = 3;
    const exceptedSum = 4;

    // add 함수 호출
    add(a, b, (sum) => {
      try {
        expect(sum).toBe(exceptedSum);
        done(); // 테스트 완료 알림
      } catch (error) {
        done(error);
      }
    });
  });
});
