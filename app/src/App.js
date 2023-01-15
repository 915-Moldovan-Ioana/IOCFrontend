
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
import EditInterestsRoutes from './coordinator/EditInterestsRoutes';
import RoutesCoordinator from "./coordinator/CoordinatorRoutes";
import AcceptedStudentsRoutes from "./coordinator/AcceptedStudentsRoutes";
import Home from "./Home";
import UploadPracticeDocument from "./coordinator/UploadPracticeDocument";
import Chat from "./student/chat/ChatPage";
import CLPage from "./student/CLPage";
import StatusPage from "./student/StatusPage";
import GestionAssignmentsRoutes from "./coordinator/GestionAssignmentsRoutes";
import SituatieStudenti from './admin/SituatieStudenti';
import SituatieStudentiStagiu from './admin/SituatieStudentiStagiu';
import SituatieCoordonatori from './admin/SituatieCoordonatori';
import AlocareStudenti from './admin/AlocareStudenti';
import Coordonare from "./coordinator/Coordonare";
import Note from "./student/Note";
import {AdminSendEmail} from "./admin/AdminSendEmail";
import TasksCompleted from "./coordinator/TasksCompleted";
import AdminGrades from './admin/AdminGrades';
import AdminAddAccountsWithFile from "./admin/AdminAddAccountsWithFile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [idLogin, setIdLogin] = useState(1999);
  const [role, setRole] = useState("");
  let routes;

  if (!isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/*" element={<Login />} />
      </Routes>
    );
  } else {
    // trebe create toate paginile si puse la Routes

    routes = <React.Fragment>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/accounts/add' element={<AdminAddAccountsWithFile />} />
        <Route path='/admin/bachelor/post' element={<AdminBPostInfo />} />
        <Route path='/admin/internship/grades' element={<AdminGrades />} />
        <Route path='/admin/bachelor/email' element={<AdminSendEmail />} />
        <Route path='/admin/bachelor/student_situation' element={<SituatieStudenti />} />
        <Route path='/admin/bachelor/coordinator_situation' element={<SituatieCoordonatori />} />
        <Route path='/admin/bachelor/aloc_students' element={<AlocareStudenti />} />
        <Route path='/student/internship/doc' element={<UploadPracticeDocument />} />
        <Route path='/admin/internship/post' element={<AdminIPostInfo />} />
        <Route path='/admin/internship/situation' element={<SituatieStudentiStagiu />} />
        <Route path='/admin/internship' element={<Coordonare/>} />
        <Route path='/admin/bachelor' element={<Coordonare/>} />
        <Route path='/student/internship/info' element={<StudentIInfo />} />
        <Route path="/student/bachelor/chat" element={<Chat />} />
        <Route path="/student/bachelor/coordinators" element={<CLPage />} />
        <Route path="/student/bachelor/status" element={<StatusPage />} />
        <Route path='/student/internship' element={<Coordonare/>} />
        <Route path='/student/bachelor' element={<Coordonare/>} />
        <Route path='/student/internship/evaluation' element={<Note/>} />
        /student/internship/info

        /cordonator
        <Route path='/coordinator/internship/docs' element={<TasksCompleted />} />
      </Routes>
      <EditInterestsRoutes />
      <RoutesCoordinator />
      <AcceptedStudentsRoutes />
      <GestionAssignmentsRoutes/>
    </React.Fragment>
  }

  return (
    <React.Fragment>
      <Context.Provider
        value={{
          setIsLoggedIn: setIsLoggedIn,
        }}
      >
        <IdContext.Provider
          value={{
            idLogin: idLogin,
            setIdLogin: setIdLogin,
            role: role,
            setRole: setRole,
          }}
        >
          {routes}
        </IdContext.Provider>
      </Context.Provider>
    </React.Fragment>
  );
}

export default App;
