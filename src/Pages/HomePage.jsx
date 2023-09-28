import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BrowserRouter, Router } from 'react-router-dom';


import Quiz from '../Components/Quiz';
import Congratulations from './Congratulations';
import NotImpressed from './NotImpressed';


const HomePage = () => {
  return (
    <>
      <div className="card">
        <Quiz />

      </div>
    </>
  );
};

export default HomePage;



