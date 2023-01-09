import { Route, Routes } from 'react-router-dom';
import AcceptedStudents from './AcceptedStudents';
import React from "react";

const AcceptedStudentsRoutes = () => (
    <Routes>
        <Route path='/coordinator/bachelor/students' element={<AcceptedStudents />} />
    </Routes>
);

export default AcceptedStudentsRoutes;