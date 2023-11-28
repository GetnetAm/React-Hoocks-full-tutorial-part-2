import React, { useEffect, useState } from 'react'

function UseEffect() {

    const [counter, updateCounter]=useState(0);

    useEffect(()=>{
        console.log(counter);
    }, [])

  return (
    <div>
        <h1>{counter} times {" "}</h1>

        <button onClick={() =>updateCounter(counter + 1)}>Increement</button>
      
    </div>
  )
}

export default UseEffect
