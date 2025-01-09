const Controller2 = ({ onClickButtonFunction }) => {
  const buttonValues = [-100, -10, -1, 1, 10, 100];
  return (
    <div>
      {buttonValues.map((value) => (
        <button key={value} onClick={() => onClickButtonFunction(value)}>
          {value > 0 ? "+" + value : value}
        </button>
      ))}
    </div>
  );
};

export default Controller2;
