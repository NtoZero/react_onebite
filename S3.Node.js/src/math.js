// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

/* Common JS */
// module.exports = {
//   add: add,
//   sub, // 키-값이 같을 경우 이름만 입력해도 됨.
// };

/* ESM */
// export { add, sub };
