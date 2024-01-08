import { useParams } from "react-router-dom";
const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>Diary 페이지입니다</div>;
};
export default Diary;
