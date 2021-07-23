import React, { useState, useEffect } from "react";

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    document.title = `You have incre/decre ${num}`;
  });
  const incre = () => {
    setNum(num + 1);
  };
  const decre = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      alert("Number less then 0 not valid");
    }
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h3>{num}</h3>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
      </div>
    </div>
  );
}

export default App;
