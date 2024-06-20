import { useEffect, useState } from 'react'
import axios from 'axios'
import {useOnline} from "./hooks/useOnline"
import { useMousePointer } from './hooks/useMousePointer'
function App() {
  // let {todos, loading} = useTodos(5);
  // if(loading)
  // {
  //   console.log("Loading callled")
  //   return <div>Loading...</div>
  // }
  // let online = useOnline();
  const [count, setCount] = useState(0);
  
  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  let pos = useMousePointer();
  return (
    <>
      {/* {online == true ? "Yayy the user is online" : "No the user is offline!"} */}
      {/* {todos.map(todo => <Track todo={todo} />)} */}
       Timer is at {count}
      {/* Your mouse pointer position is X : {pos.x} and Y : {pos.y} */}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App