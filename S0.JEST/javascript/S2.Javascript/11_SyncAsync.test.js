describe("동기 : 여러 개의 작업을 순서대로, 하나씩 처리", () => {
  test("동기", () => {
    function taskB() {
      console.log(2);
    }
    console.log(1);
    taskB();
    console.log(3);

    /*
    * 동기의 단점 : 태스크 중 어떤 하나의 작업이 지나치게 오래 걸린다면 나머지 작업은 비효율적으로 대기하게 된다.
      멀티쓰레드 활용? 자바스크립트 엔진에는 쓰레드가 1개밖에 없다.
    * */
  });
});

describe("비동기 : 여러 개의 작업을 순서대로 처리하지 않는 방식. 여러 작업을 동시에 처리", () => {
  test("비동기", () => {
    // 결과값을 이용하고 싶다면? 각각의 작업에 콜백함수를 붙여서 실행해 줄 수 있음.
    console.log(1);
    setTimeout(() => {
      console.log(2);
    }, 3000); // 3000ms 이후 콜백함수 실행
    setTimeout(() => {
      console.log(4);
    }, 1000); // 1000ms 이후 콜백함수 실행
    console.log(3);
    // => 1 3 4 2 순서로 출력됨

    /* 자바스크립트는 싱글 쓰레드 엔진인데 어떻게 동시에 작업을 수행할까?
    1. 기본적으로 작업을 순차적으로 진행
    2. 비동기 함수를 만나게 되면 브라우저 엔진으로 해당 함수를 콜백함수와 함께 위임
    3. 다시 작업을 순차적으로 수행
    4. 2의 비동기 함수 작업이 끝나면 콜백함수를 다시 자바스크립트 이벤트 루프의 콜백 큐에 위임
    5. 자바스크립트의 콜 스택이 비어 있는 경우 콜백 큐에서 대기 중인 콜백함수 실행
*/
  });
});

describe("비동기와 콜백함수", () => {
  test("비동기는 순서를 보장하지 않는다.", () => {
    function getDB() {
      let data;
      setTimeout(() => {
        data = 10;
      }, 3000); // DB에서 값을 가져오는데 3초의 시간이 걸린다고 가정
      return data;
    }

    function main() {
      let value = getDB();
      value *= 2;
      console.log(`value : ${value}`);
    }

    // main 스레드 실행
    main(); // NaN
  });

  test("콜백함수를 이용하면 비동기여도 간접적으로 순서를 보장받을 수 있다.", () => {
    // 콜백함수 callback 인자로 받기
    function getDB(callback) {
      setTimeout((func) => {
        // 1. DB에서 데이터를 받은 후
        const data = 100;
        // 2. 콜백함수 실행
        callback(data);
      }, 3000);
    }

    function main() {
      getDB((value) => {
        let data = value * 2;
        console.log(`data의 값 : ${data}`);
      });
    }

    main();
  });
});
