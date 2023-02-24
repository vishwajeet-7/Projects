import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser] = useState({email:"",password:""})
    const {isAuth,handleAuth} = useContext(AuthContext)

    const handleChange = (event)=>{
        const {value,name} = event.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        fetch('https://reqres.in/api/login',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then((res)=>res.json())
        .then((data)=>{
            handleAuth(!isAuth)
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    if(isAuth){
        return <Navigate to='/' />
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder='Enter Email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='Enter Password' onChange={handleChange}/>
        <input type="submit" name="" onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Login
