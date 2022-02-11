import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  };

  const decrementCount = () => {
    return setCount(count - 1);
  };
  return (
    <>
      <div className="CountOuter">
        <div className="count">The current Count is : {count}</div>
      </div>

      <div className="BtnDiv">
        <button className="CountBtns" id="incr" onClick={incrementCount}>
          Increment
        </button>
        <button className="CountBtns" id="decr" onClick={decrementCount}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
