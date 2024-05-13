import React from 'react'
import { NavLink } from 'react-router-dom';

function MainNav({roles}) {

  const role = roles[0];

const adminList = (
  <NavList>
    <li><NavLink to="/home"><IoHomeLayOut></li>
  </NavList>
)

  const userList = (
    <NavList>
      <li><NavLink to="/home">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/posts">Posts</NavLink></li>
    </NavList>
  )


    return (
      
    <>
    {role === "ADMIN" ? adminList : userList}
    </>
    )
  };

  export default MainNav;