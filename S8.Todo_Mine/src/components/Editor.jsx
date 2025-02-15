import "./Editor.css";
import { useRef, useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    console.log(`input content: ${content}`);
    if (content === "") {
      inputRef.current.focus();
    }
    onCreate(inputRef.current.value);
    setContent("");
  };

  const onKeyDown = (e) => {
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      onSubmit();
    }
  };

  return (
    <div className={"Editor"}>
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder={"새로운 Todo..."}
      ></input>
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
