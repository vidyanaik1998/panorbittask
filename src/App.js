import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './component/Login/Login';
import { Profile } from './component/Profile/Profile';



function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

