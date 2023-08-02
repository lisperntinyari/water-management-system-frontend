import React, {useState} from 'react';
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";
import {useQuery} from "@tanstack/react-query";
import getAllHouses from "../../api/getAllHouses.js";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import DashboardHeader from "../../components/DashboardHeader.jsx";

const AddBillScreen = () => {
    const {data: houses, isLoading, error, isError} = useQuery(["houses"], getAllHouses)
    console.log("Houses", houses)
    const [meterNo, setMeterNo] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [amount, setAmount] = useState(0)
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [status, setStatus] = useState("")
    const [units, setUnits] = useState("")

    const addBill = async (e) => {
        e.preventDefault()
        if (meterNo === "" || houseNo === "" || amount === "" || month === "" || year === "" || status === "" || units === "") {
            toast.error("Please fill in the fields")
        } else {
            try {
                const res = await axios.post(`${BASE_URL}/bills/create`, {
                    meterNo,
                    houseNo,
                    amount,
                    month,
                    year,
                    status,
                    units,
                })
                if (res.data.msg) {
                    toast.success(res.data.msg)
                } else {
                    toast.error(res.data.msg)
                }

            } catch (e) {
                console.log(e)
                toast.error(e.message)

            }
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer/>
            <DashboardHeader name="Add a Bill"/>
            <div className="flex h-screen justify-center items-center p-8">
                <form onSubmit={addBill} className="w-full h-full">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="houseType"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                House No.
                            </label>
                            <select
                                id="houseType"
                                onChange={(e) => {
                                    setHouseNo(e.target.value)
                                    const passedMeterNo = houses.find((house) => house.houseNo === e.target.value).meterNo
                                    setMeterNo(passedMeterNo)
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="">Choose a House Type</option>
                                {
                                    houses && houses.map((house, index) => {
                                        return (<option key={index} value={house.houseNo}>{house.houseNo}</option>)
                                    })
                                }
                            </select>

                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                value={meterNo}
                                disabled={true}
                                onChange={(e) => setMeterNo(e.target.value)}
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required/>
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Meter No.
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="number" name="floating_phone"
                                   id="floating_phone"
                                   value={amount}
                                   onChange={(e) => setAmount(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_phone"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Amount
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <div className="relative z-0 w-full mb-6 group">
                                <label htmlFor="houseType"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Select a month</label>
                                <select id="houseType"
                                        onChange={(e) => {
                                            setMonth(e.target.value)
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected value="">Choose a Month</option>
                                    <option value="1">January</option>
                                    <option value="2">February</option>
                                    <option value="3">March</option>
                                    <option value="4">April</option>
                                    <option value="5">May</option>
                                    <option value="6">June</option>
                                    <option value="7">July</option>
                                    <option value="8">August</option>
                                    <option value="9">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>

                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Select a year</label>
                            <select
                                onChange={(e) => {
                                    setYear(e.target.value)
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="">Choose a Year</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="houseType"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status</label>
                            <select
                                id="houseType"
                                onChange={(e) => {
                                    setStatus(e.target.value)
                                }}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="">Choose a Month</option>
                                <option value="Paid">Paid</option>
                                <option value="Not Paid">Not Paid</option>
                            </select>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="tel" name="floating_phone"
                                   id="floating_phone"
                                   value={units}
                                   onChange={(e) => setUnits(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_phone"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Units</label>
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

export default AddBillScreen;
