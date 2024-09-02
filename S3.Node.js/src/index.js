// LoopIteration
let arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(2 * i + 1);
}
console.log(arr);

/* 배열 순회 - for of */
let i = 0;
for (let item of arr) {
  console.log(`arr.${i} = ${item}`);
  i++;
}

/* 객체 순회 */
let person = {
  name: "김크크",
  age: 20,
  hobby: "games",
};

// Object.keys
let keys = Object.keys(person);
for (let key of keys) {
  //   const value = person[key];
  //   console.log(key, value)
}

// Object.values
let values = Object.values(person);
console.log(values);

// for in
for (let property in person) {
  console.log(`${property} : ${person[property]}`);
}
