const Controller3 = ({ handleCount }) => {
  const buttonValues = [-300, -150, -30, -1, +1, 30, 150, 300];

  return (
    <div>
      {buttonValues.map((buttonValue) => (
        // 지연실행을 위해 onClick={handleCount(buttonValue)} 가 아닌, 화살표 함수 제공
        <button onClick={() => handleCount(buttonValue)}>{buttonValue > 0 ? `+${buttonValue}` : buttonValue}</button>
      ))}
    </div>
  );
};

export default Controller3;
