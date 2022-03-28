//import logo from './logo.svg'; 
import React from 'react';

import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/home.js';
import Mobile from './pages/mobilepage.js';

export default function Routered() {
  return (
    <div className="wrapper"> 
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/mobile" element={<Mobile/>}/>  
      </Routes> 
  </div>
  );
}





