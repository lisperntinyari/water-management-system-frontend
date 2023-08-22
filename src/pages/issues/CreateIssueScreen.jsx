import React, {useState} from 'react';
import {toast, ToastContainer} from "react-toastify";
import DashboardHeader from "../../components/DashboardHeader.jsx";
import {useTenantData} from "../../store/UserDataStore.js";
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";

const CreateTenantIssuesScreen = () => {
    const tenant = useTenantData((state) => state.tenant)
    const [issueName, setIssueName] = useState("")
    const [issueDescription, setIssueDescription] = useState("")
    const addIssue = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/issue/create`, {
                issueName,
                issueDescription,
                postedBy: tenant.fullName,
            })
            const res = response.data
            if (res.success) {
                toast.success(res.msg)
            } else {
                toast.error(res.msg)
            }
        } catch (e) {
            toast.error("An unexpected error occurred")
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer/>
            <DashboardHeader name="Report an issue"/>
            <div className="flex h-screen justify-center items-center p-8">
                <form onSubmit={addIssue} className="w-full h-full">
                    <div className="grid  md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text"
                                   value={issueName}
                                   onChange={(e) => setIssueName(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Issue Name</label>
                        </div>
                    </div>
                    <div className="grid  md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea type="text"
                                      value={issueDescription}
                                      onChange={(e) => setIssueDescription(e.target.value)}
                                      className="block p-2.5  w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                      placeholder=" " required/>
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Issue Description
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateTenantIssuesScreen;
