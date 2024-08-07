// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const updateCount = () => { setCount(count + 1) };

  return (
    <div>
      <button onClick={updateCount}>Add Count</button>
      <div>
        <p>Number of counts:</p>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default Counter;
