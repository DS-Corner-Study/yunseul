import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useContext, useState, useMemo } from "react"; // useContext 불러오기
import { TodoContext } from "../App"; // TodoContext 불러오기

const TodoList = () => {
  const { todo } = useContext(TodoContext); // todo 외의 나머지 삭제   const storeData = useContext(TodoContext); // useContext를 호출하고 TodoContext를 인수로 전달해 storeData에 저장하기
  console.log(storeData); // storeData를 콘솔에 출력
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    // ②
    setSearch(e.target.value);
  };
  const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} // ③
        onChange={onChangeSearch} // ④
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} /> // 기존에 Props으로 전달하던 코드도 삭제
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: [],
};
export default TodoList;
