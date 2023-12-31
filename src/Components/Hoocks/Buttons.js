import React from 'react'

function Buttons({handleClick, children}) {
    console.log('Button rendering ', children)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(Buttons)
