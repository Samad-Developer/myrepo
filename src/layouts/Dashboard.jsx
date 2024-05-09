import React from 'react';
import Header from '../components/layoutcomponents/Header';
import Sidebar from '../components/layoutcomponents/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />
      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content area */}
        <div className="flex-1 px-5 py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
