import {Route, Routes} from 'react-router-dom';
import CoordinatorRequests from './CoordinatorRequests';
import React from "react";
import Evaluare from "./Evaluare";
import Coordonare from "./Coordonare";

const RoutesCoordinator = () => (
    <Routes>
        <Route path='/coordinator/bachelor/requests' element={<CoordinatorRequests />} />
        <Route path='/coordinator/internship/evaluation' element={<Evaluare/>} />
        <Route path='/coordinator/internship' element={<Coordonare/>} />
        <Route path='/coordinator/bachelor' element={<Coordonare/>} />
    </Routes>
);

export default RoutesCoordinator;