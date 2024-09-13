import "./List.css";
import TodoItem from "./TodoItem.jsx";
import { useMemo, useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  /*const getAnalyzedData = () => {
    console.log("getAnalzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  // 해당 함수는 컴포넌트 내에서 바로 호출되고 있기 때문에 List 컴포넌트가 리렌더링 될 때마다 계속 호출될 것이다.
  // 검색바에 검색만해도 의미없는 함수 호출이 여러 번 발생하게 되는 것이다. (글자당 한 번씩 발생)
  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();*/

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List ☘️☘️</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>doneCount: {doneCount}</div>
        <div>notDoneCount: {notDoneCount}</div>
      </div>
      <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default List;
