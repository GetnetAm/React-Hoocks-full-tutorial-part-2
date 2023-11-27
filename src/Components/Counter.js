import React from 'react'

function Counter() {

    let counter = 0;

    const increment =()=>{
        counter = counter +1;
        console.log(counter);
    }


    
  return (
    <div>
        {counter}
        
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
