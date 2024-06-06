import { useState } from 'react'
import { useEffect } from "react";




function App() {
  

  return <div>
    <Todo id={1} />
    <CardWrapper innerComponent = {<TextComponent />}/>
  </div>
    
  
}
function Todo({id}) {
  const [todo, setTodo] = useState({});
  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}
function TextComponent()
{
  return <div>
    Hi there , we are learning about the card wrappers
  </div>
}

function CardWrapper({innerComponent})
{
  return <div style = {{border :  "1px solid black"}}>
    {innerComponent}
  </div>
}
export default App
