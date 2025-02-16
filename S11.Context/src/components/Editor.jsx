import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App.jsx";

const Editor = () => {
  const { onCreate } = useContext(TodoContext);

  const [content, setContent] = useState("");
  const contentRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      onSubmit();
    }
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeyDown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
