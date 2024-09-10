import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count} / input : ${input}`);
  }, [count, input]);

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
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
