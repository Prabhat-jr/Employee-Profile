import React from 'react'
import {Route,Routes } from "react-router-dom"
import "./App.css";
import Login from './component/Sign/Login';
import ProfilePage from './component/Profilepage/ProfilePage';

const App = () => {
  return (
    <div className='Appbody'>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/profile" element={<ProfilePage/>}/>
    </Routes>
     </div>
  )
}

export default App