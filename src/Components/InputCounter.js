import React, { useState } from 'react'

function InputCounter() {
    const [inputValue, setInputValue] =useState("Pedro")

    const onChange =(event) =>{
        const newValue =event.target.value;
        setInputValue(newValue);
    }


  return (
    <div>
      <input onChange={onChange} placeholder="Enter something" />
      {inputValue}

    </div>
  )
}

export default InputCounter
