import {useEffect , useState} from "react";
export function useTodos(n)
{
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const value = setInterval(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
          console.log(loading)
        })
    }, n*100);
    
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
        console.log(loading)
      })
      return () =>{
        clearInterval(value)
      }
  },[n])

  return {
    todos : todos,
    loading : loading};
}