import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import getAllBills from "../../api/getAllBills.js";
import DashboardHeader from "../../components/DashboardHeader.jsx";

const AllBillsScreen = () => {
    const navigate = useNavigate()
    const {data, isLoading, error, isError} = useQuery(["bills"], getAllBills)
    return (
        <div className="w-full min-h-screen  bg-gray-900 ">
            <DashboardHeader name="All Bills"/>
            <div className="p-8">
                <div className="w-full h-16 flex items-center justify-end">
                    <button
                        onClick={() => navigate("/admin/dashboard/bills/add")}
                        className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Add Bill
                    </button>
                </div>
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
                            data && (
                                <>
                                    {
                                        data.map((bill, index) => {
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
                                                        {bill.month}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.year}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {bill.status}
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

export default AllBillsScreen;
