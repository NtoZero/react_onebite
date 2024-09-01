/* 1. async : 
     어떤 함수를 비동기 함수로 만들어주는 키워드
     = 함수가 프로미스를 반환하도록 변환해주는 키워드
*/

// promise 반환
async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
}

// console.log(getData());

// 애초에 promise를 반환하는 함수는 async는 아무런 영향x
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
}

console.log(getData2());

/* await 
    //async 함수 내부에서만 사용이 가능한 키워드
    //비동기 함수가 다 처리되기를 기다리는 역할
*/

async function printData() {
  const data = await getData2();
  console.log(data);
}

printData();
