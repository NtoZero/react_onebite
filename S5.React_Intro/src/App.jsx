import "./App.css";
import Bulb from "./components/Bulb.jsx";
import Counter from "./components/Counter.jsx";
import { useState } from "react";

/*부모 컴포넌트 App */
function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
