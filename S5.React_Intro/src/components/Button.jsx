const Button = ({ text, color = "black", children }) => {
  // React는 이벤트 핸들러를 호출할 때 첫 번째 인수로 이벤트 객체를 전달한다. (값을 제외한 첫 번째 인자)
  const onClickButton = (id, e) => {
    console.log(`id: ${id}`);
    /* children은 리액트 컴포넌트의 특별한 속성으로, <Button> 컴포넌트 태그의 열고 닫는 태그 사이에 들어가는 콘텐츠.
     * 즉, props로 넘겨진 값이 아니라, 컴포넌트의 자식 요소로 전달되는 값이다. */
    logChildren(children);
    console.log(e);
    console.log(e.target);
    console.log(`e.target.value: ${e.target.value}`);
    console.log(e.currentTarget);
    console.log(`e.nativeEvent: ${e.nativeEvent}`);
    console.log(`e.bubbles: ${e.bubbles}`);
    console.log(`e.cancelable : ${e.cancelable}`);
    console.log(`e.defaultPrevented : ${e.defaultPrevented}`);
    console.log(`e.isTrusted : ${e.isTrusted}`);
    console.log(`e.clientX : ${e.clientX} , e.clientY : ${e.clientY}`);
    console.log(text);
  };

  return (
    <button
      // 리액트는 이벤트 핸들러로 직접 전달된 함수에 이벤트 객체를 자동으로 전달합니다.
      //   onClick={(e) => onClickButton(3, e)}에서는 화살표 함수가 중간에 이벤트를 받아 onClickButton으로 전달
      onClick={(e) => onClickButton(3, e)}
      // onMouseEnter={onClickButton}와 같이 직접 전달하면, 이벤트 객체가 첫 번째 인수로 전달됩니다.
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// 리액트는 최근 업데이트에서 함수형 컴포넌트에 defaultProps 사용을 권장하지 않음
// 대신 JavaScript 기본 매개변수를 사용할 것을 권장함.
// Button.defaultProps = {
//   color: "black",
// };

export default Button;

function logChildren(children) {
  console.log("children:", children); // 배열로 출력
  if (Array.isArray(children)) {
    children.forEach((child, index) => {
      console.log(`Child ${index + 1}:`, child);
    });
  } else {
    console.log("Single child:", children);
  }
}
