import React from 'react';
import { Outlet } from "react-router-dom";
import Navber from '../Components/Navber';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
            { Outlet }
            </div>
        </div>
    );
};

export default Layout;