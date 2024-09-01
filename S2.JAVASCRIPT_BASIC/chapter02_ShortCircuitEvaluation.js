// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name;
    // 1. Falsy && Truthy => 우측 Truthy 값이 반환된다.
    // 2. Truthy || Truthy => 첫 번째 Truthy 값이 반환된다.
    console.log(name || "person의 값이 없음");
  }
  
  printName();
  printName({ name: "이정환" });


//
// function returnFalse() {
//     console.log("false");
//     return false;
// }

// function returnTrue() {
//     console.log("true");
//     return true;
// }

// console.log(returnFalse() && returnTrue());