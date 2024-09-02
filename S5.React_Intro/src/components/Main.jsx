import "./Main.css";

/* JSX 주의사항 */
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 객체는 렌더링 할 수 없다. 점 표기법으로 값에 접근해야한다.
// 4. 모든 태그는 닫혀 있어야 한다.
// 5. 최상위 태그는 반드시 하나여야 한다. (<main>, 흩뿌려져 있는 걸 원한다면 빈 태그도 가능<>)

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout"
        // style={
        //   {
        // 가독성이 안좋아짐.
        //   backgroundColor: "red", // 일반적 css처럼 background-color가 아님.
        //   borderBottom: "5px solid blue",
        //   }
        // }
      >
        로그인
      </div>
    );
  } else {
    return <div>로그아웃</div>;
  }

  //   return <>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</>;
};

export default Main;
