import { useState } from "react";
import useInput from "../hooks/useInput.jsx";

/* 3가지 hook 관련 팁*/
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건, 반복문 안에서는 호출될 수 없다. => 훅 호출 순서가 엉망이 될 수 있다.
// 3. 나만의 훅 (Custom Hook)을 직접 만들 수 있다.

// const state = useState();

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <div>
        <input value={input} onChange={onChange} />
      </div>
      <div>
        <input value={input2} onChange={onChange2} />
      </div>
    </div>
  );
};

export default HookExam;
