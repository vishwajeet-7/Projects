import React, { useState } from 'react'
import { ADD_TODO } from '../Redux/actionTypes';
import {useDispatch} from 'react-redux'
import { addtodoError, addtodoRequest, addtodoSuccess } from '../Redux/action';
import axios from 'axios'


const Todo = () => {
    const [data,setData] = useState("");
    const dispatch = useDispatch()
    const addTodos = ()=>{
        dispatch(addtodoRequest())
        let payload ={
            title: data,
            status: false,
        }
        axios.post('http://localhost:3004/todos',payload).then((res)=>{
            dispatch(addtodoSuccess(res.data))
        })
        .catch((error)=>{
           dispatch(addtodoError()) 
        })
    }

  return (
    <div >
      <input type="text" placeholder='Enter Task' 
      onChange={(e)=>setData(e.target.value)}
      />
      <button onClick={addTodos}>Add</button>
    </div>
  )
}

export default Todo
