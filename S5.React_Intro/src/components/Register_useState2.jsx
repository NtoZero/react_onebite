import { useState } from "react";

/* 간단한 회원가입 폼 */
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register_useState2 = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      /*ES6의 "계산된 속성 이름(Computed Property Names) 문법
       * [e.target.name] : 키를 동적으로 설정함.
       * */
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input name="name" value={input.name} onChange={onChange} placeholder={"name"} />
      </div>
      <div>
        <input name="birth" value={input.birth} onChange={onChange} placeholder={"date"} />
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
        <textarea name="bio" value={input.bio} onChange={onChange} placeholder={"자기소개"} />
      </div>
    </div>
  );
};

export default Register_useState2;
