import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

/* 함수 컴포넌트 */

/*부모 컴포넌트 App */
function App() {

  return (
    <>
        {/*자식 컴포넌트 Header */}
        <Header />  {/*App.jsx에서 App 컴포넌트 내부에 Header 컴포넌트 추가*/}
        <Main />
        <Footer />
      <h1> 안녕 리액트! </h1>
    </>
  )
}

export default App
