import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getTodos } from './api'
// import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
// import Form from './Form'
import Loading from './Loading'

const Index = () => {
// const [name,setName] = useState('')
const [loading,setLoading] = useState(false)
const [todos,setTodos] = useState([])

useEffect(()=>{
    loadingtask()
},[])
const loadingtask = ()=>{
    getTodos().then((res)=> setTodos(res.data));
    console.log(todos)
}

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-8'>
                { loading ? <Loading/> : (todos && todos.map((ele)=>{
                    <div  key={ele.id}>
                      <ul >
                        <li >
                            {ele.name}
                        </li>
                      </ul>
                      <span
                      onClick={()=>console.log('')}
                      
                      >
                        <DeleteOutlined />
                      </span>
                      <Link to={`/update/${ele.id}`}>
                      <span
                      onClick={()=>console.log('')}
                      
                      >
                        <EditOutlined />
                      </span>
                      </Link>
                    </div>
                   })
                    )
                }
            </div>

        </div>
      
    </div>
  )
}

export default Index
