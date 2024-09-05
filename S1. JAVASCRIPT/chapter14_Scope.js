/* 스코프(Scope) : 변수나 함수에 접근하거나 호출할 수 있는 범위 
    - 전역 스코프 : 전체 영역에서 접근 가능
    - 지역 스코프 : 특정 영역에서만 접근 가능
*/

// 전역 스코프
let a = 1;

function funcA() {
  // 지역 스코프
  let b = 2;
  console.log(b);
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}

funcB();
