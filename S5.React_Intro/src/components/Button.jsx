const Button = ({text, color = "black2" , children}) => {
  console.log(text);
  return (
      <button style={{ color: color }}>
          {text} - {color.toUpperCase()}
          {children}
      </button>
  );
};

// Button.defaultProps = {
//     color: "black",
// };

export default Button;
