import styled from "styled-components"
import {BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate, NavLink, UNSAFE_useRouteId} from "react-router-dom";
import AppLayout from './layout/AppLayout.jsx'
import About from './page/About.jsx'
import Contact from './page/Contact.jsx'
import Home from './page/Home.jsx'
import PageNotFound from './page/PageNotFound.jsx'
import { useState } from "react";

function Posts() {
  return (
    <div>
    <h1>Posts</h1>
    <Outlet/>
    </div>
  )
}

function Post() {
  let params = useParams();
  return (
    <h1>Post: {params.postId}</h1>
  )
}



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({isLoading: false, error: null, user: {username: " ", roles: []}})
  console.log(user)
  return (
      <BrowserRouter>
        <Routes>
          <Route element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AppLayout setIsAuthenticated={setIsAuthenticated} roles={user.user.roles}/>
            </ProtectedRoute>}> 
            <Route index element={<Navigate to="home"/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="posts" element={<Posts/>}>
            <Route index element={<h1>New Posts</h1>}/>
            <Route path=":postId" element={<Post/>}/>
            </Route>
              <Route path="*" element={<PageNotFound/>}/>
            </Route>
            <Route path="login" element={<Login isAuthenticated ={isAuthenticated} setIsAuthenticated ={setIsAuthenticated} setUser ={setUser} {...user}/>}/>
            <Route path="register" element={<Register isAuthenticated ={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} {...user}/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
