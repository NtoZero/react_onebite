/* 1. 비동기 함수의 결과를 이용하기 */
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
// 비동기 함수의 결과값을 사용하고자 하는 콜백함수를 또다른 인자로 넘김
add(1, 2, (value) => {
  console.log(`callback : ${value}`);
});

/* 2. 음식을 주문하는 상황 */
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

/* 콜백 지옥 : 비동기 작업을 처리하기 위해 중첩된 콜백 함수들을 계속 사용하다 보면, 
코드의 구조가 복잡해지고 가독성이 떨어지는 현상 */
orderFood((food) => {
  console.log(`callback : ${food}`);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
