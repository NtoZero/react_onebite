import "./App.css";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState(mockData);
  const refId = useRef(mockData.length);

  const onCreate = (content) => {
    let newTodo = {
      id: refId.current++,
      isDone: false,
      content: content,
      date: new Date(),
    };

    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id //
          ? { ...todo, isDone: !todo.isDone }
          : todo
      )
    );
  };

  const onDelete = (id) => {
    let deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 1,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().toLocaleDateString(),
  },
  {
    id: 2,
    isDone: false,
    content: "빨래하기",
    date: new Date().toLocaleDateString(),
  },
];

export default App;
