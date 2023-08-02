import React from 'react';
import {tenantData} from "./PrivateRoute.jsx";
import {useNavigate} from "react-router-dom";
import {useTenantData} from "../store/UserDataStore.js";
import DashboardCard from "./DashboardCard.jsx";
import {getTotalPaidBills, getTotalUnpaidBills} from "../util/mathFunctions.js";
import {useQuery} from "@tanstack/react-query";
import getBillsByHouseNo from "../api/getBillsByHouseNo.js";
import DashboardHeader from "./DashboardHeader.jsx";
import {months} from "../util/Constants.js";

const TenantDashboardInfo = () => {
    const userId = tenantData?.tenantId || "null"
    const navigate = useNavigate()
    const tenant = useTenantData((state) => state.tenant)
    const {data: bills} = useQuery(
        [`bills/${tenant.tenantId}`], () => getBillsByHouseNo(tenant.houseNo))
    const logOut = () => {
        localStorage.removeItem("tenant")
        navigate("/login")
    }
    return (
        <section className="w-full h-screen bg-gray-900">
            <DashboardHeader name="Tenant Dashboard"/>
            <div className="p-8 w-full h-full">
                <div className="w-full h-16 flex items-center justify-end">
                    <button
                        onClick={logOut}
                        className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Logout
                    </button>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    { bills && (<DashboardCard metricAmount={`Ksh ${getTotalPaidBills(bills)} /=`} metricName="Total bill amount Paid"/>) }
                    { bills && (<DashboardCard metricAmount={`Ksh ${getTotalUnpaidBills(bills)} /=`} metricName="Total bill amount not Paid"/>) }
                </div>
                <h1 className="block m-6 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    Unpaid Bills
                </h1>
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Bill ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                House No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Meter No.
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bill Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Units
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Month
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bills && (
                                <>
                                    {
                                        bills.filter( (bill) => bill.status ==="Not Paid").map((bill, index) => {
                                            return (
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                    key={index}>
                                                    <th scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {bill._id}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {bill.houseNo}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.meterNo}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.amount}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.units}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {months[Number(bill.month) - 1]}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.year}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <p className={`font-bold ${bill.status === "Not Paid" ? "text-red-700" : "text-green-700"}`}>{bill.status}</p>

                                                    </td>

                                                    <td className="px-6 py-4 text-right">
                                                        <a href="#"
                                                           className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    );
};

export default TenantDashboardInfo;
