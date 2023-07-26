import React from 'react';
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import getAllHouses from "../../api/getAllHouses.js";

const AllHousesScreen = () => {
    const navigate = useNavigate()
    const {data, isLoading, error, isError} = useQuery(["houses"], getAllHouses)
    return (
        <section className="w-full h-screen bg-gray-900 p-8">
            <div className="w-full h-16 flex items-center justify-end">
                <button
                    onClick={() => navigate("/admin/dashboard/houses/add")}
                    className="text-white m-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Add House
                </button>
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            House ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                House No.
                                <a href="#">
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                Meter No.
                                <a href="#">
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                House Rent
                                <a href="#">
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="flex items-center">
                                House Type
                                <a href="#">
                                    <svg className="w-3 h-3 ml-1.5" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
                                    </svg>
                                </a>
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
                                    data.map((house, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={index}>
                                                <th scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {house._id}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {house.houseNo}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {house.meterNo}
                                                </td>
                                                <td className="px-6 py-4">
                                                    KSH {house.rentAmount} /=
                                                </td>
                                                <td className="px-6 py-4">
                                                    {house.houseType}
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
        </section>
    );
};

export default AllHousesScreen;
