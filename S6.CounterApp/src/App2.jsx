import Viewer2 from "./components/practice/Viewer2.jsx";
import Controller2 from "./components/practice/Controller2.jsx";
import "./App.css";
import { useState } from "react";

function App2() {
  const [count, setCount] = useState(0);

  const onClickButtonFunc = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Controller</h1>
      <section>
        <Viewer2 count={count} />
      </section>
      <section>
        <Controller2 onClickButtonFunction={onClickButtonFunc} />
      </section>
    </div>
  );
}

export default App2;
