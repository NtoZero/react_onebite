const Button = ({ text, color = "green", children }) => {
  // React는 이벤트 핸들러를 호출할 때 첫 번째 인수로 이벤트 객체를 전달한다. (값을 제외한 첫 번째 인자)
  const onClickButton = (id, e) => {
    console.log(`id: ${id}`);
    console.log(e);
    console.log(e.target);
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
      onClick={(e) => onClickButton(3, e)}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
