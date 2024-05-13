import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
    return (
      <>
        <Header isAuthenticated ={isAuthenticated} roles/>
        <Outlet/>
      </>
    )
  };

  export default AppLayout;
