import React from 'react';
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useTenantData} from "../../store/UserDataStore.js";
import getBillsByHouseNo from "../../api/getBillsByHouseNo.js";
import {months} from "../../util/Constants.js";
import DashboardHeader from "../../components/DashboardHeader.jsx";
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";
import {toast} from "react-toastify";

const AllTenantBillsScreen = () => {
    const tenant = useTenantData((state) => state.tenant)
    console.log("Tenant", tenant)
    const navigate = useNavigate()
    const {data: bills} = useQuery(
        [`bills/${tenant.tenantId}`], () => getBillsByHouseNo(tenant.houseNo))
    const payBill = async (phoneNumber, billAmount) => {
        try {
            const response = await axios.post(`${BASE_URL}/pay/payWaterBill`, {
                phoneNumber: phoneNumber,
                billAmount: billAmount
            })
            console.log("Payment Info", response.data)
            if (response.data.success) {
                toast.success("Payment initiated")
            } else {
                toast.error("")
            }
        } catch (e) {
            console.log(e)
            toast.error("An error occurred initiating payment")
        }

    }
    return (
        <div className="w-full h-screen  bg-gray-900">
            <DashboardHeader name="Your tenant water bills"/>
            <div className="w-full h-full p-8">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bills && (
                                <>
                                    {
                                        bills.map((bill, index) => {
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
                                                        {
                                                            bill.status === "Not Paid" && (

                                                                <button
                                                                    onClick={async () => {
                                                                        await payBill(Number(tenant.phoneNumber), Number(bill.amount))
                                                                    }}
                                                                    className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline">Pay
                                                                    Bill
                                                                </button>

                                                            )
                                                        }
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

export default AllTenantBillsScreen;
