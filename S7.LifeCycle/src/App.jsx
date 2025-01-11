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
    console.log("App component Mounted!");
  }, []);

  //2. Update : props, state 변화
  // 최초 Mount될 때 Update 생명주기의 useEffect를 무시하기 위함.
  const isMount = useRef(false); //반드시 ref 참조를 dom 요소에 넣을 필요는 없구나! 단순 값 저장을 위해서 사용되기도 한다.
  useEffect(() => {
    if (!isMount.current) {
      // useRef 객체는 컴포넌트가 리렌더링되어도 동일한 참조를 유지함.
      // current 속성은 리액트가 해당 ref에 대한 값을 보관하는 속성임.
      // 최초 렌더링되었으면 해당 컴포넌트가 이미 마운트된 상태라는 것을 명시하기 위해 isMount의 값을 true로 변경
      isMount.current = true;
      return;
    }
    console.log("App component updated!");
  }); // 의존성 배열이 없으면 **상태나 props가 변경될 때마다** 항상 콜백이 실행됨 (권장x)
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
