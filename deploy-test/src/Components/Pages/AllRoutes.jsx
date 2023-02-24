import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import PrivateRoutes from './PrivateRoutes'
import Settings from './Settings'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<PrivateRoutes><Dashboard/></PrivateRoutes>}/>
      <Route path='/dashboard/settings' element={<PrivateRoutes><Settings/></PrivateRoutes>}/>
    </Routes>
  )
}

export default AllRoutes
