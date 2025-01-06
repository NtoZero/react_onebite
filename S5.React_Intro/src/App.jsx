import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import Register from "./components/Register.jsx";
import HookExam from "./components/HookExam.jsx";

/*부모 컴포넌트 App */
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/*props 로 값을 전달할 수 있음 */}
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식 요소</div>
        <Header />
      </Button>
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
