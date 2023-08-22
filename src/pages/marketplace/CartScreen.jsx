import React from 'react';
import DashboardHeader from "../../components/DashboardHeader.jsx";
import dummyPlumbingItems from "../../util/dummyPlumbingItems.js";
import MarketPlaceCard from "../../components/MarketPlaceCard.jsx";
import {useCartStore} from "../../store/UserDataStore.js";
import CartItemCard from "../../components/CartItemCard.jsx";
import MasterCardButton from "../../components/MasterCardButton.jsx";
import PaypalButton from "../../components/PaypalButton.jsx";
import axios from "axios";
import BASE_URL from "../../util/BASE_URL.js";
import {toast} from "react-toastify";

const CartScreen = () => {
    const cart = useCartStore((state) => state.cart)
    const subtotal = cart
        .map((a) => a.price * a.quantity)
        .reduce((a, b) => a + b, 0)


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
        <section className="w-full min-h-screen bg-gray-900 ">
            <DashboardHeader name={`Your Cart`} isCart={true} />
            {
                cart.length === 0 && (
                    <div className="w-full h-96 flex items-center justify-center">
                        <h1 className="text-white text-xl">No items found in the Cart</h1>
                    </div>
                )
            }
            {
                cart.length !== 0 && (
                    <div className="flex w-full h-full p-8">
                        <div className="w-4/6 p-2">
                            {
                                cart.map((item,index) => {
                                    return(<CartItemCard cartItem={item} key={index}/>)
                                })
                            }
                        </div>
                        <div className="w-2/6  mt-2 bg-gray-100 p-2 drop-shadow-lg rounded-md">
                            <div className="w-full h-14 flex items-center justify-around">
                                <h1 className="font-bold text-2xl uppercase">
                                    Cart Summary
                                </h1>
                            </div>

                            <hr className="bg-black h-0 w-full my-2"/>
                            <div className="w-full h-10 flex  justify-around">
                                <h1 className=" w-1/2 font-bold uppercase pl-4">
                                    Cart SubTotal
                                </h1>
                                <h2 className="w-1/2 text-end pr-4">
                                    Ksh {subtotal}/=
                                </h2>
                            </div>
                            <div className="w-full h-10 flex  justify-around">
                                <h1 className=" w-1/2 font-bold uppercase pl-4">
                                    VAT
                                </h1>
                                <h2 className="w-1/2 text-end pr-4">
                                    Ksh {0.16 * subtotal}/=
                                </h2>
                            </div>
                            <div className="w-full h-10 flex  justify-around">
                                <h1 className=" w-1/2 font-bold uppercase pl-4">
                                    Delivery Fee
                                </h1>
                                <h2 className="w-1/2 text-end pr-4">
                                    Ksh 1000/=
                                </h2>
                            </div>
                            <hr className="bg-black h-0 w-full my-2"/>
                            <div className="w-full h-10 flex  justify-evenly">
                                <h1 className=" w-1/2 font-bold uppercase pl-4">
                                    Cart Total
                                </h1>
                                <h2 className="w-1/2 text-end pr-4">
                                    Ksh {Math.ceil(1.16 * subtotal) +1000}/=
                                </h2>
                            </div>
                            <div className="w-full mt-2 flex items-center justify-center">
                                <button
                                    onClick={async () => {
                                        await payBill(254798375934,1000)
                                    }}
                                    className="whitespace-nowrap relative mx-1 flex justify-center p-2 text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700  hover:underline w-full">
                                    Checkout with M-pesa
                                </button>

                            </div>
                            {/*<div className="w-full mt-2 flex items-center justify-center">*/}
                            {/*    <PaypalButton/>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <MasterCardButton/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            }



        </section>
    );
};

export default CartScreen;
