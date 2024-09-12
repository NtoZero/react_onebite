import "./Todo.css";
import { useState } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate }) => {
  const [done, setDone] = useState(isDone);
  const changeDone = (isDone) => {
    setDone(!done);
  };
  const onChangeIsDone = (e) => {
    return changeDone(e.target.value);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeIsDone} checked={done} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
