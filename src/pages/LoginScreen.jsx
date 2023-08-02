import React, {useState} from 'react';
import axios from "axios";
import BASE_URL from "../util/BASE_URL.js";
import {useNavigate} from "react-router-dom";
import Constants from "../util/Constants.js";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {useAdminData, useTenantData} from "../store/UserDataStore.js";

const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const setAdmin = useAdminData((state) => state.setAdmin)
    const setTenant = useTenantData((state) => state.setTenant)

    const onTenantSubmit = async (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            toast.error("Please fill in the fields")
        } else {
            try {
                const response = await axios.post(`${BASE_URL}/auth/loginTenant`, {
                    email,
                    password,
                })
                console.log("Response from server ", response.data)
                if (response.data.success) {
                    setTenant(response.data.user)
                    localStorage.setItem("tenant", JSON.stringify(response.data.user))
                    toast.success(response.data.msg)
                    if (response.data.user.authType === Constants.TENANT) {
                        navigate("/tenant/dashboard")
                    }
                }else {
                    toast.error(response.data.msg)
                }
            } catch (e) {
                toast.error("An unexpected error occurred")
                console.log("Error occurred login", e)

            }

        }
    }

    const onAdminSubmit = async (e) => {
        e.preventDefault()
        if (email === "" || password === "") {
            toast.error("Please fill in the fields")
        } else {
            try {
                const response = await axios.post(`${BASE_URL}/auth/loginAdmin`, {
                    email,
                    password,
                })
                console.log("Response from server ", response.data)
                if (response.data.success) {
                    setAdmin(response.data.user)
                    localStorage.setItem("admin", JSON.stringify(response.data.user))
                    toast.success(response.data.msg)
                    if (response.data.user.authType === Constants.ADMIN) {
                        navigate("/admin/dashboard")
                    }

                }else {
                    toast.error(response.data.msg)
                }
            } catch (e) {
                toast.error("An unexpected error occurred")
                console.log("Error occurred login", e)

            }

        }

    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your Account
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email" name="email" id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                               required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember
                                            me</label>
                                    </div>
                                </div>
                                <a href="#"
                                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                                    password?</a>
                            </div>
                            <button
                                onClick={onAdminSubmit}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Sign in Admin
                            </button>
                            <button
                                onClick={onTenantSubmit}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Sign in Tenant
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? {"   "}
                                <a href="/activateTenant"
                                   className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Activate it
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginScreen;
