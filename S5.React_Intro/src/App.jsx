import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import Register_useRef from "./components/Register_useRef.jsx";
import Register_useState from "./components/Register_useState.jsx";
import Register_useState2 from "./components/Register_useState2.jsx";
import HookExam from "./components/HookExam.jsx";
import Bulb from "./components/Bulb.jsx";
import Counter from "./components/Counter.jsx";
import Timer from "./components/Timer.jsx";

/*부모 컴포넌트 App */
function App() {
  return (
    <>
      {/*<Header />
      <Main />
      <Footer />*/}
      {/*props 로 값을 전달할 수 있음 */}
      {/*<Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
        <Header />
      </Button>
      <Bulb />
      <Counter />
      <Timer />*/}
      {/*<Register_useState />
      <Register_useState2 />*/}
      {/*<Register_useRef />*/}
      <HookExam />
    </>
  );
}

export default App;

const buttonProps = {
  text: "메일",
  color: "red",
  a: 1,
  b: 2,
  c: 3,
};
