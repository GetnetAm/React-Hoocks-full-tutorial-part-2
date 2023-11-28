import React, { useState } from 'react'

function UseStateCounter2() {
    const intialValue=0;
    const [counter, counterUpdate]= useState(intialValue);
  return (
    <div>
        <h1>Increment={counter}</h1>


        <button onClick={()=>counterUpdate(counter + 1)}>Increment</button>
        <button onClick={() => counterUpdate(counter -1)}>Decrement</button>
        <button onClick={()=>counterUpdate(intialValue)}>Reset</button>
      
    </div>
  )
}

export default UseStateCounter2
