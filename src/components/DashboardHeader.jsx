import React from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {useCartStore} from "../store/UserDataStore.js";

const DashboardHeader = ({ name,isCart = false }) => {
    const cart = useCartStore((state) => state.cart)
    return (
        <nav className="bg-white border-gray-200 h-16 px-4 lg:px-6 py-2.5 dark:bg-gray-800 flex items-center">
            <div className="flex justify-between w-full px-6">
                <li className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                    {name}
                </li>
                {
                    isCart && (
                        <div className="flex">
                            <div className="bg-black rounded-3xl h-10 w-10 flex items-center">
                                <h1 className="pl-4 text-xl text-white">{cart.length}</h1>
                            </div>
                            <AiOutlineShoppingCart size={30}/>

                        </div>

                    )
                }
            </div>

        </nav>
    );
};

export default DashboardHeader;
