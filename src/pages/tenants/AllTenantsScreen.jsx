import React from 'react';
import {useQuery} from "@tanstack/react-query";
import getAllTenants from "../../api/getAllTenants.js";
import {useNavigate} from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader.jsx";

const AllTenantsScreen = () => {
    const navigate = useNavigate()

    const {data, isLoading, error, isError} = useQuery(["tenants"], getAllTenants)
    return (
        <div className="w-full h-screen  bg-gray-900">
            <DashboardHeader name="Your Tenants"/>
            <div className="p-8 w-full h-full">
                <div className="w-full h-16 flex items-center justify-end">
                    <button
                        onClick={() => navigate("/admin/dashboard/tenants/add")}
                        className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Add Tenant
                    </button>
                </div>
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Email
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    House No.
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Phone Number
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Account Activation
                                </div>
                            </th>

                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data && (
                                <>

                                    {
                                        data.map((tenant, index) => {
                                            return (
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                                                    <td className="px-6 py-4">
                                                        {tenant._id}
                                                    </td>
                                                    <th scope="row"
                                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {tenant.fullName}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {tenant.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {tenant.houseNo}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {tenant.phoneNumber}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        { tenant.isActivated && "Activated" }
                                                        { !tenant.isActivated && "Not Activated" }

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

        </div>


    );
};

export default AllTenantsScreen;
