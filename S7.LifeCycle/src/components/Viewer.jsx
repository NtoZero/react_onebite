// import { useState } from "react";

const Viewer = ({ count }) => {
  // const [count, setCount] = useState(0); // 상태의 props는 부모-자식 간에만 전달 가능

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
