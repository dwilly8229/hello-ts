import React, { useState } from "react";
import "./style.css";
const Counter: React.FC = (props) => {
  const [counter, setCounter] = useState(0);
  console.log("re-render new value", counter);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter == 0) return;
    setCounter(counter - 1);
  };
  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <button onClick={handleIncrement} style={{ background: "lightgreen" }}>
        INC
      </button>
      <button onClick={handleDecrement} style={{ background: "tomato" }}>
        DEC
      </button>
    </div>
  );
};

export default Counter;
