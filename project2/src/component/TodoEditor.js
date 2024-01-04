import { useContext, useState, useRef } from "react"; // useContext 불러오기
import { TodoContext } from "../App"; // TodoContext 불러오기
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext); // useContext을 호출해 TodoContext의 값을 불러와 구조 분해 할당

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
