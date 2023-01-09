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
import RoutesCoordinator from "./coordinator/CoordinatorRoutes";
import Home from './Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idLogin, setIdLogin] = useState(0);
  const [role, setRole] = useState("")
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
        <Route path='/' element={<Home />} />
        <Route path='/admin/bachelor/post' element={<AdminBPostInfo />} />

        <Route path='/admin/internship/post' element={<AdminIPostInfo />} />

        <Route path='/student/internship/info' element={<StudentIInfo />} />
        /student/internship/info
      </Routes>
      <RoutesCoordinator/>
    </React.Fragment>
  }

  return (
    <React.Fragment >
      <Context.Provider value={{
        setIsLoggedIn: setIsLoggedIn
      }}>
        <IdContext.Provider value={{
          idLogin: idLogin,
          setIdLogin: setIdLogin,
          role: role,
          setRole: setRole
        }}>
          {routes}
        </IdContext.Provider>
      </Context.Provider>
    </React.Fragment>
  );
}

export default App;
