import { Route, Routes } from 'react-router-dom';
import EditInterests from './EditInterests';
import React from "react";

const EditInterestsRoutes = () => (
    <Routes>
        <Route path='/coordinator/bachelor/edit_info' element={<EditInterests />} />
    </Routes>
);

export default EditInterestsRoutes;