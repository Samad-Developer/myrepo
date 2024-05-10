import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import DashboardHome from '../screens/dashboardScreens/DashboardHome'
import SettingHome from '../screens/dashboardScreens/SettingHome'
import Areas from '../screens/dashboardScreens/Areas'
import Country from '../screens/dashboardScreens/Country'
import Province from '../screens/dashboardScreens/Province'
import Cities from '../screens/dashboardScreens/Cities'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index element={<DashboardHome />}/>
          <Route path='setting' element={<SettingHome />}/>
          <Route path='areas' element={<Areas />}/>
          <Route path='country' element={<Country />}/>
          <Route path='province' element={<Province />}/>
          <Route path='cities' element={<Cities />}/>
        </Route>
    </Routes>
  )
}

export default AppRoutes