const Button = ({ text, color = "green", children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(`e.nativeEvent: ${e.nativeEvent}`);
    console.log(`e.bubbles: ${e.bubbles}`);
    console.log(`e.cancelable : ${e.cancelable}`);
    console.log(`e.defaultPrevented : ${e.defaultPrevented}`);
    console.log(`e.isTrusted : ${e.isTrusted}`);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
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
