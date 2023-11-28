import React, { useState } from 'react'

function USeStateCounter() {
    const [counter, counterUpdate] =useState(0)
  return (
    <div>

        <button onClick={()=> counterUpdate(counter +1)}>Count= {counter}</button>
      
    </div>
  )
}

export default USeStateCounter
