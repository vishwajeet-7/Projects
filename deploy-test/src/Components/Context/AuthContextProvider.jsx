import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState(false);
    const handleAuth = (payload)=>{
        setIsAuth(payload)
    }
  return (
    <AuthContext.Provider value={{isAuth,handleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
