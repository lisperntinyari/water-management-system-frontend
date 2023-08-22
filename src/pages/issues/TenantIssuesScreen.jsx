import React from 'react';
import DashboardHeader from "../../components/DashboardHeader.jsx";
import {useNavigate} from "react-router-dom";
import {months} from "../../util/Constants.js";
import {useQuery} from "@tanstack/react-query";
import getAllBills from "../../api/getAllBills.js";
import getAllIssues from "../../api/getAllIssues.js";

const TenantIssuesScreen = () => {
    const navigate = useNavigate()
    const {data :issues} = useQuery(["issues"], getAllIssues)
    return (
        <section className="w-full h-screen bg-gray-900">
            <DashboardHeader name="Issues "/>
            <div className="p-8 w-full h-full">
                <div className="w-full h-16 flex items-center justify-end">
                    <button
                        onClick={() => navigate("/tenant/dashboard/issues/create")}
                        className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Report Issue
                    </button>
                </div>
                <div className="w-full h-full p-8">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Issue ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Issue Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Posted By
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Issue Description
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                issues && (
                                    <>
                                        {
                                            issues.map((issue, index) => {
                                                return (
                                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                        key={index}>
                                                        <th scope="row"
                                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            {issue._id}
                                                        </th>
                                                        <td className="px-6 py-4">
                                                            {issue.issueName}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {issue.postedBy}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {issue.issueDescription}
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

        </section>
    );
};

export default TenantIssuesScreen;
