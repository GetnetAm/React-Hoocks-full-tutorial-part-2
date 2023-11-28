import React from 'react'

function EventHandling() {

    const handler= ()=>{
      alert("You are clicke event")
    }

  return (
    <div>

        <button onClick={handler}>Clik Hire</button>
      
    </div>
  )
}

export default EventHandling
