import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          /* 1. 비함수형 업데이트 => 이전 상태만 반영*/
          setCount(count + 1);
          setCount(count + 1); // 2번의 +1에도 이전 값 +1만 반영
          /* 2. 함수형 업데이트 => 현재 상태를 반영*/
          setCount((curCount) => curCount + 1); // batch 업데이트 중에도 최신 값 반영
          setCount((curCount) => curCount + 1); // batch 업데이트 중에도 최신 값 반영
          // 2번의 +1에 +2 반영
        }}
      >
        {" "}
        + 버튼
      </button>
    </div>
  );
};

export default Counter;
