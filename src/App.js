import React, { useState } from 'react';
import { Route, Routes,BrowserRouter, Navigate } from 'react-router-dom';


import HomePage from './Pages/HomePage'
import Quiz from './Components/Quiz';
import Congratulations from './Pages/Congratulations';
import NotImpressed from './Pages/NotImpressed';
import './App.css';

export default function App() {
  return (
    <BrowserRouter >
    <Routes>
      
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Congratulations' element={<Congratulations/>}></Route>
      <Route path='/NotImpressed' element={<NotImpressed/>}></Route>

      
    </Routes>
  </BrowserRouter >
  )}