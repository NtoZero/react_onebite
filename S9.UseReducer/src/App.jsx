import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Exam from "./components/Exam.jsx";

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().toDateString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 배열

    setTodos(
      todos.map((todo) =>
        targetId === todo.id
          ? { ...todo, isDone: !todo.isDone } //
          : todo
      )
    );

    /*setTodos(todos.map((todo) => {
      if(targetId === todo.id) {
        return {...todo, isDone: !todo.isDone}
      }
      return todo;
    }))*/
  };

  const onDelete = (targetId) => {
    // 인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제하는 새로운 배열
    setTodos(todos.filter((todo) => targetId !== todo.id));
  };

  return (
    <div className="App">
      <Exam />
      {/*<Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />*/}
    </div>
  );
}

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
];

export default App;
