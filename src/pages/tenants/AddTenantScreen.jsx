import React, {useState} from 'react';
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import DashboardHeader from "../../components/DashboardHeader.jsx";

const AddTenantScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [fullName, setFullName] = useState("")

    function clearInputs(){
        setEmail("")
        setHouseNo("")
        setFullName("")
        setPhoneNumber("")
    }


    const addTenant = async (e) => {
        e.preventDefault()
        if (phoneNumber === "" || email === "" || houseNo === "" || fullName === "") {
            alert("Please fill in all the fields")
        } else {
            try {
                const response = await axios.post(`${BASE_URL}/auth/createTenant`, {
                    fullName,
                    email,
                    houseNo,
                    phoneNumber
                })
                if (response.data.success){
                    toast.success(response.data.msg)
                    clearInputs()
                }else {
                    toast.error(response.data.msg)
                }
            } catch (e) {
                toast.error("An unexpected error occurred trying to create a tenant")
                console.log("Error trying to create tenant", e)
            }
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer/>
            <DashboardHeader name="Add Tenant"/>
            <div className="flex h-screen justify-center items-center p-8">
                <form onSubmit={addTenant} className="w-full h-full">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name"
                                   value={fullName}
                                   onChange={(e) => setFullName(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Full name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" id="floating_email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                                address</label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel"  name="floating_phone"
                                   id="floating_phone"
                                   value={phoneNumber}
                                   onChange={(e) => setPhoneNumber(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_phone"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                number</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="house_no" id="house_no"
                                   value={houseNo}
                                   onChange={(e) => setHouseNo(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="house_no"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                House No.</label>
                        </div>
                    </div>
                    <button type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddTenantScreen;
