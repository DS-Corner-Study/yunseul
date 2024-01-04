import "./TodoItem.css";
import React, { useContext } from "react"; // useContext 불러오기
import { TodoContext } from "../App"; // TodoContext 불러오기

const TodoItem = ({ id, content, isDone, createDate }) => {
  // onDelete, onUpdate 삭제
  const { onDelete, onUpdate } = useContext(TodoContext); // useContext을 호출해 TodoContext의 값을 불러와 구조 분해 할당
  console.log(`${id} TodoItem 업데이트`);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
