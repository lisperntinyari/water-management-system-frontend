import React from 'react';
import DashboardCard from "./DashboardCard.jsx";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import getAllBills from "../api/getAllBills.js";
import getAllHouses from "../api/getAllHouses.js";
import getAllTenants from "../api/getAllTenants.js";
import {
    getTotalHouses,
    getTotalNumberofTenants,
    getTotalPaidBills,
    getTotalUnpaidBills
} from "../util/mathFunctions.js";
import {useAdminData} from "../store/UserDataStore.js";
import DashboardHeader from "./DashboardHeader.jsx";

const AdminDashboardInfo = () => {
    const navigate = useNavigate()
    const admin = useAdminData((state) => state.admin)
    const {data: bills} = useQuery(["bills"], getAllBills)
    const {data:houses} = useQuery(["houses"], getAllHouses)
    const {data:tenants} = useQuery(["tenants"], getAllTenants)
    const logOut = () => {
        localStorage.removeItem("admin")
        navigate("/login")
    }
    return (
        <section className="w-full h-screen bg-gray-900 ">
            <DashboardHeader name="Admin Dashboard "/>
            <div className="p-8 w-full h-full">
                <div className="w-full h-16 flex items-center justify-end">
                    <button
                        onClick={logOut}
                        className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Logout
                    </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    { admin && <h1>Admin {admin.email}</h1> }
                    { tenants &&(<DashboardCard metricAmount={tenants.length} metricName="Total No. of Tenants"/>) }
                    { houses && (<DashboardCard metricAmount={houses.length} metricName="Total No. of House Units"/>) }
                    { bills && (<DashboardCard metricAmount={`Ksh ${getTotalPaidBills(bills)} /=`} metricName="Total bill amount Paid"/>) }
                    { bills && (<DashboardCard metricAmount={`Ksh ${getTotalUnpaidBills(bills)} /=`} metricName="Total bill amount not Paid"/>) }



                </div>
            </div>

        </section>
    );
};

export default AdminDashboardInfo;
