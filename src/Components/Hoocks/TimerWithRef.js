import React, { useEffect, useRef, useState } from 'react'

function TimerWithRef() {
    const [timer, setTimer] =useState(0)

    const interavalref= useRef(null)
    useEffect(()=>{
        interavalref.current=setInterval(()=>{
            setTimer(prevTimer=> prevTimer+1)
        }, 0.1)

        return()=>{
            clearInterval(interavalref.current)
        }

    },[])
  return (
    <div>
      
      <h1>Timer = {timer}  </h1>

      <button onClick={()=>clearInterval(interavalref.current)}>Stop Timer</button>
    </div>
  )
}

export default TimerWithRef
