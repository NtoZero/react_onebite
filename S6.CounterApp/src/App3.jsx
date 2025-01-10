import "./App.css";

import Viewer3 from "./components/practice2/Viewer3.jsx";
import Controller3 from "./components/practice2/Controller3.jsx";

import { useState } from "react";

const App3 = () => {
  const [count, setCount] = useState(0);

  // 1. 자식은 부모의 상태를 변경시킬 수 없다.
  // 2. 대신 부모는 자식에게 자신의 상태를 변경할 수 있는 props를 제공할 수 있다.
  function handleCount(value) {
    console.log(`count: ${count}, value: ${value}`);
    setCount(count + value);
  }

  return (
    <>
      <div className="App">
        <section>
          <Viewer3 count={count} />
        </section>
        <section>
          <Controller3 handleCount={handleCount} />
        </section>
      </div>
    </>
  );
};

export default App3;
