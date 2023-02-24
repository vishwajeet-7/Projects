import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoutes = ({children}) => {
    const {isAuth,handleAuth} = useContext(AuthContext)


    if(!isAuth){
        return <Navigate to='/login'/>
    }
    else{
        return children
    }
  
}

export default PrivateRoutes
