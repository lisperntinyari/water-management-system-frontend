import React, {useState} from "react";
import {HouseTypes} from "../../util/Constants.js";
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";
import {toast, ToastContainer} from "react-toastify";
import DashboardHeader from "../../components/DashboardHeader.jsx";

const AddHouseScreen = () => {
    const [houseNo,setHouseNo] = useState("")
    const [meterNo,setMeterNo] = useState("")
    const [rentAmount,setRentAmount] = useState(0)
    const [houseType,setHouseType] = useState("")

    const addHouse = async (e) => {
        e.preventDefault()
        if (houseType === "" || rentAmount ===0 || houseType ==="" ){
            alert("Please fill in the fields")
        }else {
            try {
                const res = await axios.post(`${BASE_URL}/houses/create`,{
                    houseNo,
                    rentAmount,
                    houseType,
                    meterNo
                })
                if (res.data.success){
                    toast.success(res.data.msg)
                }else {
                    toast.error(res.data.msg)
                }
            }catch (e){
                console.log(e)
                toast.error("An unexpected error occurred trying to add a house")
            }
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer/>
            <DashboardHeader name="Add a Housing Unit"/>
            <div className="flex h-screen justify-center items-center p-8">
                <form onSubmit={addHouse} className="w-full h-full">
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text"
                                   value={houseNo}
                                   onChange={(e) => setHouseNo(e.target.value)}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_first_name"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                House No.</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text"
                                   value={meterNo}
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
                            <input type="number"
                                   value={rentAmount}
                                   onChange={(e) => setRentAmount(Number(e.target.value))}
                                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                   placeholder=" " required/>
                            <label htmlFor="floating_email"
                                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Rent Amount.
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="houseType"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an
                                option</label>
                            <select id="houseType"
                                    onChange={(e) => setHouseType(e.target.value)}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected value="">Choose a House Type</option>
                                {
                                    HouseTypes.map((type,index) => {
                                        return(<option key={index} value={type}>{type}</option>)
                                    })
                                }
                            </select>
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
    )
}

export default AddHouseScreen
