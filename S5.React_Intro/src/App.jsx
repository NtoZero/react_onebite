import './App.css'
import {useState} from "react";

/* 함수 컴포넌트 */

/*부모 컴포넌트 App */
function App() {

    const [state, setState] = useState(0);
    const [light, setLight] = useState("OFF");
    // let light = "OFF"; // 단순 변수 값을 변경한다고 리렌더링을 발생시키지 않음.

  return (
    <>
        <div>
            <h1>{light}</h1>
            <button onClick={() => {
                setLight(light === "OFF" ? "ON" : "OFF");
                // light = light === "ON" ? "OFF" : "ON";
                // console.log(light);
            }}>전구 {light === "ON" ? "끄기" : "켜기"}
            </button>
        </div>
        <div>
            <h1>{state}</h1>
            <button onClick = {() =>{
                setState(state + 1);
            }}> + 버튼 </button>
        </div>
    </>
  )
}

export default App
