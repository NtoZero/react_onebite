import { useState, useRef } from "react";

/* 간단한 회원가입 폼 */
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

let count = 0;

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // let count = 0;

  const onChange = (e) => {
    // countRef.current++;
    count++; // 단순 변수는 useRef 객체와 달리 컴포넌트의 리렌더링에서 자유롭지 못함.
    // 그렇다고 컴포넌트 외부에 변수를 선언하면 부모 컴포넌트에서 자식 컴포넌트를 두 번 호출할 때 공유변수 문제가 발생한다.
    console.log(count);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" />
      </div>
      <div>
        <select name="nation" value={input.nation} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}> 제출 </button>
    </div>
  );
};

export default Register;
