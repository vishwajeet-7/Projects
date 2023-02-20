import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Update from '../Components/Update'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/update' element={<Update/>}/>
    </Routes>
  )
}

export default AllRoutes
