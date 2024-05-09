import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import DashboardHome from '../screens/DashboardHome'
import Areas from '../screens/Areas'
import Country from '../screens/Country'
import Province from '../screens/Province'
import Cities from '../screens/Cities'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<DashboardHome />}/>
          <Route path='areas' element={<Areas />}/>
          <Route path='country' element={<Country />}/>
          <Route path='province' element={<Province />}/>
          <Route path='cities' element={<Cities />}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes