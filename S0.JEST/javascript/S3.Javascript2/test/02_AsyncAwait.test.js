describe("await, async와 동기 로직이 함께 존재하는 경우", () => {
  test(
    "async 함수는 프로미스를 반환할 뿐 call stack에 쌓이고, " +
      "await 키워드는 async 블록 내부의 함수를 WebAPIs에 할당한다. ",
    (done) => {
      const one = () => Promise.resolve("One!");

      /*
       * async 함수를 메인 코드가 모두 실행되어야 나중에 실행되는 비동기 함수로 알고 있는 사람들이 많은데,
       * async 함수는 블럭 내부에서 await 키워드를 사용하기 위한 함수 키워드 일 뿐 그냥 프로미스 객체를 반환하는 조금 특벽한 일반적인 함수이다.
       * 따라서 async 함수라도 일반 함수처럼 호출 스택이 쌓이고, async 함수 내의 비동기가 아닌 동기 코드는 일반 코드와 같이 실행된다.
       * */
      async function myFunc() {
        console.log("In function!");
        //await 키워드를 만나는 순간 myFunc 함수 내부의 실행이 잠시 중단된다.
        // -> one() 내부 로직은 Promise이므로 MicrotaskQueue에 쌓인다. / 또한 res는 promise의 결과 반환이므로 `One!`이다.
        const res = await one();
        console.log(res);
        console.log("after await one()!");
        done();
      }

      console.log("Before Function!");
      myFunc();
      console.log("After Function!");
    }
  );
  test(
    "myFunc() 함수를 호출하는 메인 스택에서 await 키워드를 붙여주면 어떻게 될까?" +
      "await 키워드 다음에 나오는 동일 라인의 코드들은 모두 await 함수() 의 then 핸들러의 콜백 함수로 들어간다",
    async () => {
      const one = () => Promise.resolve("One!");

      async function myFunc() {
        console.log("In function!");
        const res = await one();
        console.log(res);
      }

      console.log("Before Function!");
      // await 키워드 선언.
      await myFunc();
      console.log("After Function!");
    }
  );
  test("await 키워드의 실제 동작", async () => {
    const bar = () => Promise.resolve("bar");

    let x = await bar(); // bar() 함수 정의는 생략
    console.log(x);
    console.log("Done");

    // 위 코드는 사실 다음과 같은 의미를 가진다.
    bar().then((x) => {
      console.log(x);
      console.log("Done");
    });
    // 즉, await 키워드 다음에 나오는 동일 라인의 코드들은 모두 await bar() 의 then 핸들러의 콜백 함수로 들어간다는 뜻이다.
  });

  /*
  [매우 중요]
  * Promise는 microTaskQueue에 입력된다.
  * microTaskQueue는 브라우저 렌더링 이전에 최우선적으로 이루어지기 때문에 만약 무한루프에 빠져있다면 브라우저 자체가 먹통이 된다.
  * */
});
