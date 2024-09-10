import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  //1. Mount : 최초 렌더링
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. Update : props, state 변화
  // 최초 Mount될 때 Update 생명주기의 useEffect를 무시하기 위함.
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  }); // 의존성 배열이 없으면 항상 업데이트
  //3. UnMount : 소멸

  const onClickButton = (value) => {
    setCount(count + value); //  비동기 (호출만)
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Controller</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
