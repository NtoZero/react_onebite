import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useState } from "react";

const List = ({ todos, onDelete, onUpdate }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="List">
      <h4>Todo List ☘️☘️</h4>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
      <div className={"todos_wrapper"}>
        {todos
          .filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase());
          })
          .map((todo) => {
            return <TodoItem key={todo.id} {...todo} onDelete={onDelete} onUpdate={onUpdate} />;
          })}
      </div>
    </div>
  );
};

export default List;
