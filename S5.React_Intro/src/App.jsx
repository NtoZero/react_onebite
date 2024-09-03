import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

/* 함수 컴포넌트 */

/*부모 컴포넌트 App */
function App() {

    const buttonProps = {
        text: "메일",
        color: "red",
        a: 1,
        b: 2,
        c: 3
    };

  return (
    <>
        {/*자식 컴포넌트 Header */}
        <Header />  {/*App.jsx에서 App 컴포넌트 내부에 Header 컴포넌트 추가*/}
        <Main />
        <Footer />
        {/*Props => 값을 전달할 수 있음*/}
        <Button {...buttonProps} />
        <Button text={"카페"} />
        <Button text={"블로그"} >
            <div>자식요소</div>
            <Header />
        </Button>
    </>
  )
}

export default App
