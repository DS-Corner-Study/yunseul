import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";
import Even from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  // //useEffect로 라이프 사이클 제어하기
  // useEffect(() => { 
  //   if (!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("컴포넌트 업데이트!");
  //   }
  // });

  // //컴포넌트의 마운트 제어하기
  // useEffect(() => { 
  //   console.log("컴포넌트 마운트");
  // }, []);


  // //컴포넌트의 언마운트 제어 - 클린업
  // useEffect(() => { 
  //   const intervalID = setInterval(() => { 
  //     console.log("깜빡");
  //   }, 1000);
  //   return () => { 
  //     console.log("클린업");
  //     clearInterval(intervalID); 
  //   };
  // });

  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />} 
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> 
      </section>
    </div>
  );
}
export default App;