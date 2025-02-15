import "./Todo.css";

const TodoItem = ({ id, isDone, content, date, onDelete, onUpdate }) => {
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  const onClickUpdateCheckbox = () => {
    onUpdate(id);
  };

  return (
    <div className={"TodoItem"}>
      <input type={"checkbox"} checked={isDone} onClick={onClickUpdateCheckbox} />
      <div className={`content ${isDone ? "done" : ""}`}> {content}</div>
      <div className={"date"}> {date}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default TodoItem;
