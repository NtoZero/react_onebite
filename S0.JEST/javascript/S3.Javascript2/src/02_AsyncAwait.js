/* await, async와 동기 로직이 함께 존재하는 경우
 *
 * */
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
}

console.log("Before Function!");
myFunc();
console.log("After Function!");
