import { useState } from 'react';

export default function Form() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  
  function clear() {
    setA("")
    setB("")
  } 
  
  return (
    <div>
      <form onSubmit={(evt)=>evt.preventDefault()}>
        <input value={a} onChange={(e)=>setA(e.target.value)} disabled={!!b}/>
        <input value={b} onChange={(e)=>setB(e.target.value)} disabled={!!a}/>
      </form>
      <div className="flex flex-cols-2">
        <button onClick={clear}>Clear</button>
        <button>Submit</button>
      </div>
      </div>
    )
}