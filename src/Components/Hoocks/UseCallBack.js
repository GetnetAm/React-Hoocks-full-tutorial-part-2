import React, { useCallback, useState } from 'react'
import Counter from './Counter';
import Buttons from './Buttons';

function UseCallBack() {
    const [counter1, setCounter1]= useState(0)
    const [counter2, setCounter2]=useState(0)

    const increment1= useCallback(()=>{
        setCounter1(counter1+1)
    }, [counter1])

    const incremtnet2= useCallback(()=>{
        setCounter2(counter2 +2)
    }, [counter2])
    // const increment1 =()=>{
    //     setCounter1(counter1+1);

    // }
    // const incremtnet2=()=>{
    //     setCounter2(counter2+2)
    // }


  return (
    <div>
   

   <Counter text="Count by 1:" count={counter1}></Counter>
   <Buttons handleClick={increment1}>+1</Buttons>

   
      <Counter text="Count by 2:" count={counter2}></Counter>
      <Buttons handleClick={incremtnet2}>+2</Buttons>
    </div>
  )
}

export default UseCallBack
