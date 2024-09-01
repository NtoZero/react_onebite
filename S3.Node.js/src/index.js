// 1. 배열의 구조분해 할당
let arr = [1, 2, 3, 4, 5];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조분해 할당

let person = {
  name: "st.lee",
  age: 20,
  hobby: "coding",
};

let { name, age, hobby, hobby2 = "helth" } = person;
console.log(name, age, hobby, hobby2);

function funcB(one, two, ...ds) {
  console.log(ds);
}

funcB(...arr);
