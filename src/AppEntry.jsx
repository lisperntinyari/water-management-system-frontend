import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import LoginScreen from "./pages/LoginScreen.jsx";
import TenantDashboardScreen from "./pages/TenantDashboardScreen.jsx";
import AdminDashboardScreen from "./pages/AdminDashboardScreen.jsx";

const AppEntry = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const adminString = localStorage.getItem("admin")
        const tenantString = localStorage.getItem("tenant")
        const adminInfo = JSON.parse(adminString)
        const tenantInfo = JSON.parse(tenantString)
        console.log("Admin Info:  ",adminInfo)
        console.log("Tenant Info: ",tenantInfo)
        if (adminInfo !== null){
            navigate("/admin/dashboard")
        }else if(tenantInfo !== null) {
            navigate("/tenant/dashboard")
        }

    }, []);
    return (
            <Routes>
                <Route path="/"
                       element={<LoginScreen/>}
                />
                <Route path="/tenant/dashboard"
                       element={<TenantDashboardScreen/>}
                />
                <Route path="/admin/dashboard"
                       element={<AdminDashboardScreen/>}
                />
            </Routes>

    );
};

export default AppEntry;
