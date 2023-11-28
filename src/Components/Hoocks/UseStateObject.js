import React, { useState } from 'react'

function UseStateObject() {
    const [name, setName]=useState({Fname:'', Lname:''});
  return (
    <div>
      
      <form>
        <input type='text' value={name.Fname} onChange={e=>setName({...name,Fname: e.target.value})} />
        <input type='text' value={name.Lname} onChange={e=>setName({...name,Lname: e.target.value})} />

        <h1>Your first Name is :{name.Fname}</h1>
        <h1>Your Last Name is :{name.Lname}</h1>
        <h1>Full Name is :{name.Fname} {name.Lname}</h1>
      </form>
    </div>
  )
}

export default UseStateObject
