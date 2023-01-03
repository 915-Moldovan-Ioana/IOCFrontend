import './App.css';
import Login from './login/Login';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import BachelorPage from './sidebar/BachelorPage';
import InternshipPage from './sidebar/InternshipPage';
import Context from './login/Context';
import IdContext from './login/IdContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [idLogin, setIdLogin] = useState(2001);
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
    <React.Fragment >
      <Context.Provider value={{
        setIsLoggedIn: setIsLoggedIn
      }}>
        <IdContext.Provider value={{
          idLogin: idLogin,
          setIdLogin: setIdLogin
        }}>
          {routes}
        </IdContext.Provider>
      </Context.Provider>
    </React.Fragment>
  );
}

export default App;
