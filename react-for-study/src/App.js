// import Button from "./Button";
import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const countUp = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("리엑트가 rerander 됨");
  useEffect(() => {
    console.log("한번만 실행", []);
  });
  useEffect(() => {
    console.log("keyword가 빠뀔 때마다 실행", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("keyword와 count가 변화할 때마다 변화");
  }, [value, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search hear..."
      />
      <h1>click : {value}</h1>
      <button onClick={countUp}>click</button>
    </div>
  );
}

export default App;
