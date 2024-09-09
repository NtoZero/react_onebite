const Controller = ({ onClickButton }) => {
  // 버튼에 사용할 값들을 배열로 정의
  const buttonValues = [-100, -10, -1, 1, 10, 100];

  return (
    <div>
      {/* buttonValues 배열을 map 함수를 사용하여 동적으로 버튼을 생성 */}
      {buttonValues.map((value) => (
        <button key={value} onClick={() => onClickButton(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
