import { useState } from "react";

/* Custom Hook (use 접두사 함수)*/
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
