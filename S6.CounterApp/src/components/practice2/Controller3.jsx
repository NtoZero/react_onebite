const Controller3 = ({ handleCount }) => {
  const buttonValues = [-300, -150, -30, -1, +1, 30, 150, 300];

  return (
    <div>
      {buttonValues.map((buttonValue) => (
        // 지연실행을 위해 onClick={handleCount(buttonValue)} 가 아닌, 화살표 함수 제공
        // 리액트에서는 배열에 key를 사용해야 UI를 효율적으로 업데이트한다.
        <button key={buttonValue} onClick={() => handleCount(buttonValue)}>
          {buttonValue > 0 ? `+${buttonValue}` : buttonValue}
        </button>
      ))}
    </div>
  );
};

export default Controller3;
