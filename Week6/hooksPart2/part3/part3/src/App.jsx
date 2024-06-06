import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sum,setSum] = useState(0)
  return (
    <>
      <input onChange = {event=>{setSum(event.target.value)}}type = "text"></input>
      <h1>Sum is {sum}</h1>
      <button onClick = {()=>{setCount(count+1)}} >Counter {count}</button>
    </>
  )
}

export default App
