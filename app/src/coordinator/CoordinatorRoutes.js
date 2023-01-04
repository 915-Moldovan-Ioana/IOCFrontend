import {Route, Routes} from 'react-router-dom';
import CoordinatorRequests from './CoordinatorRequests';
import React from "react";

const RoutesCoordinator = () => (
    <Routes>
        <Route path='/coordinator/bachelor/requests' element={<CoordinatorRequests />} />
    </Routes>
);

export default RoutesCoordinator;