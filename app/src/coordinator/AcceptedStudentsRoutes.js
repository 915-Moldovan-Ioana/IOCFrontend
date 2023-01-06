import { Route, Routes } from 'react-router-dom';
import AcceptedStudentsRequests from './AcceptedStudentsRequests';
import React from "react";

const AcceptedStudentsRoutes = () => (
    <Routes>
        <Route path='/coordinator/bachelor/students' element={<AcceptedStudentsRequests />} />
    </Routes>
);

export default AcceptedStudentsRoutes;