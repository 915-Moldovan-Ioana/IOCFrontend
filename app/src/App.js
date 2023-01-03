import './App.css';
import Login from './login/Login';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import BachelorPage from './sidebar/BachelorPage';
import InternshipPage from './sidebar/InternshipPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let routes

  if (!isLoggedIn) {
    routes =
      <Routes>
        <Route path='/*' element={<Login />} />
      </Routes>
  } else {
    routes = <React.Fragment>
      <Sidebar />
      <Routes>
        <Route path='/bachelor' element={<BachelorPage />} />
        <Route path='/internship' element={<InternshipPage />} />
      </Routes>
    </React.Fragment>
  }

  return (
    routes
  );
}

export default App;
