import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import { handleAdd, handleRemove, todoError, todoRequest, todoSuccess } from './Redux/action';
import axios from 'axios';
import { TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from './Redux/actionTypes';
import Todo from './Components/Todo';
function App() {
  // const [counter,setCounter] = useState(0)
  const count = useSelector((store)=> store.count)
  const todos = useSelector((store)=> store.todos)
  const loading = useSelector((store)=>store.isLoading)
  const dispatch = useDispatch();
  // const handleAdd = ()=>{
  //   setCounter((prev)=> prev+1)
  // }

  // const handleReduce = ()=>{
  //   setCounter((prev)=> prev-1)
  // }
  // const handleCounter = (payload)=>{
  //   if(payload==='Add'){
  //     setCounter((prev)=> prev + 1)
  //   }
  //   else{  
  //     setCounter((prev)=> prev - 1)
  //   }
  // }
  const getTodos = ()=>{
    dispatch(todoRequest())
    axios.get('http://localhost:3004/todos')
         .then((res)=>{
          dispatch(todoSuccess(res.data))
         })
         .catch((error)=>{
          dispatch(todoError())
         })
  }
  useEffect(()=>{
    getTodos()
  },[])
  console.log("todos",todos);
  return (
    <div className="App">
      <h1>Count {count}</h1>
      <button onClick={()=>dispatch(handleAdd(1))}>Add</button>
      <button onClick={()=>dispatch(handleRemove(1))}>Reduce</button>
      <h1>Todo App</h1>
      <Todo/>
      {loading && <h1>Loading....</h1>}
      {
        todos.length > 0 && todos.map((ele)=>{
          return (
            <div style={{display:"flex",marginLeft: '350px',gap: '2rem'}}>
              <p>{ele.title}</p>
              <p>{ele.status ? 'true' : 'false'}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
