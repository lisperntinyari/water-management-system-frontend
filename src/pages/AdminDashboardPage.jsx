import React from 'react';
import SidebarItem from "../components/SidebarItem.jsx";
import {Route, Routes} from "react-router-dom";
import AllTenants from "../components/AllTenants.jsx";
import DashboardInfo from "../components/DashboardInfo.jsx";

const AdminDashboardPage = () => {
    return (
        <div>
            <h1>Admin Dashboard Page</h1>
            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
                    aria-controls="separator-sidebar" type="button"
                    className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar"
                   className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                   aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <SidebarItem
                            name="Dashboard"
                            route="/"
                        />
                        <SidebarItem
                            name="Tenants"
                            route="/tenants"
                        />
                        <SidebarItem
                            name="Add Bills"
                            route="/addBills"/>
                        <SidebarItem
                            name="Market Place"
                            onClick={() => {

                            }}
                        />


                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <DashboardInfo/>
                        }
                    />
                    <Route
                        path="/tenants"
                        element={
                            <AllTenants/>
                        }
                    />
                </Routes>

            </div>


        </div>
    );
};

export default AdminDashboardPage;