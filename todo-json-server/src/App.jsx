import { useEffect, useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import Pagination from './Components/Pagination';
import axios from 'axios';
import TodoCard from './Components/TodoCard';
import AllRoutes from './Routes/AllRoutes';

function App() {
  const [tasks,setTasks] = useState([])
  const [current,setCurrent] = useState(1)
  const [error,setError] = useState(false);
  const [total,setTotal] = useState(0)
  const [loading,setIsLoading] = useState(true);
  const [edit,setEdit] = useState({title:"",status:false})
  
  const limit = 3;
  let totalPages = 0;
  //Getting data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const getData = ()=>{
  axios.get(`http://localhost:8000/todos?_page=${current}&_limit=${limit}`)
  .then((res)=>{
    setTasks(res.data);
    setIsLoading(false);
    setEdit({title:"",status:false})
  })
  .catch((e)=>{
    setError(true)
    setIsLoading(false);
  })
}

 useEffect(()=>{
  getData()
 },[current])
//Getting total pages >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 useEffect(()=>{
  axios.get(`http://localhost:8000/todos`)
  .then((res)=>{
    setTotal(Math.ceil(res.data.length/limit)) 
  })
  .catch((e)=>{
    setError(true)
  })
 },[total,tasks])
 //Adding todo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 const addingTodo = (payload,val)=>{
  if(edit.title===""){
    setIsLoading(true)
    axios.post('http://localhost:8000/todos',{
        title: payload,
        status : false,
    })
    .then((res)=>{
      setIsLoading(false)
        setTasks([
          ...tasks,res.data
        ]);
        getData();
    })
    .catch((e)=>{
      setIsLoading(false);
      setError(true)
    })
  }
  else{
    axios.put(`http://localhost:8000/todos/${val.id}`,{
    title : payload,  
    status:val.status,
    })
    .then((res)=>{
      setIsLoading(false);
      getData();
    })
    .catch((e)=>{
      setIsLoading(false);
      setError(true);
    })
  }
}
// Toggle status >>>>>>>>>>>>>>>>>>>>>>>>>>
const handleDelete = (id)=>{
  setIsLoading(true)
  axios.delete(`http://localhost:8000/todos/${id}`)
  .then((res)=>{
    setIsLoading(false);
    getData();
  })
  .catch((e)=>{
    setIsLoading(false)
    setError(true)
  })
}
//Toggle status >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const toggleStatus =(id,status,title)=>{
  setIsLoading(true)
  axios.put(`http://localhost:8000/todos/${id}`,{
  title : title,  
  status : !status
  })
  .then((res)=>{
    setIsLoading(false)
    // console.log(res)
    getData()
  })
  .catch((e)=>{
    setIsLoading(false)
    setError(true)
  })
}
//Editing todo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const handleEdit = (id)=>{
  setIsLoading(true)
  axios.get(`http://localhost:8000/todos/${id}`)
  .then((res)=>{
    setIsLoading(false)
    setEdit(res.data)
  })
  .catch((e)=>{
    setIsLoading(false)
    setError(true);
  })
}

  return loading ? <h1>Loading.......</h1> : error ? <h1>404 Not Found</h1> :
  (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo addingTodo={addingTodo} edit={edit}
      />
        {
          tasks && tasks.map((ele)=>{
            return <TodoCard {...ele} key={ele.id}
            handleDelete={handleDelete}
            toggleStatus={toggleStatus}
            handleEdit={handleEdit}
            />
          })
        }
      <div className='pagination-wraper'>
      <Pagination current={current} changePage={setCurrent} total={total}/>
      </div>
    </div>
  );
}

export default App;
