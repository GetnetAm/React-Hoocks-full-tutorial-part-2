import React, { useState } from "react";

function CounterHocks() {

  const [counter, setCounter] = useState(0);

  const increament = () => {
      setCounter(counter +19);
  };

  return (
    <div>
        {counter}
      <button onClick={increament}>Increment</button>
    </div>
  );
}

export default CounterHocks;
