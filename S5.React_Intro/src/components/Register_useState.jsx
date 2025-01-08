import { useState } from "react";

/* 간단한 회원가입 폼 */
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register_useState = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [nation, setNation] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setBirth(e.target.value);
  };

  const onChangeNation = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setNation(e.target.value);
  };

  const onChangeBio = (e) => {
    // console.log(e);
    console.log(e.target.value);
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={"name"} />
      </div>
      <div>
        <input value={birth} onChange={onChangeBirth} placeholder={"date"} />
      </div>
      <div>
        <select value={nation} onChange={onChangeNation}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea onChange={onChangeBio} placeholder={"자기소개"} /> {bio}
      </div>
    </div>
  );
};

export default Register_useState;
