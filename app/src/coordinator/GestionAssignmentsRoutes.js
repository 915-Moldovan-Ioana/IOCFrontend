import { Route, Routes } from 'react-router-dom';
import React from "react";
import GestionAssignments from "./GestionAssignments";

const GestionAssignmentsRoutes = () => (
    <Routes>
        <Route path='/coordinator/internship/terms' element={<GestionAssignments />} />
    </Routes>
);

export default GestionAssignmentsRoutes;