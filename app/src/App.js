import './App.css';
import Login from './login/Login';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Context from './login/Context';
import IdContext from './login/IdContext';
import AdminBPostInfo from './admin/AdminBPostInfo';
import AdminIPostInfo from './admin/AdminIPostInfo';
import StudentIInfo from './student/StudentIInfo';
import AcceptedStudentsRoutes from "./coordinator/AcceptedStudentsRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [idLogin, setIdLogin] = useState(1999);
  let routes

  if (!isLoggedIn) {
    routes =
      <Routes>
        <Route path='/*' element={<Login />} />
      </Routes>
  } else {
    // trebe create toate paginile si puse la Routes
    routes = <React.Fragment>
      <Sidebar />
      <Routes>
        <Route path='/admin/bachelor/post' element={<AdminBPostInfo />} />

        <Route path='/admin/internship/post' element={<AdminIPostInfo />} />

        <Route path='/student/internship/info' element={<StudentIInfo />} />
        /student/internship/info
      </Routes>
      <AcceptedStudentsRoutes />
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
