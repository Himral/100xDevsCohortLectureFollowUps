import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function App() {
  
  const [numId,setNumId] = useState(1)
  return <div>
    <button onClick = {function() {setNumId(1)}}>1</button>
    <button onClick = {function() {setNumId(2)}}>2</button>
    <button onClick = {function() {setNumId(3)}} >3</button>
    <button onClick = {function() {setNumId(4)}} >4</button>
    <button  onClick = {function() {setNumId(5)}}>5</button>
    <Todo id = {numId}/>
  </div>
}

function onClickButtonCallTodo(numID)
{
   <Todo id = {numID}/>
}
function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    setTimeout(()=>{
      axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(response => {
        // const json = await res.json();
        setTodo (response.data.todo);
      })
 
    },10)
   }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;